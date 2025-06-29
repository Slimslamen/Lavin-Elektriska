
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#66BEF0] mt-2 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl text-center">LE</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Lavin Elektriska</h1>
              </div>
            </div>
            
            <div className="hidden md:flex items-center text-center">
              <a href="#home" className="text-gray-900 hover:text-[#66BEF0] transition-colors">Hem</a>
              <a href="#services" className="text-gray-900 hover:text-[#66BEF0] transition-colors">Tjänster</a>
              <a href="#about" className="text-gray-900 hover:text-[#66BEF0] transition-colors">Erfarenhet</a>
              <a href="#FAQ" className="text-gray-900 hover:text-[#66BEF0] transition-colors">FAQ</a>
              <a href="#CTA" className="text-gray-900 hover:text-[#66BEF0] transition-colors">Kontakt</a>
              <Link to="/Blog" id='#blogbtn' className=" hover:text-gray-900 text-[#66BEF0] transition-colors">Blog</Link>
              {/* <button className="bg-[#66BEF0] text-white px-6 py-2 rounded-lg hover:bg-[#5aa8d4] transition-colors">
                Offert
              </button> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
