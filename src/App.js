import './App.css';
import About from './Components/About/About';
import {CardList} from './Components/Article/Article'
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import {cards} from './Components/Article/Article'

function App() {
  return (
    <div className="App">
    <Landing />
    <About />
    <CardList cards={cards} />
    <Footer />
    </div>
  );
}

export default App;
