import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Lock,
  PieChart,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function FinanceGuardLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <TrendingUp className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">
            FinanceGuard
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Guard Your Finances, Grow Your Wealth
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  FinanceGuard helps you track, manage, and optimize your
                  finances with powerful tools and intuitive insights.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/dashboard">
                  <Button>Get Started</Button>
                </Link>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <BarChart3 className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Expense Tracking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Easily log and categorize your expenses for a clear financial
                  picture.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <PieChart className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Budget Planning</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Create and manage budgets to keep your spending in check.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <TrendingUp className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Investment Tracking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Monitor your investments and track your portfolio&apos;s
                  performance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Lock className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Bank-Level Security</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your financial data is protected with state-of-the-art
                  encryption.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Smartphone className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Mobile App</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Access your finances on-the-go with our user-friendly mobile
                  app.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <TrendingUp className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Personalized Insights</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive tailored financial advice based on your spending
                  habits.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 FinanceGuard. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
