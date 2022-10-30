import './EnTete.scss';
import Liens from './Liens';

import {useEffect, useCallback} from 'react';

export default function EnTete({ouvert, setOuvert, y, setY}) {
    const gererNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                setOuvert(true);
            } 
            
            else if (y < window.scrollY) {
                setOuvert(false);
            }

            setY(window.scrollY);
        }, [y]
    );
  
    useEffect(() => {
        window.addEventListener("scroll", gererNavigation);
        return () => {
            window.removeEventListener("scroll", gererNavigation);
        };
    }, [gererNavigation]);

    return (
        <header className={ouvert ? "EnTete entete__entree" : "EnTete entete__sortie"}>
            {
                ouvert ?
                    <>
                        <h1 className="EnTete__nom">PIERRE-OLIVIER CLERSON</h1>
                        <p className="EnTete__desc">Finissant en techniques d'intégration multimédia</p>
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
