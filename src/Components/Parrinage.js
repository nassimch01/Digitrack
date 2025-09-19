"use client";

import React, { useState } from "react";
import {
    Users,
    Star,
    Gift,
    TrendingUp,
    Copy,
    Check
} from "lucide-react";

import Header from "./Header";
import Footer from "./Footer";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "./ui/Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/label";
import { Avatar } from "./ui/Avatar";

export default function Parrinage() {
    // State
    const [referrals, setReferrals] = useState([
        { id: "1", name: "Alex Johnson", email: "alex@example.com", status: "converted", date: "2023-05-15" },
        { id: "2", name: "Maria Garcia", email: "maria@example.com", status: "pending", date: "2023-06-20" },
        { id: "3", name: "James Wilson", email: "james@example.com", status: "rewarded", date: "2023-04-10" },
    ]);
    const [referralLink] = useState("https://saasproduct.com/ref/abc123");
    const [copied, setCopied] = useState(false);
    const [newReferral, setNewReferral] = useState({ name: "", email: "" });

    // Static reward tiers
    const rewardTiers = [
        { referrals: 5, reward: "$50 credit" },
        { referrals: 10, reward: "$100 credit + Pro features" },
        { referrals: 25, reward: "$250 credit + Dedicated support" },
        { referrals: 50, reward: "$500 credit + Custom plan" },
    ];

    // Utility: get color classes based on status
    const getStatusColor = (status) => {
        switch (status) {
            case "converted":
                return "bg-blue-100 text-blue-800";
            case "rewarded":
                return "bg-green-100 text-green-800";
            default:
                return "bg-yellow-100 text-yellow-800";
        }
    };

    // Calculate stats
    const totalReferrals = referrals.length;
    const convertedReferrals = referrals.filter(r => r.status !== "pending").length;
    const conversionRate = totalReferrals > 0
        ? Math.round((convertedReferrals / totalReferrals) * 100)
        : 0;

    // Handlers
    const handleCopyLink = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleAddReferral = () => {
        if (!newReferral.name || !newReferral.email) return;

        const referral = {
            id: (referrals.length + 1).toString(),
            name: newReferral.name,
            email: newReferral.email,
            status: "pending",
            date: new Date().toISOString().split("T")[0],
        };

        setReferrals([referral, ...referrals]);
        setNewReferral({ name: "", email: "" });
    };

    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Header />

            <main className="flex-grow container mx-auto max-w-6xl px-4 py-12">
                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Refer & Earn</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Share your referral link and earn rewards when your friends sign up and become paying customers.
                    </p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card>
                        <CardContent className="flex items-center p-6">
                            <div className="rounded-full bg-blue-100 p-3 mr-4">
                                <Users className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Referrals</p>
                                <p className="text-2xl font-bold">{totalReferrals}</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex items-center p-6">
                            <div className="rounded-full bg-green-100 p-3 mr-4">
                                <TrendingUp className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Conversion Rate</p>
                                <p className="text-2xl font-bold">{conversionRate}%</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex items-center p-6">
                            <div className="rounded-full bg-purple-100 p-3 mr-4">
                                <Gift className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Potential Earnings</p>
                                <p className="text-2xl font-bold">$1,250</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Side */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Referral Link Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Your Referral Link</CardTitle>
                                <CardDescription>
                                    Share this link with friends and colleagues to earn rewards
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Input
                                        value={referralLink}
                                        readOnly
                                        className="flex-1 rounded-r-none"
                                    />
                                    <Button
                                        onClick={handleCopyLink}
                                        className="rounded-l-none w-full sm:w-auto"
                                    >
                                        {copied ? (
                                            <><Check className="mr-2 h-4 w-4" />Copied</>
                                        ) : (
                                            <><Copy className="mr-2 h-4 w-4" />Copy</>
                                        )}
                                    </Button>
                                </div>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <Button variant="outline">Share on Twitter</Button>
                                    <Button variant="outline">Share on LinkedIn</Button>
                                    <Button variant="outline">Share via Email</Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Add Referral Form Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Manually Add Referral</CardTitle>
                                <CardDescription>
                                    Add someone you've referred who hasn’t clicked your link yet
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            value={newReferral.name}
                                            onChange={e => setNewReferral({ ...newReferral, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={newReferral.email}
                                            onChange={e => setNewReferral({ ...newReferral, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <Button onClick={handleAddReferral} className="w-full mt-2">
                                    Add Referral
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Referral History */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Referral History</CardTitle>
                                <CardDescription>Track the status of your referrals</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {referrals.map(ref => (
                                    <div key={ref.id} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div className="flex items-center space-x-4">
                                            <Avatar>
                                                {ref.name.charAt(0)}
                                            </Avatar>
                                            <div>
                                                <p className="font-medium">{ref.name}</p>
                                                <p className="text-sm text-gray-500">{ref.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ref.status)}`}>
                                                {ref.status.charAt(0).toUpperCase() + ref.status.slice(1)}
                                            </span>
                                            <span className="text-sm text-gray-400">{ref.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-8">
                        {/* Rewards Program Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Star className="h-5 w-5 text-yellow-500" />
                                    <span>Rewards Program</span>
                                </CardTitle>
                                <CardDescription>
                                    Earn amazing rewards for successful referrals
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {rewardTiers.map((tier, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                                                <span className="text-sm font-bold">{tier.referrals}</span>
                                            </div>
                                            <span className="text-gray-700">Referrals</span>
                                        </div>
                                        <span className="font-medium text-gray-900">{tier.reward}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Progress Bar */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Your Progress</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <h3 className="text-sm font-medium mb-2">Current Progress</h3>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded-full transition-all"
                                            style={{ width: `${Math.min(100, (convertedReferrals / 50) * 100)}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between text-sm mt-2">
                                        <span>{convertedReferrals} referrals</span>
                                        <span>50 referrals for top reward</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tips Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Referral Tips</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        "Share your link on social media for maximum reach",
                                        "Personalize your message when sharing with friends",
                                        "Follow up with your referrals to help them get started",
                                        "Check your progress regularly to track rewards"
                                    ].map((tip, i) => (
                                        <li key={i} className="flex items-start space-x-3">
                                            <div className="bg-blue-100 rounded-full p-1 mt-1">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                            </div>
                                            <span className="text-gray-700">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
