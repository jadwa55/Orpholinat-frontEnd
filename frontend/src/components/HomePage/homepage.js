// import logo from './logo.svg';
import '../../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './nav/Navbar';
import Header from './header/Header';
import About from './about/About';
import Contact from './contact/Contact';
import Portfolio from './portfolio/Portfolio';
import HeroHeader from './heroHeader/Hero'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroHeader />
      <Navbar />
      <About />
      <Portfolio />
      <Contact />


    </div>
  );
}

export default App;
