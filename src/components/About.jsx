import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const About = () => {

  const dynamicEl = [
    {
      src: "/Images/GolvVarme.webp",
      thumb: "/Images/GolvVarme.webp",
      subHtml: `Rum under renovering med golvvärmeslingor installerade.`,
    },
    {
      src: "/Images/Rum.webp",
      thumb: "/Images/Rum.webp",
      subHtml: `Renoverat rum med trägolv, grå träpanel och vitmålat tak med mörka balkar.`,
    },
    {
      src: "/Images/ElMatning.webp",
      thumb: "/Images/ElMatning.webp",
      subHtml: `Elektriker testar elcentral med mätinstrument.`,
    },
    {
      src: "/Images/ElCentral.webp",
      thumb: "/Images/ElCentral.webp",
      subHtml: `Elcentral med mätare, säkringar och kabeldragning i ett teknikrum.`,
    },
    {
      src: "/Images/Standing.webp",
      thumb: "/Images/Standing.webp",
      subHtml: `Person installerar eldragning i vägg under renovering.`,
    },
    {
      src: "/Images/Badrum.webp",
      thumb: "/Images/Badrum.webp",
      subHtml: `Badrum under renovering med ny kaklad vägg, toalett och handfat.`,
    },
      {
      src: "/Images/ElCentralArbete.webp",
      thumb: "/Images/ElCentralArbete.webp",
      subHtml: `Arbete på elcentral med säkringar och anslutna kablar.`,
    },
    {
      src: "/Images/VagUttagNara.webp",
      thumb: "/Images/VagUttagNara.webp",
      subHtml: `Elektriker installerar ett dubbelt vägguttag.`,
    },
    {
      src: "/Images/ElHandskning.webp",
      thumb: "/Images/ElHandskning.webp",
      subHtml: `Öppen elcentral med säkringar, kablar och anslutningar.`,
    },
  ];
  return (
    <section id="about" className="py-20 bg-white" aria-label="Om Lavin Elektriska">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="animate-fade-in w-full max-w-xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Om Lavin Elektriska</h2>
            <p className="text-lg text-gray-600 mb-6">
              Lavin Elektriska grundades i Småland och har idag sin bas i Västra Götaland. Med över lång erfarenhet i
              branschen har vi byggt upp ett starkt rykte för att leverera trygga, professionella elinstallationer,
              alltid med fokus på kvalitet och noggrannhet.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Bred kompetens har vuxit fram genom att arbeta nära både privatpersoner, företag och fastighetsägare. Vår
              erfarenhet gör att vi kan ta oss an både små och stora uppdrag med trygg hand, oavsett om det gäller
              servicejobb, nybyggnation eller tekniska lösningar.
            </p>

            <div className="flex flex-wrap gap-4" aria-label="Certifikat och medlemskap">
              <div className="bg-[#66BEF0] text-white px-4 py-2 rounded-full font-semibold">
                AL - Auktoriserad Elektriker
              </div>
              <div className="bg-[#66BEF0] text-white px-4 py-2 rounded-full font-semibold">
                SEK Svenska Elstandard - medlem
              </div>
              <div className="bg-[#66BEF0] text-white px-4 py-2 rounded-full font-semibold">ELSÄK-FS kraven följs</div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div aria-label="Företagsbilder">
              <LightGallery
                plugins={[lgThumbnail]}
                elementClassNames="grid grid-cols-1 sm:grid-cols-3 gap-3 auto-rows-[150px] md:auto-rows-auto"
                speed={400}
                controls={false}
              >
                {dynamicEl.map((it, i) => (
                  <a
                    key={i}
                    href={it.src}
                    className="group relative block overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66BEF0] max-w-full"
                    aria-label={typeof it.subHtml === 'string' ? it.subHtml : 'Öppna bild'}                
                  >
                    <img
                      src={it.thumb}
                      alt={typeof it.subHtml === "string" ? it.subHtml : "Galleri bild"}
                      loading="lazy"
                      // sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 300px"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" aria-hidden="true" />
                  </a>
                ))}
              </LightGallery>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
