import './App.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App bg-dark">
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria/:categoria' element={<ItemListContainer/>} />    
            <Route path='/item/detail/:titulo' element={<ItemListContainer/>} />   
          </Routes>
          <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
