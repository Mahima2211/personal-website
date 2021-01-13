import '../stylesheets/Main.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Fieldset } from 'primereact/fieldset';
import { Component } from 'react';

class Main extends Component {
    render(){
    return (
      <div>
        <Fieldset legend="Hey there">
          <p style={{'fontSize': '1.5em'}}>My name is Mahima! Welcome to my page! </p> 
          <i className="pi pi-heart" style={{'fontSize': '1.5em'}}></i>
        </Fieldset>
      </div>
    );
    }
  }
  
  export default Main;