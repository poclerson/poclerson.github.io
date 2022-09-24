import Projet from './Projet';
import projets from '../donnees/projets';

import './Projets.scss';

import {useState, useEffect, useCallback} from 'react';

export default function Projets({enteteOuverte, setEnteteOuverte, y, setY}) {
    
    // Gestion du scroll
    const gererNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            setY(window.scrollY);
        }, [y]
    );
  
    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", gererNavigation);
        return () => {
            window.removeEventListener("scroll", gererNavigation);
        };
    }, [gererNavigation]);

    function directionProjets() {
        if (window.innerWidth > 1024) {
            return {left: -y * 3 + window.innerWidth + 200}
        }

        return {top: -y * 3 + window.innerHeight}
    }

    return (
        <section className="Projets" style={directionProjets()}>
            <ul className="Projets__liste">
                {projets.map(projet => 
                    <Projet key={projet.id} {...projet}  enteteOuverte={enteteOuverte} setEnteteOuverte={setEnteteOuverte} y={y} setY={setY} />    
                )}
            </ul>
        </section>
    )
}
