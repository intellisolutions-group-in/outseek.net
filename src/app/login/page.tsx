"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Link from "next/link";
import { BRAND_NAME } from "@/utils/constants";

interface LoginFormData {
  email: string;
  password: string;
}

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [showSignupMessage, setShowSignupMessage] = useState(false);

  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
    reset: resetLogin,
  } = useForm<LoginFormData>();

  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
    control,
    reset: resetSignup,
  } = useForm<SignupFormData>();

  const password = useWatch({ control, name: "password" });

  const onLoginSubmit = (data: LoginFormData) => {
    console.log("Login:", data);
    // Handle login submission
    setShowLoginMessage(true);
    resetLogin();
    // Hide message after 10 seconds
    setTimeout(() => {
      setShowLoginMessage(false);
    }, 10000);
  };

  const onSignupSubmit = (data: SignupFormData) => {
    console.log("Signup:", data);
    // Handle signup submission
    setShowSignupMessage(true);
    resetSignup();
    // Switch to login tab
    setActiveTab("login");
    // Hide message after 10 seconds
    setTimeout(() => {
      setShowSignupMessage(false);
    }, 10000);
  };

  return (
    <div className="min-h-screen pt-12 pb-20 bg-gradient-to-br from-gray-50 via-white to-[#4F3F7C]/5">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome to {BRAND_NAME}
                </h1>
                <p className="text-gray-600">
                  Sign in to access resources or create a new account
                </p>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => {
                    setActiveTab("login");
                    setShowLoginMessage(false);
                    setShowSignupMessage(false);
                  }}
                  className={`flex-1 py-3 text-center font-medium transition-colors ${
                    activeTab === "login"
                      ? "text-[#4F3F7C] border-b-2 border-[#4F3F7C]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setActiveTab("signup");
                    setShowLoginMessage(false);
                    setShowSignupMessage(false);
                  }}
                  className={`flex-1 py-3 text-center font-medium transition-colors ${
                    activeTab === "signup"
                      ? "text-[#4F3F7C] border-b-2 border-[#4F3F7C]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Login Success Message */}
              {showLoginMessage && (
                <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200 flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-green-800 text-sm leading-relaxed flex-1">
                    Your account is under review we will get back soon.
                  </p>
                  <button
                    onClick={() => setShowLoginMessage(false)}
                    className="flex-shrink-0 text-green-600 hover:text-green-800"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Signup Success Message */}
              {showSignupMessage && (
                <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200 flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-green-800 text-sm leading-relaxed flex-1">
                    Account created successfully! Your account is pending verification. We will contact you soon once the verification is complete.
                  </p>
                  <button
                    onClick={() => setShowSignupMessage(false)}
                    className="flex-shrink-0 text-green-600 hover:text-green-800"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Login Form */}
              {activeTab === "login" && (
                <form onSubmit={handleLoginSubmit(onLoginSubmit)} className="space-y-5">
                  <div>
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      {...registerLogin("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      id="login-email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F3F7C] focus:border-transparent outline-none transition-all"
                      placeholder="you@example.com"
                    />
                    {loginErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{loginErrors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        {...registerLogin("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                        type={showPassword ? "text" : "password"}
                        id="login-password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F3F7C] focus:border-transparent outline-none transition-all pr-10"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {loginErrors.password && (
                      <p className="text-red-500 text-sm mt-1">{loginErrors.password.message}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-[#4F3F7C] focus:ring-[#4F3F7C]" />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <Link href="/forgot-password" className="text-sm text-[#4F3F7C] hover:text-[#3d2f61]">
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#4F3F7C] text-white py-3 rounded-lg font-semibold hover:bg-[#3d2f61] transition-all shadow-lg hover:shadow-xl"
                  >
                    Sign In
                  </button>
                </form>
              )}

              {/* Signup Form */}
              {activeTab === "signup" && (
                <form onSubmit={handleSignupSubmit(onSignupSubmit)} className="space-y-5">
                  <div>
                    <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      {...registerSignup("name", { required: "Name is required" })}
                      type="text"
                      id="signup-name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F3F7C] focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {signupErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{signupErrors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      {...registerSignup("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      id="signup-email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F3F7C] focus:border-transparent outline-none transition-all"
                      placeholder="you@example.com"
                    />
                    {signupErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{signupErrors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        {...registerSignup("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                        type={showPassword ? "text" : "password"}
                        id="signup-password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F3F7C] focus:border-transparent outline-none transition-all pr-10"
                        placeholder="Create a password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {signupErrors.password && (
                      <p className="text-red-500 text-sm mt-1">{signupErrors.password.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        {...registerSignup("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (value: string) =>
                            value === password || "Passwords do not match",
                        })}
                        type={showConfirmPassword ? "text" : "password"}
                        id="signup-confirm-password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F3F7C] focus:border-transparent outline-none transition-all pr-10"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showConfirmPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {signupErrors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">{signupErrors.confirmPassword.message}</p>
                    )}
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-[#4F3F7C] focus:ring-[#4F3F7C]" />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to the <Link href="/terms" className="text-[#4F3F7C] hover:text-[#3d2f61]">Terms of Service</Link> and <Link href="/privacy" className="text-[#4F3F7C] hover:text-[#3d2f61]">Privacy Policy</Link>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#4F3F7C] text-white py-3 rounded-lg font-semibold hover:bg-[#3d2f61] transition-all shadow-lg hover:shadow-xl"
                  >
                    Create Account
                  </button>
                </form>
              )}

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {activeTab === "login" ? (
                    <>
                      Don&apos;t have an account?{" "}
                      <button
                        onClick={() => setActiveTab("signup")}
                        className="text-[#4F3F7C] hover:text-[#3d2f61] font-medium"
                      >
                        Sign up
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <button
                        onClick={() => setActiveTab("login")}
                        className="text-[#4F3F7C] hover:text-[#3d2f61] font-medium"
                      >
                        Sign in
                      </button>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

