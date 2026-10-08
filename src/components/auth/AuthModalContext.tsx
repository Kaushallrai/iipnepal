"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

export type AuthMode = "login" | "register";

export interface AuthUser {
  id: string;
  email?: string;
  user_metadata?: {
    full_name?: string;
    avatar_url?: string;
  };
}

interface AuthModalContextType {
  isOpen: boolean;
  mode: AuthMode;
  user: AuthUser | null;
  isLoadingUser: boolean;
  isAuthenticated: boolean;
  openLogin: () => void;
  openRegister: () => void;
  openModal: (initialMode?: AuthMode) => void;
  closeModal: () => void;
  setMode: (mode: AuthMode) => void;
  signOut: () => Promise<void>;
  signInMock: (user?: Partial<AuthUser>) => void;
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
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoadingUser] = useState(false);

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
    setUser(null);
  }, []);

  const signInMock = useCallback((mockUser?: Partial<AuthUser>) => {
    setUser({
      id: "mock-fellow-01",
      email: mockUser?.email || "fellow@iipnepal.com",
      user_metadata: {
        full_name: mockUser?.user_metadata?.full_name || "IIP Fellow",
        ...mockUser?.user_metadata,
      },
    });
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
      signInMock,
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
      signInMock,
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
