import React from "react";
import drinks from "../Pictures/drinks.jpg"
import "../Styling/HomePage.css"
import HeaderLinks from "../Components/HeaderLinks";

const home = () => {
    return(
            <div id="startpage">
                <HeaderLinks/>
                <h1>find your favorite drink</h1>
                <p>write the name of your favorite drink in the searchbar to find out how to make it</p>
                <img src={drinks} alt="drinks" />
            </div>
    );
}

export default home;
