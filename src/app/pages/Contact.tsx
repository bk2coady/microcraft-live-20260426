import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Contact <span className="text-amber-500">Us</span>
        </motion.h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto px-4">
          Ready to start your renovation or need radon testing? Get in touch today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-10 rounded-xl shadow-lg border-t-4 border-amber-500"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Have a question about our services or want to request a quote? Reach us directly using the contact information below.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-4 text-amber-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Phone</h3>
                  <p className="text-slate-600">(226) 220-5201</p>
                  <p className="text-sm text-slate-500">Mon-Fri 8am-6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-4 text-amber-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600">microcraft.rennos@gmail.com</p>
                  <p className="text-sm text-slate-500">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-4 text-amber-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Office</h3>
                  <p className="text-slate-600">21 William St,<br />Elmira ON N3B 1P1</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
