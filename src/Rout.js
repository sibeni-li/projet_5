import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Information from './pages/Information'
import Logement from './pages/Logement'
import Error from './pages/Error'
import Header from './components/Header';
import Footer from './components/Footer'

function Rout () {
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
    )
}

export default Rout