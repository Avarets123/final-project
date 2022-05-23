import { useEffect, useState } from "react";

function useFetchWithState(url, params = '') {
    const [state, setState] = useState(null);

    useEffect(() => {

        (async function () {
            const req = await fetch(('http://localhost:7070/api' + url + params).trim());
            const res = await req.json();
            setState(res);
        })();

    }, [])

    return state;
}

export default useFetchWithState;