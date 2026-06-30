import { useState, type ReactNode } from "react";
import { cn, TooltipProvider } from "@devmahmoudi/ui";
import { Sidebar, type SidebarProps } from "./sidebar";
import { Header } from "./header";
import { defaultNavigation } from "../../lib/default-navigation";

type CmsLayoutSidebarConfig = Omit<SidebarProps, "collapsed" | "onToggle">;

interface CmsLayoutProps {
  children: ReactNode;
  sidebarConfig?: CmsLayoutSidebarConfig;
  user?: { name: string; email: string; avatar?: string };
}

export function CmsLayout({ children, sidebarConfig, user }: CmsLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const config: CmsLayoutSidebarConfig = {
    ...sidebarConfig,
    navigation: sidebarConfig?.navigation ?? defaultNavigation,
  };
  console.log(user);

  return (
    <TooltipProvider delayDuration={0}>
      <div className="min-h-screen bg-background">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          {...config}
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
