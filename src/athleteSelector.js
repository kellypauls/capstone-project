import React, {useState, useEffect} from "react";
import AthleteDetails from "./AthleteDetails";
import AthleteList from "./AthleteList";

const sports = [
    "baseball",
    "softball",
    "gymnastics",
    "soccer",
    "wrestling",
    "football",
    "lacrosse",
    "hockey"
]

const AthleteSelector = () => {
    const [sport, setSport] = useState("");
    const [athlete, setAthlete] = useState([])
    const [athletes] = AthleteList(sport)

    // useEffect(() => {
    //     requestAthletes();
    //     console.log(sport)
    // },[sport])

async function requestAthletes() {
        const res = await fetch(
            `http://localhost:3030/athletes?sport=${sport}`
        );
        const json = await res.json();
        setAthlete(json)
        console.log(res)
    }
   
    // const handleChange = (e) => {
    //     setSport(e.target.value);
    //     requestAthletes();
    //     }

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
            {/* <select 
                id="athlete"
                value={athlete}
                onChange={(e) => {
                setAthlete(e.target.value)
                }}>
        <option/>
        {athletes.map((athlete) => {
            return (
                <option key={athlete} value={athlete}>{athlete}</option>
            )})
        }
          </select> */}
            <h3>you selected: {sport}</h3>
            <button>Submit</button>
        </form>
        <AthleteDetails name={athlete.name} sport={athlete.sport} key={athlete.id}/>
        </div>
    )
}


export default AthleteSelector