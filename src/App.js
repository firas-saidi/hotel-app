import './App.css';
import {BrowserRouter as Router , Route ,Routes} from "react-router-dom"
import Main from './componments/Main/Main';
import Footer from './componments/Section/Footer/Footer';
import Header from './componments/Section/Header/Header';
import AboutUs from './componments/Section/Pages/AboutUs/AboutUs';

function App() {
  return (
<div className='app'>
<Router basename={'/new-travel-app'}>
        <Header/>
       < Routes>
      < Route  exact path="/" element={<Main/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
        </Routes>
        <Footer/> 
    </Router>
</div>
  );
}

export default App;
