import { motion } from 'motion/react';
import { Link } from 'react-router';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Renos() {
  const services = [
    {
      title: "Kitchen Remodeling",
      description: "From custom cabinetry to modern islands, we transform your kitchen into the heart of your home.",
      features: ["Custom Cabinetry", "Countertop Installation", "Lighting Design", "Flooring Upgrades"]
    },
    {
      title: "Bathroom Renovations",
      description: "Create a spa-like retreat with our bathroom renovation services, featuring modern fixtures and elegant tile work.",
      features: ["Walk-in Showers", "Vanity Installation", "Tile & Grout", "Plumbing Updates"]
    },
    {
      title: "Basement Finishing",
      description: "Maximize your living space by turning your unfinished basement into a functional family room, office, or gym.",
      features: ["Framing & Drywall", "Egress Windows", "Electrical & Lighting", "Flooring Solutions"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden text-white py-24 px-4 text-center">
        <img
          src="/images/home-renovation.jpg"
          alt="Kitchen renovation in progress"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/65" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Home <span className="text-amber-500">Renovations</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            <span className="block">Quality craftsmanship for every room in your house.</span>
            <span className="block">We bring your vision to life.</span>
          </p>
        </motion.div>
      </div>

      {/* Services Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-amber-500"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Radon Cross-Sell Nudge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-xl p-8 mb-20 text-white relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3 text-amber-500">
                <ShieldCheck className="h-6 w-6" />
                <span className="font-bold uppercase tracking-wider text-sm">Safety First</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Planning a Basement Renovation?</h3>
              <p className="text-slate-300 mb-0">
                The best time to install a radon mitigation system is <strong>during</strong> your renovation.
                Hide the pipes behind your new walls for a seamless, safe finish.
              </p>
            </div>
            <Link
              to="/radon"
              className="bg-amber-500 text-slate-900 px-6 py-3 rounded-md font-bold hover:bg-amber-400 transition-colors flex items-center whitespace-nowrap"
            >
              Check Radon Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          {/* Background decoration */}
          <ShieldCheck className="absolute -right-10 -bottom-10 h-64 w-64 text-slate-800 opacity-50 rotate-12" />
        </motion.div>

        {/* CTA */}
        <div className="bg-slate-200 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Have a project in mind?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. Let's discuss how we can improve your home.
          </p>
          <a href="/contact" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors">
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
