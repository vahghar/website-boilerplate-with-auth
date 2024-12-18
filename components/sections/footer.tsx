import Link from "next/link"
import Image from "next/image"

export const Footer=()=> {
  return (
    <footer className="border-t">
      <div className="mx-[20px] max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="md:order-1 md:flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              © All rights reserved.
            </p>
          </div>
        </div>

        <nav className="mt-8 md:order-2 md:mt-0 md:flex-1">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Pricing & Plans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Our method
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Diversity & Inclusion
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Financial statements
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Report a vulnerability
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Social</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Medium
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  )
}

