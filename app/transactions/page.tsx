"use client";

import React from "react";
import { Receipt } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PageHeader } from "@/components/page-header";

export default function TransactionsPage() {
  const transactions = [
    {
      date: "2024-03-15",
      description: "Grocery Store",
      amount: -156.32,
      category: "Groceries",
    },
    {
      date: "2024-03-14",
      description: "Salary Deposit",
      amount: 3500.0,
      category: "Income",
    },
    {
      date: "2024-03-13",
      description: "Gas Station",
      amount: -45.0,
      category: "Transportation",
    },
    {
      date: "2024-03-12",
      description: "Netflix",
      amount: -15.99,
      category: "Entertainment",
    },
    {
      date: "2024-03-11",
      description: "Restaurant",
      amount: -65.5,
      category: "Dining",
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-screen overflow-y-auto overflow-x-hidden">
        <PageHeader title="Transactions" icon={Receipt} />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 max-w-[1600px] mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3">Date</th>
                      <th>Description</th>
                      <th>Category</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-4">{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td
                          className={`text-right ${
                            transaction.amount < 0
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          ${Math.abs(transaction.amount).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
