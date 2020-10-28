import React, {useState, useEffect} from 'react';

import ListOfFilmsCard from '../ListOfFilmsCard';

import { WrapperListOfFilms } from './style'

function ListOfFilms(){
    const [filmsData, setFilmsData] = useState('')
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch('https://swapi.dev/api/films/')
            .then(res => res.json())  
            .then(res => {
                setLoading(false)
                setFilmsData(res)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    if (loading) {
        return 'Loading ...'
    }

    if (filmsData.length === 0) { 
        return null;
    }

    return(
        <WrapperListOfFilms>
            {
                filmsData.results.map(film => <div key={film.episode_id}><ListOfFilmsCard id={film.episode_id} title={film.title} description={film.opening_crawl} director={film.director} releaseDate={film.release_date} /></div>)
            }
        </WrapperListOfFilms>
    );
}

export default ListOfFilms;