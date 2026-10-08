"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { usePathname, useRouter } from "next/navigation";

interface PageTransitionContextValue {
  isTransitionComplete: boolean;
  hasPlayedHomeIntro: boolean;
  isNavigating: boolean;
  setHasPlayedHomeIntro: (played: boolean) => void;
  navigateTo: (url: string) => void;
  completeTransition: () => void;
  registerTransitionRunner: (runner: {
    startEnter: () => Promise<void>;
    startExit: () => Promise<void>;
  }) => void;
}

const PageTransitionContext = createContext<PageTransitionContextValue>({
  isTransitionComplete: false,
  hasPlayedHomeIntro: false,
  isNavigating: false,
  setHasPlayedHomeIntro: () => {},
  navigateTo: () => {},
  completeTransition: () => {},
  registerTransitionRunner: () => {},
});

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // In-memory state: resets on browser refresh or first visit, persists during client SPA navigation
  const [hasPlayedHomeIntro, setHasPlayedHomeIntroState] = useState(false);
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const transitionRunnerRef = useRef<{
    startEnter: () => Promise<void>;
    startExit: () => Promise<void>;
  } | null>(null);

  const isTransitioningRef = useRef(false);
  const isInitialMountRef = useRef(true);

  const setHasPlayedHomeIntro = useCallback((played: boolean) => {
    setHasPlayedHomeIntroState(played);
  }, []);

  const completeTransition = useCallback(() => {
    setIsTransitionComplete(true);
    setIsNavigating(false);
    isTransitioningRef.current = false;

    if (typeof window !== "undefined") {
      (window as unknown as { __pageIntroFinished: boolean }).__pageIntroFinished = true;
      document.dispatchEvent(new CustomEvent("pageIntroFinished"));
      window.dispatchEvent(new CustomEvent("pageIntroFinished"));
    }
  }, []);

  const registerTransitionRunner = useCallback(
    (runner: { startEnter: () => Promise<void>; startExit: () => Promise<void> }) => {
      transitionRunnerRef.current = runner;
    },
    []
  );

  const navigateTo = useCallback(
    async (url: string) => {
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      setIsNavigating(true);
      setIsTransitionComplete(false);

      // Mark home intro as played whenever navigating away so return navigation is always instant
      setHasPlayedHomeIntroState(true);

      if (transitionRunnerRef.current) {
        // Step 1: Slide up curtain from bottom (100% -> 0%) to completely cover the screen
        await transitionRunnerRef.current.startEnter();

        // Step 2: While screen is completely covered in black, reset scroll to top immediately
        window.scrollTo(0, 0);
        const lenis = (window as unknown as {
          lenis?: { scrollTo: (target: number, opts?: { immediate: boolean }) => void };
        }).lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(0, { immediate: true });
        }

        // Step 3: Navigate while screen is 100% covered in black
        router.push(url);
      } else {
        window.scrollTo(0, 0);
        router.push(url);
        completeTransition();
      }
    },
    [router, completeTransition]
  );

  // When pathname changes following router.push, smoothly pull up the curtain to reveal new page
  useEffect(() => {
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
      return;
    }

    if (isTransitioningRef.current) {
      // The new route has mounted behind the curtain.
      // Ensure scroll is at top before curtain pulls up
      window.scrollTo(0, 0);
      const lenis = (window as unknown as {
        lenis?: { scrollTo: (target: number, opts?: { immediate: boolean }) => void };
      }).lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { immediate: true });
      }

      // Wait a short moment so DOM settles behind the black curtain, then pull up curtain
      requestAnimationFrame(() => {
        setTimeout(async () => {
          if (transitionRunnerRef.current) {
            // Curtain gets PULLED UP off the top (0% -> -100%) revealing the new page!
            await transitionRunnerRef.current.startExit();
          }
          completeTransition();
        }, 120);
      });
    }
  }, [pathname, completeTransition]);

  return (
    <PageTransitionContext.Provider
      value={{
        isTransitionComplete,
        hasPlayedHomeIntro,
        isNavigating,
        setHasPlayedHomeIntro,
        navigateTo,
        completeTransition,
        registerTransitionRunner,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  return useContext(PageTransitionContext);
}
