import React, { useState, useReducer, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBattery, faTemperature0 } from '@fortawesome/free-solid-svg-icons';
import Map, { Marker, Popup } from 'react-map-gl';
import streetLamp from '../assets/street-lamp.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMap } from '../context/MapContext';

function MapComponent() {
  const { isLoading, lamp1, lamp2, getLamp1, getLamp2 } = useMap();

  const [viewport, setViewPort] = useState({
    longitude: 120.955716,
    latitude: 14.74311,
    zoom: 15,
  });
  const [popupData, setPopupData] = useState({
    long: 0,
    lat: 0,
    place: '',
    volts: 0,
    power: 0,
    luminosity: 0,
    current: 0,
  });

  const [popUpLongAndLat, setPopUpLongAndLat] = useState({
    long: 0,
    lat: 0,
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const { place, volts, power, luminosity, current } = lamp1;
    if (showPopup) {
      setPopupData({
        place,
        volts,
        power,
        luminosity,
        current,
      });
    }
  }, [lamp1, showPopup, popUpLongAndLat]);

  return (
    <div className="flex p-8">
      <Map
        {...viewport}
        onMove={(evt) => setViewPort(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        style={{ height: 500, width: 1000, display: 'flex' }}
      >
        <Marker
          className="Manila"
          longitude="120.955716"
          latitude="14.743110"
          anchor="bottom"
          onClick={() => {
            getLamp1();
            setShowPopup(true);
            setPopUpLongAndLat({ long: '120.955716', lat: '14.743110' });
          }}
        >
          <img src={streetLamp} height={50} width={50} alt="street lamp" />
        </Marker>

        <Marker
          className="Manila"
          longitude="120.957497"
          latitude="14.741006"
          anchor="bottom"
          onClick={() => {
            getLamp2();
            setShowPopup(true);
            setPopUpLongAndLat({ long: '120.957497', lat: '14.741006' });
          }}
        >
          <img src={streetLamp} height={50} width={50} alt="street lamp" />
        </Marker>

        <Marker
          className="Manila"
          longitude="120.957844"
          latitude="14.741041"
          anchor="bottom"
          onClick={() => {
            getLamp1();
            setShowPopup(true);
            setPopUpLongAndLat({ long: '120.957844', lat: '14.741041' });
          }}
        >
          <img src={streetLamp} height={50} width={50} alt="street lamp" />
        </Marker>

        {showPopup && (
          <Popup
            longitude={popUpLongAndLat.long}
            latitude={popUpLongAndLat.lat}
            anchor="right"
            offset={[-20, -30]}
            onClose={() => {
              setShowPopup(false);
            }}
            closeOnClick={false}
          >
            <p>
              <b>{popupData.place} Lamp</b>
            </p>
            <p>
              <FontAwesomeIcon icon={faTemperature0} />: 20°
            </p>
            <p>V: {popupData.volts}</p>
            <p>P: {popupData.power}</p>
            <p>I: {popupData.current}</p>
            <p>Lux: {popupData.luminosity}</p>
            <p>
              <FontAwesomeIcon icon={faBattery} />: 20%
            </p>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default MapComponent;
