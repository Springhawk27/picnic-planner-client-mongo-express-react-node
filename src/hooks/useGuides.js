import { useEffect } from "react";
import { useState } from "react"


// useSpots hook 
const useGuides = () => {
    const [guides, setGuides] = useState([]);
    useEffect(() => {
        fetch('https://scary-demon-31223.herokuapp.com/guides')
            .then(res => res.json())
            .then(data => setGuides(data))
    }, [])

    return [guides, setGuides];
}

export default useGuides;