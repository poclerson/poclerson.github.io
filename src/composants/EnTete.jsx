import './EnTete.scss';
import Liens from './Liens';

import {useState, useEffect, useCallback} from 'react';

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

    console.log(ouvert);

    return (
        <header className={ouvert ? "EnTete entete__ouverte" : "EnTete entete__sortie"}>

            {
                ouvert ?
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
