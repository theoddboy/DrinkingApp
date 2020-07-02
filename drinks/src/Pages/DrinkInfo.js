import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import "../Styling/HomePage.css"
import HeaderLinks from "../Components/HeaderLinks";
import drinksArr from "../Data/drinks.json"
import comments from "../Data/comments.json"

const DrinkInfo = (info) => {

    const elem = (info.location.elem + info.location.whichWay);
    console.log("current drink " + elem + " which should be " + drinksArr.cocktails[elem].name)

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");

    const addComment = (name,title,comment,elem) => {
      let today = new Date();   
      let time = today.getHours() + ":" + today.getMinutes();
      comments.push({ 
        name: name, 
        time: time,
       title: title, 
       comment:comment, 
       drink: elem});
    }

    return(
        <div id="startpage">
            <HeaderLinks/>
            <p>{drinksArr.cocktails[elem].name}</p>
            {drinksArr.cocktails[elem].preparation}
            <br/>

            <NavLink to={{
            pathname:'/drinkinfo',
            elem,
            whichWay:-1
            }}
            style={elem === 0 ? {pointerEvents: "none"} : null}
            >
            left
            </NavLink>

            <img 
            src={drinksArr.cocktails[elem].image} 
            alt={drinksArr.cocktails[elem].name} 
            />
            <button className="arrow right" onClick={console.log("hmm")}></button>

            <NavLink to={{
                pathname:'/drinkinfo',
                elem,
                whichWay:+1
                }}
                style={elem === drinksArr.cocktails.length-1 ? {pointerEvents: "none"} : null}
                >
                right
                </NavLink>

                <br/>

                <input
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <br/>
              <input
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
              <br/>
              <input id="comment"
                onChange={(e) => setComment(e.target.value)}
                placeholder="comment"
              />
              <button onClick={() => addComment(name,title,comment,elem)} >Submit</button>

              <br/>

              {comments.filter(drinkNR => drinkNR.drink === elem).map(elem => (
                <div>
                  <p>{elem.name}</p>
                  <p>{elem.time}</p>
                  <br/>
                  <p>{elem.title}</p>
                  <br/>
                  <p>{elem.comment}</p>
                </div>
            ))}
        </div>
    );
}

export default DrinkInfo;