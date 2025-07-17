import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCalendarAlt } from 'react-icons/fa';

const Contact = () => {
  return (
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
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Office Address</h3>
                  <p className="text-gray-600">
                    Milima Ward Office<br />
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

        {/* Map Section */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-4">
            Office Location
          </h2>
          
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-4">
            {/* Placeholder for map - would be replaced with actual map component */}
            <div className="w-full h-64 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <div className="text-lg mb-2">Map of Milima Ward Office</div>
                <div className="text-sm">(Interactive map would display here)</div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600">
            Our office is located at the County Headquarters, next to the Governor's office. 
            Visitors are welcome during office hours. Parking is available on site.
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>For urgent matters outside office hours, please call the emergency number</p>
          <p className="mt-1">We strive to respond to all inquiries within 48 hours</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;