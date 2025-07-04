
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Hur lång tid tar en typisk elinstallation?",
      answer: "Det beror på projektets omfattning. En enkel uttagsinstallation kan ta några timmar, medan en komplett elinstallation i ett hus kan ta flera dagar. Vi ger alltid en tidsuppskattning innan vi börjar arbetet."
    },
    {
      question: "Är ni auktoriserade och försäkrade?",
      answer: "Ja, vi är fullständigt auktoriserade av Elsäkerhetsverket och har omfattande ansvarsförsäkring. All vårt arbete följer svenska elkoder och säkerhetsbestämmelser."
    },
    {
      question: "Vad kostar en laddstolpeinstallation?",
      answer: "Kostnaden varierar beroende på typ av laddstolpe, elcentralens placering och eventuella uppgraderingar som behövs. Vi erbjuder gratis kostnadsförslag för alla laddstolpeinstallationer."
    },
    {
      question: "Ger ni garanti på ert arbete?",
      answer: "Ja, vi ger full garanti på allt vårt arbete och använder endast kvalitetsmaterial från välkända tillverkare. Garantitiden varierar beroende på typ av installation."
    },
    {
      question: "Kan ni hjälpa till med elbesiktning?",
      answer: "Ja, vi utför professionella elbesiktningar för både bostäder och kommersiella fastigheter. Vi hjälper er att identifiera potentiella problem och säkerställa att er installation möter alla säkerhetskrav."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" id='FAQ'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vanliga frågor</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Här hittar du svar på de mest vanliga frågorna om våra tjänster.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left flex items-center justify-between group"
              >
                <h3 className="text-lg font-semibold text-white transition-colors">
                  {faq.question}
                </h3>
                <div className="w-8 h-8 bg-[#66BEF0] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="bg-white mt-2 p-6 rounded-xl shadow-sm animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
