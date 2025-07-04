import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-7 h-7 text-white" />, number: "10+", label: "Års erfarenhet" },
    { icon: <Users className="w-7 h-7 text-white" />, number: "1000+", label: "Nöjda kunder" },
    { icon: <Shield className="w-7 h-7 text-white" />, number: "100%", label: "Auktoriserad & försäkrad" }
  ];

  return (
    <section id="about" className="py-20 bg-white" aria-label="Om Lavin Elektriska">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Om Lavin Elektriska</h2>
            <p className="text-lg text-gray-600 mb-6">
              Med över 10 års erfarenhet av att betjäna samhället har Lavin Elektriska 
              byggt upp ett rykte för pålitliga, professionella elektriska tjänster. 
              Vårt team av auktoriserade elektriker är engagerade i att tillhandahålla 
              säkra, kodkompatibla lösningar för alla dina elektriska behov.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Vi är stolta över transparent prissättning, kvalitetsarbete och exceptionell 
              kundservice. Oavsett om det är en enkel uttag installation eller en komplett 
              uppgradering av elcentral, behandlar vi varje jobb med samma nivå av 
              professionalism och uppmärksamhet på detaljer.
            </p>
            
            <div className="flex flex-wrap gap-4" aria-label="Certifikat och medlemskap">
              <div className="bg-[#66BEF0] text-white px-4 py-2 rounded-full font-semibold">
                Auktoriserad elektriker
              </div>
              <div className="bg-[#66BEF0] text-white px-4 py-2 rounded-full font-semibold">
                Fullständigt försäkrad
              </div>
              <div className="bg-[#66BEF0] text-white px-4 py-2 rounded-full font-semibold">
                SEK-medlem
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
