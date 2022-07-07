import React from 'react';
import { useLoadScript } from "@react-google-maps/api"
import Map from "../map/map"
import google_maps_key from "../../config/google_maps_key"

const MainPage = (props) => {


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: google_maps_key,
        libraries: ["places"]
        })
    
    if (!isLoaded) return <div>Loading...</div>

    return (
        <div>
            <h1> Welcome To Fun Finder</h1>
            <footer>
                Tap and Snack
                <Map />
                <div id="address-details-container"></div>
            </footer>
        </div>
    );
}
export default MainPage;
