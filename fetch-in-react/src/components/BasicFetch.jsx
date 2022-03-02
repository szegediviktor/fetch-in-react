// Az API amit használtam https://randomuser.me/

import { useState } from "react";
import { useEffect } from "react";

const url = "https://dog.ceo/api/breeds/image/random";

const fetchFromApi = () => {
    const promise = fetch(url).then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw res;
    });
    return promise;
};

const BasicFetch = () => {
    const [data, setData] = useState("");

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
