import React from "react";
import HeaderLinks from "../Components/HeaderLinks";

import drinksArr from "../Data/drinks.json"

let searchword = "pizza";

const Explore = () => {
    return(
        <div id="startpage"> 
        <HeaderLinks/>
        <br/>
        <p> kända problem: 
        <br/> man får söka genom att klicka på explore igen istället för knappen
        <br/> Each child in a list should have a unique "key" prop. 
        <br/> case sensetive sökning
        </p>
        <input
            onChange={(e) => currentInput(e.target.value)}
            placeholder="type here"
        />
            <button onClick={showDrinks}>
                search
            </button>

            {showDrinks()}

        </div>
    )
}

const currentInput = (value) => {
    searchword = value;
}

const showDrinks = () => {
    return(
        <div>
        {drinksArr.cocktails.filter(elem => elem.name.includes(searchword)).map(filtered => (
            <div>
            <p>{filtered.name}</p>
            <img src={filtered.image} key={filtered.name} alt={filtered.name} />
            </div>
        ))}
      </div>
      )
}

export default Explore;