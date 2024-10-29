"use client";

import React, { useState } from "react";
import { Receipt, Plus, Trash2 } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Expense {
  id: number;
  date: string;
  category: string;
  description: string;
  amount: number;
  budgetLimit: number;
}

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: 1,
      date: "2024-03-15",
      category: "Groceries",
      description: "Weekly groceries",
      amount: 156.32,
      budgetLimit: 500,
    },
    {
      id: 2,
      category: "Entertainment",
      date: "2024-03-14",
      description: "Movie tickets",
      amount: 45.0,
      budgetLimit: 200,
    },
  ]);

  const [newExpense, setNewExpense] = useState<Partial<Expense>>({
    date: new Date().toISOString().split("T")[0],
    category: "",
    description: "",
    amount: 0,
    budgetLimit: 0,
  });

  const addExpense = () => {
    if (newExpense.category && newExpense.amount) {
      setExpenses([
        ...expenses,
        {
          id: expenses.length + 1,
          date: newExpense.date || new Date().toISOString().split("T")[0],
          category: newExpense.category,
          description: newExpense.description || "",
          amount: Number(newExpense.amount),
          budgetLimit: Number(newExpense.budgetLimit) || 0,
        },
      ]);
      setNewExpense({
        date: new Date().toISOString().split("T")[0],
        category: "",
        description: "",
        amount: 0,
        budgetLimit: 0,
      });
    }
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const getTotalByCategory = (category: string) => {
    return expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0);
  };

  const getBudgetStatus = (expense: Expense) => {
    const totalSpent = getTotalByCategory(expense.category);
    const percentage = (totalSpent / expense.budgetLimit) * 100;

    if (percentage >= 90) {
      return "text-red-500";
    } else if (percentage >= 75) {
      return "text-yellow-500";
    }
    return "text-green-500";
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-screen overflow-y-auto overflow-x-hidden">
        <PageHeader title="Expense Tracking" icon={Receipt} />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 max-w-[1600px] mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Expenses & Budgets</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Expense
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Expense</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <label>Date</label>
                      <Input
                        type="date"
                        value={newExpense.date}
                        onChange={(e) =>
                          setNewExpense({ ...newExpense, date: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <label>Category</label>
                      <Input
                        placeholder="Enter category"
                        value={newExpense.category}
                        onChange={(e) =>
                          setNewExpense({
                            ...newExpense,
                            category: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <label>Description</label>
                      <Input
                        placeholder="Enter description"
                        value={newExpense.description}
                        onChange={(e) =>
                          setNewExpense({
                            ...newExpense,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <label>Amount ($)</label>
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={newExpense.amount}
                        onChange={(e) =>
                          setNewExpense({
                            ...newExpense,
                            amount: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <label>Budget Limit ($)</label>
                      <Input
                        type="number"
                        placeholder="Enter budget limit"
                        value={newExpense.budgetLimit}
                        onChange={(e) =>
                          setNewExpense({
                            ...newExpense,
                            budgetLimit: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                    <Button onClick={addExpense}>Save Expense</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3">Date</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Budget Limit</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map((expense) => (
                      <tr key={expense.id} className="border-b">
                        <td className="py-4">{expense.date}</td>
                        <td>{expense.category}</td>
                        <td>{expense.description}</td>
                        <td>${expense.amount.toFixed(2)}</td>
                        <td>${expense.budgetLimit.toFixed(2)}</td>
                        <td className={getBudgetStatus(expense)}>
                          ${getTotalByCategory(expense.category).toFixed(2)} / $
                          {expense.budgetLimit.toFixed(2)}
                        </td>
                        <td>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteExpense(expense.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
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
