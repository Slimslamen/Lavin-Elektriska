
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Location = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = async (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');

      mapboxgl.default.accessToken = token;
      
      const map = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [11.9746, 57.7089], // Gothenburg coordinates
        zoom: 13
      });

      // Add marker for the business location
      new mapboxgl.default.Marker({ color: '#66BEF0' })
        .setLngLat([11.9746, 57.7089])
        .addTo(map);

      map.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

      return () => map.remove();
    } catch (error) {
      console.error('Error loading map:', error);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      initializeMap(mapboxToken);
    }
  };

  return (
    <section className="py-20 bg-[#66BEF0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-8">Hitta oss nära dig!</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Address Information */}
            <div className="text-white">
              <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-white">Address</h3>
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="text-lg">Olskrokstorget</p>
                    <p className="text-lg">41665</p>
                    <p className="text-lg">Göteborg, Västra Götaland</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-white" />
                    <span className="text-lg">+46729110256</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-white" />
                    <span className="text-lg">Le@lavinelektriska.se</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Container */}
            <div className="bg-white rounded-xl p-4 shadow-lg">
              {showTokenInput ? (
                <div className="h-64 flex items-center justify-center">
                  <form onSubmit={handleTokenSubmit} className="text-center space-y-4">
                    <p className="text-gray-600 mb-4">
                      För att visa kartan, vänligen ange din Mapbox token.<br/>
                      Du hittar den på <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-[#66BEF0] underline">mapbox.com</a>
                    </p>
                    <input
                      type="text"
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      placeholder="Ange Mapbox token..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="bg-[#66BEF0] text-white px-6 py-2 rounded-lg hover:bg-[#5aa8d4] transition-colors"
                    >
                      Visa karta
                    </button>
                  </form>
                </div>
              ) : (
                <div ref={mapContainer} className="h-64 w-full rounded-lg" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
