import React from 'react';

import { ContainerCharacters, NameCharacter } from './style';

function Characters({ name, height, gender, skin_color, mass }) {
    return (
        <>
        <ContainerCharacters>
            <NameCharacter><h2>{name}</h2></NameCharacter>
            <p>ALtura: {height}</p>
            <p>Género: {gender}</p>
            <p>Color de pelo: {skin_color}</p>
            <p>Peso: {mass}</p>
        </ContainerCharacters> 
        </>
    )
}

export default Characters;
