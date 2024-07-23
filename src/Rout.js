/**
 * Rout Component
 * 
 * This component sets up the routing for the application using React Router.
 *
 * @component
 * @requires react-router-dom
 * @requires ./pages/Home
 * @requires ./pages/Information
 * @requires ./pages/Logement
 * @requires ./pages/Error
 * @requires ./components/Header
 * @requires ./components/Footer
 * 
 Key features:
 * 1. Wraps the entire application in a Router component
 * 2. Includes Header and Footer components on all pages
 * 3. Defines routes for Home, Information, Logement, and Error pages
 *
 * Routing structure:
 * - '/' : Home page
 * - '/apropos' : Information (About) page
 * - '/fiche-logement/:id' : Logement page with dynamic ID parameter
 * - '/*' : Catch-all route for Error page
 *
 * @example
 * return (
 *   <Rout />
 * )
 */


//Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Information from './pages/Information';
import Logement from './pages/Logement';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';


function Rout () {

  // Routing setup
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/apropos' element={<Information />} />
        <Route path={'/fiche-logement/:id'} element ={<Logement />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Rout;
