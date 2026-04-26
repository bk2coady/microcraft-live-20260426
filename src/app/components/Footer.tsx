import { Link } from 'react-router';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wide">
              micro<span className="text-amber-500">CRAFT</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional home renovations and certified radon mitigation services.
              Building trust through quality craftsmanship and safety.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/renos" className="hover:text-amber-500 transition-colors">Home Renovations</Link></li>
              <li><Link to="/renos" className="hover:text-amber-500 transition-colors">Kitchen Remodels</Link></li>
              <li><Link to="/renos" className="hover:text-amber-500 transition-colors">Bathroom Updates</Link></li>
              <li><Link to="/radon" className="hover:text-amber-500 transition-colors">Radon Testing</Link></li>
              <li><Link to="/radon" className="hover:text-amber-500 transition-colors">Radon Mitigation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0" />
                <span>21 William St,<br />Elmira ON N3B 1P1</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                <span>(226) 220-5201</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                <span>microcraft.rennos@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
             <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Certified</h4>
             <div className="flex items-center gap-3">
               <div className="h-14 w-20 rounded bg-white p-1.5 shadow-sm">
                 <img
                   src="/images/c-nrpp-logo.webp"
                   alt="C-NRPP certification logo"
                   className="h-full w-full object-contain"
                   loading="lazy"
                 />
               </div>
               <div className="h-14 w-20 rounded bg-white p-1.5 shadow-sm">
                 <img
                   src="/images/carst-logo.webp"
                   alt="CARST certification logo"
                   className="h-full w-full object-contain"
                   loading="lazy"
                 />
               </div>
             </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} microCRAFT Renovations & Radon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
