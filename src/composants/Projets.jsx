import Projet from './Projet';
import projets from '../donnees/projets';

import './Projets.scss';

import {useState, useEffect, useCallback} from 'react';

export default function Projets() {
    
    // Gestion du scroll
    const [y, setY] = useState(window.scrollY);

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

    return (
        <section className="Projets" style={{top: -y * 3 + window.innerHeight}}>
            <ul className="Projets__liste">
                {projets.map(projet => 
                    <Projet key={projet.id} {...projet} />    
                )}
            </ul>
        </section>
    )
}
