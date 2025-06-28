
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <nav className="py-4">
            <Link to="/">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    <div className="w-10 h-10 mt-2 bg-[#66BEF0] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl text-center">LE</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">Lavin Elektriska</h1>
                    </div>
                    </div>
                </div>
            </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
