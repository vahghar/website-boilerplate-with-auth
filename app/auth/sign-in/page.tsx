"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/ui/icons"
import { motion } from "framer-motion"
import Link from "next/link"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email sign in logic here
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
    if (result?.error) {
      // Handle error
      console.error(result.error)
    } else {
      // Redirect or update UI
      window.location.href = '/'
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto space-y-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
    >
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-center text-gray-800 dark:text-white"
      >
        Welcome Back
      </motion.h1>
      
      <div className="space-y-4">
        <Button 
          onClick={() => signIn('github', { callbackUrl: '/' })}
          className="w-full bg-gray-800 hover:bg-gray-700 text-white"
        >
          <Icons.gitHub className="mr-2 h-4 w-4" />
          Sign in with GitHub
        </Button>
        
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
        </div>
      </div>

      <form onSubmit={handleEmailSignIn} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email"
            type="email" 
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
              Forgot your password?
            </a>
          </div>
        </div>
        <Button type="submit" className="w-full">
          <Link href='/'>SignIn</Link>
        </Button>
      </form>

      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?{" "}
        <a href="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
          Sign up
        </a>
      </p>
    </motion.div>
  )
}

