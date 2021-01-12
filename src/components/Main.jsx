import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Fieldset } from 'primereact/fieldset';
import { Component } from 'react';

class Main extends Component {
    render(){
    return (
      <div>
        <Fieldset legend="Hi">
          <p>My name is Mahima! Welcome to my page! :)</p>
        </Fieldset>
      </div>
    );
    }
  }
  
  export default Main;