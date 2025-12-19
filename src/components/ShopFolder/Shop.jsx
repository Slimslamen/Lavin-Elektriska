import { useState } from "react";
import { Package, Zap, Shield } from "lucide-react";
import Reveal from "../Reveal";
import ShopBundleConfigurator from "./ShopBundleConfigurator";
import SecondHeader from "../../components/SeconHeader";
import ShopCards from "./ShopCards";
import Footer from "../Footer";
import ShopConfirmationModal from "./ShopConfirmationModal";

const BUNDLES = [
  {
    id: "basic",
    name: "Baspaket",
    icon: Package,
    blurb: "Startpaket för ett rum eller mindre uppgraderingar.",
    basePrice: 1495,
    maxItems: 3,
    items: [
      { id: "led-pack", name: "LED-lampor (4-pack)", price: 249 },
      { id: "smart-outlet", name: "Smart vägguttag", price: 399 },
      { id: "dimmer", name: "Dimmer-brytare", price: 349 },
      { id: "smoke-detector", name: "Brandvarnare", price: 299 },
      { id: "surge", name: "Överspänningsskydd", price: 199 },
    ],
  },
  {
    id: "standard",
    name: "Standardpaket",
    icon: Zap,
    blurb: "Populärt val för lägenhet eller mindre villa.",
    basePrice: 3495,
    maxItems: 6,
    items: [
      { id: "thermostat", name: "Smart termostat", price: 1290 },
      { id: "motion", name: "Rörelsesensor", price: 399 },
      { id: "doorbell", name: "Smart dörrklocka", price: 990 },
      { id: "usb-outlet", name: "Vägguttag med USB", price: 349 },
      { id: "garden-led", name: "Trädgårdsbelysning (kit)", price: 890 },
      { id: "wifi-switch", name: "Wi‑Fi strömbrytare", price: 449 },
    ],
  },
  {
    id: "premium",
    name: "Premiumpaket",
    icon: Shield,
    blurb: "För full uppgradering och toppmodern bekvämlighet.",
    basePrice: 7495,
    maxItems: 10,
    items: [
      { id: "backup-power", name: "Reservkraftsmodul (litet)", price: 2490 },
      { id: "security-pack", name: "Säkerhetspaket (sensorer)", price: 1690 },
      { id: "smart-hub", name: "Smart hub", price: 1290 },
      { id: "pro-dimmer", name: "Pro dimmer (2‑zon)", price: 690 },
      { id: "stair-led", name: "LED-trappbelysning", price: 1290 },
      { id: "garage-kit", name: "Garage el-kit", price: 1890 },
      { id: "bath-fan", name: "Badrumsfläkt tyst", price: 1490 },
    ],
  },
];

export default function Shop() {
  const [activeBundle, setActiveBundle] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div>
      <SecondHeader />
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Välj paket och anpassa</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tre färdiga el‑paket som du kan skräddarsy med valfria produkter. Perfekt för att planera en offert.
              </p>
            </header>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {BUNDLES.map((b) => (
              <Reveal key={b.id}>
                <ShopCards bundle={b} onSelect={() => setActiveBundle(b)} />
              </Reveal>
            ))}
          </div>
        </div>

        {activeBundle && (
          <ShopBundleConfigurator
            bundle={activeBundle}
            onClose={() => setActiveBundle(null)}
            onRequestQuote={() => {
              setShowConfirmation(true);
            }}
          />
        )}
      </div>
      {showConfirmation && (
        <ShopConfirmationModal onClose={() => setShowConfirmation(false)} />
      )}
      <Footer />
    </div>
  );
}
