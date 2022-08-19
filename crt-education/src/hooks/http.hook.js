import {useState, useCallback} from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const response = useCallback(async (url, method = "GET", body = null, headers = {"Content-Type": "application/json", 'Accept': 'application/json'} ) => {

        setLoading(true);

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            
            return data;
        } catch(e) {
            setError(e.message);
            throw e;
        } finally {
            setLoading(false);
        }

    }, [])

    return {loading, response, error};
}