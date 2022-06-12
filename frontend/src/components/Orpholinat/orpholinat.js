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
    // info  orpholinat:::::::::::::::::::::::::::::::::::::::::
    // let orpholinat = "";

    // let src = "http://localhost:5500/" + orpholinat.image;
    return this?.state?.infoorpholinat?.map((d, index) => (
      <div key={index} className="card box " style={{ maxWidth: "20rem" }}>
        <a href="#" className="fas fa-heart" />
        <img
          className="card-img-top p-3"
          src={"http://localhost:5500/" + d?.image}
          height={"150px"}
          alt="Card image cap"
        />
        <div className="card-body">
          <h3 className="card-title">{d?.name}</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
      </div>
    ));
  }
}

export default Orpholinat;
