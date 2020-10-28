import React, { useEffect, useState } from 'react';

import Characters from '../Characters';


function CharactersData ({ character }){
    const [characterData, setCharacterData] = useState('')
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch(character)
            .then(res => res.json())
            .then(res => {
                setLoading(false)
                setCharacterData(res)
            })
            .catch(error => {
                console.error(error)
            })
    }, [character])

    if (loading) {
        return 'Loading ...'
    }

    return(

        <div>
            <Characters {...characterData}/>
        </div>
    )
}

export default CharactersData;
