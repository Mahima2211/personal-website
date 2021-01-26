import './stylesheets/App.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { useState} from 'react';
import Main from './components/Main'
import Images from './components/Images'
import  Sidepane from './components/Sidepane';

function App() {
  const[aboutButtonClicked, setAboutButtonClicked]= useState(false);

  const showAboutData = () => {setAboutButtonClicked(true)}


   return (
    //   <div className="p-grid p-dir-col">
    //   <div className="p-col p-grid App-div-all">
    //     <div className="p-col-3 App-div">
    //       <Sidepane onABoutClicked = {this.showAboutData}></Sidepane>
    //     </div>
    //     <div className="p-col-6 App-div">
    //       <Main></Main>
    //     </div>
    //     <div className="p-col-3"></div>
    //   </div>
    //   <div className="p-col App-div-all">
    //     <Images></Images>
    //   </div>
    // </div>

    <div className="p-col p-grid App-div-all">
      <div className="p-col-2 App-div">
        <Sidepane></Sidepane>
      </div>
      <div className="p-col-10"> {/* from here we change based on side pane button clicked */}


        <div className = "p-grid p-dir-col">
          <div className="p-col p-grid App-div-all">
            <div className="p-col-1"></div>
            <div className="p-col-6 App-div">
              <Main></Main>
            </div>
            <div className="p-col-3"></div>
          </div>
          <div className ="p-col App-div-all">
            <Images></Images>
          </div>
        </div>



      </div>
    </div>
  );
  
}

export default App;
