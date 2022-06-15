import React from "react";
import Navbar from './../../components/layouts/navbar';
import Siderbar from './../../components/layouts/sidebar';
import {
  getOrpholinat,
  updateOrpholinat,
} from "./../../../src/services/OrpholinatService";
import { handelCatchInAxios } from "../../services/AxiosCatchService";


class UpdateOrpholinat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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
      this.handleNombreOrpholin = this.handlenombreOrpholin.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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


    // let updateForm = "";

        if (!this.state.pandingupdate) {
            return (
                <div className='container '>
                <div className=' card text-white bg-muted 'style={{maxWidth: '100rem'}} >
                <div className="card-header text-dark">Update orpholinat infos</div>
                <div className="card-body">
                    <div>
                    <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                        <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Name</label>
                        <input type="text" value={this.state.newname ?? this.state.infopdate.name}  onChange={this.handleName}class="form-control" id="exampleInputName1" />
                        </div>

                        <div class="mb-3">
                        <label for="exampleInputAddress1" class="form-label">Address</label>
                        <input type="text" value={this.state.newaddress ?? this.state.infopdate.address}  onChange={this.handleAddress}class="form-control" id="exampleInputAddress1" />
                        </div>

                        <div class="mb-3">
                        <label for="exampleInputCity1" class="form-label">City</label>
                        <input type="text" value={this.state.newcity ?? this.state.infopdate.city}  onChange={this.handleCity}class="form-control" id="exampleInputCity1" />
                        </div>

                        <div class="mb-3">
                        <label for="exampleInputTelephone1" class="form-label">Telephone</label>
                        <input type="number" value={this.state.newtelephone ?? this.state.infopdate.telephone}  onChange={this.handleTelephone}class="form-control" id="exampleInputTelephone1" />
                        </div>

                        <div class="mb-3">
                        <label for="exampleInputImage1" class="form-label">Image</label>
                        <input type="file" value={this.state.newimage ?? this.state.infopdate.image}  onChange={this.handleImage}class="form-control" id="exampleInputImage1" />
                        </div>
                            
                        <div class="mb-3">
                            <label for="exampleInputDescription1" class="form-label">Description</label>
                            <input type="text" value={this.state.newdescription ?? this.state.infopdate.description}  onChange={this.handleDescription}class="form-control" id="exampleInputDescription1" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputNombreOrpholin1" class="form-label">NombreOrpholin</label>
                            <input type="number" value={this.state.newnombreOrpholin ?? this.state.infopdate.nombreOrpholin}  onChange={this.handleNombreOrpholin}class="form-control" id="exampleInputNombreOrpholin1" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            );
            
                
        }


    }

}

export default UpdateOrpholinat;