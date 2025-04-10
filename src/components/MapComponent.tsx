
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'lucide-react';

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(true);
  
  // Location coordinates for Newport Center Drive, Newport Beach, CA 92660
  const longitude = -117.8703;
  const latitude = 33.6189;

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;
    
    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 14,
      attributionControl: false
    });

    // Add marker for the location
    const marker = new mapboxgl.Marker({ color: '#1D3557' })
      .setLngLat([longitude, latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          '<div class="p-2"><h3 class="font-semibold text-kind-navy text-lg">Kind Ventures</h3><p class="text-gray-600">Newport Center Drive, Newport Beach, CA 92660</p></div>'
        )
      )
      .addTo(map.current);
    
    // Open popup by default
    marker.togglePopup();
    
    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');
    
    // Cleanup
    return () => {
      map.current?.remove();
    };
  };
  
  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      setShowTokenInput(false);
      initializeMap(mapboxToken);
    }
  };

  return (
    <div className="w-full h-[350px] bg-gray-100 rounded-lg overflow-hidden">
      {showTokenInput ? (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <div className="mb-4 text-kind-blue">
            <Map size={40} />
          </div>
          <h3 className="text-xl font-semibold text-kind-navy mb-4">Enter Your Mapbox Token</h3>
          <p className="text-gray-600 mb-6 max-w-md">
            Please enter your Mapbox public token to view the map. You can get one by signing up at{' '}
            <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-kind-blue hover:underline">
              mapbox.com
            </a>
          </p>
          <form onSubmit={handleTokenSubmit} className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                placeholder="Enter your Mapbox public token"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kind-blue"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-kind-blue text-white rounded-md hover:bg-kind-navy transition-colors"
              >
                Load Map
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div ref={mapContainer} className="w-full h-full" />
      )}
    </div>
  );
};

export default MapComponent;
