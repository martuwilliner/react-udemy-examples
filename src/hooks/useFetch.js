import {useState, useEffect} from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {

        setState({data: null, loading: true,error: null}); /* con esto entre cada siguiente , se reproduce el loading... */

        fetch(url)
        .then(response => response.json())
        .then(data =>{

            setState({

                loading: false,
                error: null,
                data

            });

        })
    },[url])

    return state;

}
