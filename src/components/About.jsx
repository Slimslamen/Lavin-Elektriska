import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const About = () => {
  // const stats = [
  //   { icon: <Award className="w-7 h-7 text-white" />, number: "12+", label: "Års erfarenhet" },
  //   // { icon: <Users className="w-7 h-7 text-white" />, number: "1000+", label: "Nöjda kunder" },
  //   { icon: <Shield className="w-7 h-7 text-white" />, number: "100%", label: "Auktoriserad & försäkrad" },
  // ];

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
      src: "/Images/Central.webp",
      thumb: "/Images/Central.webp",
      subHtml: `Elcentral med säkringar och anslutna kablar.`,
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
    // Add more placeholder images as needed
  ];
  return (
    <section id="about" className="py-20 bg-white" aria-label="Om Lavin Elektriska">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-96 items-center">
          <div className="animate-fade-in w-[45em]">
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
              <LightGallery plugins={[lgZoom, lgThumbnail]} elementClassNames="grid grid-cols-3 gap-2" speed={400} controls={false}>
                {dynamicEl.map((it, i) => (
                  <a key={i} href={it.src}>
                    <img
                      src={it.thumb}
                      alt={typeof it.subHtml === "string" ? it.subHtml : "Galleri bild"}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto rounded-lg"
                    />
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
