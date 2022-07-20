/*global google*/
import React, { useState, useMemo, userCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer
} from "@react-google-maps/api"
import mapStyles from "./mapStyles"
import Search from "./search";
import "./../../styles/map.css";


export default function Map() {

  let types = ['cafe', 'bakery', 'museum', 'restaurant', 'public_park', 'bar', 'gym', 'tourist_attraction'];

  const introverted = () => {
    types = ['cafe', 'bakery', 'museum', 'shopping_mall', 'tourist_attraction']
    console.log(types)
  }

  const extraverted = () => {
    types = ['restaurant', 'bar', 'gym', 'tourist_attraction']
    console.log(types)
  }

  const bar = () => {
    types = ['bar']
    console.log(types)
  }

  const bakery = () => {
    types = ['bakery']
    console.log(types)
  }

  const cafe = () => {
    types = ['cafe']
    console.log(types)
  }

  const tourist_attraction = () => {
    types = ['tourist_attraction']
    console.log(types)
  }

  const both = () => {
    types = ['cafe', 'bakery', 'movie_theater', 'museum', 'restaurant', 'amusement park', 'public park', 'bar']
  }

  const center = useMemo(() => ({ lat: 40.73629, lng: -73.99379 }), []);
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
  }

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback(map => {
    mapRef.current = map;
  }, []);


  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
    let map = mapRef.current;

    var randType;
    randType = types[Math.floor(Math.random() * types.length)]

    console.log(randType)

    let request = {
      location: { lat, lng },
      radius: "300",
      type: randType
    };

    let service = new google.maps.places.PlacesService(mapRef.current);
    service.nearbySearch(request, callback);

    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // for (let i = 0; i < results.length; i++) {
        //   let place = results[i];
        //   new google.maps.Marker({
        //     position: place.geometry.location,
        //     map
        //   });
        // console.log(results[i].name)

        const random = results[Math.floor(Math.random() * results.length)];
        new google.maps.Marker({
          position: random.geometry.location,
          map
        });

        let container_block = document.getElementById('address-details-container');
        if (document.getElementById("address-name")) {
          document.getElementById("address-name").remove()
        }
        if (document.getElementById("address-details")) {
          document.getElementById("address-details").remove()
        }


        let address_name_to_insert = document.createElement('div');
        address_name_to_insert.innerHTML = `${random.name}`;
        container_block.appendChild(address_name_to_insert)
        address_name_to_insert.id = 'address-name'

        let address_details_to_insert = document.createElement('div');
        address_details_to_insert.innerHTML = `${random.vicinity}`;
        container_block.appendChild(address_details_to_insert)
        address_details_to_insert.id = 'address-details'
        // }
      } else {
        let container_block = document.getElementById('address-details-container');
        if (document.getElementById("address-name")) {
          document.getElementById("address-name").remove()
        }
        if (document.getElementById("address-details")) {
          document.getElementById("address-details").remove()
        }
        let address_name_to_insert = document.createElement('div');
        address_name_to_insert.innerHTML = `We didn't find anything in this area. Click again :)`;
        container_block.appendChild(address_name_to_insert)
        address_name_to_insert.id = 'address-name'
      }
    }
  }, []);


  return <div className="container">
    <div className="map-random-buttons-container">
      <p id="personality-question">What is your personality type?</p>
      <button onClick={introverted} className="category-button">I'm shy. Choose for me!</button>
      <button onClick={extraverted} className="category-button">I'm an extravert!</button>
      <button onClick={bar} className="category-button">Take me to a bar!</button>
      <button onClick={bakery} className="category-button">I'm hungry. Find food!</button>
      <button onClick={cafe} className="category-button">Craving café coffee!</button>
      <button onClick={tourist_attraction} className="category-button">I'm feeling like a tourist!</button>
      {/* <button onClick={both} className="category-button">Both</button> */}
      <Search panTo={panTo} />
    </div>
    <div className="map">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
        options={options}
        onLoad={onMapLoad}
      >
      </GoogleMap>
    </div>
  </div >
}

// so here we will have a button for introvert a button for randomo and a button for
// extravert which will change the types array
// on click for introverted have a css color change as well and possibly text
// change to that's great