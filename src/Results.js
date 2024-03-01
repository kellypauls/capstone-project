import React from "react";
import Athlete from "./Athlete";

const Results = ({athlete}) => {
    return  (
        <div className="results">
            {!athlete.length ? (
                <h1>No Athletes Found</h1>
            ) : (
                athlete.map((ath) => {
                    return (
                        <Athlete 
                        name={ath.name}
                        sport={ath.sport}
                        id={ath.id}
                        key={ath.id}
                        sleepQuality={ath.data.sleepQuality}
                        soreness={ath.data.soreness}
                        date={ath.date}
                        />
                    );
                })
            )
            }
        </div>
    )
}

export default Results;