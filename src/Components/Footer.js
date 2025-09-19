import React from "react";
import { Link } from "react-router-dom";

// Replace these with your actual icon components or SVGs
const FacebookIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.128 8.438 9.876v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.774-1.63 1.567v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.11 9.11 0 01-2.88 1.11 4.52 4.52 0 00-7.71 4.12A12.86 12.86 0 013 4.8a4.52 4.52 0 001.4 6.03 4.52 4.52 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.53 4.53 0 004.22 3.14A9.06 9.06 0 012 19.54a12.79 12.79 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85l-.01-.58A9.22 9.22 0 0023 3z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-11 14v-6H6v6h2zm-1-7a1 1 0 110-2 1 1 0 010 2zm9 7v-3.5a1.5 1.5 0 00-3 0V17h-2v-6h2v1a3 3 0 015 2.5V17h-2z" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Contactez-nous</h3>
            <p className="text-gray-400 max-w-lg leading-relaxed mb-6">
              Une question, une démo ou un devis ? Notre équipe DigiTrack est à votre écoute pour vous accompagner dans la digitalisation de votre entreprise.
            </p>
            <p className="text-sm text-gray-500">
              &copy; Ou remplissez directement notre formulaire de contact et nous reviendrons vers vous rapidement.
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
                            {/* Envelope Icon */}
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
                            {/* Phone Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3 7-1.2 1.2a16 16 0 006.4 6.4L12 19l7 3v-2a2 2 0 00-2-2h-1l-2-4h2a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v1H5a2 2 0 00-2 2v1z" />
                            </svg>
                          </div>
                          <div className="info">
                            <h5 className="font-semibold">Phone:</h5>
                            <span className="text-gray-700">+216 XX XXX XXX</span>
                          </div>
                        </li>

                        <li className="flex items-start space-x-4">
                          <div className="icon text-blue-600">
                            {/* Location Marker Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
                            </svg>
                          </div>
                          <div className="info">
                            <h5 className="font-semibold">Address:</h5>
                            <span className="text-gray-700">Tunis, Tunisie</span>
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
              <li>
                <a href="/" className="text-sm text-white font-medium text-gray-600 hover:text-blue-600 transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <Link to="/parrinage" className="text-sm text-white font-medium text-gray-600 hover:text-blue-600 transition-colors">
                  Parrinage
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-white font-medium text-gray-600 hover:text-blue-600 transition-colors">
                  Payment
                </Link>
              </li>
              <li>
                 <Link to="/contact" className="text-sm text-white font-medium text-gray-600 hover:text-blue-600 transition-colors">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Social Icons */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">Follow us for updates</p>
          <div className="flex space-x-5">
            <a href="https://www.facebook.com/" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="https://x.com/" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href="https://fr.linkedin.com/" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
