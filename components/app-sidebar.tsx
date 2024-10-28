"use client";

import * as React from "react";
import {
  LayoutDashboard,
  CreditCard,
  Receipt,
  RefreshCcw,
  TrendingUp,
  FileText,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Jone Doe",
    email: "john@example.com",
    avatar: "/placeholder-user.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Accounts",
      url: "/accounts",
      icon: CreditCard,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: Receipt,
    },
    {
      title: "Recurring",
      url: "/recurring",
      icon: RefreshCcw,
    },
    {
      title: "Investments",
      url: "/investments",
      icon: TrendingUp,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: FileText,
    },
    {
      title: "Goals",
      url: "/goals",
      icon: Target,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center justify-center p-4">
        <TrendingUp className="h-6 w-6 text-primary" />
        <span className="ml-2 text-2xl font-bold text-primary font-[family-name:var(--font-geist-sans)]">
          FinanceGuard
        </span>
      </SidebarHeader>
      <SidebarContent className="flex flex-col">
        {data.navMain.map((item, index) => (
          <Button
            key={index}
            variant={item.isActive ? "secondary" : "ghost"}
            className="w-full justify-start"
            asChild
          >
            <a href={item.url}>
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </a>
          </Button>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={data.user.avatar} alt={data.user.name} />
            <AvatarFallback>{data.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{data.user.name}</span>
            <span className="text-xs text-muted-foreground">
              {data.user.email}
            </span>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
