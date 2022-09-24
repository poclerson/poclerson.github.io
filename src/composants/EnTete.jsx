import './EnTete.scss';
import {useState, useEffect, useCallback} from 'react';

export default function EnTete() {

    // Gestion du scroll
    const [y, setY] = useState(window.scrollY);

    const [titre, setTitre] = useState('Entete entete__entree');

    const handleNavigation = useCallback(
        e => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
            setTitre('EnTete entete__entree');
            setNom('PIERRE-OLIVIER CLERSON');
        } else if (y < window.scrollY) {
            setTitre('EnTete entete__sortie');
            setNom('POC');
        }
        setY(window.scrollY);
        }, [y]
    );
  
    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
    
        return () => {
        window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    console.log(titre);

    const [nom, setNom] = useState('PIERRE-OLIVIER CLERSON');


    return (
        <header className={titre}>
            <h1 className="EnTete__nom">
                {nom}
            </h1>
        </header>
    )
}
