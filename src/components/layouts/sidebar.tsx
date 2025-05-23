"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { NavGroup } from "@/components/layouts/navGroup"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {useTranslations} from 'next-intl'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations('common')
  const data = {
    user: {
      name: "Admin",
      email: "demo@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: t("dashboard"),
        url: "/dashboard",
        icon: IconDashboard,
      },
      {
        title: t("list"),
        url: "/list",
        icon: IconListDetails,
      },
      {
        title: t("form"),
        url: "/form",
        icon: IconChartBar,
      },
      {
        title: t("chats"),
        url: "/chats",
        icon: IconFolder,
      },
      {
        title: t("profile"),
        url: "/profile",
        icon: IconUsers,
      },
    ],
    navResults: [
      {
        name: t("success"),
        url: "/result/success",
        icon: IconDatabase,
      },
      {
        name: t("fail"),
        url: "/result/fail",
        icon: IconDatabase,
      },
    ],
    navErrors: [
      {
        name: "403",
        url: "/e/403",
        icon: IconDatabase,
      },
      {
        name: "404",
        url: "/e/404",
        icon: IconReport,
      },
      {
        name: "500",
        url: "/e/500",
        icon: IconFileWord,
      },
    ],
    navSecondary: [
      {
        title: t("settings"),
        url: "/setting",
        icon: IconSettings,
      },
      {
        title: t("getHelp"),
        url: "/help",
        icon: IconHelp,
      },
      {
        title: t("search"),
        url: "/search",
        icon: IconSearch,
      },
    ],
  }
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">{t("adminTitle")}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavGroup items={data.navResults} groupName={t("result")} />
        <NavGroup items={data.navErrors} groupName={t("exception")} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
