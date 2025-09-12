
import { Zap, Home, Building, Settings, AlertTriangle, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-white" />,
      title: "Elinstallationer",
      description: "Dina elinstallationer uppdateras med den senaste tekniken och moderna lösningar för bästa resultat, anpassat för just dina behov och din vardag.",
      bgImage: "/Images/Elinstallationer.webp"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Installation av laddstolpar",
      description: "Noggrant utförda installationer av laddstolpar gör det enkelt att ladda elbilen snabbt, säkert och hållbart.",
      bgImage: "/Images/chargingpole.jpg"
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Felsökningar & reparationer",
      description: "Professionell felsökning och reparation av ditt elsystem, inklusive åtgärd av kortslutningar, strömavbrott och andra elektriska fel.",
      bgImage: "/Images/felsokningReparationer.webp"
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
            <div key={index} className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Text Content */}
              <div className={`bg-[#66BEF0] text-white p-12 flex items-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <div className="w-16 h-16 bg-[#22aeff] bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
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
