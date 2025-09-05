import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // if scrolling down and passed threshold -> hide
          if (currentY > lastScrollY.current && currentY > 100) {
            setHidden(true);
          } else if (currentY < lastScrollY.current) {
            // scrolling up -> show
            setHidden(false);
          }
          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`bg-white shadow-sm sticky top-0 z-50 transform transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <nav className="" aria-label="Huvudnavigation">
          <a href='/' className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="md:w-40 mt-2 rounded-lg flex items-center justify-center md:ml-0">
                <img src="/Images/LE.png" alt="Lavin Elektriska logotyp" className="rounded-[80px] mb-2" />
              </div>
              <div className="ml-5">
                <h1 className="text-gray-900 archivo-black-regular md:block">LAVIN ELEKTRISKA</h1>
              </div>
            </div>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
