import React from 'react';

import { ContainerFilmCard, TitleFilmCard } from './styles';

function ListOfFilmsCard({ id, title, description, director, releaseDate }){
    return(
        <ContainerFilmCard href={`/?film=${id}`}>
            <TitleFilmCard>{title}</TitleFilmCard>
            <p>{description}</p>
            <div>
                <div>{director}</div>
                <div>{releaseDate}</div>
            </div>
        </ContainerFilmCard>
    );
}

export default ListOfFilmsCard;
