import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Hammer, ShieldCheck, Star, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home-hero.jpg"
            alt="White heritage home in autumn"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Building <span className="text-amber-500">Trust</span> In Every Home
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light">
              Premium home renovations and certified radon mitigation services designed <span className="italic">for your peace of mind</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/renos"
                className="inline-flex items-center justify-center w-full sm:w-72 px-6 py-3 border border-amber-500 text-base font-medium rounded-md text-amber-500 hover:bg-amber-500 hover:text-slate-900 transition-colors md:text-lg whitespace-nowrap"
              >
                <Hammer className="mr-2 h-5 w-5" />
                Explore Renovations
              </Link>
              <Link
                to="/radon"
                className="inline-flex items-center justify-center w-full sm:w-72 px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-slate-900 transition-colors md:text-lg whitespace-nowrap"
              >
                <ShieldCheck className="mr-2 h-5 w-5" />
                Radon Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide mb-4">Our Expertise</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Renovations Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-lg border border-slate-100 group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="/images/home-renovation.jpg"
                  alt="Kitchen renovation in progress"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center -mt-14 mb-6 shadow-md relative z-10 text-slate-900">
                  <Hammer className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Home Renovations</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  From kitchen remodels to bathroom upgrades and basement finishing, we bring your vision to life with precision and quality craftsmanship.
                </p>
                <Link to="/renos" className="text-amber-600 font-semibold hover:text-amber-700 inline-flex items-center">
                  View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Radon Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-lg border border-slate-100 group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="/images/home-radon.jpg"
                  alt="Unfinished basement space"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center -mt-14 mb-6 shadow-md relative z-10 text-amber-500">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Radon Testing & Mitigation</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Protect your family from the invisible danger of radon gas. We provide certified testing and install effective mitigation systems.
                </p>
                <Link to="/radon" className="text-amber-600 font-semibold hover:text-amber-700 inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="mx-auto bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-amber-500">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focused</h3>
              <p className="text-slate-400">We communicate clearly and respect your home as if it were our own.</p>
            </div>
            <div className="p-6">
              <div className="mx-auto bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-amber-500">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Guaranteed</h3>
              <p className="text-slate-400">Superior materials and expert craftsmanship in every project we undertake.</p>
            </div>
            <div className="p-6">
              <div className="mx-auto bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-amber-500">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Safety</h3>
              <p className="text-slate-400">Fully licensed and certified for radon testing and mitigation services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide mb-4">Client Stories</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Don't just take our word for it. Here is what homeowners are saying about microCRAFT.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The attention to detail in our kitchen renovation was incredible. They didn't just build it; they crafted it.",
                author: "Sarah J.",
                location: "Homeowner",
                stars: 5
              },
              {
                quote: "I was worried about radon levels in our basement playroom. The team explained everything clearly and the mitigation system is whisper quiet.",
                author: "Michael T.",
                location: "Parent",
                stars: 5
              },
              {
                quote: "Professional, punctual, and clean. It's rare to find a contractor who respects your home this much.",
                author: "David & Elena",
                location: "Renovation Clients",
                stars: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md border border-slate-100"
              >
                <div className="flex text-amber-500 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500 text-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 opacity-90">Whether you need a renovation or a radon test, we're here to help you create a safer, better home.</p>
          <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
