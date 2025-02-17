"use client";
import React from "react";
import Logo01 from "@/public/images/logo-01.svg";
import Logo02 from "@/public/images/logo-02.svg";
import Logo03 from "@/public/images/logo-03.svg";
import Logo04 from "@/public/images/logo-04.svg";
import Logo05 from "@/public/images/logo-05.svg";
import Logo07 from "@/public/images/logo-07.svg";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image: Logo01,
    },
    {
        id: 2,
        name: "Github",
        image: Logo02,
    },
    {
        id: 3,
        name: "Google",
        image: Logo03,
    },
    {
        id: 4,
        name: "Kanix",
        image: Logo04,
    },
    {
        id: 5,
        name: "Zapier",
        image: Logo05,
    },
    {
        id: 6,
        name: "Bino",
        image: Logo07,
    },
];

export function AnimatedTooltipPreview() {
    return (
        <div id="categories" className="relative py-20 px-4 w-full overflow-hidden">
            {/* Modern SVG Background Pattern */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-gradient-to-r before:via-blue-500"></div>
                <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-gradient-to-r before:via-blue-500"></div>
                {/* Diagonal lines */}
                <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
                {/* Vertical lines */}
                <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-gradient-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-gradient-to-t from-gray-200 to-transparent mix-blend-multiply"></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/80" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Business Categories
                    </p>
                </div>

                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>
            </div>
        </div>
    );
}