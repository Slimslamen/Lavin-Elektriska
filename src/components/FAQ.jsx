import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Hur lång tid tar en typisk elinstallation?",
      answer1: "Tiden beror på uppdragets omfattning. Ett enklare jobb, som att installera ett eluttag eller byta en strömbrytare, tar oftast 1–2 timmar.",
      answer2: "Större projekt som en komplett eldragning i en villa eller lokal kan ta allt från ett par dagar till flera veckor, beroende på storlek, tillgänglighet och kundens önskemål. Vi ger alltid en tydlig tidsuppskattning innan vi sätter igång, så du vet vad du kan förvänta dig."
    },
    {
      question: "Hur vet jag att ert företag är godkänt och arbetar säkert?",
      answer1: "Ja, vi är fullständigt auktoriserade av Elsäkerhetsverket och har omfattande ansvarsförsäkring. All vårt arbete följer svenska elkoder och säkerhetsbestämmelser.",
      answer2: "Du kan enkelt kontrollera vår registrering direkt på elsäkerhetsverket hemsida."
    },
    {
      question: "Vad kostar en laddstolpeinstallation?",
      answer1: "Kostnaden varierar beroende på typ av laddstolpe, elcentralens placering och eventuella uppgraderingar som behövs. Vi erbjuder gratis kostnadsförslag för alla laddstolpeinstallationer.",
      answer2: ''
    },
    {
      question: "Ger ni garanti på ert arbete?",
      answer1: "Ja, vi ger full garanti på allt vårt arbete och använder endast kvalitetsmaterial från välkända tillverkare. Garantitiden varierar beroende på typ av installation.",
      answer2: ''
    },
    {
      question: "Kan ni hjälpa till med elbesiktning?",
      answer1: "Ja, vi utför professionella elbesiktningar för både bostäder och kommersiella fastigheter. Vi hjälper er att identifiera potentiella problem och säkerställa att er installation möter alla säkerhetskrav.",
      answer2: ''
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" id='FAQ' aria-label="Vanliga frågor">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vanliga frågor</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Här hittar du svar på de mest vanliga frågorna om våra tjänster.
          </p>
        </div>
        <div className="max-w-3xl mx-auto" role="list">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4" role="listitem">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left flex items-center justify-between group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
              >
                <h3 className="text-lg font-semibold text-white transition-colors">
                  {faq.question}
                </h3>
                <div className="w-8 h-8 bg-[#66BEF0] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 ml-4" aria-hidden="true">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" aria-hidden="true" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" aria-hidden="true" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} className="bg-white p-6 rounded-b-xl shadow-inner text-gray-700">
                   <p>{faq.answer1}</p>
                  {faq.answer2 !== '' ? (
                    <div>
                      <br />
                      <p>{faq.answer2}</p>
                    </div>
                  ) : null}
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
