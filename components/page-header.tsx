import React from "react";
import { LucideIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PageHeaderProps {
  title: string;
  icon: LucideIcon;
}

export function PageHeader({ title, icon: Icon }: PageHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 px-4 sticky top-0 bg-background z-10">
      <SidebarTrigger className="-ml-2" />
      <Separator orientation="vertical" className="h-6" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Icon className="h-4 w-4 mr-2" />
              FinanceGuard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
