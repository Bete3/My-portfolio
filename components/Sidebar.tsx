"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/#hero", id: "hero", label: "Home" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#portfolio", id: "portfolio", label: "Portfolio" },
  { href: "/#education", id: "education", label: "Resume" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const tickingRef = useRef(false);

  useEffect(() => {
    const computeActiveSection = () => {
      const pageTop = window.scrollY <= 8;
      if (pageTop) return "hero";

      const pageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      if (pageBottom) return "contact";

      const viewportMiddle = window.innerHeight * 0.55;
      let bestId = "hero";
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        if (!isVisible) continue;

        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportMiddle);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = item.id;
        }
      }

      return bestId;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const next = computeActiveSection();
        setActiveSection((prev) => (prev === next ? prev : next));
        tickingRef.current = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-3 py-3 md:justify-center md:gap-8 md:px-6">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className={`relative inline-flex shrink-0 items-center px-2 py-2 text-sm font-medium transition md:text-base ${
                isActive ? "text-pink-600" : "text-slate-700 hover:text-pink-600"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-[13px] left-0 h-[2.5px] w-full rounded-full bg-pink-500 transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}