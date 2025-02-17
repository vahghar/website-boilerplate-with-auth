'use client'

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Instant Analytics",
    description: "Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.",
    icon: (
      <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
        <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
      </svg>
    )
  },
  {
    title: "Metadata",
    description: "Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.",
    icon: (
      <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
        <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
      </svg>
    )
  },
  {
    title: "SEO & Performance",
    description: "Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.",
    icon: (
      <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
        <path d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z" opacity=".3" />
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
      </svg>
    )
  },
  {
    title: "Custom Code",
    description: "Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.",
    icon: (
      <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
        <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
      </svg>
    )
  },
  {
    title: "Localization",
    description: "Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.",
    icon: (
      <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
        <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9Zm-2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Z" />
      </svg>
    )
  },
  {
    title: "Canonical URL",
    description: "Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.",
    icon: (
      <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
        <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
      </svg>
    )
  }
];

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col relative group/feature",
        "p-6 md:p-10",
        (index === 0 || index === 3) && "lg:border-l border-gray-800",
        index < 3 && "lg:border-b border-gray-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 text-gray-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 px-2 inline-block text-gray-200">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-400 relative z-10">
        {description}
      </p>
    </div>
  );
};

export default function IntegratedFeatureSection() {
  return (
    <section className="relative py-2 md:py-20 px-10 mx-5 rounded-3xl bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
          <h2 className="text-3xl font-bold md:text-4xl text-gray-200">
            Simple helps your teams work more efficiently together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button className="bg-white text-gray-900 hover:bg-gray-100 font-medium">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}