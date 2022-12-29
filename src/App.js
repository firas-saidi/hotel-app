import './App.css';
import {BrowserRouter as Router , Route ,Routes} from "react-router-dom"
import Main from './componments/Main/Main';
import Footer from './componments/Section/Footer/Footer';
import Header from './componments/Section/Header/Header';

function App() {
  return (
<div className='app'>
<Router basename={'/hotel-app'}>
        <Header/>
       < Routes>
      < Route  exact path="/" element={<Main/>}/>
     
        </Routes>
        <Footer/> 
    </Router>
</div>
  );
}

export default App;
