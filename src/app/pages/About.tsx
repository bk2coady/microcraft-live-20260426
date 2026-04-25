import { motion } from 'motion/react';
import { Users, ShieldCheck, Hammer, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About micro<span className="text-amber-500">CRAFT</span></h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto px-4 md:whitespace-nowrap">
            Building trust through quality craftsmanship and honest service since 2010.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-amber-500 pl-4">Our Story</h2>
             <p className="text-slate-600 mb-4 text-lg leading-relaxed">
               microCRAFT started with a simple mission: to provide homeowners with renovation services they could truly rely on. We saw a gap in the market for a contractor that combined high-quality craftsmanship with transparent communication and unwavering integrity.
             </p>
             <p className="text-slate-600 mb-4 text-lg leading-relaxed">
               Over the years, we expanded our expertise to include certified radon testing and mitigation, recognizing the importance of not just a beautiful home, but a safe one.
             </p>
             <p className="text-slate-600 text-lg leading-relaxed">
               Today, we are proud to serve our community, transforming houses into dream homes while ensuring the health and safety of the families within them.
             </p>
           </motion.div>
           <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
             <img
               src="/images/home-renovation.jpg"
               alt="Kitchen renovation project"
               className="absolute inset-0 w-full h-full object-cover"
             />
           </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Trust & Integrity",
                desc: "We believe in honest pricing, clear communication, and doing what we say we'll do."
              },
              {
                icon: Hammer,
                title: "Quality Craftsmanship",
                desc: "We take pride in our work, using premium materials and proven techniques for lasting results."
              },
              {
                icon: Users,
                title: "Customer Focus",
                desc: "Your satisfaction is our priority. We treat your home with respect and keep you informed every step of the way."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md border border-slate-100 text-center"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-2xl p-12 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Let's Build Something Great Together</h2>
            <a href="/contact" className="inline-flex items-center bg-amber-500 text-slate-900 px-8 py-3 rounded-md font-bold hover:bg-amber-400 transition-colors shadow-lg">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

      </div>
    </div>
  );
}
