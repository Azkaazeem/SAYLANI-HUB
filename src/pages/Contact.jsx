import React, { useState } from 'react';
import { supabase } from '../components/lib/supabaseClient';
import Swal from 'sweetalert2';
import { MapPin, Phone, Mail, Send, Clock, MessageSquare } from 'lucide-react';

const smitBlue = '#014990';
const smitGreen = '#65A338';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({ icon: 'warning', title: 'Missing Fields', text: 'Please fill out all required fields.' });
      return;
    }

    setSubmitting(true);

    const { error } = await supabase
      .from('contact_messages')
      .insert([formData]);

    setSubmitting(false);

    if (error) {
      Swal.fire({ icon: 'error', title: 'Error', text: 'Something went wrong. Please try again later.' });
    } else {
      Swal.fire({ 
        icon: 'success', 
        title: 'Message Sent!', 
        text: 'Thank you for reaching out. Our team will get back to you soon.',
        confirmButtonColor: smitGreen 
      });
      setFormData({ name: '', email: '', subject: '', message: '' }); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-8 animate-page-fade font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Get in <span style={{ color: smitBlue }}>Touch</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question, feedback, or need assistance? Fill out the form below or reach out to us using the provided contact details.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: `${smitBlue}15`, color: smitBlue }}>
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Head Office</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                A-25, Bahadurabad Chowrangi,<br />
                Karachi, Pakistan
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: `${smitGreen}15`, color: smitGreen }}>
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Details</h3>
              
              <div className="mb-5 border-b border-gray-100 dark:border-gray-700 pb-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Saylani Head Office</p>
                <div className="flex items-center gap-3 mb-2 text-gray-600 dark:text-gray-400">
                  <Phone size={16} style={{ color: smitGreen }} />
                  <span className="text-sm font-medium">UAN: 13373372370</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Mail size={16} style={{ color: smitGreen }} />
                  <span className="text-sm font-medium">info@saylaniwelfareusa.com</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Technical Support / Developer</p>
                <div className="flex items-center gap-3 mb-2 text-gray-600 dark:text-gray-400">
                  <Phone size={16} style={{ color: smitBlue }} />
                  <span className="text-sm font-medium">+92 3161132149</span> 
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Mail size={16} style={{ color: smitBlue }} />
                  <span className="text-sm font-medium">azkaazeem804@gmail.com</span> 
                </div>
              </div>

            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-yellow-50 text-yellow-600">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Operating Hours</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monday - Saturday<br />
                09:00 AM - 09:00 PM
              </p>
            </div>

          </div>

          <div className="w-full lg:w-2/3 bg-white dark:bg-gray-800 p-8 md:p-12 rounded-[2.5rem] shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                <MessageSquare style={{ color: smitBlue }} size={32} /> Send a Message
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">We would love to hear from you! Please fill out the details below.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-2 block">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:border-[#014990] focus:ring-2 focus:ring-[#014990]/20 transition-all"
                      required 
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-2 block">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:border-[#014990] focus:ring-2 focus:ring-[#014990]/20 transition-all"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-2 block">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help you?" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:border-[#014990] focus:ring-2 focus:ring-[#014990]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-2 block">Your Message *</label>
                  <textarea 
                    rows="5" 
                    placeholder="Write your message here..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:border-[#014990] focus:ring-2 focus:ring-[#014990]/20 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={submitting} 
                  className="w-full md:w-auto bg-[#014990] hover:bg-blue-800 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  {submitting ? 'Sending...' : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;