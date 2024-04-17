import React, { useState } from "react";
import { GoogleMap, Marker } from "react-google-maps";

const MapComponent = ({ latitude, longitude }) => {
  const [map, setMap] = useState(null);

  const handleMapLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const center = { lat: latitude, lng: longitude };
  const zoom = 10;

  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {<Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  );
};

export default MapComponent;
