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

      // Re-enable Lenis scroll if present
      const lenis = (window as unknown as { lenis?: { start: () => void } }).lenis;
      if (lenis && typeof lenis.start === "function") {
        lenis.start();
      }
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

      // Pause Lenis smooth scroll during transition
      if (typeof window !== "undefined") {
        const lenis = (window as unknown as { lenis?: { stop: () => void } }).lenis;
        if (lenis && typeof lenis.stop === "function") {
          lenis.stop();
        }
      }

      if (transitionRunnerRef.current) {
        // Step 1: Slide up curtain from bottom (100% -> 0%) to completely cover the screen
        await transitionRunnerRef.current.startEnter();

        // Step 2: Navigate while screen is 100% covered in black
        router.push(url);
      } else {
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
      // Wait for next frame so the DOM is rendered behind the black curtain
      requestAnimationFrame(() => {
        setTimeout(async () => {
          if (transitionRunnerRef.current) {
            // Curtain gets PULLED UP off the top (0% -> -100%) revealing the new page!
            await transitionRunnerRef.current.startExit();
          }
          completeTransition();
        }, 100);
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
