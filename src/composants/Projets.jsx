import Projet from './Projet';
import projets from '../donnees/projets';

export default function Projets() {
    return (
        <section className="Projets">
            <h2 className="Projets__titre">Projets</h2>
            <ul className="Projets__liste">
                {projets.map(projet => 
                    <Projet key={projet.id} {...projet} />    
                )}
            </ul>
        </section>
    )
}
