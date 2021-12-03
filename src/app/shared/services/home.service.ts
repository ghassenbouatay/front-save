import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  hotel: any;
  constructor(private http: HttpClient) {
    this.hotel = [
      {
        id: "1",
        name: "sahra beach",
        nb_chambre: 6,
        type: "*****",
        prix: 200,
        description: "dfffdddfdd",
        rate: 44,

        image: "assets/images/hotel.png",
      },
      {
        id: "2",
        name: "mouradi beach",
        nb_chambre: 5,
        type: "****",
        prix: 100,
        description: "dfffd",
        rate: 44,

        image: "assets/images/hotel.png",
      },
      {
        id: "3",
        name: "talasa",
        nb_chambre: 6,
        type: "*****",
        prix: 150,
        description: "dfffd",
        rate: 44,

        image: "assets/images/hotel.png",
      },
    ];
  }

  getsortie() {
    return this.http.get("http://localhost:3001/user/sortie");
  }
  addsortie(data) {
    return this.http.post("http://localhost:3001/user/sortie", data);
  }
  deletesortie(id) {
    return this.http.delete("http://localhost:3001/user/sortie/" + id);
  }
  updatesortie(data, id) {
    return this.http.put("http://localhost:3001/user/sortie/" + id, data);
  }

  //////////////////////////////////////////////////////////////////////
  
  getBoat() {
    return this.http.get("http://localhost:3001/user/boat");
  }
  addBoat(data) {
    return this.http.post("http://localhost:3001/user/boat", data);
  }
  deleteBoat(id) {
    return this.http.delete("http://localhost:3001/user/boat/" + id);
  }
  updateboat(data, id) {
    return this.http.put("http://localhost:3001/user/boat/" + id, data);
  }
  ////////////////////////////////////////////////////////////
  
  getsurviver() {
    return this.http.get("http://localhost:3001/user/surviver");
  }
  addsurviver(data) {
    return this.http.post("http://localhost:3001/user/surviver", data);
  }
  deletesurviver(id) {
    return this.http.delete("http://localhost:3001/user/surviver/" + id);
  }
  updatesurviver(data, id) {
    return this.http.put("http://localhost:3001/user/surviver/" + id, data);
  }
  

  ////////////////////////////////////////////////////////////
  
  getsaver() {
    return this.http.get("http://localhost:3001/user/saver");
  }
  addsaver(data) {
    return this.http.post("http://localhost:3001/user/saver", data);
  }
  deletesaver(id) {
    return this.http.delete("http://localhost:3001/user/saver/" + id);
  }
  updatesaver(data, id) {
    return this.http.put("http://localhost:3001/user/saver/" + id, data);
  }
}
