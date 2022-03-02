import { useEffect } from "react";
import { useState } from "react";

const InsideUseEffect = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1 className="title">
                All in useEffect fetch - Loading and Error handling too
            </h1>
            {loading ? "Loading the image..." : null}
            {error
                ? "Something went wrong! It's an ERRRRROR! Look at your console"
                : null}
            {data ? (
                <img src={data.message} alt="dog" className="dogimg" />
            ) : null}
        </>
    );
};

export default InsideUseEffect;
