// src/lib/default-navigation.ts (keep this in the package)
import { LayoutDashboard, FileText, Users, Image, Settings } from "lucide-react";
import type { NavItem } from "../types";

export const defaultNavigation: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Content",
    href: "/admin/content",
    icon: FileText,
    children: [
      { title: "Pages", href: "/admin/content/pages", icon: FileText },
      { title: "Posts", href: "/admin/content/posts", icon: FileText },
      { title: "Media", href: "/admin/content/media", icon: Image },
    ],
  },
  { title: "Users", href: "/admin/users", icon: Users },
  { title: "Settings", href: "/admin/settings", icon: Settings },
];