import './App.css';
import React, {Fragment} from 'react';
import FactShow from './components/FactShow/FactShow';
import FactList from './components/FactList/FactList';

function App() {
  return (
    <div className="App">
      <Fragment>
        <FactShow />
        <FactList />
    </Fragment>
    </div>
  );
}

export default App;
