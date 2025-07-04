
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
                      <div className="w-19 h-19 mt-2 rounded-lg flex items-center justify-center">
                          <img src="/Images/Lavin_ElektriskaBG.png" alt="Logo" />
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
