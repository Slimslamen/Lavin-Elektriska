
import { Phone, Mail, MapPin, Youtube, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#66BEF0] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl text-center">LE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Lavin Elektriska</h3>
                <p className="text-sm text-gray-400">Auktoriserad & försäkrad</p>
              </div>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Professionella elektriska tjänster för bostäder och kommersiella fastigheter. 
              Din pålitliga partner för säkra, tillförlitliga elektriska lösningar.
            </p>
          </div>
          
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[#66BEF0] transition-colors">Hem</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#66BEF0] transition-colors">Tjänster</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#66BEF0] transition-colors">Erfarenhet</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-[#66BEF0] transition-colors">Blogg</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#66BEF0] transition-colors">Kontakt</a></li>
            </ul>
          </div> */}
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktinfo</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#66BEF0]" />
                <span className="text-gray-400">+46729110256</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#66BEF0]" />
                <span className="text-gray-400">Le@lavinelektriska.se</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#66BEF0]" />
                <span className="text-gray-400">Olskrokstorget, 41665 Göteborg</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Följ oss</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-[#66BEF0] rounded-lg flex items-center justify-center hover:bg-[#5aa8d4] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#66BEF0] rounded-lg flex items-center justify-center hover:bg-[#5aa8d4] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#66BEF0] rounded-lg flex items-center justify-center hover:bg-[#5aa8d4] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#66BEF0] rounded-lg flex items-center justify-center hover:bg-[#5aa8d4] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                Godkända av: ELSÄKERHETSVERKET
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            ©2024 Lavin Elektriska AB.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/Policy" className="text-gray-400 hover:text-[#66BEF0] transition-colors">
              Sekretesspolicy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
