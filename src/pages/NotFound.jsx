import { Link } from "react-router-dom";
import { Home, Mail, ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";
import SecondHeader from "../components/SeconHeader";

const NotFound = () => {

  return (
    <>
      <SecondHeader />
      <main
        className="relative min-h-[80vh] flex-col flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden"
        aria-labelledby="nf-title"
      >
        <div className="absolute inset-0 -z-10">
          <img src="/Images/HeroImg.webp" alt="Dekorativ bakgrund" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" aria-hidden="true" />
        </div>

        <section className="container mx-auto px-6 py-16 text-center max-w-3xl">
          <p className="text-[#66BEF0] font-semibold tracking-widest mb-3">404</p>
          <h1 id="nf-title" className="text-4xl md:text-5xl font-extrabold mb-4">
            Sidan kunde inte hittas
          </h1>
          <p className="text-gray-200 mb-8">
            Länken kan vara felaktig eller sidan har flyttats. Använd knapparna nedan för att fortsätta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#66BEF0] px-5 py-3 font-semibold text-white shadow hover:shadow-lg hover:brightness-110 transition"
              aria-label="Gå till startsidan"
            >
              <Home className="w-5 h-5" aria-hidden="true" />
              Till startsidan
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
