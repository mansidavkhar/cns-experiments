import React, { useState } from 'react';

// A simple, static "Login/Sign Up" component.
// Styled with Tailwind for easy modification.

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            {isLogin ? 'Welcome back!' : 'Create a new account.'}
          </p>

          {/* Login/Sign Up Form */}
          <form className="space-y-6">
            {/* Name Field (only for Sign Up) */}
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                             focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-8 border border-transparent 
                           shadow-sm text-base font-medium rounded-lg text-white bg-blue-600 
                           hover:bg-blue-700 transition duration-300 ease-in-out
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isLogin ? 'Login' : 'Create Account'}
              </button>
            </div>
          </form>

          {/* Toggle between Login and Sign Up */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={toggleForm}
                type="button"
                className="ml-2 font-medium text-blue-600 hover:text-blue-500"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}