import React from "react";
import {NavLink} from "react-router-dom";


const HeaderLinks = () =>{
    return(
        <div>
            <NavLink to="/home" activeClassName="is-active">Home</NavLink>
                <br/>
            <NavLink to="/explore" activeClassName="is-active">Explore</NavLink>
        </div>
    )
}

export default HeaderLinks;