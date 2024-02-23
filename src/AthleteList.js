import {useState, useEffect} from "react";

const localCache = {};

export default function AthleteList(sport) {
    const [athleteList, setAthleteList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!sport) {
            setAthleteList([]);
        } else if (localCache[sport]) {
            setAthleteList(localCache[sport])
        } else {
            requestAthletes()
        }

        async function requestAthletes() {
            setAthleteList([]);
            setStatus("loading")

            const res = await fetch(
                `http://localhost:3030/athletes?sport=${sport}`
            )
            const json = await res.json();
            localCache[sport] = json.sport || [];
            setAthleteList(localCache[sport]);
            setStatus('loaded')
        }

    }, [sport])
    return [athleteList, status]
}