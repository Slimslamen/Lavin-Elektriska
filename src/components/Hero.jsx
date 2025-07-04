import { Phone, CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background with modern overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#66BEF0]/20 to-transparent"></div>
      </div>
      
      {/* Floating elements for modern effect */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#66BEF0]/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-in text-white">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                  <div className="w-50 mt-2 rounded-lg flex items-center justify-center">
                      <img src="src\assets\Lavin_Elektriska.png" alt="Logo" />
                  </div>
                <div>
                  <span className="text-2xl font-bold">Lavin Elektriska</span>
                  <p className="text-blue-200 text-sm">Din pålitliga elpartner</p>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                10+ års
              </span>
              <br />
              <span className="text-[#66BEF0] drop-shadow-lg">erfarenhet</span>
            </h1>
            
            <div className="space-y-6 mb-8 text-lg">
              <p className="text-gray-200 leading-relaxed">
                Sedan starten har vi jobbat på att bygga erfarenhet och kunskap inom el-branschen för att kunna erbjuda våra kunder bästa möjliga service och kvalitet.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Vi lägger energi på att hålla oss uppdaterade på ny teknik och utveckling för att kunna erbjuda moderna lösningar anpassade efter våra kunders behov.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* <button className="group bg-gradient-to-r from-[#66BEF0] to-[#4A90E2] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-[#5aa8d4] hover:to-[#3A7BD5] transition-all duration-300 transform hover:scale-95 hover:shadow-xl flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Ring nu: +46729110256
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button> */}
              <button className="border-2 border-[#66BEF0] text-white bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#66BEF0] hover:text-white transform hover:scale-95 transition-all duration-300 hover:shadow-lg">
                Gratis offert
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-sm font-medium">Auktoriserad & försäkrad</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-sm font-medium">15+ års erfarenhet</span>
              </div>
            </div>
          </div>
          
          {/* Stats/Features Card */}
          <div className="animate-fade-in lg:block hidden">
            <div className="bg-white/10 backdrop-blur-[6px] p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Varför välja oss?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#66BEF0] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Snabb respons</p>
                    <p className="text-gray-300 text-sm">Svarar inom 24 timmar</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#66BEF0] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Transparent prissättning</p>
                    <p className="text-gray-300 text-sm">Inga dolda kostnader</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#66BEF0] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Kvalitetsgaranti</p>
                    <p className="text-gray-300 text-sm">Garanti på allt arbete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
