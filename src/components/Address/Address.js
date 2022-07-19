import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { useState, useRef, useCallback } from 'react'
import Map, { InteractiveMap } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import {render} from "react-dom";

const MAPBOX_TOKEN = 'pk.eyJ1IjoibHN0YXJrMiIsImEiOiJjbDVqdDV4anIwM2NiM2psNjhpd3cyYTI1In0.bjPfymUND6DBvNHIOOMNDg';

/*STATELESS CHILD COMPONENT */
const Address = ({onChange, onClick }) => {
  const [viewport, setViewport] = useState({
    latitude: 41.6764,
    longitude: -86.2520,
    zoom: 8,
  });
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const [settings, setSettings] = useState({
    scrollZoom: true,
    boxZoom: true,
    dragRotate: true,
    dragPan: true,
    keyboard: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
    touchPitch: true,
    minZoom: 0,
    maxZoom: 20
  });

 

  return (
    <div>
      <br />
     <p>Enter Party Location below</p>

        <div
        ref={geocoderContainerRef}
        style={{ position: "relative", zIndex: 3}}
      />
      <InteractiveMap></InteractiveMap>
      <Map
        ref={mapRef}
        {...viewport}
        {...settings}
        width="600"
        height="400"
        onViewportChange={handleViewportChange}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
      </Map>
      <p>Copy and paste into your address box!</p>
     </div>
  );
};

export default Address;

export function renderToDom(container) {
  render(<Address />, container);
}

