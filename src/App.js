import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx"
import BreadcrumbNav from './components/BreadcrumbNav.jsx';
import Accueil from './pages/Accueil';
import Categorie from './pages/Categorie.jsx';
import Erreur from './pages/Erreur.jsx';
import FicheArtisan from './pages/FicheArtisan.jsx';


function App() {
  return (
    <div className="App">
      <NavBar /> 
        <BreadcrumbNav />

      <Routes>
        <Route path='/' element={<Accueil />}></Route>
        <Route path="/categorie/:categorie" element={<Categorie />} />
        <Route path="/ficheartisan/:id" element={<FicheArtisan />} />
        <Route path='/erreur' element={<Erreur />}></Route>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
