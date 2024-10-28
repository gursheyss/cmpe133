"use client";

import React from "react";
import {
  Bell,
  Search,
  LayoutDashboard,
  CreditCard,
  Receipt,
  RefreshCcw,
  TrendingUp,
  FileText,
  Target,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  PieChart,
  Pie,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export default function Dashboard() {
  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: CreditCard, label: "Accounts" },
    { icon: Receipt, label: "Transactions" },
    { icon: RefreshCcw, label: "Recurring" },
    { icon: TrendingUp, label: "Investments" },
    { icon: FileText, label: "Reports" },
    { icon: Target, label: "Goals" },
  ];

  const spendingData = [
    { date: "01", "2024-09": 1000, "2024-10": 800 },
    { date: "15", "2024-09": 600, "2024-10": 700 },
    { date: "30", "2024-09": 800, "2024-10": 600 },
  ];

  const spendingConfig: ChartConfig = {
    "2024-09": {
      label: "Last Month",
      color: "hsl(var(--chart-1))",
    },
    "2024-10": {
      label: "This Month",
      color: "hsl(var(--chart-2))",
    },
  };

  const expensesData = [
    { name: "Shopping & Entertainment", value: 30 },
    { name: "Travel", value: 15 },
    { name: "Education", value: 10 },
    { name: "Others", value: 5 },
    { name: "Home & Utilities", value: 20 },
    { name: "Transportation", value: 10 },
    { name: "Groceries", value: 10 },
  ];

  const expensesConfig: ChartConfig = {
    value: {
      label: "Expenses",
      color: "hsl(var(--chart-3))",
    },
  };

  const budgetData = [
    { category: "Entertainment", expenses: 96, remaining: 204, total: 300 },
    { category: "Eating out", expenses: 674, remaining: 126, total: 800 },
    { category: "Fuel", expenses: 56, remaining: 144, total: 200 },
    { category: "Shopping", expenses: 50, remaining: 350, total: 400 },
    { category: "Groceries", expenses: 253, remaining: 27, total: 280 },
  ];

  const budgetConfig: ChartConfig = {
    expenses: {
      label: "Expenses incurred",
      color: "hsl(var(--chart-4))",
    },
    remaining: {
      label: "Remaining expenses",
      color: "hsl(var(--chart-5))",
    },
  };

  const recentTransactions = [
    { payee: "Farmers", category: "Insurance", amount: 67 },
    { payee: "Safeway", category: "Groceries", amount: 45 },
    { payee: "John Li", category: "Rent", amount: 1000 },
    { payee: "Shell", category: "Gas", amount: 67 },
  ];

  return (
    <SidebarProvider>
      <AppSidebar>
        {sidebarItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start mb-1"
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        ))}
        <div className="mt-auto flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="text-sm font-medium">Jone Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
      </AppSidebar>
      <SidebarInset className="h-screen overflow-y-auto overflow-x-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2 px-4 sticky top-0 bg-background z-10">
          <SidebarTrigger className="-ml-2" />
          <Separator orientation="vertical" className="h-6" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Finance Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-500" />
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input className="pl-8 w-64" placeholder="Search" />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 max-w-[1600px] mx-auto">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Spending</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Last month vs. This month
                </p>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ChartContainer
                  config={spendingConfig}
                  className="min-h-[300px] w-full"
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={spendingData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="2024-09"
                        stroke="var(--color-2024-09)"
                      />
                      <Line
                        type="monotone"
                        dataKey="2024-10"
                        stroke="var(--color-2024-10)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Expenses</CardTitle>
                <p className="text-sm text-muted-foreground">Categorized</p>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ChartContainer
                  config={expensesConfig}
                  className="min-h-[300px] w-full"
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={expensesData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="var(--color-value)"
                        label
                      />
                      <Tooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Budgets</CardTitle>
                <p className="text-sm text-muted-foreground">2024-10</p>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ChartContainer
                  config={budgetConfig}
                  className="min-h-[300px] w-full"
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={budgetData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="category" type="category" />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar
                        dataKey="expenses"
                        stackId="a"
                        fill="var(--color-expenses)"
                      />
                      <Bar
                        dataKey="remaining"
                        stackId="a"
                        fill="var(--color-remaining)"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Transactions</CardTitle>
                <p className="text-sm text-muted-foreground">Most recent</p>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr className="text-left">
                      <th>Payee</th>
                      <th>Category</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((transaction, index) => (
                      <tr key={index} className="border-t">
                        <td className="py-2">{transaction.payee}</td>
                        <td>{transaction.category}</td>
                        <td className="text-right">${transaction.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
