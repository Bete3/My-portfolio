import type { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 px-4 pb-8 pt-24 md:px-8 md:pb-12 md:pt-28">
      <div className="app-bg-soft pointer-events-none fixed inset-0 -z-40" />

      <Sidebar />

      <main className="mx-auto w-full max-w-6xl">
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
}
