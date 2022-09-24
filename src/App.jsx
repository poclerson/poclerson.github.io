import EnTete from './composants/EnTete';
import Liens from './composants/Liens';
import Projets from './composants/Projets';

import './App.scss';
import './sass/fontes.scss';
import Accueil from './composants/Accueil';

import {useState} from 'react';

export default function App() {
    const [nom, setNom] = useState('initiales');
    return (
        <div className="App">
            <EnTete nom={nom} setNom={setNom} />
            <Accueil />
            <Projets />
        </div>
    );
}
