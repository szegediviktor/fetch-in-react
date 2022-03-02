// Ebben a fileban a legegyszerűbb async-await megoldást írom le.
// "https://dog.ceo/api/breeds/image/random"

import { useEffect } from "react";
import { useState } from "react";

const AsyncAwait = () => {
    // Létrehozok egy statet amelyben tárolni fogom a visszatérő adatokat, és ezen keresztül dolgozni tudok velük.
    const [data, setData] = useState([]);

    // Egyszer lefut a fetchFromApi függvény, amikor az oldal betöltődik. ([] miatt csak egyszer).
    useEffect(() => {
        fetchFromApi();
    }, []);

    // A függvény async lesz és minden ami adatot várunk az await.
    const fetchFromApi = async () => {
        // Egyszerű fetch, amely elmenti változóba a visszatérési értéket. Természetesen a függvény asszinkronitásától függ, tehát await.
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        // A data statet állítom át a setData szetter függvénnyel. Ez a rövidebb, itt lehet úgy is, hogy:
        // const newData = await response.json();
        // setData(newData);
        setData(await response.json());
    };

    return (
        <>
            <h1 className="title">With async - await fetch</h1>
            {/* Mivel csak egy képről van szó ezért kiolvasom a data változó message kulcsához tartozó értéket (ebben tárolja a kép elérési útját) és beállítom az img tag source-jának. */}
            <img src={data.message} alt="dog" className="dogimg" />
        </>
    );
};

export default AsyncAwait;
