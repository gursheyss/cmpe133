"use client";

import React from "react";
import { CreditCard } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PageHeader } from "@/components/page-header";

export default function AccountsPage() {
  const accounts = [
    { name: "Main Checking", balance: 5420.5, type: "Checking" },
    { name: "Savings", balance: 12750.75, type: "Savings" },
    { name: "Credit Card", balance: -1250.25, type: "Credit" },
    { name: "Investment Account", balance: 45670.0, type: "Investment" },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-screen overflow-y-auto overflow-x-hidden">
        <PageHeader title="Accounts" icon={CreditCard} />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 max-w-[1600px] mx-auto">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {accounts.map((account, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{account.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {account.type}
                  </p>
                </CardHeader>
                <CardContent>
                  <p
                    className={`text-2xl font-bold ${
                      account.balance < 0 ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    ${Math.abs(account.balance).toFixed(2)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
