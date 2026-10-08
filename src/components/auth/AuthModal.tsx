"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { useAuthModal, AuthMode } from "@/components/auth/AuthModalContext";

// Slide transition physics
const slideTransition = {
  type: "spring" as const,
  stiffness: 240,
  damping: 26,
  mass: 0.8,
};

function GoogleIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export default function AuthModal(): React.JSX.Element {
  const { isOpen, closeModal, mode, setMode, signInMock } = useAuthModal();

  // Screen width detection: hide image on tablet (< 1024px) & mobile
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  // Form Fields
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  // Status feedback
  const [isLoading, setIsLoading] = useState(false);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track previous mode & isOpen to reset inputs without cascading renders
  const [prevMode, setPrevMode] = useState(mode);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (prevMode !== mode || prevIsOpen !== isOpen) {
    setPrevMode(mode);
    setPrevIsOpen(isOpen);
    setInfoMessage(null);
    setOtpSent(false);
    setOtp("");
  }

  const switchMode = (newMode: AuthMode) => {
    if (newMode === mode) return;
    setInfoMessage(null);
    setOtpSent(false);
    setOtp("");
    setMode(newMode);
  };

  // Simulated Google Auth (client-only demonstration)
  const handleGoogleAuth = () => {
    setIsLoading(true);
    setInfoMessage(null);
    setTimeout(() => {
      setIsLoading(false);
      signInMock({
        email: "fellow@iipnepal.com",
        user_metadata: { full_name: "Creative Fellow" },
      });
      setInfoMessage("Signed in successfully with Google.");
      setTimeout(() => {
        closeModal();
      }, 600);
    }, 450);
  };

  // Phone OTP Submission
  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInfoMessage(null);

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 8) {
      setInfoMessage("Please enter a valid phone number.");
      return;
    }

    if (mode === "register" && (!firstName.trim() || !lastName.trim())) {
      setInfoMessage("Please enter both first and last name.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setInfoMessage(`Code sent to +977 ${cleanPhone}`);
    }, 600);
  };

  // OTP Verification
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.trim().length < 4) {
      setInfoMessage("Enter the 6-digit verification code.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      signInMock({
        email: phone ? `+977 ${phone}` : "fellow@iipnepal.com",
        user_metadata: {
          full_name: firstName ? `${firstName} ${lastName}`.trim() : "IIP Fellow",
        },
      });
      setInfoMessage("Verification successful. Welcome to IIP Nepal.");
      setTimeout(() => {
        closeModal();
      }, 600);
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent
        hideCloseButton
        className="w-[calc(100%-2rem)] max-w-[440px] lg:max-w-[820px] h-[490px] p-0 border border-black/15 bg-neutral-950 text-black shadow-2xl rounded-2xl overflow-hidden focus:outline-none"
        aria-describedby="auth-dialog-description"
      >
        <DialogTitle className="sr-only">
          {mode === "login" ? "Login to IIP Nepal" : "Create Account at IIP Nepal"}
        </DialogTitle>
        <DialogDescription id="auth-dialog-description" className="sr-only">
          Login or register using Google or your phone number.
        </DialogDescription>

        {/* Global Modal Close Button: Fixed at top-right with clear z-index */}
        <DialogClose
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full border border-black/15 bg-[#fffef7]/90 backdrop-blur-md hover:border-black flex items-center justify-center transition-all cursor-pointer text-black/75 hover:text-black focus:outline-none shadow-sm"
        >
          <X className="w-3.5 h-3.5" strokeWidth={1.75} />
        </DialogClose>

        {/* 2-Column Sliding Container (Form & Cover Image) */}
        <div className="relative w-full h-full overflow-hidden bg-neutral-950">
          {/* ========================================================== */}
          {/* COLUMN 1: FORM PANEL (slides 0% on login, 100% on register) */}
          {/* ========================================================== */}
          <motion.div
            initial={false}
            animate={{
              x: isDesktop ? (mode === "login" ? "0%" : "100%") : "0%",
            }}
            transition={slideTransition}
            className="w-full lg:w-1/2 h-full absolute top-0 left-0 bg-[#fffef7] z-20 flex flex-col justify-between p-6 sm:p-7 lg:p-8"
          >
            {/* Top Brand Header: Left aligned, generous right padding to keep close button clear */}
            <div className="flex items-center pb-3 pr-12 border-b border-[#ece8dc]">
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-4 shrink-0">
                  <Image
                    src="/images/iip-official-logo-dark.svg"
                    alt="IIP Nepal"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-black font-medium">
                  IIP Nepal
                </span>
              </div>
            </div>

            {/* Middle: Title & Form Content */}
            <div className="py-1 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode + (otpSent ? "-otp" : "-form")}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl font-light tracking-[-0.03em] text-black">
                      {otpSent
                        ? "Verify phone"
                        : mode === "login"
                          ? "Welcome back"
                          : "Create account"}
                    </h3>
                    <p className="text-[12.5px] text-[#666666] mt-1 font-light leading-normal">
                      {otpSent
                        ? `Enter the 6-digit code sent to +977 ${phone}`
                        : mode === "login"
                          ? "Enter your phone number to Login."
                          : "Enter your details to register for admissions."}
                    </p>
                  </div>

                  {/* Inline feedback message if any */}
                  {infoMessage && (
                    <div className="mt-3 p-2 bg-[#f6f4ea] border-l-2 border-black text-black text-xs font-sans leading-tight">
                      {infoMessage}
                    </div>
                  )}

                  {/* FORM FLOWS */}
                  {!otpSent ? (
                    <div className="mt-4 space-y-3.5">
                      {/* Google Auth Button */}
                      <button
                        type="button"
                        onClick={handleGoogleAuth}
                        disabled={isLoading}
                        className="w-full py-2.5 px-4 rounded-full border border-[#cccccc] hover:border-black bg-transparent text-black font-mono text-[11px] uppercase tracking-[0.14em] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                      >
                        <GoogleIcon />
                        <span>
                          {mode === "login" ? "Continue with Google" : "Sign up with Google"}
                        </span>
                      </button>

                      {/* Underline Divider */}
                      <div className="relative my-3 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-[#e5e1d5]" />
                        </div>
                        <span className="relative bg-[#fffef7] px-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#888888]">
                          or phone
                        </span>
                      </div>

                      {/* Phone Form with Contact Form Underline Input Style */}
                      <form onSubmit={handlePhoneSubmit} className="space-y-3.5">
                        {mode === "register" && (
                          <div className="grid grid-cols-2 gap-3.5">
                            {/* First Name */}
                            <div className="flex flex-col items-start">
                              <label
                                htmlFor="auth-first-name"
                                className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#666666] mb-1"
                              >
                                First name *
                              </label>
                              <input
                                id="auth-first-name"
                                type="text"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Aarav"
                                autoComplete="given-name"
                                className="w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-sm text-black placeholder:text-[#aaaaaa] outline-none py-1.5 transition-colors"
                              />
                            </div>

                            {/* Last Name */}
                            <div className="flex flex-col items-start">
                              <label
                                htmlFor="auth-last-name"
                                className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#666666] mb-1"
                              >
                                Last name *
                              </label>
                              <input
                                id="auth-last-name"
                                type="text"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Shrestha"
                                autoComplete="family-name"
                                className="w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-sm text-black placeholder:text-[#aaaaaa] outline-none py-1.5 transition-colors"
                              />
                            </div>
                          </div>
                        )}

                        {/* Phone Number with Underline */}
                        <div className="flex flex-col items-start w-full">
                          <label
                            htmlFor="auth-phone-input"
                            className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#666666] mb-1"
                          >
                            Phone number *
                          </label>
                          <div className="w-full flex items-baseline border-0 border-b border-[#cccccc] focus-within:border-black transition-colors py-1.5">
                            <span className="font-mono text-sm text-[#888888] pr-2 select-none">
                              +977
                            </span>
                            <input
                              id="auth-phone-input"
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="980 1234567"
                              autoComplete="tel"
                              className="w-full bg-transparent text-sm text-black placeholder:text-[#aaaaaa] outline-none"
                            />
                          </div>
                        </div>

                        {/* Login Mode Extras: Balanced "Remember me" and "Need help?" */}
                        {mode === "login" && (
                          <div className="flex items-center justify-between pt-0.5">
                            <label className="flex items-center gap-2 cursor-pointer select-none group">
                              <input
                                type="checkbox"
                                defaultChecked
                                className="w-3.5 h-3.5 rounded border-[#cccccc] text-black accent-black focus:ring-0 cursor-pointer"
                              />
                              <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#666666] group-hover:text-black transition-colors">
                                Remember this device
                              </span>
                            </label>
                            <button
                              type="button"
                              onClick={() =>
                                setInfoMessage(
                                  "Admissions Desk helpline: +977 1 4412345"
                                )
                              }
                              className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#888888] hover:text-black hover:underline cursor-pointer transition-colors"
                            >
                              Need help?
                            </button>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full mt-2.5 py-2.5 px-6 rounded-full bg-black text-[#fffef7] font-mono text-xs uppercase tracking-[0.16em] font-medium transition-colors hover:bg-[#ffd001] hover:text-black cursor-pointer shadow-sm disabled:opacity-50"
                        >
                          {isLoading
                            ? "Sending..."
                            : mode === "login"
                              ? "Continue with Phone"
                              : "Create Account"}
                        </button>
                      </form>
                    </div>
                  ) : (
                    /* OTP Verification View */
                    <form onSubmit={handleVerifyOtp} className="mt-6 space-y-5">
                      <div className="flex flex-col items-center">
                        <label
                          htmlFor="auth-otp-input"
                          className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#666666] mb-2"
                        >
                          6-Digit Code
                        </label>
                        <input
                          id="auth-otp-input"
                          type="text"
                          maxLength={6}
                          required
                          autoFocus
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="••••••"
                          className="w-48 bg-transparent border-0 border-b-2 border-black text-center font-mono text-2xl tracking-[0.35em] text-black outline-none py-1.5"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-2.5 px-6 rounded-full bg-black text-[#fffef7] font-mono text-xs uppercase tracking-[0.16em] font-medium transition-colors hover:bg-[#ffd001] hover:text-black cursor-pointer shadow-sm disabled:opacity-50"
                      >
                        {isLoading ? "Verifying..." : "Verify & Enter"}
                      </button>

                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => setOtpSent(false)}
                          className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#666666] hover:text-black cursor-pointer underline underline-offset-4"
                        >
                          Change phone number
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Footer Switch */}
            <div className="pt-2.5 border-t border-[#ede9dd] text-center">
              <p className="text-xs text-[#666666]">
                {mode === "login" ? (
                  <>
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => switchMode("register")}
                      className="text-black font-medium hover:underline cursor-pointer"
                    >
                      Create account
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => switchMode("login")}
                      className="text-black font-medium hover:underline cursor-pointer"
                    >
                      Login
                    </button>
                  </>
                )}
              </p>
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* COLUMN 2: COVER IMAGE (slides 100% on login, 0% on register) */}
          {/* Hidden on tablet (< 1024px) & mobile as requested          */}
          {/* ========================================================== */}
          <motion.div
            initial={false}
            animate={{
              x: mode === "login" ? "100%" : "0%",
            }}
            transition={slideTransition}
            className="hidden lg:block w-1/2 h-full absolute top-0 left-0 overflow-hidden z-10 bg-neutral-950"
          >
            {/* Background Photography Asset */}
            <div className="relative w-full h-full">
              <Image
                src={
                  mode === "login"
                    ? "/images/flagship-mentor-darkroom.webp"
                    : "/images/hero-photographer.webp"
                }
                alt="IIP Nepal Photography"
                fill
                priority
                className="object-cover object-center brightness-[0.92] contrast-[1.05]"
              />

              {/* Editorial Gradient & Frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-7 lg:p-8 flex flex-col justify-between select-none">
                {/* Top Subtle Stamp: Clean left badge, zero right collision with close button */}
                <div className="flex items-center">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ffd001] font-medium">
                    {mode === "login" ? "Darkroom Archive" : "Admissions 2026"}
                  </span>
                </div>

                {/* Bottom Architectural Caption */}
                <div className="space-y-1.5">
                  <p className="text-white text-[14px] font-light leading-snug tracking-[-0.015em]">
                    {mode === "login"
                      ? "“The camera is an instrument that teaches people how to see without a camera.”"
                      : "“Redefining visual storytelling across the Himalayan subcontinent.”"}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                    {mode === "login" ? "— Dorothea Lange" : "— IIP Nepal Fellowship"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
