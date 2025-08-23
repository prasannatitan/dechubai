import React, { useState } from 'react';
import { Search, MessageCircle, Mail, Phone, Clock, ChevronDown, ChevronUp, HelpCircle, Book, Headphones } from 'lucide-react';
import Layout from '../../dashboard/Layout'; 
export default function CustomerSupportPage() {
  
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const faqs = [
        {
            id: 1,
            question: "How do I reset my password?",
            answer: "Click on 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your email. The reset link will expire in 24 hours."
        },
        {
            id: 2,
            question: "How can I update my billing information?",
            answer: "Go to Account Settings > Billing & Payment. You can update your credit card, billing address, and download invoices from this section."
        },
        {
            id: 3,
            question: "What are your refund policies?",
            answer: "We offer full refunds within 30 days of purchase for annual plans and 7 days for monthly plans. Contact support to initiate a refund request."
        },
        {
            id: 4,
            question: "How do I cancel my subscription?",
            answer: "Visit Account Settings > Subscription Management. Click 'Cancel Subscription' and follow the prompts. Your access will continue until the end of your billing period."
        },
        {
            id: 5,
            question: "Is my data secure?",
            answer: "Yes, we use enterprise-grade encryption, regular security audits, and comply with GDPR, SOC 2, and other security standards to protect your data."
        }
    ];

    const supportOptions = [
      
        {
            icon: Mail,
            title: "Email Support",
            description: "Send us a detailed message",
            availability: "Response within 24 hours",
            action: "Send Email"
        },
        {
            icon: Phone,
            title: "Phone Support",
            description: "Speak directly with support",
            availability: "Mon-Fri, 10 AM - 5 PM EST",
            action: "Call Now"
        }
    ];

    const quickLinks = [
        { icon: Book, title: "Documentation", description: "Browse our comprehensive guides" },
        { icon: MessageCircle, title: "Community Forum", description: "Connect with other users" },
        { icon: Headphones, title: "Video Tutorials", description: "Watch step-by-step tutorials" }
    ];



    const handleContactSubmit = () => {
        if (contactForm.name && contactForm.email && contactForm.subject && contactForm.message) {
            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            setContactForm({ name: '', email: '', subject: '', message: '' });
        } else {
            alert('Please fill in all fields before submitting.');
        }
    };

    return (
        <Layout>
            <div className="min-h-screen ">
                {/* Header */}
                <div className=" ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">How can we help you?</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Find answers to common questions, browse our resources, or get in touch with our support team
                            </p>
                        </div>
                    </div>
                </div>

               

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Contact Options */}
                            <div className="bg-white  rounded-lg   p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Get Support</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {supportOptions.map((option, index) => (
                                        <div key={index} className={`p-4 rounded-lg border-2 transition-all ${option.primary ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                                            }`}>
                                            <option.icon className={`h-8 w-8 mb-3 ${option.primary ? 'text-blue-600' : 'text-gray-600'}`} />
                                            <h3 className="font-medium text-gray-900 mb-1">{option.title}</h3>
                                            <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                                            <div className="flex items-center text-xs text-gray-500 mb-3">
                                                <Clock className="h-3 w-3 mr-1" />
                                                {option.availability}
                                            </div>
                                            <button className={`w-full py-2 px-3 rounded font-medium text-sm transition-colors ${option.primary
                                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}>
                                                {option.action}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="bg-white rounded-lg shadow-sm  p-6">
                                <div className="flex items-center mb-6">
                                    <HelpCircle className="h-6 w-6 text-blue-600 mr-2" />
                                    <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
                                </div>

                                <div className="space-y-4">
                                    {faqs.map((faq) => (
                                        <div key={faq.id} className="border border-gray-200 rounded-lg">
                                            <button
                                                className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                            >
                                                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                                                {expandedFaq === faq.id ? (
                                                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                                                )}
                                            </button>
                                            {expandedFaq === faq.id && (
                                                <div className="px-4 pb-4">
                                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* {filteredFaqs.length === 0 && searchQuery && (
                                    <div className="text-center py-8">
                                        <p className="text-gray-500">No FAQs found matching your search.</p>
                                        <p className="text-sm text-gray-400 mt-1">Try different keywords or contact support for help.</p>
                                    </div>
                                )} */}
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white rounded-lg shadow-sm  p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Send us a Message</h2>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                value={contactForm.name}
                                                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                value={contactForm.email}
                                                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            value={contactForm.subject}
                                            onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            value={contactForm.message}
                                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                        />
                                    </div>
                                    <button
                                        onClick={handleContactSubmit}
                                        className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                           

                            {/* Status */}
                            <div className="bg-white rounded-lg shadow-sm  p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">All Systems</span>
                                        <span className="text-sm text-green-600 font-medium">Operational</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">API</span>
                                        <span className="text-sm text-green-600 font-medium">Operational</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Database</span>
                                        <span className="text-sm text-green-600 font-medium">Operational</span>
                                    </div>
                                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                                        View detailed status →
                                    </a>
                                </div>
                            </div>

                            {/* Support Hours */}
                            <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                                <h3 className="text-lg font-semibold text-blue-900 mb-3">Support Hours</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-blue-700">Monday - Friday</span>
                                        <span className="text-blue-900 font-medium">9 AM - 6 PM EST</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-blue-700">Weekend</span>
                                        <span className="text-blue-900 font-medium">Email only</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}