import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-7 h-7 text-white" />, number: "12+", label: "Års erfarenhet" },
    // { icon: <Users className="w-7 h-7 text-white" />, number: "1000+", label: "Nöjda kunder" },
    { icon: <Shield className="w-7 h-7 text-white" />, number: "100%", label: "Auktoriserad & försäkrad" }
  ];

  return (
    <section id="about" className="py-20 bg-white" aria-label="Om Lavin Elektriska">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Om Lavin Elektriska</h2>
            <p className="text-lg text-gray-600 mb-6">
           Lavin Elektriska grundades i Småland och har idag sin bas i Västra Götaland. 
           Med över lång erfarenhet i branschen har vi byggt upp ett starkt rykte för att leverera trygga, 
           professionella elinstallationer, alltid med fokus på kvalitet och noggrannhet.
            </p>
            <p className="text-lg text-gray-600 mb-8">
        Bred kompetens har vuxit fram genom att arbeta nära både privatpersoner, företag och fastighetsägare. 
        Vår erfarenhet gör att vi kan ta oss an både små och stora uppdrag med trygg hand, oavsett om det gäller servicejobb, 
        nybyggnation eller tekniska lösningar.
            </p>
            
            <div className="flex flex-wrap gap-4" aria-label="Certifikat och medlemskap">
              <div className="bg-[#66BEF0] text-white px-4 py-2 rounded-full font-semibold">
                Auktoriserad elektriker
              </div>
               <div className="bg-[#66BEF0] text-white px-4 py-2 rounded-full font-semibold">
                SEK-medlem
              </div>
              <div className="bg-[#66BEF0] text-white px-4 py-2 rounded-full font-semibold">
                ELSÄK kraven följs
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="grid grid-cols-2 gap-6" aria-label="Företagsstatistik">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow" aria-label={stat.label}>
                  <div className="w-12 h-12 bg-[#66BEF0] bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#66BEF0] flex items-center justify-center" aria-hidden="true">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
