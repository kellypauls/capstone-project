import React from "react"
import { Link, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import fetchAthlete from "./fetchAthlete";


const AthleteDetails = () => {
    const {id} = useParams();
    const results = useQuery(["details", id], fetchAthlete);

    if (results.isLoading) {
        return (
            <div className="loading-screen">
                <h2 className="loader">🙂</h2>
            </div>
        )
    }
    // console.log(results.data[0])

    const athlete = results.data[0]
    return (
        <div className="details">
            <div key={athlete.id}>
                <h1>{athlete.name}</h1>
                <h2>{athlete.sport}</h2>
                <h3>sleep quality: {athlete.data.sleepQuality}</h3>
                <h4>fatigue: {athlete.data.fatigue}</h4>
                <h4>soreness: {athlete.data.soreness}</h4>
                <Link to={'/'}><button>Return to Home Page </button></Link>
            </div>

        
        </div>
    )
}

export default AthleteDetails