// googleMapsApiKey: "AIzaSyBU5wYq9HER4_Nm5v4To_kAoIQHhrvxG78"
import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '550px',
};

const center = {
  lat: 33.589154,
  lng: 73.137166,
};

const MapSection = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBU5wYq9HER4_Nm5v4To_kAoIQHhrvxG78", 
  });

  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(true); // Control visibility of InfoWindow

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <div className="p-0">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
      >
        <Marker
          position={center}
          onClick={() => {
            setIsInfoWindowOpen(!isInfoWindowOpen); // Toggle InfoWindow on marker click
          }}
        />
         <InfoWindow position={center} onCloseClick={() => setIsInfoWindowOpen(false)}>
            <div>
              <h2>Golden Gate Bridge</h2>
              <p>Golden Gate Brg, San Francisco, CA, United States</p>
              <p>Rating: 4.8 ⭐</p>
              <p>76,484 reviews</p>
            </div>
          </InfoWindow>
      </GoogleMap>
    </div>
  );
};

export default MapSection;
