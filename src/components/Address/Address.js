import React, {useState} from "react";
import  Map, {MapProvider, Marker, GeolocateControl} from "react-map-gl";
import mapboxgl from "mapbox-gl";
import {render} from 'react-dom';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.css'


const MAPBOX_TOKEN = 'pk.eyJ1IjoibHN0YXJrMiIsImEiOiJjbDVqdDV4anIwM2NiM2psNjhpd3cyYTI1In0.bjPfymUND6DBvNHIOOMNDg';
//mapboxgl.accessToken = 'pk.eyJ1IjoibHN0YXJrMiIsImEiOiJjbDVqdDV4anIwM2NiM2psNjhpd3cyYTI1In0.bjPfymUND6DBvNHIOOMNDg';



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
    maxZoom: 20,

  });





  return (
    <div class="container">
     
      <hr />
     <h3>Address</h3>
     <p>Enter Party Location below</p>
      
      <form id ="location-form">
        <input id = "loctaion-input" class= "form-control form-control-lg" text="test" />
        <button type="submit" class="btn btn-primary btn-block">
          Submit
        </button>
        </form>
  <div class="card-block" id="formatted-address"></div>
  <div class="card-block" id="geometry"></div>
        <br />
        <div>
          <div>

          </div>
        <MapProvider> 
      <Map
      initialViewState ={initialViewState}
      {...settings}
      style={{width: 600, height: 400}}
      mapboxAccessToken={MAPBOX_TOKEN} 
      mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={ -86.238899} latitude={41.699280} color="red" />
        <geocoder />
        <GeolocateControl />
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

