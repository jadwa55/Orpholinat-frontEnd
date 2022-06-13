import React from "react";
// import "./orpholinat.css";
import Navbar from './../../components/layouts/navbar';
import Siderbar from './../../components/layouts/sidebar';
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
    // table :::::::::::::::::::::::::::::::::::::::::
    let tableOrpholinat = "";
    if (!this.state.panding) {
      let ThisClass = this;
      const arr = this.state.infoorpholinat
      console.log(arr);
      tableOrpholinat = arr.map(function (d,index) {
        return (
          
          <tr  key={index}>
          <td className="text-center text-muted">{d.id}</td>
          <td>
            <div className="widget-content p-0">
              <div className="widget-content-wrapper">
               
                <div className="widget-content-left flex2">
                  <div className="widget-heading">{d.description}</div>
                </div>
              </div>
            </div>
          </td>
          <td className="text-center">
            <div className=" btn btn-warning btn-sm" onClick={() => ThisClass.editButton(d.id)}> <i class="fas fa-edit"></i> update</div>
          </td>
          <td className="text-center">
            <div className=" btn btn-danger btn-sm" onClick={() => ThisClass.deleteButton(d.id)}> <i className="pe-7s-trash btn-icon-wrapper"></i> delete</div>
          </td>
        </tr>
        );
      });
    }

    // update :::::::::::::::::::::::::::::::::::::::::
    //  info products :::::::::::::::::::::::::::::::::::::::::::::


    return (
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
  <Navbar />
  <div class="app-main">
  <Siderbar />
  <div class="app-main__outer">
      <div className="container mt-5 " >

      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div className="page-title-icon">
              <i className="pe-7s-note2 icon-gradient bg-mean-fruit">
              </i>
            </div>
            <div>All Category
            </div>
          </div>
          <div className="page-title-actions">
            <button type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom" className="btn-shadow mr-3 btn btn-dark">
              <i className="fa fa-star" />
            </button>
            <div className="d-inline-block dropdown">
              <button type="button" className="btn-shadow  btn btn-info">
                <span className="btn-icon-wrapper pr-2 opacity-7">
                <i class="fas fa-plus-circle"></i>
                </span>
                <a   className="text-decoration-none text-white" href=''>Create Category</a>
              </button>
             
            </div>
          </div>  </div>
                     </div>
      {/* :::::::::::::::::tables categorys::::::::::::::::::::: */}
  <div className="row">
  <div className="col-md-12">
    <div className="main-card mb-3 card">
      <div className="card-header">
        <div className="btn-actions-pane-right">        
        </div>
      </div>
    <div className="table-responsive">
    <table className="align-middle mb-0 table table-borderless table-striped table-hover">
      <thead>
        <tr>
          <th className="text-center">#</th>
          <th >Name</th>
          <th className="text-center">update</th>
          <th className="text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        { tableOrpholinat}        
      </tbody>
    </table>
    </div>    
    </div>
  </div>
  </div>
     
    </div>
 
     
     </div>
    
      </div>
      </div>




    );
  }
}


export default Orpholinat;
