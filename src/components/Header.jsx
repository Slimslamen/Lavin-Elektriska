const Header = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
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
              <a href="#home" onClick={e => scrollToSection(e, 'home')} className="text-gray-900 hover:text-[#66BEF0] transition-colors" tabIndex="0">Hem</a>
              <a href="#services" onClick={e => scrollToSection(e, 'services')} className="text-gray-900 hover:text-[#66BEF0] transition-colors" tabIndex="0">Tjänster</a>
              <a href="#about" onClick={e => scrollToSection(e, 'about')} className="text-gray-900 hover:text-[#66BEF0] transition-colors" tabIndex="0">Erfarenhet</a>
              <a href="#FAQ" onClick={e => scrollToSection(e, 'FAQ')} className="text-gray-900 hover:text-[#66BEF0] transition-colors" tabIndex="0">FAQ</a>
              <a href="#CTA" onClick={e => scrollToSection(e, 'CTA')} className="text-gray-900 hover:text-[#66BEF0] transition-colors" tabIndex="0">Kontakt</a>
              {/* <Link to="/Blog" id="#blogbtn" className="hover:text-gray-900 text-[#66BEF0] transition-colors" tabIndex="0" aria-label="Blogg">Blog</Link> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
