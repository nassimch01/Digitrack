import React from 'react';
import Header from "./Header";
import Footer from './Footer';

function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans antialiased">
      {/* Header with nicer style */}
      <Header />

      {/* Main content */}
      <main className="flex-grow py-16 lg:py-24 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Contact Info */}
            <div className="w-full lg:w-1/2 max-w-md space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-2xl font-bold mb-3 text-blue-600">Our Location 📍</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Tunis, Tunisie<br />
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-2xl font-bold mb-3 text-blue-600">Contact Details 📞</h4>
                <ul className="text-gray-700 text-base space-y-3">
                  <li>
                    <span className="font-medium text-gray-900">Phone:</span>{' '}
                    <a href="tel:+21690412026" className="text-blue-600 hover:underline">
                      +216 XX XXX XXX
                    </a>
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Email:</span>{' '}
                    <a href="mailto:contact@digitrack.com" className="text-blue-600 hover:underline">
                      contact@digitrack.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>



            {/* Contact Form */}
            <div className="w-full lg:w-1/2 bg-white p-6 lg:p-8 rounded-2xl shadow-2xl">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Need to reach out? <span className="text-blue-600">We’re here to help</span>.
              </h2>

              <form action="assets/mail/contact.php" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="md:col-span-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="Your Name"
                      className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-base placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Your Email*"
                      className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-base placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone Number"
                      className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-base placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
                    />
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <textarea
                      name="comments"
                      id="comments"
                      required
                      placeholder="Tell us about your project *"
                      rows={5}
                      className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-base placeholder-gray-500 resize-none focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 bg-blue-600 text-white text-base font-bold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300"
                >
                  Send Message
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>

                <div className="text-center text-sm text-green-600" id="message">
                  {/* Success or error message will show here */}
                </div>
              </form>
            </div>


          </div>
        </div>
      </main>

      {/* Footer with improved styling */}
      <Footer />
    </div>
  );
}

export default ContactUs;
