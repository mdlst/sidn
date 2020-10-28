import React, { useEffect, useState } from 'react';

import ButtonReturn from '../ButtonReturn';
import CharactersData from '../CharactersData';

import { WrapperCharactersData } from './style'

function CharactersFromFilm({ id }) {
    const [charactersData, setCharactersData] = useState('')
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch(`https://swapi.dev/api/films/${id}`)
            .then(res => res.json())  
            .then(res => {
                setLoading(false)
                setCharactersData(res.characters)
            })
            .catch(error => {
                console.error(error)
            })
    }, [id])

    if (loading) {
        return 'Loading ...'
    }

    if (charactersData.length === 0) {
        return null;
    }

    return (
        <>
            <ButtonReturn />
            <WrapperCharactersData>
                {
                    charactersData.map((character, index) => <div key={index}><CharactersData character={character} /></div>)
                }
            </WrapperCharactersData>
        </>
    )
}

export default CharactersFromFilm;
