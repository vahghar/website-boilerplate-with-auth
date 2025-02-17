import React from 'react';
import { ArrowRight, Code2, Sparkles} from 'lucide-react';

export const HeroHome = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-[40rem] left-1/2 aspect-square w-[80rem] -translate-x-1/2 bg-gradient-to-tl from-slate-50 via-blue-50/70 to-slate-50 opacity-50 blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pb-12 pt-32 text-center lg:pt-40">
          {/* Announcement banner */}
          <div className="mb-8 inline-flex items-center rounded-full bg-slate-100/80 px-6 py-2" data-aos="fade-down">
            <span className="text-sm font-medium text-muted-foreground">
              <Sparkles className="mr-2 inline-block h-4 w-4" />
              New Features Released
            </span>
          </div>

          {/* Main hero content */}
          <h1 
            className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
            data-aos="fade-up"
          >
            Build Beautiful Websites{' '}
            <span className="relative whitespace-nowrap">
              <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-3/4 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none">
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">with Ease</span>
            </span>
          </h1>

          <p 
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Create stunning, responsive websites in minutes. Our intuitive builder combines 
            powerful features with simplicity, perfect for businesses and creators alike.
          </p>

          {/* CTA buttons */}
          <div 
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button className="group inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-white hover:bg-foreground/90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground active:bg-foreground/80">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-muted-foreground hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-100">
              <Code2 className="mr-2 h-4 w-4" />
              View Demo
            </button>
          </div>

          {/* Terminal animation */}
          <div
              className="mx-auto my-[20px] max-w-3xl"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="relative aspect-video rounded-2xl bg-black p-4 shadow-2xl before:pointer-events-none before:absolute before:-inset-1 before:rounded-2xl after:absolute after:-inset-1 after:rounded-2xl after:-z-10">
                <div className="relative mb-4 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-gray-100"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-100"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-100"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-100">
                    vercel-deploy.sh
                  </span>
                </div>
                <div className="font-mono text-sm text-gray-400 [&_span]:opacity-0">
                  <span className="animate-[code-1_12s_infinite] text-blue-100">
                    $ vercel login
                  </span>
                  <br />
                  <span className="animate-[code-2_12s_infinite]">
                    Vercel CLI 28.15.5
                  </span>
                  <br />
                  <span className="animate-[code-3_12s_infinite]">
                    ? Log in to Vercel github
                  </span>
                  <br />
                  <span className="animate-[code-4_12s_infinite]">
                    &gt; Success! GitHub authentication complete for user@example.com
                  </span>
                  <br />
                  <span className="animate-[code-5_12s_infinite]">
                    Congratulations! You are now logged in. In order to deploy something, run `vercel`.
                  </span>
                  <br />
                  <br />
                  <span className="animate-[code-6_12s_infinite] text-blue-100">
                    $ vercel deploy
                  </span>
                  <br />
                  <span className="animate-[code-7_12s_infinite]">
                    Vercel CLI 28.15.5
                  </span>
                  <br />
                  <span className="animate-[code-8_12s_infinite]">
                  ? Set up and deploy &quot;~/project&quot;? [Y/n] y
                  </span>
                  <br />
                  <span className="animate-[code-9_12s_infinite]">
                    ? Which scope do you want to deploy to? Your Account
                  </span>
                  <br />
                  <span className="animate-[code-10_12s_infinite]">
                    ? Link to existing project? [y/N] n
                  </span>
                  <br />
                  <span className="animate-[code-11_12s_infinite]">
                    🔗  Link: https://project-12345.vercel.app [1s]
                  </span>
                  <br />
                  <span className="animate-[code-12_12s_infinite] text-blue-100">
                    Deployment complete!
                  </span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

