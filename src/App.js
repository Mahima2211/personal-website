import logo from './logo.svg';
//import './App.css';
import 'primereact/resources/themes/luna-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Fieldset } from 'primereact/fieldset';
import { useState } from 'react';
import Main from './components/Main'
import Images from './components/Images'

function App() {
  return (
    <div>
      <Main></Main>
      <Images></Images>
    </div>
  );
}

export default App;
