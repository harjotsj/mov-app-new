
import Home from './Components/Home/Home';


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.scss'
import Header from './Components/Header/Header';
import { Footer } from './Components/Footer';
function App() {
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
      
      
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
