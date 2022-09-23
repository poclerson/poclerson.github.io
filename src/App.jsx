import EnTete from './composants/EnTete';
import Liens from './composants/Liens';
import Projets from './composants/Projets';

import './App.scss';

export default function App() {
  return (
    <div className="App">
        <EnTete />
        <Projets />
        <Liens />
    </div>
  );
}
