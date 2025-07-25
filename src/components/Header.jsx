import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <nav className="" aria-label="Huvudnavigation">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-40 mt-2 rounded-lg flex items-center justify-center">
                <img src="/Images/Main_LavinElektriska.png" alt="Lavin Elektriska logotyp" />
              </div>
              <div>
                <h1 className=" text-gray-900 archivo-black-regular">LAVIN ELEKTRISKA</h1>
              </div>
            </div>
            
            <div className="hidden md:flex items-center text-center" role="navigation" aria-label="Sekundär navigation">
              <a href="#home" className="text-gray-900 hover:text-[#66BEF0] transition-colors" tabIndex="0">Hem</a>
              <a href="#services" className="text-gray-900 hover:text-[#66BEF0] transition-colors" tabIndex="0">Tjänster</a>
              <a href="#about" className="text-gray-900 hover:text-[#66BEF0] transition-colors" tabIndex="0">Erfarenhet</a>
              <a href="#FAQ" className="text-gray-900 hover:text-[#66BEF0] transition-colors" tabIndex="0">FAQ</a>
              <a href="#CTA" className="text-gray-900 hover:text-[#66BEF0] transition-colors" tabIndex="0">Kontakt</a>
              {/* <Link to="/Blog" id="#blogbtn" className="hover:text-gray-900 text-[#66BEF0] transition-colors" tabIndex="0" aria-label="Blogg">Blog</Link> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
