"use client";

import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Label } from "./ui/label";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/Table";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Users, Building, Store, Calendar } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

// Pricing constants
const PRICING = {
  base: {
    monthly: 299,
    yearly: 2990, // 10 months price for yearly
  },
  additional: {
    enterprise: {
      monthly: 199,
      yearly: 1990,
    },
    collaborator: {
      monthly: 9,
      yearly: 90,
    },
    pos: {
      monthly: 29,
      yearly: 290,
    },
  },
};

// Chart colors
const COLORS = ["#2563eb", "#16a34a", "#7c3aed", "#fde047"];

function SubscriptionCalculator() {
  const [subscription, setSubscription] = useState({
    enterprises: 1,
    collaborators: 5,
    pointsOfSale: 1,
  });
  const [billingCycle, setBillingCycle] = useState("monthly");

  // Handle input changes
  const handleInputChange = (field, value) => {
    const numValue = parseInt(value, 10) || 0;
    setSubscription((prev) => ({
      ...prev,
      [field]: Math.max(0, numValue),
    }));
  };

  // Calculate costs
  const baseCost = PRICING.base[billingCycle];
  const enterpriseCost =
    Math.max(0, subscription.enterprises - 1) *
    PRICING.additional.enterprise[billingCycle];
  const collaboratorCost =
    Math.max(0, subscription.collaborators - 5) *
    PRICING.additional.collaborator[billingCycle];
  const posCost =
    Math.max(0, subscription.pointsOfSale - 1) *
    PRICING.additional.pos[billingCycle];

  const totalCost = baseCost + enterpriseCost + collaboratorCost + posCost;

  // Memoize derived data to avoid recalculations on every render
  const costBreakdownData = useMemo(
    () =>
      [
        { name: "Base Plan", value: baseCost },
        { name: "Enterprises", value: enterpriseCost },
        { name: "Collaborators", value: collaboratorCost },
        { name: "Points of Sale", value: posCost },
      ].filter((item) => item.value > 0),
    [baseCost, enterpriseCost, collaboratorCost, posCost]
  );

  const resourceUsageData = useMemo(
    () => [
      { name: "Enterprises", used: subscription.enterprises, included: 1 },
      { name: "Collaborators", used: subscription.collaborators, included: 5 },
      { name: "Points of Sale", used: subscription.pointsOfSale, included: 1 },
    ],
    [subscription.enterprises, subscription.collaborators, subscription.pointsOfSale]
  );

  const pricingData = useMemo(
    () => [
      {
        resource: "Base Plan",
        included: "1 Enterprise, 5 Collaborators, 1 POS",
        monthly: "$299",
        yearly: "$2,990",
      },
      {
        resource: "Additional Enterprise",
        included: "Each",
        monthly: "$199",
        yearly: "$1,990",
      },
      {
        resource: "Additional Collaborator",
        included: "Each",
        monthly: "$9",
        yearly: "$90",
      },
      {
        resource: "Additional Point of Sale",
        included: "Each",
        monthly: "$29",
        yearly: "$290",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans antialiased">
      <Header />

      <main className="flex-grow py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Page Title / Description */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Subscription Calculator
            </h1>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Configure your subscription plan and see a detailed cost breakdown
              based on your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Configuration Panel */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="shadow rounded-2xl border-none bg-white p-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl font-bold text-gray-800">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    Subscription Configuration
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    Adjust the values below to get a real-time calculation.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 space-y-8">
                  {/* Billing Cycle Toggle */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-between">
                    <span className="font-semibold text-gray-700">
                      Billing Cycle:
                    </span>

                    <div className="inline-flex rounded-full border border-gray-200 bg-gray-100 shadow-inner overflow-hidden">
                      <Button
                        type="button"
                        onClick={() => setBillingCycle("monthly")}
                        className={`px-5 py-2 text-sm font-medium transition-all duration-200 rounded-l-full ${
                          billingCycle === "monthly"
                            ? "bg-blue-600 text-white shadow"
                            : "text-gray-700 bg-white hover:bg-gray-100"
                        }`}
                      >
                        Monthly
                      </Button>

                      <Button
                        type="button"
                        onClick={() => setBillingCycle("yearly")}
                        className={`px-5 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-2 rounded-r-full ${
                          billingCycle === "yearly"
                            ? "bg-blue-600 text-white shadow"
                            : "text-gray-700 bg-white hover:bg-gray-100"
                        }`}
                      >
                        Yearly
                        <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                          Save 30%
                        </span>
                      </Button>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-6">
                    {/* Enterprises */}
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="enterprises"
                        className="flex items-center gap-2 font-medium text-gray-700"
                      >
                        <Building className="h-4 w-4 text-blue-500" />
                        Enterprises
                      </Label>
                      <Input
                        id="enterprises"
                        aria-label="Enterprises"
                        type="number"
                        min={0}
                        value={subscription.enterprises}
                        onChange={(e) =>
                          handleInputChange("enterprises", e.target.value)
                        }
                        className="rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <p className="text-sm text-gray-600 mt-1">
                        1 enterprise included in base plan.
                      </p>
                    </div>

                    {/* Collaborators */}
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="collaborators"
                        className="flex items-center gap-2 font-medium text-gray-700"
                      >
                        <Users className="h-4 w-4 text-blue-500" />
                        Collaborators
                      </Label>
                      <Input
                        id="collaborators"
                        aria-label="Collaborators"
                        type="number"
                        min={0}
                        value={subscription.collaborators}
                        onChange={(e) =>
                          handleInputChange("collaborators", e.target.value)
                        }
                        className="rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <p className="text-sm text-gray-600 mt-1">
                        5 collaborators included in base plan.
                      </p>
                    </div>

                    {/* Points of Sale */}
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="pointsOfSale"
                        className="flex items-center gap-2 font-medium text-gray-700"
                      >
                        <Store className="h-4 w-4 text-blue-500" />
                        Points of Sale
                      </Label>
                      <Input
                        id="pointsOfSale"
                        aria-label="Points of Sale"
                        type="number"
                        min={0}
                        value={subscription.pointsOfSale}
                        onChange={(e) =>
                          handleInputChange("pointsOfSale", e.target.value)
                        }
                        className="rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <p className="text-sm text-gray-600 mt-1">
                        1 point of sale included in base plan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing Details Table */}
              <Card className="shadow rounded-2xl border-none bg-white transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                <CardHeader className="p-6 pb-0">
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Pricing Details
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Cost breakdown for each resource.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold text-gray-700">
                          Resource
                        </TableHead>
                        <TableHead className="font-semibold text-gray-700">
                          Included
                        </TableHead>
                        <TableHead className="text-right font-semibold text-gray-700">
                          {billingCycle === "monthly" ? "Monthly" : "Yearly"}
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pricingData.map((item, index) => (
                        <TableRow
                          key={item.resource + "-" + index}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <TableCell className="font-medium text-gray-800">
                            {item.resource}
                          </TableCell>
                          <TableCell className="text-gray-600">
                            {item.included}
                          </TableCell>
                          <TableCell className="text-right font-semibold text-gray-700">
                            {billingCycle === "monthly"
                              ? item.monthly
                              : item.yearly}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="shadow rounded-2xl border-none bg-white p-6 h-full flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl font-bold text-gray-800">
                    <Building className="h-6 w-6 text-blue-600" />
                    Cost Breakdown
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    View the total monthly/yearly cost based on your selections.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 flex-grow flex flex-col md:flex-row gap-8 md:gap-10">
                  {/* Total Cost */}
                  <div className="flex flex-col items-center justify-center flex-shrink-0 w-full md:w-1/3 bg-gray-100 rounded-2xl p-6">
                    <span className="text-lg font-semibold text-gray-700">
                      Total {billingCycle === "monthly" ? "Monthly" : "Yearly"} Cost
                    </span>
                    <span className="mt-4 text-4xl font-extrabold text-blue-600">
                      {totalCost.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </span>
                  </div>

                  {/* Pie Chart: Cost Breakdown */}
                  <div className="w-full md:w-2/3 max-w-lg h-72 sm:h-80 md:h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={costBreakdownData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={90}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {costBreakdownData.map((entry, idx) => (
                            <Cell
                              key={`pie-cell-${idx}`}
                              fill={COLORS[idx % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) =>
                            value.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })
                          }
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Resource Usage Bar Chart */}
            <Card className="mt-8 w-full max-w-4xl border-0 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
        <CardHeader className="p-6 pb-4 border-b border-gray-100">
          <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-800">
            <div className="p-2 rounded-lg bg-blue-50">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            Resource Usage Overview
          </CardTitle>
          <CardDescription className="text-gray-500 mt-1 text-sm">
            Track your consumption against plan limits
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={resourceUsageData}
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                barGap={8}
              >
                <CartesianGrid 
                  strokeDasharray="4 4" 
                  vertical={false} 
                  stroke="#f0f0f0" 
                />
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}
                  formatter={(value) => [value, 'Resources']}
                  labelStyle={{ fontWeight: 600, color: '#1f2937' }}
                />
                <Legend 
                  verticalAlign="top" 
                  height={40}
                  wrapperStyle={{ paddingBottom: '20px' }}
                />
                <Bar
                  dataKey="included"
                  name="Plan Allocation"
                  fill="#93c5fd"
                  radius={[4, 4, 0, 0]}
                  barSize={24}
                />
                <Bar
                  dataKey="used"
                  name="Current Usage"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                  barSize={24}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SubscriptionCalculator;
