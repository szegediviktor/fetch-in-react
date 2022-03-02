// Az API amit használtam https://randomuser.me/

import { useState } from "react";
import { useEffect } from "react";

// Létrehozom a függvényt amely a fetchet hajtja végre.
const fetchFromApi = () => {
    // fetchelem az url-t, majd .then callbackben megnézem, hogy a res.ok létezik-e (sikeres volt-e a fetch), amennyiben igen,  visszatérek a res json adattá alakított verziójával. (Dzsézonizálom).
    // Ha nem volt sikeres akkor errort dobok.
    const promise = fetch("https://dog.ceo/api/breeds/image/random").then(
        (res) => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        }
    );
    // visszatérek a promise változóval amelyben a res.json() eredménye található
    return promise;
};

const BasicFetch = () => {
    // Statet hozok létre, amelyben tárolom majd az adatokat.
    const [data, setData] = useState("");

    // UseEffect egyszer fut le az első render előtt ([] miatt). Törzsében meghívom a fetchet elvégző függvényünket amely így visszaad egy promise-t amiből már csak egy újabb .then() segítségével adatok nyerek ki, amelyet átadok a szetter függvénynek. Így a setData beállítja a data-t.
    useEffect(() => {
        fetchFromApi().then((data) => {
            setData(data);
        });
    }, []);

    console.log(data);
    return (
        <>
            <h1 className="title">With basic .then fetch</h1>
            <img src={data.message} alt="dog" className="dogimg" />
        </>
    );
};

export default BasicFetch;
