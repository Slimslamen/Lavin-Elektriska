import { useState } from 'react';
import Contact from './Contact';
import { PopupButton } from 'react-calendly';
import { SlCalender } from 'react-icons/sl';
import { FaRegMessage } from 'react-icons/fa6';

const CTA = () => {

  const [showContact, setShowContact] = useState(false)

  return (
    <section id='CTA' className="py-20 bg-gradient-to-r from-[#66BEF0] to-[#4A90E2] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Redo att lösa dina elproblem?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Kontakta oss idag för gratis konsultation och kostnadsförslag. 
            Vi finns här för att hjälpa dig med alla dina elektriska behov.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ring direkt</h3>
            <p className="text-blue-100 mb-4">Snabb hjälp för akuta problem</p>
            <button className="bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              +46729110256
            </button>
          </div> */}
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRegMessage className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Skicka meddelande</h3>
            <p className="text-blue-100 mb-4">Vi svarar inom 24 timmar</p>
            <button onClick={() => setShowContact(!showContact)}  className="bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Skicka e-post
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <SlCalender className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Boka tid</h3>
            <p className="text-blue-100 mb-4">Gratis konsultation & offert</p>
              <div className="App">
            {typeof window !== "undefined" && document.getElementById("root") ? (
              <PopupButton
                url="https://calendly.com/le-lavinelektriska"
                /*
                * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                */
                rootElement={document.getElementById("root")}  
                text="Boka nu"
                className='bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              />
            ) : null}
            {/* <button className="bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"></button> */}
            </div>
          </div>
        </div>
        <Contact showContent={showContact}/>
      </div>
    </section>
  );
};

export default CTA;