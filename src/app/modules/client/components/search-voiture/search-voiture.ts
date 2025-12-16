import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from "ng-zorro-antd/button";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-voiture',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NzSpinModule, NzFormModule, NzSelectModule, NzButtonModule],
  templateUrl: './search-voiture.html',
  styleUrl: './search-voiture.scss'
})
export class SearchVoiture implements OnInit {
listeMarques = ["BMW", "AUDI", "FERRARI", "TESLA", "VOLVO", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDAI", "LEXUS", "KIA", "HAVAL"];
   listeTypes = ["Petrole", "Hybride", "Diesel", "Electrique", "CNG"];
   listeCouleurs = ["Rouge", "Blanc", "Bleue", "Noir", "Orange", "Vert", "Gris", "Argentée"];
   listeTransmissions = ["Manuelle", "Automatique"];


   searchVoitureForm : FormGroup;
   isSpin: boolean = false;
   voitures: any[] = [];


   constructor(private service: ClientService, private fb: FormBuilder){
    
   }

   ngOnInit(): void {
     this.searchVoitureForm =  this.fb.group({
      marque:[null],
      type:[null],
      couleur:[null],
      transmission:[null]
     });
   }

   searchVoiture(){
     this.isSpin = true;
     this.voitures = [];
     this.service.searchVoiture(this.searchVoitureForm.value).subscribe((res) =>{
      this.voitures = res;
      console.log(this.voitures);
      this.isSpin = false;
     }
    );

  

   }
}
