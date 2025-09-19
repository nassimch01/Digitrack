"use client";
import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
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
import About from './About';
import PricingMiniSection from './PricingMiniSection';
import Header from './Header';
import Footer from './Footer';



function HomePage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: Zap,
      title: " Gestion des ventes & achats",
      description: "Suivi des commandes, factures et paiements."
    },
    {
      icon: Users,
      title: " CRM & Clients",
      description: "Base de données, fidélisation et suivi des prospects."
    },
    {
      icon: BarChart3,
      title: "Tableau de bord",
      description: "Rapports clairs et indicateurs en temps réel."
    },
    {
      icon: Shield,
      title: " Multi-secteurs ",
      description: "Adaptée aux PME, agences, boutiques, restaurants."
    },
    {
      icon: Shield,
      title: "  Collaboration ",
      description: "Travail en équipe et gestion des accès."
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




  return (

    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4">
              La solution tout-en-un pour digitaliser et simplifier la gestion de votre business.{" "}<br />
              <span className="text-blue-600">Smart Solutions</span>
            </h1>


            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              DigiTrack est une solution de gestion tout-en-un, conçue pour s’adapter à tous types d’activités. Elle centralise vos opérations en un seul outil, vous fait gagner du temps et améliore vos performances.
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
                className="px-8 py-3 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-100 transition duration-300 flex items-center"
              >
                Watch Demo
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fonctionnalités principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline operations and boost productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
      <PricingMiniSection />
      <section>
        <About />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <FreetrialForm />
      </section>

      {/* Footer */}
      <Footer/>



    </div>
  );
}
export default HomePage;