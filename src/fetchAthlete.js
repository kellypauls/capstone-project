const fetchAthlete = async ({queryKey}) => {
    const id = queryKey[1];

    const apiRes = await fetch(`http://localhost:3030/athletes?id=${id}`)

    if(!apiRes.ok) {
        throw new Error(`athletes/${id} fetch not ok`);
    }
    // console.log(await apiRes.json())
    return await apiRes.json()
}

export default fetchAthlete;