import Lien from './Lien';
import liens from '../donnees/liens';

export default function Liens() {
    return (
        <ul className="Liens">
            {liens.map(lien => 
                <Lien key={lien.id} {...lien} />
            )}
        </ul>
    )
}
