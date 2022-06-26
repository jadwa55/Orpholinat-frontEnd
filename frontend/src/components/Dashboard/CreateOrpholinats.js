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

    handelTelephone(event) {
        this.setState({ telephone: event.target.value });
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

        console.log("An image was submitted: " + this.state.image);
        console.log('A name was submitted: ' + this.state.name);
        console.log('A address was submitted: ' + this.state.address);
        console.log('A city was submitted: ' + this.state.city);
        console.log('A telephone was submitted: ' + this.state.telephone);
        console.log('A image was submitted: ' + this.state.image);
        console.log('A description was submitted: ' + this.state.description);
        console.log('A nombreOrpholin was submitted: ' + this.state.nombreOrpholin);

        try {

            let rescreate = await createOrpholinat (this.state.name,this.state.address,this.state.city,this.state.telephone,this.state.image,this.state.description,this.state.nombreOrpholin)
            if (rescreate.status == 200) {
                window.location = "/OrpholinatDash";
            }
        } catch (error) {
            console.log('error', error);
            handelCatchInAxios(error)
        }
    }    

    render() {
        return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <Navbar />
            <div className="app-main">
                <Siderbar />
                <div className="app-main__outer">
                    <div className="container mt-5">
                        <div className='container'>
                            <div className=' card text-white bg-light 'style={{maxWidth: '100rem'}} >
                                <div className="card-header text-dark">Add a new Orpholinat</div>
                                    <div className="card-body">
                                        <div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputName1" className="form-label">Name</label>
                                                <input type="text"  onChange={this.handleName} className="form-control" id="exampleInputName1" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
                                                <input type="text"  onChange={this.handlAddress} className="form-control" id="exampleInputAddress1" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputCity1" className="form-label">City</label>
                                                <input type="text"  onChange={this.handlCity} className="form-control" id="exampleInputCity1" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputTelephone1" className="form-label">Telephone</label>
                                                <input type="text"  onChange={this.handelTelephone} className="form-control" id="exampleInputTelephone1" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputImage1" className="form-label">Image</label>
                                                <input type="file" onChange={this.handleImage} className="form-control" id="exampleInputImage1" multiple="multiple" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputDescription1" className="form-label">Description</label>
                                                <input type="text" onChange={this.handleDescription} className="form-control" id="exampleInputDescription1" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputNombreOrpholin1" className="form-label">NombreOrpholin</label>
                                                <input type="number" onChange={this.handleNombreOrpholin} className="form-control" id="exampleInputNombreOrpholin1" />
                                            </div>
                                            <button onClick={(e)=>{
                                            e.preventDefault()
                                            this.handleSubmit(e)
                                            }} type="submit" className="btn btn-primary">Submit</button>
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