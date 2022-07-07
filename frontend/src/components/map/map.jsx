/*global google*/
import React, { useState, useMemo, userCallback, useRef } from "react";
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer
} from "@react-google-maps/api"
// import mapStyles from "./../mapStyles"
import Search from "./search";
import "./../../styles/map.css"

export default function Map() {

    const center = useMemo(() => ({ lat: 40.73629, lng: -73.99379 }), []);
    const options = {
        // styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true
    }

    const mapRef = React.useRef();
  const onMapLoad = React.useCallback(map => { 
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(12);
    let map = mapRef.current;

    var randType;
    const types = ['cafe', 'bowling', 'museum', 'restaurant', 'amusement park', 'public park', 'zoo', 'bar'];
    randType =  types[Math.floor(Math.random() * types.length)] 
    // console.log('lookin for type', randType) =>giving random type to search query
    // trial code 
    let request = { 
      location: { lat, lng },
      // seems that radius is what drops pins on the map
      radius: "300",
      type: randType
    };  

    let service = new google.maps.places.PlacesService(mapRef.current);
    service.nearbySearch(request, callback);
    // service.getDetails(request, callback)
    // service.textSearch(request, callback);

    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          let place = results[i];
          new google.maps.Marker({
            position: place.geometry.location,
            map
          });
          // console.log(results[i].name)
        //   console.log(results[i].vicinity)

        let container_block = document.getElementById( 'address-details-container' );
        
        let address_name_to_insert = document.createElement( 'div' );
        address_name_to_insert.innerHTML = `${results[i].name}` ;
        container_block.appendChild( address_name_to_insert )
        address_name_to_insert.id = 'address-name'

        let address_details_to_insert = document.createElement( 'div' );
        address_details_to_insert.innerHTML = `${results[i].vicinity}` ;
        container_block.appendChild( address_details_to_insert )
        address_details_to_insert.id = 'address-details'
        }
      }
    }
  }, []);


    return <div className="container">
        <div className="controls"><h1>Map</h1></div>
        <Search panTo={panTo} />
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
        {/* <div id="address-details-container"></div> */}
    </div >
}