import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const address = '21 William St, Elmira ON N3B 1P1';
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}`;

  const onSubmit = (data: ContactFormData) => {
    // Simulate form submission
    console.log(data);
    toast.success("Message sent! We'll get back to you soon.");
    reset();
  };

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
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Have a question about our services or want to request a quote? Fill out the form or reach us directly using the contact information below.
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
                    <p className="text-slate-600">info@microcraft.com</p>
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
            </div>

            <div className="rounded-xl overflow-hidden shadow-inner border border-slate-200 bg-slate-100">
              <div className="relative h-64 bg-gradient-to-br from-slate-200 via-slate-100 to-amber-100">
                <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_center,_rgba(148,163,184,0.35)_1px,_transparent_1px)] [background-size:20px_20px]" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full max-w-sm rounded-xl bg-white/90 backdrop-blur p-6 shadow-lg border border-white/70">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 p-3 rounded-full text-amber-600 shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 mb-2">
                          Visit Us
                        </p>
                        <p className="text-lg font-bold text-slate-900 leading-snug">
                          21 William St
                        </p>
                        <p className="text-slate-600">
                          Elmira ON N3B 1P1
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                      >
                        Open in Google Maps <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                      <a
                        href={appleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                      >
                        Open in Apple Maps <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="(226) 220-5201"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                <select
                  {...register("service")}
                  id="service"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors bg-white"
                >
                  <option value="renovation">Home Renovation</option>
                  <option value="radon-test">Radon Testing</option>
                  <option value="radon-mitigation">Radon Mitigation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-none placeholder:text-slate-400"
                  placeholder="I'm interested in a kitchen renovation for my home in..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 px-6 rounded-md font-bold hover:bg-slate-800 transition-colors flex items-center justify-center shadow-lg"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
