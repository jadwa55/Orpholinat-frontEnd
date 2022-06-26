import axios from "axios";
const APP_URL = "http://localhost:5500/api/";


export function getAllOrpholinat() {
    return axios.get(APP_URL + "orpholin");
  }
  export function getOrpholinat(id) {
    return axios.get(APP_URL + "orpholin"+id);
  }
  
  export function createOrpholin(name, prenom, sexe, age, situation, icon, OrpholinatId) {
    console.log("getAllOrpholinat");
  
    const formData = new FormData();
  
    formData.append("icon", icon, icon.name);
  
    formData.append("name", name);
    formData.append("prenom", prenom);
    formData.append("sexe", sexe);
    formData.append("age", age);
    formData.append("situation", situation);
    formData.append("OrpholinatId", OrpholinatId);
  
    console.log("formData : ", formData.get("icon"));
  
    return axios.post(APP_URL + "orpholinat/create", {});
  }
  
  export function updateOrpholin(id, name, prenom, sexe, age, icon, situation, OrpholinatId) {
    console.log('Orpholin updating');
    return axios.post(APP_URL + "orpholin/update/" + id, { name: name, prenom: prenom, sexe: sexe, age: age, icon: icon, situation: situation, OrpholinatId: OrpholinatId });
  }
  
  export function deleteOrpholin(id) {
    console.log('orpholin deleted');
    return axios.delete(APP_URL + "orpholin/delete/" + id);
  }
  