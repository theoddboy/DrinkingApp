import React from "react";
import {NavLink} from "react-router-dom";
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
        <br/> du hamnar numret din drink har i hela listan istället för din filterarde lista 
        <br/> kommentarer fältet uppdateras bara om du lämnar å kommer tillbaka till sidan  
        </p>
        <input
            onChange={(e) => searchword = (e.target.value)}
            placeholder="type here"
        />
            <button onClick={() => showDrinks}>
                search
            </button>

            {showDrinks()}

        </div>
    )
}

const showDrinks = () => {
    return(
        <div>
        {drinksArr.cocktails.filter(elem => elem.name.includes(searchword)).map((filtered, elem) => (
            <div>
                <p>{filtered.name}{elem}</p>
                <NavLink to={{
                pathname:'/drinkinfo',
                elem,
                whichWay:0
                }}>

            <img src={filtered.image} key={elem} alt={filtered.name} />       
            </NavLink>
            </div>
        ))}
      </div>
      )
}

export default Explore;