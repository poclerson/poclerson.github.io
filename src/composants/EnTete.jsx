import './EnTete.scss';
import {useState, useEffect, useCallback} from 'react';
import Liens from './Liens';

export default function EnTete({nom, setNom}) {

    // Gestion du scroll
    const [y, setY] = useState(window.scrollY);

    const [titre, setTitre] = useState('Entete entete__sortie');

    const handleNavigation = useCallback(
        e => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
            setTitre('EnTete entete__entree');
            setNom('complet');
        } else if (y < window.scrollY) {
            setTitre('EnTete entete__sortie');
            setNom('initiales');
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



    return (
        <header className={titre}>

            {
                nom == 'complet' ?
                    <>
                        <h1 className="EnTete__nom">PIERRE-OLIVIER CLERSON</h1>
                        <Liens />
                    </>
                :
                <>
                    <h1 className="EnTete__nom">POC</h1>
                </>
            }
        </header>
    )
}
