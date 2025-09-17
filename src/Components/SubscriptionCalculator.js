// filename=subscription-calculator.jsx
"use client";

import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
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
    TableRow
} from './ui/Table';
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
    ResponsiveContainer
} from "recharts";
import { Users, Building, Store, Calendar } from "lucide-react";

// Pricing constants
const PRICING = {
    base: {
        monthly: 299,
        yearly: 2990 // 10 months price for yearly
    },
    additional: {
        enterprise: {
            monthly: 199,
            yearly: 1990
        },
        collaborator: {
            monthly: 9,
            yearly: 90
        },
        pos: {
            monthly: 29,
            yearly: 290
        }
    }
};

// Chart colors
const COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'];

function SubscriptionCalculator() {
    // State for subscription configuration
    const [subscription, setSubscription] = useState({
        enterprises: 1,
        collaborators: 5,
        pointsOfSale: 2
    });

    // State for billing cycle
    const [billingCycle, setBillingCycle] = useState('monthly');

    // Handle input changes
    const handleInputChange = (field, value) => {
        const numValue = parseInt(value) || 0;
        setSubscription(prev => ({
            ...prev,
            [field]: Math.max(0, numValue)
        }));
    };

    // Toggle billing cycle
    const toggleBillingCycle = () => {
        setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
    };

    // Calculate costs
    const baseCost = PRICING.base[billingCycle];
    const enterpriseCost = Math.max(0, subscription.enterprises - 1) * PRICING.additional.enterprise[billingCycle];
    const collaboratorCost = Math.max(0, subscription.collaborators - 5) * PRICING.additional.collaborator[billingCycle];
    const posCost = Math.max(0, subscription.pointsOfSale - 2) * PRICING.additional.pos[billingCycle];

    const totalCost = baseCost + enterpriseCost + collaboratorCost + posCost;

    // Chart data
    const costBreakdownData = [
        { name: 'Base Plan', value: baseCost },
        { name: 'Enterprises', value: enterpriseCost },
        { name: 'Collaborators', value: collaboratorCost },
        { name: 'Points of Sale', value: posCost }
    ];

    const resourceUsageData = [
        { name: 'Enterprises', used: subscription.enterprises, included: 1 },
        { name: 'Collaborators', used: subscription.collaborators, included: 5 },
        { name: 'Points of Sale', used: subscription.pointsOfSale, included: 2 }
    ];

    // Pricing table data
    const pricingData = [
        { resource: 'Base Plan', included: '1 Enterprise, 5 Collaborators, 2 POS', monthly: '$299', yearly: '$2,990' },
        { resource: 'Additional Enterprise', included: 'Each', monthly: '$199', yearly: '$1,990' },
        { resource: 'Additional Collaborator', included: 'Each', monthly: '$9', yearly: '$90' },
        { resource: 'Additional Point of Sale', included: 'Each', monthly: '$29', yearly: '$290' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 py-16 px-4 sm:px-6">

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Subscription Calculator
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Configure your subscription plan and see the cost breakdown based on your business needs
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Configuration Panel */}
                    <div className="lg:col-span-1">
                        <Card className="shadow-xl border border-gray-200 rounded-xl bg-white transition-transform hover:scale-[1.01]">

                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-blue-500" />
                                    Subscription Configuration
                                </CardTitle>
                                <CardDescription>
                                    Adjust the values below to calculate your subscription cost
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Billing Cycle Toggle */}
                                <div className="flex flex-col sm:flex-row gap-4 items-center">
                                    <span className="font-medium text-gray-700">Billing Cycle:</span>
                                    <div className="inline-flex rounded-lg border border-gray-300 bg-white shadow-sm overflow-hidden">
                                        <Button
                                            onClick={() => setBillingCycle('monthly')}
                                            className={`px-4 py-2 text-sm font-medium transition-all duration-200 
            ${billingCycle === 'monthly'
                                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                    : 'bg-white text-gray-700 hover:bg-gray-100'}
            rounded-none`}
                                        >
                                            Monthly
                                        </Button>
                                        <Button
                                            onClick={() => setBillingCycle('yearly')}
                                            className={`px-4 py-2 text-sm font-medium transition-all duration-200 
            ${billingCycle === 'yearly'
                                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                    : 'bg-white text-gray-700 hover:bg-gray-100'}
            rounded-none border-l border-gray-300 flex items-center gap-2`}
                                        >
                                            Yearly
                                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
                                                Save 17%
                                            </span>
                                        </Button>
                                    </div>

                                </div>

                                {/* Enterprise Input */}
                                <div>
                                    <Label htmlFor="enterprises" className="flex items-center gap-2 mb-2">
                                        <Building className="text-sm font-medium text-gray-700" />
                                        Enterprises
                                    </Label>
                                    <Input
                                        id="enterprises"
                                        type="number"
                                        min="0"
                                        value={subscription.enterprises}
                                        onChange={(e) => handleInputChange('enterprises', e.target.value)}
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        1 enterprise included in base plan
                                    </p>
                                </div>

                                {/* Collaborators Input */}
                                <div>
                                    <Label htmlFor="collaborators" className="flex items-center gap-2 mb-2">
                                        <Users className="text-sm font-medium text-gray-700" />
                                        Collaborators
                                    </Label>
                                    <Input
                                        id="collaborators"
                                        type="number"
                                        min="0"
                                        value={subscription.collaborators}
                                        onChange={(e) => handleInputChange('collaborators', e.target.value)}
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        5 collaborators included in base plan
                                    </p>
                                </div>

                                {/* Points of Sale Input */}
                                <div>
                                    <Label htmlFor="pointsOfSale" className="flex items-center gap-2 mb-2">
                                        <Store className="h-4 w-4 text-purple-500" />
                                        Points of Sale
                                    </Label>
                                    <Input
                                        id="pointsOfSale"
                                        type="number"
                                        min="0"
                                        value={subscription.pointsOfSale}
                                        onChange={(e) => handleInputChange('pointsOfSale', e.target.value)}
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        2 points of sale included in base plan
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Pricing Information */}
                        <Card className="mt-8 shadow-lg">
                            <CardHeader>
                                <CardTitle>Pricing Details</CardTitle>
                                <CardDescription>
                                    Cost breakdown for each resource
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Resource</TableHead>
                                            <TableHead>Included</TableHead>
                                            <TableHead>{billingCycle === 'monthly' ? 'Monthly' : 'Yearly'}</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {pricingData.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="font-medium">{item.resource}</TableCell>
                                                <TableCell>{item.included}</TableCell>
                                                <TableCell>{billingCycle === 'monthly' ? item.monthly : item.yearly}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Results Panel */}
                    <div className="lg:col-span-2">
                        <Card className="shadow-lg h-full">
                            <CardHeader>
                                <CardTitle>Cost Summary</CardTitle>
                                <CardDescription>
                                    Your subscription cost based on current configuration
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Cost Breakdown */}
                                    <div>
                                        <h3 className="text-lg font-semibold mb-4">Cost Breakdown</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span>Base Plan:</span>
                                                <span className="font-medium">${baseCost.toLocaleString()}</span>
                                            </div>
                                            {subscription.enterprises > 1 && (
                                                <div className="flex justify-between">
                                                    <span>Additional Enterprises ({subscription.enterprises - 1}):</span>
                                                    <span className="font-medium">${enterpriseCost.toLocaleString()}</span>
                                                </div>
                                            )}
                                            {subscription.collaborators > 5 && (
                                                <div className="flex justify-between">
                                                    <span>Additional Collaborators ({subscription.collaborators - 5}):</span>
                                                    <span className="font-medium">${collaboratorCost.toLocaleString()}</span>
                                                </div>
                                            )}
                                            {subscription.pointsOfSale > 2 && (
                                                <div className="flex justify-between">
                                                    <span>Additional Points of Sale ({subscription.pointsOfSale - 2}):</span>
                                                    <span className="font-medium">${posCost.toLocaleString()}</span>
                                                </div>
                                            )}
                                            <div className="border-t border-gray-200 pt-3 mt-3">
                                                <div className="flex justify-between text-lg font-bold">
                                                    <span>Total ({billingCycle}):</span>
                                                    <span className="text-blue-600 font-bold text-xl">${totalCost.toLocaleString()}</span>

                                                </div>
                                            </div>
                                        </div>

                                        {/* Resource Usage */}
                                        <div className="mt-8">
                                            <h3 className="text-lg font-semibold mb-4">Resource Usage</h3>
                                            <div className="h-64">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <BarChart
                                                        data={resourceUsageData}
                                                        margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="name" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Bar dataKey="used" name="Used" fill="#3b82f6" />
                                                        <Bar dataKey="included" name="Included" fill="#10b981" />
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cost Distribution Chart */}
                                    <div className="h-64 bg-white rounded-lg shadow border border-gray-200 p-4">
                                        <h3 className="text-lg font-semibold mb-4">Cost Distribution</h3>
                                        <div className="h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie
                                                        data={costBreakdownData}
                                                        cx="50%"
                                                        cy="50%"
                                                        labelLine={true}
                                                        outerRadius={80}
                                                        fill="#8884d8"
                                                        dataKey="value"
                                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                                    >
                                                        {costBreakdownData.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip formatter={(value) => [`$${value}`, 'Cost']} />
                                                    <Legend />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>

                                        {/* Savings Info */}
                                        {billingCycle === 'yearly' && (
                                            <div className="mt-8 p-4 bg-yellow-100/70 rounded-lg border border-yellow-300 shadow-sm transition hover:shadow-md">
                                                <h3 className="font-semibold text-yellow-800 flex items-center gap-2">
                                                    <span className="bg-yellow-100 text-yellow-800 p-1 rounded-full">
                                                        💰
                                                    </span>
                                                    Yearly Savings
                                                </h3>
                                                <p className="mt-2 text-yellow-700">
                                                    You're saving ${(baseCost * 12 - baseCost * 10).toLocaleString()} per year
                                                    by choosing the yearly plan!
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubscriptionCalculator