// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/HomePage/nav/Navbar';
import Header from './components/HomePage/header/Header';
import About from './components/HomePage/about/About';
// import Experience from './components/experience/Experience';
// import Services from './components/services/Services';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/HomePage/contact/Contact';
import Portfolio from './components/HomePage/portfolio/Portfolio';
// import Footer from './components/footer/Footer';
import Orpholinat from './components/Orpholinat/orpholinat';

function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <Navbar />
    //   <About />
    //   {/* <Experience /> */}
    //   {/* <Services /> */}
    //   <Portfolio />
    //   {/* <Testimonials /> */}
    //   <Contact />
    //   {/* <Footer /> */}


    // </div>
    <div className="root">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      <BrowserRouter><Routes>
      <Route path="/" element={(<Orpholinat />)} />
      </Routes></BrowserRouter>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </div>


  );
}

export default App;
