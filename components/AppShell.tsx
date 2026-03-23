import type { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-6 md:px-10 md:py-8">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_12%_20%,rgba(20,184,166,0.2),transparent_33%),radial-gradient(circle_at_85%_8%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_78%_88%,rgba(14,116,144,0.16),transparent_30%),linear-gradient(165deg,#020617_10%,#0b1120_55%,#040b1b_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />

      <Sidebar />

      <main className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-5xl items-center justify-center pb-20 md:min-h-[calc(100vh-4rem)] md:pb-0 md:pl-24">
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
}
