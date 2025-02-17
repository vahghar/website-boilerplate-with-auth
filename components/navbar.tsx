import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border border-white/20 bg-white/5 backdrop-filter backdrop-blur-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black/5 dark:border-black/20 rounded-2xl mx-4 mt-4">
      <div className="flex h-16 items-center px-8 max-w-7xl mx-auto">
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 flex-1">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Features
          </Link>
          <Link href="#categories" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Categories
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/auth/sign-in">
              Login
            </Link>
          </Button>
          <Button asChild>
            <Link href="/auth/sign-up">
              Register
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
