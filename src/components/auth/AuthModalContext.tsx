"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

export type AuthMode = "login" | "register";

interface AuthModalContextType {
  isOpen: boolean;
  mode: AuthMode;
  user: User | null;
  isLoadingUser: boolean;
  isAuthenticated: boolean;
  openLogin: () => void;
  openRegister: () => void;
  openModal: (initialMode?: AuthMode) => void;
  closeModal: () => void;
  setMode: (mode: AuthMode) => void;
  signOut: () => Promise<void>;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(
  undefined
);

export function AuthModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>("login");
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  // Sync Supabase Auth state
  useEffect(() => {
    let mounted = true;

    async function checkSession() {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (mounted) {
          setUser(session?.user ?? null);
          setIsLoadingUser(false);
        }
      } catch (err) {
        console.error("Supabase auth check error:", err);
        if (mounted) setIsLoadingUser(false);
      }
    }

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setUser(session?.user ?? null);
        setIsLoadingUser(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // Listen for query params e.g. ?auth=login or ?auth=register on initial load
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const authParam = params.get("auth");

    if (authParam === "login") {
      const timer = setTimeout(() => {
        setMode("login");
        setIsOpen(true);
      }, 0);
      return () => clearTimeout(timer);
    } else if (authParam === "register") {
      const timer = setTimeout(() => {
        setMode("register");
        setIsOpen(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const openLogin = useCallback(() => {
    setMode("login");
    setIsOpen(true);
  }, []);

  const openRegister = useCallback(() => {
    setMode("register");
    setIsOpen(true);
  }, []);

  const openModal = useCallback((initialMode: AuthMode = "login") => {
    setMode(initialMode);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSetMode = useCallback((newMode: AuthMode) => {
    setMode(newMode);
  }, []);

  const signOut = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      mode,
      user,
      isLoadingUser,
      isAuthenticated: !!user,
      openLogin,
      openRegister,
      openModal,
      closeModal,
      setMode: handleSetMode,
      signOut,
    }),
    [
      isOpen,
      mode,
      user,
      isLoadingUser,
      openLogin,
      openRegister,
      openModal,
      closeModal,
      handleSetMode,
      signOut,
    ]
  );

  return (
    <AuthModalContext.Provider value={value}>
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within an AuthModalProvider");
  }
  return context;
}
