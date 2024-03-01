import React, {useState} from "react";
import Results from "./Results";

const sports = [
    "baseball",
    "softball",
    "gymnastics",
    "soccer",
    "wrestling",
    "football",
    "lacrosse",
    "hockey",
]

const AthleteSelector = () => {
    const [sport, setSport] = useState("");
    const [athlete, setAthlete] = useState([]);


async function requestAthletes() {
        const res = await fetch(
            `http://localhost:3030/athletes?sport=${sport}`
        );
        const json = await res.json();
        setAthlete(json)
    }

    return (
        <div className="selector">
            <form
            onSubmit={(e) => {
                e.preventDefault();
                requestAthletes();
            }}>
            <select 
                id="sport"
                value={sport}
                onChange={(e) => {
                    setSport(e.target.value)
                }}>
                <option/>
                {sports.map((sport) => {
                    return (
                        <option key={sport} value={sport}>
                            {sport}
                        </option>
                    ) 
                })}
            </select>
            <button>Select Sport</button>
            </form>
            {/* <form
            onSubmit={(e) => {
                e.preventDefault();
                navigate(`/athletes/:${athlete.id}`)
            }
            }>
            <select 
                id="athlete"
                value={athlete}
                onChange={(e) => {
                setAthlete(e.target.value)
                console.log(athlete)
                }}>
        <option/>
        {athlete.map((athlete) => {
            return (
                <option key={athlete.id} value={athlete.name}>{athlete.name}</option>
            )})
        }
          </select>
            {/* <h3>you selected: {athlete.map((ath) => {
                return (
                    <h1 id={ath.id}>{ath.name}</h1>
                )
            })}</h3> */}
            {/* <button>Select Athlete</button> */}
             {/* </form> */}
       
        <Results athlete={athlete}/>
        </div>
    )
}


export default AthleteSelector