import React from 'react';
import { useLoadScript } from "@react-google-maps/api"
import Map from "../map/map"
import google_maps_key from "../../config/google_maps_key"
// require('../../config/google_maps_key')
import "./../../styles/main.css"
import AboutMe from "./../about_me/about_me"

const MainPage = (props) => {


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: google_maps_key,
        libraries: ["places"]
    })

    if (!isLoaded) return <div>Loading...</div>

    //this is the wrong page to fix
    return (
        <div className="mapdiv">
            <h1>
                <div className="fun-finder-title">
                    FUN FINDER
                </div>
            </h1>
            <Map />
            <div id="address-details-container"></div>
            <footer>
                <AboutMe />
            </footer>
        </div>
    );
}
export default MainPage;
