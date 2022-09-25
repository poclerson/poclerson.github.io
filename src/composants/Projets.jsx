import Projet from './Projet';
import projets from '../donnees/projets';

import './Projets.scss';

import {useState, useEffect, useCallback} from 'react';

export default function Projets({enteteOuverte, setEnteteOuverte, y, setY}) {

    return (
        <section className="Projets">
            <ul className="Projets__liste">
                {projets.map(projet => 
                    <Projet key={projet.id} {...projet}  enteteOuverte={enteteOuverte} setEnteteOuverte={setEnteteOuverte} y={y} setY={setY} />    
                )}
            </ul>
        </section>
    )
}
