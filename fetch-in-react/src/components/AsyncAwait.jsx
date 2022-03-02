// Ebben a fileban a legegyszerűbb async-await megoldást írom le.
// "https://dog.ceo/api/breeds/image/random"

import { useEffect } from "react";
import { useState } from "react";

const AsyncAwait = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchFromApi();
    }, []);

    const fetchFromApi = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        setData(await response.json());
    };

    return (
        <>
            <h1 className="title">With async - await fetch</h1>
            <img src={data.message} alt="dog" className="dogimg" />
        </>
    );
};

export default AsyncAwait;
