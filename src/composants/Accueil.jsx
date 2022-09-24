import './Accueil.scss';
import {useEffect, useCallback} from 'react'

export default function Accueil({y, setY}) {
    // Gestion du scroll
    const gererNavigation = useCallback(
        e => {
            const window = e.currentTarget;
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

    function opaciteFondCouleur() {
        if (window.innerWidth >= 1024) {
            return {opacity: y / 200}
        }

        return {opacity: 0}
    }

    return (
        <section className="Accueil">
            <div className="Accueil__infos">
                <h1 className="Accueil__endroit">Montréal, QC</h1>
                <h4 className="Accueil__date">27 août 2020</h4>
            </div>
            <img src="images/po.JPEG" alt="" className="Accueil__fond"/>
            <div className="Accueil__couleur-fond" style={opaciteFondCouleur()}></div>
        </section>
    )
}
