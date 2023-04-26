import './App.css';
import Figma from './componenet/figma/Figma';
import {Outlet} from 'react-router-dom'
import Header from './componenet/header/Header';

function App() {
  return (
    <div className="App">
        <Figma/>
        <Header/>
        {/* <Outlet/> */}
    </div>
  );
}

export default App;
