// src/lib/navigation.ts
import {
  LayoutDashboard,
  FileText,
  Users,
  Image,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
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
      {
        title: "Pages",
        href: "/admin/content/pages",
        icon: FileText,
      },
      {
        title: "Posts",
        href: "/admin/content/posts",
        icon: FileText,
      },
      {
        title: "Media",
        href: "/admin/content/media",
        icon: Image,
      },
    ],
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];