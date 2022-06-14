import React from 'react';
import { createOrpholinat } from './../../services/OrpholinatService'
import { handelCatchInAxios } from "./../../services/AxiosCatchService";
import Navbar from '../layouts/navbar';
import Siderbar from '../layouts/sidebar';


class CreateOrpholinat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', address:'', city:'', telephone:'', image: '', description :'', nombreOrpholin :'',pandingorpholinat:true };

        this.handleName = this.handleName.bind(this);
        this.handlAddress = this.handlAddress.bind(this);
        this.handlCity = this.handlCity.bind(this);
        this.handelTelephone = this.handelTelephone.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleNombreOrpholin = this.handleNombreOrpholin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }
    handleName(event) {
        this.setState({ name: event.target.value });
    }
    
    handlAddress(event) {
        this.setState({ address: event.target.value });
    }
    
    handlCity(event) {
        this.setState({ city: event.target.value });
    }

    handleImage(event) {
        console.log('event.target.files', event.target.files);
        this.setState({ image: event.target.files[0] });
    }

    handleDescription(event) {
        this.setState({ description: event.target.value });
    }

    handleNombreOrpholin(event) {
        this.setState({ nombreOrpholin: event.target.value });
    }

    async handleSubmit() {

        console.log('A name was submitted: ' + this.state.name);
        console.log('A address was submitted: ' + this.state.address);
        console.log('A city was submitted: ' + this.state.city);
        console.log('A telephone was submitted: ' + this.state.telephone);
        console.log('A image was submitted: ' + this.state.image);
        console.log('A description was submitted: ' + this.state.description);
        console.log('A nombreOrpholin was submitted: ' + this.state.nombreOrpholin);

        try {

            let rescreate = await createOrpholinat (this.state.name,this.state.address,this.state.city,this.state.telephone,this.state.image,this.state.description,this.state.nombreOrpholin)

            if (rescreate .status == 200) {
                console.log('Done Req  : ');
                window.location = "/OrpholinatDash";
            }

            console.log('rescreateOrpholinat : ', rescreate);

        } catch (error) {
            console.log('error', error);
            handelCatchInAxios(error)
        }
    }
    

    render() {
        return (
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <Navbar />
            <div class="app-main">
            <Siderbar />
                <div class="app-main__outer">
                    <div className="container mt-5">

                        <div className="app-page-title">
                            <div className="page-title-wrapper">
                                <div className="page-title-heading">
                                    <div className="page-title-icon">
                                        <i className="pe-7s-note2 icon-gradient bg-mean-fruit">
                                        </i>
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
                                        </button>
            
                                    </div>
                                </div>  
                            </div>
                        </div>
    {/* <Cards/> */}
    {/* :::::::::::::::::create categorys::::::::::::::::::::: */}
    <div className='container'>
        <div className=' card text-white bg-light 'style={{maxWidth: '100rem'}} >
            <div className="card-header text-dark">Add a new Orpholinat</div>
                <div className="card-body">
                    <div>
                        <div class="mb-3">
                            <label for="exampleInputName1" class="form-label">Name</label>
                            <input type="text" value={this.state.name} onChange={this.handleName} class="form-control" id="exampleInputName1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputAddress1" class="form-label">Address</label>
                            <input type="text" value={this.state.address} onChange={this.handleAddress} class="form-control" id="exampleInputName1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputCity1" class="form-label">City</label>
                            <input type="text" value={this.state.city} onChange={this.handleCity} class="form-control" id="exampleInputName1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputTelephone1" class="form-label">Telephone</label>
                            <input type="number" value={this.state.telephone} onChange={this.handleTelephone} class="form-control" id="exampleInputName1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputImage1" class="form-label">Image</label>
                            <input type="file" onChange={this.handleImage} class="form-control" id="exampleInputImage1" multiple="multiple" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputDescription1" class="form-label">Description</label>
                            <input type="text" value={this.state.description} onChange={this.handleDescription} class="form-control" id="exampleInputName1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputNombreOrpholin1" class="form-label">NombreOrpholin</label>
                            <input type="number" value={this.state.nombreOrpholin} onChange={this.handlNombreOrpholin} class="form-control" id="exampleInputName1" />
                        </div>
                        <button onClick={(e)=>{
                        e.preventDefault()
                        this.handleSubmit(e)
                        }} type="submit" class="btn btn-primary">Submit</button>
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
export default CreateOrpholinat;