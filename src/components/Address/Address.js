 import React, {useState} from "react";
import Map,{MapProvider, Marker} from "react-map-gl";
import {render} from 'react-dom';

import 'mapbox-gl/dist/mapbox-gl.css';
/*STATELESS CHILD COMPONENT */
const Address = ({ onChange, onClick }) => {

  const initialViewState = {
    latitude: 41.6764,
    longitude: -86.2520,
    zoom: 11,
    bearing: 0
  };
  
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
      <hr />
     <h3>Address</h3>
     <p>Enter Party Location below</p>
      <form>
        <input text="test" onChange={onChange} />
        <button type="submit" onClick={onClick}>
          Submit
        </button>
        </form>
        <br />
        <div>
        <MapProvider> 
      <Map
      initialViewState ={initialViewState}
      {...settings}
      style={{width: 600, height: 400}}
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN} 
      mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        Marker Here
      </Map>
      </MapProvider>
     </div>
   </div>
  );
};

export default Address;

export function renderToDom(container) {
  render(<Address />, container);
}

