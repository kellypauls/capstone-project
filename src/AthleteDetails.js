import React from "react"

const AthleteDetails = (props) => {
    return (
        <div>
        <section>
            <h1>{props.name}</h1>
            <h2>{props.sport}</h2>
            <h2>{props.data}</h2>
        </section>
        </div>
    )
}

export default AthleteDetails