"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BookOpen, Briefcase, Code, Home, Languages, Mail, User } from "lucide-react";

const navItems = [
  { href: "/", label: "Hero", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/skills", label: "Skills", icon: Code },
  { href: "/portfolio", label: "Portfolio", icon: Briefcase },
  { href: "/education", label: "Education", icon: BookOpen },
  { href: "/languages", label: "Languages", icon: Languages },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const lastWheelTime = useRef(0);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const tagName = target.tagName.toLowerCase();
      if (["input", "textarea", "select", "button"].includes(tagName)) {
        return;
      }

      if (Math.abs(event.deltaY) < 20) return;

      const currentIndex = navItems.findIndex((item) => item.href === pathname);
      if (currentIndex < 0) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = currentIndex + direction;
      if (nextIndex < 0 || nextIndex >= navItems.length) return;

      const now = Date.now();
      if (now - lastWheelTime.current < 220) return;
      lastWheelTime.current = now;

      event.preventDefault();
      router.push(navItems[nextIndex].href);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [pathname, router]);

  return (
    <>
      <aside className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 md:flex md:flex-col md:gap-3 md:rounded-full md:border md:border-white/10 md:bg-white/5 md:p-3 md:backdrop-blur-xl md:shadow-[0_14px_36px_rgba(2,6,23,0.72),0_0_28px_rgba(34,211,238,0.28)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className={`relative rounded-full p-3 transition-all duration-300 ${
                active
                    ? "bg-cyan-500 text-white shadow-[0_0_24px_rgba(6,182,212,0.75),0_8px_20px_rgba(2,6,23,0.55)]"
                  : "text-slate-500 hover:bg-white/5 hover:text-cyan-300"
              }`}
            >
              <span className="relative z-10 block">
                <Icon size={20} />
              </span>
            </Link>
          );
        })}
      </aside>

      <nav className="fixed bottom-3 left-1/2 z-50 flex w-[95%] -translate-x-1/2 items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 shadow-[0_12px_30px_rgba(2,6,23,0.72),0_0_22px_rgba(34,211,238,0.2)] backdrop-blur-xl md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={`${item.href}-mobile`}
              href={item.href}
              aria-label={item.label}
              className={`relative rounded-xl px-2 py-2 transition ${
                active
                  ? "bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.72),0_6px_16px_rgba(2,6,23,0.5)]"
                  : "text-slate-300"
              }`}
            >
              <span className="relative z-10 block">
                <Icon size={18} />
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}