import React from "react";
import "./orpholinat.css";
import {
  getAllOrpholinat,
  getOrpholinat,
  createOrpholinat,
  updateOrpholinat,
  deleteOrpholinat,
} from "./../../../src/services/OrpholinatService";
import { handelCatchInAxios } from "../../services/AxiosCatchService";

class Orpholinat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoorpholinat: [],
      panding: true,
      infouproducts: {},
      pandingproducts: true,
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
      console.log("ALL orpholinats :", data);
      // get all data from pomise
      this.setState({ infoorpholinat: data }); // Set data to state
      this.setState({ panding: false }); // Change status panding for render data
    } catch (e) {
      console.error(e);
    }
  }

  async editButton(id) {
    try {
      let res = await getOrpholinat(id); // get axios promise
      let data = res.data;
      console.log("Orpholinats :", data);
      this.setState({ infopdate: data });
      this.setState({ pandingupdate: false });
    } catch (e) {
      console.error(e);
    }
  }
  async deleteButton(id) {
    try {
      let deleteorpholinat = await deleteOrpholinat(id);
      console.log("deleteButton:", deleteorpholinat);
      alert("orpholinat is deleted!");
      // window.location = "/dashboard/category";
    } catch (e) {
      console.error(e);
      handelCatchInAxios(e);
    }
  }

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
