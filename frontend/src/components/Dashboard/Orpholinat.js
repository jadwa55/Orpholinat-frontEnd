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
      show: false,
      fullscreen: false,
      newname: null,
      newaddress: null,
      newcity: null,
      newtelephone: null,
      newimage: null,
      newdescription: null,
      newnombreOrpholin: null,
    };

    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleTelephone = this.handleTelephone.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleNombreOrpholin = this.handleNombreOrpholin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      window.location = "/OrpholinatDash";
    } catch (e) {
      console.error(e);
      handelCatchInAxios(e);
    }
  }


  handleName(event) {
    this.setState({ newname: event.target.value });
  }
  handleAddress(event) {
    this.setState({ newaddress: event.target.value });
  }
  handleCity(event) {
    this.setState({ newcity: event.target.value });
  }
  handleTelephone(event) {
      this.setState({ newtelephone: event.target.value });
  }
  handleImage(event) {
    this.setState({ newimage: event.target.value });
  }
  handleDescription(event) {
      this.setState({ newdescription: event.target.value });
  }
  handleNombreOrpholin(event) {
      this.setState({ newnombreOrpholin: event.target.value });
  }
  async handleSubmit(event) {
    event.preventDefault();

  let name = this.state.newname ?? this.state. infopdate.name;
  let address = this.state.newaddress ?? this.state. infopdate.address;
  let city = this.state.newcity ?? this.state. infopdate.city;
  let telephone = this.state.newtelephone ?? this.state. infopdate.telephone;
  let image = this.state.newimage ?? this.state. infopdate.image;
  let decsription = this.state.newdescription ?? this.state. infopdate.decsription;
  let nombreOrpholin = this.state.newnombreOrpholin ?? this.state. infopdate.nombreOrpholin;


  console.log("A name was updating: " + name);

  try {
      let resupdate = await updateOrpholinat(
          this.state.infopdate.id,
          name,address,city,telephone,image,decsription,nombreOrpholin
      );
      console.log(resupdate);

      if (resupdate.status == 200) {
          // window.location = "/dashboard/product";
      }
  } catch (error) {
      console.log(error);
      handelCatchInAxios(error);
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
                    <div className="widget-heading">{d.name}</div>
                  </div>
                </div>
              </div>
            </td>

            <td className="text-center">
              <img className="card-img-top p-3" height={80}
                  src={"http://localhost:5500/" + d?.image}
              />
            </td>

            <td className="text-center">
              <div className="widget-heading">{d.address}</div>
            </td>

            <td className="text-center">
              <div className="widget-heading">{d.city}</div>
            </td>

            <td className="text-center">
              <div className="widget-heading">{d.telephone}</div>
            </td>

            <td className="text-center">
              <div className="widget-heading">{d.description}</div>
            </td>

            <td className="text-center">
              <div className="widget-heading">{d.nombreOrpholin}</div>
            </td>

            <td className="text-center">
              <div className=" btn btn-warning btn-sm" onClick={() => ThisClass.editButton(d.id)} > <i className="fas fa-edit"></i> update</div>
            </td>

            <td className="text-center">
              <div className=" btn btn-danger btn-sm" onClick={() => ThisClass.deleteButton(d.id)}> <i className="pe-7s-trash btn-icon-wrapper"></i> delete</div>
            </td>

          </tr>
        );
      });
    }

    // update :::::::::::::::::::::::::::::::::::::::::

    // let updateForm = "";

    // if (!this.state.pandingupdate) {
    //     updateForm = (
    //       <div className='container '>
    //         <div className=' card text-white bg-muted 'style={{maxWidth: '100rem'}} >
    //           <div className="card-header text-dark">Update orpholinat infos</div>
    //           <div className="card-body">
    //             <div>
    //               <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
    //                 <div className="mb-3">
    //                   <label for="exampleInputName1" className="form-label">Name</label>
    //                   <input type="text" value={this.state.newname ?? this.state.infopdate.name}  onChange={this.handleName}className="form-control" id="exampleInputName1" />
    //                 </div>

    //                 <div className="mb-3">
    //                   <label for="exampleInputAddress1" className="form-label">Address</label>
    //                   <input type="text" value={this.state.newaddress ?? this.state.infopdate.address}  onChange={this.handleAddress}className="form-control" id="exampleInputAddress1" />
    //                 </div>

    //                 <div className="mb-3">
    //                   <label for="exampleInputCity1" className="form-label">City</label>
    //                   <input type="text" value={this.state.newcity ?? this.state.infopdate.city}  onChange={this.handleCity}className="form-control" id="exampleInputCity1" />
    //                 </div>

    //                 <div className="mb-3">
    //                   <label for="exampleInputTelephone1" className="form-label">Telephone</label>
    //                   <input type="number" value={this.state.newtelephone ?? this.state.infopdate.telephone}  onChange={this.handleTelephone}className="form-control" id="exampleInputTelephone1" />
    //                 </div>

    //                 <div className="mb-3">
    //                   <label for="exampleInputImage1" className="form-label">Image</label>
    //                   <input type="file" value={this.state.newimage ?? this.state.infopdate.image}  onChange={this.handleImage}className="form-control" id="exampleInputImage1" />
    //                 </div>
                           
    //                 <div className="mb-3">
    //                     <label for="exampleInputDescription1" className="form-label">Description</label>
    //                     <input type="text" value={this.state.newdescription ?? this.state.infopdate.description}  onChange={this.handleDescription}className="form-control" id="exampleInputDescription1" />
    //                 </div>

    //                 <div className="mb-3">
    //                     <label for="exampleInputNombreOrpholin1" className="form-label">NombreOrpholin</label>
    //                     <input type="number" value={this.state.newnombreOrpholin ?? this.state.infopdate.nombreOrpholin}  onChange={this.handleNombreOrpholin}className="form-control" id="exampleInputNombreOrpholin1" />
    //                 </div>
    //                 <button type="submit" className="btn btn-primary">Submit</button>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
            
    //     );
    // }

    // update ::::::::::::::::::::::::::::::::::::::::::::::::
    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
          <Navbar />
          <div className="app-main">
            <Siderbar />
            <div className="app-main__outer">

              <div className="container mt-5 " >
                <div className="app-page-title">
                  <div className="page-title-wrapper">
                    <div className="page-title-heading">
                      <div className="page-title-icon">
                        <i className="pe-7s-note2 icon-gradient bg-mean-fruit">
                        </i>
                      </div>
                      <div>All Orpholinats</div>
                    </div>

                    <div className="page-title-actions">
                      <button type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom" className="btn-shadow mr-3 btn btn-dark">
                        <i className="fa fa-star" />
                      </button>
                      <div className="d-inline-block dropdown">
                        <button type="button" className="btn-shadow  btn btn-info">
                          <span className="btn-icon-wrapper pr-2 opacity-7">
                          <i className="fas fa-plus-circle"></i>
                          </span>
                          <a   className="text-decoration-none text-white" href='/CreateOrpholinat'>Add an orpholinat</a>
                        </button>
                      </div>
                    </div>  
                  </div>
                </div>
    
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
                              <th >image</th>
                              <th >Address</th>
                              <th >city</th>
                              <th >telephone</th>
                              <th >description</th>
                              <th >nombreOrpholin</th>
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
