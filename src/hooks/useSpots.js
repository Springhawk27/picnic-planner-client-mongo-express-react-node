import { useEffect } from "react";
import { useState } from "react"


// useSpots hook 
const useSpots = () => {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/picnicSpots')
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])

    return [spots, setSpots];
}

export default useSpots;