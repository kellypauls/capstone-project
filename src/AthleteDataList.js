import React from "react";
import AvgSleep from "./AvgSleep";

const AthleteDataList = ({athlete}) => {
    console.log(athlete)
    const filter = athlete.map((result) => {
        return (
            <AvgSleep 
                key={result.id}
                name={result.name}
                data={result.data.motivation}
                />
                
        )
        
    })
    return <div>{filter}</div>
};

export default AthleteDataList;