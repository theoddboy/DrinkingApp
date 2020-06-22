import React from "react";
import HeaderLinks from "../Components/HeaderLinks";

let searchword = "pizza";

const Explore = () => {
    return(
        <div id="startpage"> 
        <HeaderLinks/>
        <input
            onChange={(e) => currentInput(e.target.value)}
            placeholder="type here"
        />
            <button onClick={search}>
                search
            </button>
        </div>
    )
}

const currentInput = (value) => {
    searchword = value;
}

const search = () => {
    console.log(searchword);
}

export default Explore;