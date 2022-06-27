import React from "react";
import "./orpholinat.css";
import Header from '../../components/HomePage/header/Header';
// import Navbar from './../../components/HomePage/header/Header';
import {
  getAllOrpholinat,
} from "./../../../src/services/OrpholinatService";
import { handelCatchInAxios } from "../../services/AxiosCatchService";


class Orpholinat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoorpholinat: [],
      panding: true,  
      show: false,
      fullscreen: false,
    };
  }

  componentWillMount() {
    this.infoOrpholinat();
  }

  showModal = () => {
    this.setState({ show: !this.state.show });
    this.setState({ fullscreen: !this.state.fullscreen });
  };

  async infoOrpholinat() {
    try {
      let res = await getAllOrpholinat(); // get axios promise
      let data = res.data.orpholinat;
      console.log("ALL orpholinats :", res);
      // get all data from pomise
      this.setState({ infoorpholinat: data }); // Set data to state
      this.setState({ panding: false }); // Change status panding for render data
    } catch (e) {
      console.error(e);
    }
  }

  getCards(){
    return this?.state?.infoorpholinat?.map((d, index) => (
              <article key={index} className="orpholinat__item">
                <div className="orpholinat__item-image">
                  <img className="card-img-top p-3"
                  src={"http://localhost:5500/" + d?.image}
                  />
                </div>
                <h3 className="card-title">{d?.name}</h3>
                <div className="orphoninat__item-cta">
                  <h4>{d?.city} </h4>
                  <a href="/OrpholinatDetail" className='btn'>Découvrez plus</a>
                </div>
              </article>
    ))
  }
  
  render() {
    return (
      <div>
        <Header />
        <div className="card box ">
            <section id='portfolio' className="vh">
              <h5 className="page-title">Nos Orphelinats</h5>
              <div className="container orpholinat__container">
                { this.getCards() }
                { this.getCards() }
                {/* { this.getCards() } */}
              </div>
            </section>
        </div> 
      </div>
    );
  }
}

export default Orpholinat;
