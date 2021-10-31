import { useEffect } from "react";
import { useState } from "react"


// useSpots hook 
const useSpots = () => {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('https://scary-demon-31223.herokuapp.com/picnicSpots')
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])

    return [spots, setSpots];
}

export default useSpots;