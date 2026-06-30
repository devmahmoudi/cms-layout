import { useState, type ReactNode } from "react";
import { cn, TooltipProvider } from "@devmahmoudi/ui";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import type { NavItem } from "../../types";
import { defaultNavigation } from "../../lib/default-navigation";

interface CmsLayoutProps {
  children: ReactNode;
  navigation?: NavItem[];
  logo?: ReactNode;
  user?: { name: string; email: string; avatar?: string };
}

export function CmsLayout({
  children,
  navigation = defaultNavigation,
  logo,
  user,
}: CmsLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  console.log(user);
  

  return (
    <TooltipProvider delayDuration={0}>
      <div className="min-h-screen bg-background">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          navigation={navigation}
          logo={logo}
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
