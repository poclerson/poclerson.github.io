export default function Lien({nom, lien, icone}) {
    return (
        <li className="Lien">
            <a href={lien}>{icone}</a>
        </li>
    )
}
