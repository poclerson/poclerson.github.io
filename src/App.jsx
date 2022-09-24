import EnTete from './composants/EnTete';
import Liens from './composants/Liens';
import Projets from './composants/Projets';

import './App.scss';
import './sass/fontes.scss';
import Accueil from './composants/Accueil';

export default function App() {
  return (
    <div className="App">
        <EnTete />
        <Accueil />
        <Projets />
        <Liens />
    </div>
  );
}
