import { React } from 'react';
import './style/App.css';
import StateButton from './UI/Toggle/statebutton';
import Reactlogo from './animation/reactlogo/reactlogo';

function App() {
  return (
    <div className="App">
      <content className="App-header">
        <Reactlogo />
        <StateButton />
      </content>
    </div>
  );
}

export default App;
