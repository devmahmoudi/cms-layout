import { useState, type ReactNode } from "react";
import { cn, TooltipProvider } from "@devmahmoudi/ui";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <div className="min-h-screen bg-background">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <Header
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <main
          className={cn(
            "pt-14 transition-all duration-300",
            sidebarCollapsed ? "pl-16" : "pl-64",
          )}
        >
          <div className="container mx-auto p-6">{children}</div>
        </main>
      </div>
    </TooltipProvider>
  );
}
