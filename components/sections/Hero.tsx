import PageIllustration from "@/components/page-illustration";
import { Button } from "../ui/button";

export const HeroHome = () => {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Build your Websites <br className="max-lg:hidden" />
              with ease
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Empower your creativity with our intuitive website builder. Perfect for businesses, bloggers, and creators alike to bring their ideas to life online.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <Button variant="default">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
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
      </div>
    </section>
  );
}