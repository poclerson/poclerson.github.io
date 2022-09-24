import './Projet.scss';

export default function Projet({titre, sousTitre, description, lien, competences, cheminVersMiniature}) {
    return (
        <li className="Projet">
            <h2 className="Projet__titre">{titre.toUpperCase()}</h2>
            
            <img src={"./images/" + cheminVersMiniature} alt={titre} className="Projet__miniature"/>
        </li>
    )
}

{/* <h3 className="Projet__sous-titre">{sousTitre}</h3>
            <p className="Projet__description">{description}</p>
            <a href={lien} className="Projet__lien">Lien</a>
            <ul className="Projet__competences">
                {competences.map(competence => 
                    <li className="Projet__competences__etiquette" key={competence}>{competence}</li>  
                )}
            </ul> */}

