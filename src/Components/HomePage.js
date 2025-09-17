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
import PricingSection from './PricingSection';


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
                Parrinage
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Tarifs
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
                <Button className="px-6 py-3 text-lg rounded-lg shadow bg-blue-600 hover:bg-blue-700 text-white transition">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

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
      <PricingSection />
      <section>
        <About />
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
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Contactez-nous</h3>
              <p className="text-gray-400 max-w-lg leading-relaxed mb-6">
                Une question, une démo ou un devis ?
                Notre équipe DigiTrack est à votre écoute pour vous accompagner dans la digitalisation de votre entreprise.

              </p>
              <p className="text-sm text-gray-500">&copy; Ou remplissez directement notre formulaire de contact et nous reviendrons vers vous rapidement.
                👉 Avec DigiTrack, simplifiez votre gestion et passez à la vitesse supérieure !
              </p>
            </div>
            <div className="container">
              <div className="f-items default-padding">
                <div className="row">
                  <div className="col-lg-4 col-md-6 item">
                    <div className="f-item about">

                      <div className="address">
                        <ul>
                          <li className="flex items-start space-x-4">
                            <div className="icon text-blue-600">
                              {/* Heroicon: Envelope Icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4 4m0 0l-4-4m4 4V8" />
                              </svg>
                            </div>
                            <div className="info">
                              <h5 className="font-semibold">Email:</h5>
                              <span className="text-gray-700">contact@digitrack.com</span>
                            </div>
                          </li>

                          <li className="flex items-start space-x-4">
                            <div className="icon text-blue-600">
                              {/* Heroicon: Phone Icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3 7-1.2 1.2a16 16 0 006.4 6.4L12 19l7 3v-2a2 2 0 00-2-2h-1l-2-4h2a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v1H5a2 2 0 00-2 2v1z" />
                              </svg>
                            </div>
                            <div className="info">
                              <h5 className="font-semibold">Phone:</h5>
                              <span className="text-gray-700">
                                +216 XX XXX XXX
                              </span>
                            </div>
                          </li>
                          <li className="flex items-start space-x-4">
                            <div className="icon text-blue-600">
                              {/* Heroicon: Location Marker Icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
                              </svg>
                            </div>
                            <div className="info">
                              <h5 className="font-semibold">Address:</h5>
                              <span className="text-gray-700">
                                Tunis, Tunisie
                              </span>
                            </div>
                          </li>


                        </ul>
                      </div>
                    </div>
                  </div>






                </div>
              </div>

            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#features" className="hover:text-white transition duration-200">Fonctionnalités</a></li>
                <li><a href="#testimonials" className="hover:text-white transition duration-200">Parrinage</a></li>
                <li><a href="#pricing" className="hover:text-white transition duration-200">Tarifs</a></li>
                <li><a href="#contact" className="hover:text-white transition duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Company Links */}

          </div>

          {/* Divider + Social Icons */}
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">Follow us for updates</p>
            <div className="flex space-x-5">
              <a href="https://www.facebook.com/" className="text-gray-400 hover:text-white transition">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://x.com/" className="text-gray-400 hover:text-white transition">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="https://fr.linkedin.com/" className="text-gray-400 hover:text-white transition">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}
export default HomePage;