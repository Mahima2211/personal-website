import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Fieldset } from 'primereact/fieldset';
import { Component } from 'react';

class Main extends Component {
    render(){
    return (
      <div>
        <Fieldset legend="Hi!">
          <p>My name is Mahima and I am a Software Developer by profession. :)</p>
        </Fieldset>
      </div>
    );
    }
  }
  
  export default Main;