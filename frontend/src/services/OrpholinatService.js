import axios from "axios";
const APP_URL = "http://localhost:5500/api/";


export function getAllOrpholinat() {
    return axios.get(APP_URL + "orpholinat");
  }
  export function getOrpholinat(id) {
    return axios.get(APP_URL + "orpholinat/"+id);
  }
  
  export function createOrpholinat(name, address, city, telephone, description, image, nombreOrpholin) {
    console.log("getAllOrpholinat");
  
    const formData = new FormData();
  
    formData.append("image", image, image.name);
  
    formData.append("name", name);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("telephone", telephone);
    formData.append("description", description);
    formData.append("nombreOrpholin", nombreOrpholin);
  
    console.log("formData : ", formData.get("image"));
  
    return axios.post(APP_URL + "orpholinat/create", formData);
  }
  
  export function updateOrpholinat(id, name) {
    console.log('Orpholinat updating');
    return axios.post(APP_URL + "orpholinat/update/" + id, { name: name });
  }
  
  export function deleteOrpholinat(id) {
    console.log('orpholinat deleted');
    return axios.delete(APP_URL + "orpholinat/delete/" + id);
  }
  