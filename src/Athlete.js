import React from "react";
import { Link } from "react-router-dom";


function Athlete({name, date, sport, id}) {
    // console.log(data.monday)
    return (
        <div className="Athlete">
            {/* {athletes.map((athlete) => ( */}
                    <div className="individual-athlete" key={id}>
                        <h1>{name}</h1>
                        <h2>{date}</h2>
                        <h3>{sport}</h3>
                        {/* <Link to={`/athletes/${athlete.id}`}><button>Go to Athlete Details Page</button></Link> */}
                    </div>
                {/* )) */}
            {/* } */}
            {/* <h1>{data.name}</h1>
            <h2>{data.date}</h2>
            <h2>{data.weekday.monday.fatigue}</h2>
            <h3>{data.averageScore}</h3> */}
        </div>
    )
}

export default Athlete;