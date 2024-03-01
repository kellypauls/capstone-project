import React from "react";
import { Link } from "react-router-dom";


const Athlete = (props) => {
    const {name, sport, id} = props
    return (
        <div className="Athlete" key={id}>
                <h1>{name}</h1>
                <h3>{sport}</h3>
        <Link to={`/athletes/${id}`}><button>Go to Athlete Details Page</button></Link>
        </div>
    )
}

export default Athlete;