
import { Zap, Home, Building, Settings, AlertTriangle, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Elinstallationer",
      description: "Vi har till alla stora elinstallationer inte bara uppdatera säkringar utan även mer avancerade installationer för kommersiella behov.",
      bgImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2432&q=80"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Installation av laddstolpar",
      description: "Vi erbjuder komplett service installationer av laddstolpar, så att du kan ladda din elbil hemma på bästa sätt.",
      bgImage: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=3994&q=80"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Felsökningar & reparationer",
      description: "Snabb och effektiv felsökning och reparation av elektriska problem för hem och företag.",
      bgImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Våra tjänster</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Från enkla reparationer till komplexa installationer erbjuder vi omfattande 
            elektriska tjänster för bostäder och kommersiella fastigheter.
          </p>
        </div>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-xl ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Text Content */}
              <div className={`bg-[#66BEF0] text-white p-12 flex items-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div 
                className={`min-h-[400px] bg-cover bg-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-16">
          <button className="bg-[#66BEF0] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#5aa8d4] transition-colors">
            Se alla tjänster
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
