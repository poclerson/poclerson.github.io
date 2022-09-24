import Lien from './Lien';
import liens from '../donnees/liens';
import './Liens.scss';

export default function Liens() {
    return (
        <ul className="Liens">
            {liens.map(lien => 
                <Lien key={lien.id} {...lien} />
            )}
        </ul>
    )
}
