"use client";

import Image from "next/image";
import React, { useState, useCallback, useMemo } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface TooltipItem {
  id: number;
  name: string;
  image: string;
}

interface AnimatedTooltipProps {
  items: TooltipItem[];
}

export const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const x = useMotionValue(0);
  const springConfig = useMemo(() => ({ stiffness: 100, damping: 5 }), []);

  // Tooltip animations
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  }, [x]);

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group -mr-4"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 10 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{ translateX, rotate }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black text-xs font-bold text-white px-4 py-2 shadow-xl z-50"
              >
                {/* Gradient lines */}
                <div className="absolute inset-x-10 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />

                {item.name}
              </motion.div>
            )}
          </AnimatePresence>

          <Image
              src={item.image || "/placeholder.svg"}
              height={56}
              width={56}
              alt={item.name}
              className="rounded-full h-14 w-14 border-2 border-background bg-background 
                         transition duration-300 ease-in-out
                         transform group-hover:scale-110
                         group-hover:shadow-lg"
            />
        </div>
      ))}
    </>
  );
};
