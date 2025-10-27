'use client';

import { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaTint, FaTruck, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { MdWaterDrop, MdLocalShipping, MdVerified, MdArrowForward, MdPhone } from 'react-icons/md';
import { HiOutlineSparkles } from 'react-icons/hi';

// Enhanced Water Logo Component
const WaterLogo = () => (
  <img src="/logo.png" alt="Alabdaley for Selling Water WLL - Water delivery truck logo in Qudaibiya, Manama" className="flex-shrink-0 w-20 h-20 object-contain" />
);

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Water Can');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = {
    'Water Can': [
      { name: 'Water Can', price: '0.100', description: 'Premium drinking water in convenient cans' },
    ],
    'Ice Cube': [
      { name: 'Ice Cube Small', price: '0.100', description: 'Fresh, clean ice cubes perfect for daily use' },
      { name: 'Ice Cube Medium', price: '0.200', description: 'Medium size ice cubes for refreshment' },
      { name: 'Ice Cube Large', price: '0.300', description: 'Large ice cubes for parties and events' },
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <WaterLogo />
              <div>
                <div className="text-lg font-bold text-gray-900">ALABDALEY</div>
                <p className="text-xs text-blue-600 font-medium">FOR SELLING WATER W.L.L</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-medium">Services</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition font-medium">Products</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Contact</a>
              <a href="tel:+97339470652" className="bg-blue-200 text-blue-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-300 transition flex items-center gap-2">
                <MdPhone /> +973 3947 0652
              </a>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-4 py-4 space-y-2">
                <a 
                  href="#hero" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition font-medium"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition font-medium"
                >
                  About
                </a>
                <a 
                  href="#services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition font-medium"
                >
                  Services
                </a>
                <a 
                  href="#products" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition font-medium"
                >
                  Products
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition font-medium"
                >
                  Contact
                </a>
                <a 
                  href="tel:+97339470652" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 bg-blue-200 text-blue-900 rounded-lg font-semibold hover:bg-blue-300 transition flex items-center gap-2"
                >
                  <MdPhone /> +973 3947 0652
                </a>
                <a 
                  href="https://wa.me/97339470652" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition flex items-center gap-2"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-blue-200 via-blue-100 to-cyan-200 pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-gray-900">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 backdrop-blur-sm mb-6">
                <HiOutlineSparkles className="mr-2" />
                <span className="text-sm font-semibold text-blue-900">Trusted Water Supplier</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Pure Water
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  Delivered to You
                </span>
          </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                ALABDALEY FOR SELLING WATER W.L.L - Your trusted partner for reliable drinking water supply across Bahrain. Premium quality water delivered fresh to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#products" className="bg-blue-200 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-300 transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                  View Products <MdArrowForward />
                </a>
                <a href="tel:+97339470652" className="bg-blue-200 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-300 transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                  Call Now <FaPhone className="text-base" />
                </a>
                <a href="https://wa.me/97339470652" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                  WhatsApp <FaWhatsapp className="text-base" />
                </a>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Service Available</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-blue-50 backdrop-blur-lg rounded-3xl p-8 border border-blue-200 shadow-2xl">
                  <div className="bg-white rounded-2xl p-8">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl flex items-center justify-center">
                        <FaTint className="text-blue-700 text-4xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Premium Water</h3>
                        <p className="text-gray-600">Fresh & Pure</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <FaCheckCircle className="text-blue-600" />
                        <span>100% Pure & Clean</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <FaCheckCircle className="text-blue-600" />
                        <span>Fast Delivery</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <FaCheckCircle className="text-blue-600" />
                        <span>Best Quality</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <FaCheckCircle className="text-blue-600" />
                        <span>Affordable Pricing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the highest quality water and ice products with exceptional service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">About ALABDALEY FOR SELLING WATER W.L.L</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ALABDALEY FOR SELLING WATER W.L.L is a trusted water distribution company based in Qudaibiya, Manama. We specialize in delivering drinking water in cans to local neighborhoods and offer reliable water tank filling services across Bahrain with our dedicated fleet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Committed to quality and timely service, ALABDALEY FOR SELLING WATER W.L.L is your dependable choice for all residential and commercial water supply needs.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-blue-200 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-300 transition">
                Get in Touch <MdArrowForward />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl text-gray-900 shadow-lg">
                <FaTruck className="text-4xl mb-4 text-blue-700" />
                <h4 className="text-2xl font-bold mb-2">Fast Delivery</h4>
                <p className="text-gray-700">Quick and reliable service</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl text-gray-900 shadow-lg">
                <MdWaterDrop className="text-4xl mb-4 text-blue-700" />
                <h4 className="text-2xl font-bold mb-2">Pure Quality</h4>
                <p className="text-gray-700">100% clean water</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl text-gray-900 shadow-lg">
                <MdVerified className="text-4xl mb-4 text-blue-700" />
                <h4 className="text-2xl font-bold mb-2">Trusted</h4>
                <p className="text-gray-700">Years of experience</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl text-gray-900 shadow-lg">
                <FaClock className="text-4xl mb-4 text-blue-700" />
                <h4 className="text-2xl font-bold mb-2">24/7</h4>
                <p className="text-gray-700">Always available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reliable water delivery and distribution services across Bahrain
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Service Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl p-12 shadow-2xl">
                <div className="flex items-center justify-center mb-6">
                  <FaTruck className="text-blue-700 text-9xl" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Water Delivery Service</h3>
                  <p className="text-gray-700 text-lg">
                    Our fleet of delivery trucks ensures fresh, pure water reaches your doorstep
                  </p>
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Delivery Services</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-200 p-3 rounded-lg flex-shrink-0">
                      <MdLocalShipping className="text-2xl text-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Water Can Delivery</h4>
                      <p className="text-gray-600">We deliver premium drinking water in cans directly to your home or business</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-200 p-3 rounded-lg flex-shrink-0">
                      <FaTruck className="text-2xl text-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Water Tank Filling</h4>
                      <p className="text-gray-600">Professional water tank filling services for residential and commercial properties</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-200 p-3 rounded-lg flex-shrink-0">
                      <FaClock className="text-2xl text-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h4>
                      <p className="text-gray-600">Round-the-clock service to meet all your water supply needs</p>
                    </div>
                  </div>
                </div>

                {/* Order Now Button */}
                <div className="border-t border-gray-200 pt-6">
                  <a
                    href="tel:+97339470652"
                    className="flex items-center justify-center gap-3 w-full bg-blue-200 text-blue-900 py-4 rounded-lg font-semibold hover:bg-blue-300 transition text-lg shadow-lg hover:shadow-xl"
                  >
                    <FaPhone className="text-xl" />
                    <span>Call Now to Order</span>
                    <span className="font-bold">+973 3947 0652</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 text-gray-900">
                <div className="flex items-center gap-3 mb-3">
                  <FaCheckCircle className="text-blue-700 text-2xl" />
                  <h4 className="text-xl font-semibold">Same-Day Delivery Available</h4>
                </div>
                <p className="text-gray-700">Experience fast and reliable water delivery across Qudaibiya and Manama</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality water and ice products at competitive prices
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {Object.keys(products).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-200 text-blue-900 shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {products[selectedCategory].map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center transform group-hover:scale-110 transition">
                    <FaTint className="text-blue-700 text-5xl" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                    <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-4xl font-bold text-blue-700">BHD {product.price}</span>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="block w-full bg-blue-200 text-blue-900 py-3 rounded-lg font-semibold hover:bg-blue-300 transition text-center"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for any queries or orders
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl text-gray-900 shadow-xl">
                <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-200 p-3 rounded-lg">
                      <FaPhone className="text-xl text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <a href="tel:+97339470652" className="text-blue-700 hover:text-blue-900 transition">
                        +973 3947 0652
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-200 p-3 rounded-lg">
                      <FaMapMarkerAlt className="text-xl text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Address</h4>
                      <p className="text-gray-700">
                        Block: 321, Road: 358, Building: 56<br />
                        Qudaibiya Ave, Manama 321<br />
                        Bahrain
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-200 p-3 rounded-lg">
                      <FaClock className="text-xl text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Operating Hours</h4>
                      <p className="text-blue-900 font-semibold mb-1">Sunday - Saturday</p>
                      <p className="text-gray-700">8:00 AM - 11:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-300">
                  <a
                    href="tel:+97339470652"
                    className="block w-full bg-blue-200 text-blue-900 text-center py-4 rounded-lg font-semibold hover:bg-blue-300 transition"
                  >
                    Call Now to Order
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180.55881257820354!2d50.5917639!3d26.2290757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af28b3e108cd%3A0xff8c6fb7097838f9!2sALABDALEY%20FOR%20SELLING%20WATER%20W.L.L!5e0!3m2!1sen!2sbh!4v1737744223456!5m2!1sen!2sbh"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ALABDALEY FOR SELLING WATER W.L.L Location Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <WaterLogo />
                <div>
                  <h3 className="text-xl font-bold">ALABDALEY FOR SELLING WATER W.L.L</h3>
                  <p className="text-sm text-gray-400">Water Distribution Company</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Your trusted water supplier in Bahrain. Pure quality water delivered to your door with reliable service and affordable prices.
              </p>
              <div className="flex items-center gap-4">
                <a href="tel:+97339470652" className="bg-blue-200 text-blue-900 p-3 rounded-lg hover:bg-blue-300 transition">
                  <FaPhone />
                </a>
                <a href="https://maps.google.com/?q=26.229088948185744,50.59176445659685" className="bg-blue-200 text-blue-900 p-3 rounded-lg hover:bg-blue-300 transition">
                  <FaMapMarkerAlt />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <div className="space-y-3">
                <a href="#hero" className="block text-gray-400 hover:text-white transition">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition">About</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition">Services</a>
                <a href="#products" className="block text-gray-400 hover:text-white transition">Products</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <div className="space-y-4 text-gray-400">
                <a href="tel:+97339470652" className="flex items-center gap-3 hover:text-white transition">
                  <div className="bg-blue-200 text-blue-900 p-2 rounded-lg">
                    <FaPhone />
                  </div>
                  <span>+973 3947 0652</span>
                </a>
                <a href="https://maps.google.com/?q=26.229088948185744,50.59176445659685" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition">
                  <div className="bg-blue-200 text-blue-900 p-2 rounded-lg mt-0.5 flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="leading-relaxed text-sm">
                    <div className="whitespace-nowrap">Block: 321, Road: 358, Building: 56</div>
                    <div>Qudaibiya Ave, Manama 321, Bahrain</div>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-200 text-blue-900 p-2 rounded-lg">
                    <FaClock />
                  </div>
                  <span>8:00 AM - 11:30 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ALABDALEY FOR SELLING WATER W.L.L. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
