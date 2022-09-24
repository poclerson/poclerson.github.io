import EnTete from './composants/EnTete';
import Liens from './composants/Liens';
import Projets from './composants/Projets';

import './App.scss';
import './sass/fontes.scss';
import Accueil from './composants/Accueil';

import {useState} from 'react';

export default function App() {
    // Gestion du scroll
    const [y, setY] = useState(window.scrollY);

    const [enteteOuverte, setEnteteOuverte] = useState(false);

    return (
        <div className="App">
            <EnTete ouvert={enteteOuverte} setOuvert={setEnteteOuverte} y={y} setY={setY} />
            <Accueil y={y} setY={setY} />
            <Projets enteteOuverte={enteteOuverte} setEnteteOuverte={setEnteteOuverte} y={y} setY={setY}  />
        </div>
    );
}
