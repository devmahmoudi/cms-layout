// src/components/layout/sidebar.tsx
import { useState } from "react";
import {
  cn,
  Button,
  ScrollArea,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@devmahmoudi/ui";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { mainNavigation, type NavItem } from "../../lib/navigation";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

function NavItemComponent({
  item,
  collapsed,
}: {
  item: NavItem;
  collapsed: boolean;
}) {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;
  const Icon = item.icon;

  if (hasChildren) {
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2 px-3",
              collapsed && "justify-center px-0",
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {!collapsed && (
              <>
                <span className="flex-1 text-left">{item.title}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform",
                    open && "rotate-180",
                  )}
                />
              </>
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1">
          {item.children?.map((child) => (
            <Button
              key={child.href}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 pl-10",
                collapsed && "justify-center px-0",
              )}
            >
              <child.icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span>{child.title}</span>}
            </Button>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  const button = (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2 px-3",
        collapsed && "justify-center px-0",
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      {!collapsed && <span>{item.title}</span>}
    </Button>
  );

  if (collapsed) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent side="right" className="flex items-center gap-2">
          {item.title}
        </TooltipContent>
      </Tooltip>
    );
  }

  return button;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col border-r bg-background transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Logo */}
      <div
        className={cn(
          "flex h-14 items-center border-b px-4",
          collapsed && "justify-center px-0",
        )}
      >
        {!collapsed && (
          <span className="text-lg font-semibold tracking-tight">
            CMS Admin
          </span>
        )}
        {collapsed && <span className="text-lg font-bold">C</span>}
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 py-2">
        <nav className="grid gap-1 px-2">
          {mainNavigation.map((item) => (
            <NavItemComponent
              key={item.href}
              item={item}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </ScrollArea>

      {/* Collapse toggle */}
      <div className="border-t p-2">
        <Button
          variant="ghost"
          size="icon"
          className="w-full"
          onClick={onToggle}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
    </aside>
  );
}
