import './App.scss';
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import BreadcrumbNav from './components/BreadcrumbNav.jsx';
import Accueil from './pages/Accueil';
import Batiment from './pages/Batiment';
import Services from './pages/Services';
import Fabrication from './pages/Fabrication';
import FicheArtisan from './pages/FicheArtisan.jsx';


function App() {
  return (
    <div className="App">
      <NavBar />
        <BreadcrumbNav />

      <Routes>
        <Route path='/' element={<Accueil />}></Route>
        <Route path='/batiment' element={<Batiment />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/fabrication' element={<Fabrication />}></Route>
        <Route path='/FicheArtisan' element={<FicheArtisan />}></Route>
      </Routes>

    </div>
  );
}

export default App;
