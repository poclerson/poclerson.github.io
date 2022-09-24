import './Accueil.scss';

export default function Accueil() {
    return (
        <section className="Accueil">
            <div className="Accueil__infos">
                <h1 className="Accueil__endroit">Montréal, QC</h1>
                <h3 className="Accueil__date">27 août 2020</h3>
            </div>
            <img src="images/po.JPEG" alt="" className="Accueil__fond"/>
        </section>
    )
}
