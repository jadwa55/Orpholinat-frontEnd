import React from "react";
import "./orpholinat.css";
import {
  getAllOrpholinat,
  getOrpholinat,
} from "./../../../src/services/OrpholinatService";
import { handelCatchInAxios } from "../../services/AxiosCatchService";

class Orpholinat extends React.Component {

  render() {
    console.log(this.state.infoorpholinat);
    return this?.state?.infoorpholinat?.map((d, index) => (
      <div key={index} className="card box ">


          {/* <section id='portfolio'> */}

            <h5>Nos Orphelinats</h5>

            <div className="container orpholinat__container">
              <article className="orpholinat__item">
                <div className="orpholinat__item-image">
                  <img className="card-img-top p-3"
                  src={"http://localhost:5500/" + d?.image}
                  />
                </div>
                <h3 className="card-title">{d?.name}</h3>
                <div className="orphoninat__item-cta">
                  <h4>jzvefbqlb jqrbtreuaq </h4>
                  <a href="" className='btn'>Découvrez plus</a>
                </div>
              </article>
            </div>

          {/* </section> */}


      </div> 

    ));










    
  }
}

export default Orpholinat;
