"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/Card";
import { Input } from "./ui/Input";
import { Label } from "./ui/label";
import {
  Zap,
  Users,
  BarChart3,
  Shield,
  Star,
  Check,
  Menu,
  X,
  ArrowRight,
  Play,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import FreetrialForm from "./FreetrialForm";

function HomePage() {
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
      description: "Gain insights with comprehensive reporting dashboards"
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
      content: "This platform reduced our onboarding time by 75%. Incredible results!",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Product Manager",
      content: "The analytics dashboard alone is worth the investment. We've doubled our conversion rates.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      content: "Implementation was seamless and the support team is exceptional.",
      rating: 4
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small teams getting started",
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
      period: "per month",
      description: "For growing businesses",
      features: [
        "Up to 25 users",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
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

    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
                <img
                  src="assets/img/logo.png"
                  alt="Logo"
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                  draggable="false"
                />
              </a>
            </div>


            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Fonctionnalités
              </a>
              <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Avis
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Payment
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                  Login
                </button>
              </Link>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-sm text-gray-700 hover:text-blue-600">
                Features
              </a>
              <a href="#testimonials" className="block text-sm text-gray-700 hover:text-blue-600">
                Testimonials
              </a>
              <a href="#pricing" className="block text-sm text-gray-700 hover:text-blue-600">
                Pricing
              </a>
              <a href="#contact" className="block text-sm text-gray-700 hover:text-blue-600">
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link to="/login">
                  <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                    Login
                  </button>
                </Link>
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Transform Your Business with <span className="text-blue-600">Smart Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              The all-in-one platform that helps teams of all sizes work smarter, faster, and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
              <Button
                size="lg"
                className="px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition duration-300 shadow-md hover:shadow-lg flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition duration-300 flex items-center"
              >
                Watch Demo
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="mt-6 text-gray-500">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline operations and boost productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who transformed their business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg ${plan.popular
                  ? 'ring-2 ring-blue-500 border-blue-300 transform md:-translate-y-2'
                  : ''
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                )}

                <div className={`p-8 ${plan.popular ? 'bg-blue-50' : 'bg-white'}`}>
                  {plan.popular && (
                    <div className="absolute top-6 right-6 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}

                  <CardHeader className="text-center pb-6 pt-0">
                    <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                      {plan.period && <span className="text-gray-600">/{plan.period}</span>}
                    </div>
                    <CardDescription className="mt-3 text-gray-600">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-0 pb-6">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <Check className="h-5 w-5 text-green-500" />
                          </div>
                          <span className="ml-3 text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="px-0 pb-0">
                    <Button
                      className={`w-full py-6 text-base font-semibold rounded-lg transition-all ${plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                        }`}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <FreetrialForm />
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Logo & Description */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">DigiTrack</h3>
              <p className="text-gray-400 max-w-lg leading-relaxed mb-6">
                Empowering businesses with smart solutions to streamline operations and drive growth through intuitive tools.
              </p>
              <p className="text-sm text-gray-500">&copy; 2025 DigiTrack. All rights reserved.</p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition duration-200">Features</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Roadmap</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition duration-200">About</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Careers</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Divider + Social Icons */}
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">Follow us for updates</p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
export default HomePage