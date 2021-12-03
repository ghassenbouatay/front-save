import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-sortie',
  templateUrl: './sortie.component.html',
  styleUrls: ['./sortie.component.css']
})
export class SortieComponent implements OnInit {
  _hotel: any;
  _dataRead: any;
  displayBasic2: boolean;
  displayBasic: boolean;
  displayBasic3: boolean;
  hotelForm :FormGroup;
  updateId;

  constructor(
    private hotelServ: HomeService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService
    ) { 

    this.hotelForm =this.fb.group({
      name: ['', Validators.compose([
       
        Validators.required])],
        nb_chambre: ['', Validators.required],
        type: ['', Validators.required],
      prix: ['', Validators.required],
      description: ['', Validators.required],
      rate: ['', Validators.required],
    });
}

  ngOnInit() {
    this.display();
  }
  showBasicDialog3() {
    this.displayBasic3 = true;
  }
  showBasicDialog2(item) {
    this._dataRead = item;
    this.displayBasic2 = true;
  }
  showBasicDialog(item) {
    this.hotelForm.setValue({
      name: item.name,
      type: item.type,
      prix: item.prix,
      nb_chambre: item.nb_chambre,
      descrption: item.description,
      rate: item.rate,
  });
    this.updateId = item._id;
    this.displayBasic = true;
}
  display(){
    this.hotelServ.getsortie().subscribe(res=>{
      console.log(res);
     this._hotel =res;    
    })
   }
   addHotel() {
    this.hotelServ.addsortie(this.hotelForm.value).subscribe((res) => {
      console.log(res);
      this.display();
      this.displayBasic3 = false;
    });
}
deleteHotel(id) {
  this.hotelServ.deletesortie(id).subscribe((res) => {
    console.log(res);
    this.display();
  });
}
updateHotel() {
  this.hotelServ
    .updatesortie(this.hotelForm.value, this.updateId)
    .subscribe((res) => {
      console.log(res);
      this.display();
      this.displayBasic = false;
    });
}
confirmDeleteTour(event: Event, id) {
  this.confirmationService.confirm({
    target: event.target,
    message: "Are you sure that you want to delete tour?",
    icon: "pi pi-exclamation-triangle",
    accept: () => {
      //confirm action
      this.deleteHotel(id);
    },
    reject: () => {
      //reject action
    },
  });
}
}
