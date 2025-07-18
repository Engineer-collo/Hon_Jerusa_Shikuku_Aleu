import React from 'react';
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCalendarAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Milima Ward</title>
        <meta name="description" content="Contact Hon. Jerusa Shikuku Aleu, MCA Milima Ward. Office address, phone, email, and office hours." />
        <meta name="keywords" content="Milima Ward, Contact, Jerusa Shikuku Aleu, MCA, Bungoma County, Office, Email, Phone" />
        <meta name="author" content="Hon. Jerusa Shikuku Aleu" />
        <meta property="og:title" content="Contact | Milima Ward" />
        <meta property="og:description" content="Contact details for Hon. Jerusa Shikuku Aleu, MCA Milima Ward." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contact Hon. Jerusa Shikuku Aleu
            </h1>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with our office for inquiries, appointments, or constituency services
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-4">
                Office Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <FaMapMarkerAlt className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="ml-4 w-full">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Office Address</h3>
                    <p className="text-gray-600">
                      Milima Ward Office<br />
                      Mukuyuni Junction (opposite CDF office)<br />
                      P.O. Box 123-40200<br />
                      County Headquarters, Bungoma
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <FaPhone className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Phone Numbers</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>Office: +254 712 345 678</li>
                      <li>Mobile: +254 723 456 789</li>
                      <li>Emergency: +254 700 987 654</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <FaEnvelope className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Email Addresses</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>official@jerusaaleu.co.ke</li>
                      <li>info@milimaward.co.ke</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <FaClock className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Office Hours</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                      <li>Saturday: 9:00 AM - 1:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <FaCalendarAlt className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Constituency Days</h3>
                    <p className="text-gray-600">
                      Every Wednesday: 9:00 AM - 3:00 PM<br />
                      Location: Various locations in the ward (see monthly schedule)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-4">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="+254 700 000 000"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="constituency-service">Constituency Service</option>
                    <option value="appointment">Request Appointment</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="feedback">Feedback/Suggestion</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-md transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Single Map Section with multiple pin labels */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-4">
              Our Location
            </h2>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-red-600 text-xl mr-2" />
                <span className="font-semibold text-gray-800">Milima Ward Office</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 text-xl mr-2" />
                <span className="font-semibold text-gray-800">Mukuyuni Secondary School</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-green-600 text-xl mr-2" />
                <span className="font-semibold text-gray-800">Mukuyuni Primary School</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-yellow-600 text-xl mr-2" />
                <span className="font-semibold text-gray-800">CDF Office (Mukuyuni Junction, Naitiri Road)</span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Bungoma North - Milima Ward Map"
                src="https://www.google.com/maps?q=Mukuyuni+CDF+Office+Bungoma+Kenya&hl=en&z=15&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-4 text-gray-600">
              <p className="font-medium mb-1">Directions:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>From Bungoma town, take the road towards Webuye</li>
                <li>Turn right at Mukuyuni Junction</li>
                <li>Office is located opposite the CDF office</li>
                <li>Mukuyuni Secondary and Primary are nearby</li>
                <li>Ample parking available on site</li>
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>For urgent matters outside office hours, please call the emergency number</p>
            <p className="mt-1">We strive to respond to all inquiries within 48 hours</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;