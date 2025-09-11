"use client";

import { useState } from "react";
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import { Input } from "./ui/Input";
import { Label } from './ui/label';
import {
    Menu,
    X,
    ArrowRight,
    Play,
    Zap,
    Users,
    BarChart3,
    Shield,
    Star,
    Check
} from "lucide-react";

function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const features = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Process workflows 10x faster with our optimized engine"
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Real-time collaboration tools for seamless teamwork"
        },
        {
            icon: BarChart3,
            title: "Advanced Analytics",
            description: "Gain insights with comprehensive data visualization"
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Bank-level encryption and compliance standards"
        }
    ];

    const testimonials = [
        {
            name: "Alex Johnson",
            role: "CTO at TechCorp",
            content: "This platform transformed our workflow efficiency by 60% in just two weeks.",
            rating: 5
        },
        {
            name: "Sarah Williams",
            role: "Product Manager",
            content: "The intuitive interface made adoption seamless across our entire team.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Operations Director",
            content: "ROI was evident within the first month. Worth every penny!",
            rating: 5
        }
    ];

    const plans = [
        {
            name: "Starter",
            price: "$29",
            period: "/month",
            description: "Perfect for small teams",
            features: [
                "Up to 5 users",
                "Basic analytics",
                "Email support",
                "1GB storage"
            ],
            popular: false
        },
        {
            name: "Professional",
            price: "$79",
            period: "/month",
            description: "For growing businesses",
            features: [
                "Up to 20 users",
                "Advanced analytics",
                "Priority support",
                "10GB storage",
                "API access"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: "$199",
            period: "/month",
            description: "For large organizations",
            features: [
                "Unlimited users",
                "Custom analytics",
                "24/7 dedicated support",
                "Unlimited storage",
                "Custom integrations"
            ],
            popular: false
        }
    ];

    return (
        <div>
            <div className="min-h-screen bg-white">
                {/* Header */}
                <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <h1 className="text-xl font-bold text-indigo-600">DigiTrack</h1>
                                </div>
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-6">
                                    <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
                                    <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Testimonials</a>
                                    <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
                                    <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
                                </div>
                            </nav>

                            <div className="hidden md:block">
                                <Button variant="outline" className="mr-4">Sign In</Button>
                                <Button>Get Started</Button>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-gray-600 hover:text-indigo-600"
                                >
                                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        {isMenuOpen && (
                            <div className="md:hidden py-4 border-t border-gray-200">
                                <div className="flex flex-col space-y-3">
                                    <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
                                    <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Testimonials</a>
                                    <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
                                    <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
                                    <div className="pt-4 flex flex-col space-y-3">
                                        <Button variant="outline">Sign In</Button>
                                        <Button>Get Started</Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Streamline Your Workflow with <span className="text-indigo-600">Smart Automation</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                                The all-in-one platform that helps teams automate processes, collaborate effectively, and drive growth.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    <Play className="mr-2 h-5 w-5" />
                                    Watch Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Everything you need to optimize your workflow and boost productivity
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                                            <feature.icon className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-600">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Teams Worldwide</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Join thousands of satisfied customers who transformed their workflow
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <Card key={index} className="border border-gray-200">
                                    <CardContent className="p-6">
                                        <div className="flex mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                                        <div className="flex items-center">
                                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                                            <div className="ml-4">
                                                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Choose the plan that works best for your team. All plans include a 14-day free trial.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {plans.map((plan, index) => (
                                <Card
                                    key={index}
                                    className={`border border-gray-200 relative ${plan.popular ? 'ring-2 ring-indigo-600' : ''}`}
                                >
                                    {plan.popular && (
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                                            Most Popular
                                        </div>
                                    )}
                                    <CardHeader className="text-center pb-8 pt-8">
                                        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                        <div className="mt-4">
                                            <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                            <span className="text-gray-600">{plan.period}</span>
                                        </div>
                                        <p className="text-gray-600 mt-2">{plan.description}</p>
                                    </CardHeader>
                                    <CardContent className="px-8">
                                        <ul className="space-y-4 mb-8">
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center">
                                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button
                                            className={`w-full ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                                        >
                                            Get Started
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-indigo-600">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Workflow?</h2>
                            <p className="text-xl text-indigo-100 mb-10">
                                Join thousands of teams who have streamlined their processes with our platform.
                            </p>

                            <div className="max-w-md mx-auto">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex-grow">
                                        <Label htmlFor="email" className="sr-only">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your work email"
                                            className="w-full py-3 px-4 rounded-lg"
                                        />
                                    </div>
                                    <Button className="bg-white text-indigo-600 hover:bg-gray-100 py-3 px-6">
                                        Start Free Trial
                                    </Button>
                                </div>
                                <p className="text-indigo-200 text-sm mt-4">
                                    No credit card required • 14-day free trial • Cancel anytime
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer id="contact" className="bg-gray-900 text-white py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="col-span-1 md:col-span-2">
                                <h3 className="text-2xl font-bold text-white mb-4">DigiTrack</h3>
                                <p className="text-gray-400 max-w-md mb-6">
                                    Empowering teams to achieve more through intelligent automation and seamless collaboration.
                                </p>
                                <div className="flex space-x-4">
                                    <div className="bg-gray-800 p-2 rounded-full">
                                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                                    </div>
                                    <div className="bg-gray-800 p-2 rounded-full">
                                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                                    </div>
                                    <div className="bg-gray-800 p-2 rounded-full">
                                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4">Product</h4>
                                <ul className="space-y-2 text-gray-400">
                                    <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4">Company</h4>
                                <ul className="space-y-2 text-gray-400">
                                    <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">© 2023 Digitrack. All rights reserved.</p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default LandingPage