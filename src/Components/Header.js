import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Or any icon lib you use
import { Button } from "./ui/Button"; // Assuming you have a Button component

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
              <img
                src="assets/img/logo.png"
                alt="Logo"
                className="h-10 w-auto object-contain"
                loading="lazy"
                draggable="false"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Fonctionnalités
            </a>
            <Link to="/parrinage" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Parrinage
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Payment
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              contact
            </Link>
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
              aria-label="Toggle menu"
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
              Fonctionnalités
            </a>
            <Link to="/parrinage" className="block text-sm text-gray-700 hover:text-blue-600">
              Parrinage
            </Link>
            <Link to="/pricing" className="block text-sm text-gray-700 hover:text-blue-600">
              Payment
            </Link>
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
  );
}
