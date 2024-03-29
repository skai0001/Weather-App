import {useState, useEffect} from 'react';

const UseFetch = (initialUrl) => {
    // create state variables
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [url, setUrl] = useState(initialUrl);


    useEffect(() => {
        if (!url) return;
        setIsLoading(true);
        // clear old search
        setData(null);
        setError(null);

        fetch(url)

            .then((response) => response.json())
            .then((data) => {

                // error handling for non existing data
                setIsLoading(false);
                if (data.cod >= 400) {
                    setError(data.message);
                    return;
                }
                setData(data);

            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            });
    }, [url]);
    //console.log(data)
    return {data, error, isLoading, setUrl};
};

export default UseFetch;
