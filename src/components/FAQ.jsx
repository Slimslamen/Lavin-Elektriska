import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "Hur lång tid tar en typisk elinstallation?",
      answer1:
      "Tiden beror på uppdragets omfattning. Ett enklare jobb, som att installera ett eluttag eller byta en strömbrytare, tar oftast 1–2 timmar.",
      answer2:
      "Större projekt som en komplett eldragning i en villa eller lokal kan ta allt från ett par dagar till flera veckor, beroende på storlek, tillgänglighet och kundens önskemål. Vi ger alltid en tydlig tidsuppskattning innan vi sätter igång, så du vet vad du kan förvänta dig.",
    },
    {
      question: "Hur mycket kostar en elektriker per timme?",
      answer1:
      "Timpriset för en elektriker efter ROT-avdrag ligger vanligtvis på 500–700 kr per timme. Priset kan variera något beroende på arbetets omfattning, region och typ av uppdrag. För akuta jobb eller jourarbeten kan timpriset vara högre.",
      answer2: "Du får alltid tydliga priser innan arbetet startar, så du vet exakt vad du betalar för.",
    },
    {
      question: "Hur kan jag sänka min elförbrukning?",
      answer1: "Med rätt elinstallationer kan du spara både energi och pengar – utan att tumma på komforten:",
      answer2:
        "Byt till LED-belysning för att minska elförbrukningen.;Använd rörelsesensorer i rum som sällan används.;Installera smarta termostater för att styra värmen mer effektivt.;Använd smarta uttag och timers för att stänga av apparater automatiskt och minska onödig standbyförbrukning.",
    },
    {
      question: "Är det billigare med ROT-avdrag?",
      answer1:
        " Ja, och under 2025 är det ännu mer fördelaktigt! ROT-avdraget är tillfälligt höjt till 50 % av arbetskostnaden för arbeten som betalas mellan 12 maj och 31 december 2025. Det gäller de flesta elarbeten hemma – från uttag och belysning till laddboxar och elrenoveringar.",
      answer2:
        "Exempel: Arbetskostnad: 7 500 kr;ROT-avdrag (50 %): – 3 750 kr.; Du betalar: 3 750 kr.;ROT-ansökan hanteras åt dig, och avdraget syns direkt på fakturan.",
    },
    {
      question: "Hur vet jag att ert företag är godkänt och arbetar säkert?",
      answer1:
        "Ja, vi är fullständigt auktoriserade av Elsäkerhetsverket och har omfattande ansvarsförsäkring. All vårt arbete följer svenska elkoder och säkerhetsbestämmelser.",
      answer2: "Du kan enkelt kontrollera vår registrering direkt på elsäkerhetsverket hemsida.",
    },
    {
      question: "Vilka elarbeten får jag göra själv i hemmet?",
      answer1:
        "Som privatperson får du göra vissa enklare elarbeten själv, men bara om du har kunskap och gör det säkert. Till exempel får du:",
      answer2:
        "Byta glödlampor och lamphållare;Byta porslinssäkringar eller återställa en automatsäkring;Montera skarvsladdar;Byta stickproppar eller sladdströmbrytare;Repara trasiga skarv- och apparatsladdar;Byta ett befintligt vägguttag eller en strömbrytare (max 16 A) - Kom ihåg att alltid bryta strömmen innan du börjar och kontrollera ditt arbete. Är du minsta osäker – kontakta en behörig elektriker.",
    },
    {
      question: "Ger ni garanti på ert arbete?",
      answer1:
      "Ja, vi ger full garanti på allt vårt arbete och använder endast kvalitetsmaterial från välkända tillverkare. Garantitiden varierar beroende på typ av installation.",
      answer2: "",
    },
    {
      question: "Vad händer om elen är felkopplad?",
      answer1:
        "En felkopplad elinstallation kan orsaka kortslutning, elchock och i värsta fall brand. Därför är det avgörande att fasta installationer alltid utförs av en behörig elektriker. Då får du en säker anläggning som uppfyller både Elsäkerhetsverkets regler och försäkringsbolagens krav.",
      answer2:
        "Visste du att varje år omkommer 2–3 personer i Sverige till följd av elolyckor, och att hundratals skadas? Många av dessa olyckor sker i hemmet och anmäls aldrig, ofta på grund av felaktiga eller osäkra installationer",
    },
    {
      question: "Kan ni hjälpa till med elbesiktning?",
      answer1:
      "Ja, vi utför professionella elbesiktningar för både bostäder och kommersiella fastigheter. Vi hjälper er att identifiera potentiella problem och säkerställa att er installation möter alla säkerhetskrav.",
      answer2: "",
    },
    {
      question: "Vad kostar en laddstolpeinstallation?",
      answer1:
        "Kostnaden varierar beroende på typ av laddstolpe, elcentralens placering och eventuella uppgraderingar som behövs. Vi erbjuder gratis kostnadsförslag för alla laddstolpeinstallationer.",
      answer2: "",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" id="FAQ" aria-label="Vanliga frågor">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vanliga frågor</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Här hittar du svar på de mest vanliga frågorna om våra tjänster.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5" role="list">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4" role="listitem">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left flex items-center justify-between group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
              >
                <h3 className="text-lg font-semibold text-white transition-colors">{faq.question}</h3>
                <div
                  className="w-8 h-8 bg-[#66BEF0] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 ml-4"
                  aria-hidden="true"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" aria-hidden="true" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" aria-hidden="true" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className="bg-white p-6 rounded-b-xl shadow-inner text-gray-700"
                >
                  <p>{faq.answer1}</p>
                  {faq.answer2 !== "" && faq.answer2.includes(";") ? (
                    <div>
                      <br />
                      <ul className="list-disc pl-6">
                        {faq.answer2.split(";").map((item, i) => {
                          // If the item contains "kontakta en behörig elektriker", break it off and show separately
                          const kontaktSplit = item.split(
                            "Byta ett befintligt vägguttag eller en strömbrytare (max 16 A) -"
                          );
                          const ROTSplit = item.split(
                            "ROT-ansökan hanteras åt dig, och avdraget syns direkt på fakturan."
                          );
                          const ElSplit = item.split(
                            "Använd smarta uttag och timers för att stänga av apparater automatiskt och minska onödig standbyförbrukning."
                          );
                          if (kontaktSplit.length > 1) {
                            return (
                              <div key={i}>
                                <li>
                                  {kontaktSplit[0].trim() +
                                    "Byta ett befintligt vägguttag eller en strömbrytare (max 16 A)"}
                                </li>
                                <div className="mt-4" />
                                <p>
                                  {
                                    "Kom ihåg att alltid bryta strömmen innan du börjar och kontrollera ditt arbete. Är du minsta osäker, kontakta en behörig elektriker."
                                  }
                                </p>
                              </div>
                            );
                          }
                          if (ROTSplit.length > 1) {
                            return (
                              <div key={i}>
                                <div className="mt-4" />
                                <p>
                                  {
                                    "ROT-ansökan hanteras åt dig, och avdraget syns direkt på fakturan. Trygg el och mer pengar kvar i plånboken."
                                  }
                                </p>
                              </div>
                            );
                          }
                          if (ElSplit.length > 1) {
                            return (
                              <div key={i}>
                                <li>
                                  {ElSplit[0].trim() +
                                    "Använd smarta uttag och timers för att stänga av apparater automatiskt och minska onödig standbyförbrukning."}
                                </li>
                                <div className="mt-4" />
                                <p>
                                  {
                                    "Små justeringar kan ge stora besparingar, och resultatet syns redan på nästa elräkning."
                                  }
                                </p>
                              </div>
                            );
                          }
                          return <li key={i}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <br />
                      <p>{faq.answer2}</p>
                    </div>
                  )}
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
