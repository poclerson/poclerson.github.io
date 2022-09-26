import './Projet.scss';
import {useState, useCallback, useEffect} from 'react';

export default function Projet({titre, date, sousTitre, description, lien, competences, cheminVersMiniature, couleur, enteteOuverte, setEnteteOuverte, y, setY}) {
    const [ouvert, setOuvert] = useState(false);

    // Gestion du scroll

    const gererNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (y != window.scrollY) {
                // Fermer la fenetre d'informations quand on scroll
                setOuvert(false);
            }
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

    function determinerCouleur() {
        return {color: couleur == "pale" ? "rgb(255, 244, 180)" : "rgb(25, 0, 255)"}
    }

    return (
        <li 
            className="Projet"
            onClick={() =>  {
                setOuvert(!ouvert);
                setEnteteOuverte(false);
            }}
        >

            <div className="Projet__couverture">
                <div className="Projet__couverture__infos">
                    <h2 className="Projet__couverture__infos__titre" style={determinerCouleur()} >{titre.toUpperCase()}</h2>
                    <h4 className="Projet__couverture__infos__date" style={determinerCouleur()} >{date}</h4>
                </div>
                <img src={"./images/" + cheminVersMiniature} alt={titre} className="Projet__couverture__miniature"/>
            </div>

            <div className={ouvert ? "Projet__modale ouvert" : "Projet__modale"}>
                <div className="Projet__modale__image">
                    <a href={lien} className="Projet__modale__image__lien">
                        <h2 className="Projet__modale__image__lien__titre">{titre.toUpperCase()}</h2>
                    </a>
                    <img src={"./images/" + cheminVersMiniature} alt={titre} className="Projet__modale__image__miniature"/>
                </div>
                <div className="Projet__modale__infos">
                    <h3 className="Projet__modale__infos__sous-titre">{sousTitre}</h3>
                    <p className="Projet__modale__infos__description">{description}</p>
                    <h4 className="Projet__modale__infos__titre-competences">Compétences</h4>
                    <ul className="Projet__modale__infos__competences">
                        {competences.map(competence => 
                            <li className="Projet__modale__infos__competences__etiquette" key={competence}>
                                <p className="Projet__modale__infos__competences__etiquette__texte">{competence}</p>
                            </li>  
                        )}
                    </ul>
                </div>
            </div>
        </li>
    )
}

{/*  */}

