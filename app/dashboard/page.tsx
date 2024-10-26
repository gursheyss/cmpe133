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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Finance Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,345.67</div>
                <p className="text-xs text-muted-foreground">
                  +2.5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Income</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,456.78</div>
                <p className="text-xs text-muted-foreground">
                  +5.2% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,345.67</div>
                <p className="text-xs text-muted-foreground">
                  -1.5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,234.56</div>
                <p className="text-xs text-muted-foreground">
                  +10.3% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Income vs Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Income vs Expenses chart placeholder</p>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Expense Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Expense Categories chart placeholder</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Monthly Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monthly Savings chart placeholder</p>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Grocery Store</span>
                    <span className="font-medium">-$85.43</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Salary Deposit</span>
                    <span className="font-medium text-green-600">
                      +$3,000.00
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Electric Bill</span>
                    <span className="font-medium">-$120.50</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Online Shopping</span>
                    <span className="font-medium">-$64.99</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
