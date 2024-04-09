
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';                                             
import './css/global.scss';
import './css/local.scss';
import Header from './layout/Header/Header';
import Home from './pages/Home';
import './css/font.css'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style




function App() {
  return (
    <div className="App">
     <Home/>
       
    </div>
  );
}

export default App;
