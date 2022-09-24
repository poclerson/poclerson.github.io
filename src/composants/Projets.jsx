import Projet from './Projet';
import projets from '../donnees/projets';

import './Projets.scss';

export default function Projets() {
    return (
        <section className="Projets">
            <ul className="Projets__liste">
                {projets.map(projet => 
                    <Projet key={projet.id} {...projet} />    
                )}
            </ul>
        </section>
    )
}
