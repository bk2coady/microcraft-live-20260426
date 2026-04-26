import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Check } from 'lucide-react';

export default function Radon() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative bg-slate-900 text-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/radon-hero.webp"
            alt="Finished basement living space"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ShieldCheck className="h-16 w-16 text-amber-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Radon Testing & <span className="text-amber-500">Mitigation</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Ensure your home is safe from harmful radon gas with our certified testing and effective mitigation solutions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Test? */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Should You Test for Radon?</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Radon is a radioactive gas that you cannot see, smell, or taste. It is the leading cause of lung cancer among non-smokers.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Every home can have a radon problem, regardless of age or location. The only way to know if your home has high radon levels is to test for it.
            </p>
            <ul className="space-y-3">
               {[
                 "Leading cause of lung cancer in non-smokers",
                 "Colorless, odorless, tasteless gas",
                 "Found in homes across the country",
                 "Simple and affordable to test"
               ].map((item, i) => (
                 <li key={i} className="flex items-center text-slate-700">
                   <div className="bg-amber-100 p-1 rounded-full mr-3 text-amber-600">
                     <Check className="h-4 w-4" />
                   </div>
                   {item}
                 </li>
               ))}
            </ul>
          </div>
          <div className="bg-slate-100 rounded-xl p-8 border border-slate-200 shadow-sm">
	             <div className="flex items-center justify-center h-64 bg-slate-200 rounded-lg mb-6 relative overflow-hidden">
	                <img
	                  src="/images/radon-sign.jpg"
	                  alt="Radon warning sign"
	                  className="absolute inset-0 w-full h-full object-cover opacity-60"
	                />
                <div className="relative z-10 bg-white/90 p-4 rounded shadow-lg text-center">
                  <span className="block text-4xl font-bold text-slate-900 mb-1">200 Bq/m^3</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Action Level</span>
                </div>
             </div>
             <p className="text-sm text-slate-500 text-center italic">
               Health Canada recommends taking action if radon levels are 200 Bq/m^3 or higher.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="bg-slate-100 rounded-xl p-8 border border-slate-200 shadow-sm order-2 md:order-1">
             <div className="flex items-center justify-center h-64 bg-slate-200 rounded-lg mb-6 relative overflow-hidden">
                <img
                  src="/images/home-radon.jpg"
                  alt="Basement area before finishing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/20" />
             </div>
             <p className="text-sm text-slate-500 text-center italic">
               Testing at the right time helps you make informed decisions before renovations, purchases, or occupancy changes.
             </p>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">When Should You Test?</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Radon testing is smart anytime you want confidence in your indoor air quality, but it is especially important before major changes to how a space is used or finished.
            </p>
            <ul className="space-y-3">
               {[
                 "Before buying or selling a home",
                 "Before finishing or renovating a basement",
                 "After installing or changing HVAC systems",
                 "Every few years as part of routine home safety"
               ].map((item, i) => (
                 <li key={i} className="flex items-center text-slate-700">
                   <div className="bg-amber-100 p-1 rounded-full mr-3 text-amber-600">
                     <Check className="h-4 w-4" />
                   </div>
                   {item}
                 </li>
               ))}
            </ul>
          </div>
        </div>

        {/* Our Process */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20">
           <div className="bg-slate-900 text-white p-8 text-center">
             <h2 className="text-2xl font-bold">Our 3-Step Process</h2>
           </div>
           <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
             {[
               {
                 title: "1. Testing",
                 desc: "We deploy state-of-the-art testing devices in the lowest livable area of your home for a minimum of 48 hours to get accurate readings."
               },
               {
                 title: "2. Analysis",
                 desc: "Our certified professionals analyze the results. If levels are high, we design a custom mitigation plan tailored to your home's structure."
               },
               {
                 title: "3. Mitigation",
                 desc: "We install a mitigation system (usually a vent pipe and fan) to draw radon from beneath the foundation and vent it safely outside."
               }
             ].map((step, i) => (
               <div key={i} className="p-8 hover:bg-slate-50 transition-colors">
                 <h3 className="text-xl font-bold text-slate-900 mb-4 text-amber-600">{step.title}</h3>
                 <p className="text-slate-600 leading-relaxed">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>

        {/* Certifications */}
        <div className="text-center mb-16">
          <h3 className="text-xl font-semibold text-slate-900 mb-8 uppercase tracking-wide">Certified Professionals</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="h-28 w-48 rounded-lg bg-white p-4 shadow-md border border-slate-200">
              <img
                src="/images/c-nrpp-logo.webp"
                alt="C-NRPP certification logo"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="h-28 w-48 rounded-lg bg-white p-4 shadow-md border border-slate-200">
              <img
                src="/images/carst-logo.webp"
                alt="CARST certification logo"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-amber-500 rounded-2xl p-10 text-center shadow-lg">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">Don't Guess. Test.</h2>
           <p className="text-slate-900/80 mb-8 text-lg">Contact us today to schedule your certified radon test.</p>
           <a href="/contact" className="inline-flex items-center bg-slate-900 text-white px-8 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors shadow-md">
             Schedule Now <ArrowRight className="ml-2 h-5 w-5" />
           </a>
        </div>
      </div>
    </div>
  );
}
