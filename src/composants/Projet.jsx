export default function Projet({titre, sousTitre, description, lien, competences, cheminVersMiniature}) {
    return (
        <li className="Projet">
            <h3 className="Projet__titre">{titre}</h3>
            <h4 className="Projet__sous-titre">{sousTitre}</h4>
            <p className="Projet__description">{description}</p>
            <a href={lien} className="Projet__lien">Lien</a>
            <ul className="Projet__competences">
                {competences.map(competence => 
                    <li className="Projet__competences__etiquette" key={competence}>{competence}</li>  
                )}
            </ul>
            <img src={cheminVersMiniature} alt={titre} className="Projet__miniature"/>
        </li>
    )
}
