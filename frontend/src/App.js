// import logo from './logo.svg';
import './App.css';
import Navbar from './components/HomePage/nav/Navbar';
import Header from './components/HomePage/header/Header';
import About from './components/HomePage/about/About';
// import Experience from './components/experience/Experience';
// import Services from './components/services/Services';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/HomePage/contact/Contact';
import Portfolio from './components/HomePage/portfolio/Portfolio';
// import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      {/* <Experience /> */}
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      {/* <Footer /> */}


    </div>
  );
}

export default App;
