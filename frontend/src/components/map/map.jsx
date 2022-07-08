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

  let types = ['bowling', 'museum', 'restaurant', 'public park', 'zoo', 'bar'];

  const introverted = () => {
    types = ['cafe', 'bakery', 'movie_theater', 'museum']
    console.log(types)
  }

  const extraverted = () => {
    types = ['bowling', 'restaurant', 'bar']
    console.log(types)
  }

  const both = () => {
    types = ['bowling', 'cafe', 'bakery', 'movie_theater', 'bowling', 'museum', 'restaurant', 'amusement park', 'public park', 'zoo', 'bar']
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
    randType =  types[Math.floor(Math.random() * types.length)] 

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

          let container_block = document.getElementById( 'address-details-container' );
          if (document.getElementById("address-name")){
          document.getElementById("address-name").remove()
          }
          if (document.getElementById("address-details")){
            document.getElementById("address-details").remove()
            }

          
          let address_name_to_insert = document.createElement( 'div' );
          address_name_to_insert.innerHTML = `${random.name}` ;
          container_block.appendChild( address_name_to_insert )
          address_name_to_insert.id = 'address-name'

          let address_details_to_insert = document.createElement( 'div' );
          address_details_to_insert.innerHTML = `${random.vicinity}` ;
          container_block.appendChild( address_details_to_insert )
          address_details_to_insert.id = 'address-details'
        // }
      }
    }
  }, []);


    return <div className="container">
        <div className="map-random-buttons-container">
          <p id="personality-question">What is your personality type?</p>
          <button onClick={introverted} className="category-button">Introverted</button>
          <button onClick={extraverted}  className="category-button">Extraverted</button>
          <button onClick={both}  className="category-button">Both</button>
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