import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 29.378586, // Default center (San Francisco)
  lng: 47.990341,
};

function MapUserOrder({ markerPosition, setMarkerPosition }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB82nOLnbsXARpkTtyKz9U3t0sGExfazKM", // Replace with your API key
  });

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="md:col-span-2">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        onClick={handleMapClick}
      >
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
    </div>
  );
}

export default MapUserOrder;
