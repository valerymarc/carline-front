import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSpinModule } from "ng-zorro-antd/spin";
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from "ng-zorro-antd/button";
import { StorageService } from '../../../../auth/services/storage/storage.service';






@Component({
  selector: 'app-post-voiture',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzSpinModule, NzFormModule, NzSelectModule, NzDatePickerModule, NzButtonModule],
  templateUrl: './post-voiture.html',
  styleUrl: './post-voiture.scss'
})

export class PostVoiture implements OnInit {
   listeMarques = ["BMW", "AUDI", "FERRARI", "TESLA", "VOLVO", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDAI", "LEXUS", "KIA", "HAVAL"];
   listeTypes = ["Petrole", "Hybride", "Diesel", "Electrique", "CNG"];
   listeCouleurs = ["Rouge", "Blanc", "Bleue", "Noir", "Orange", "Vert", "Gris", "Argentée"];
   listeTransmissions = ["Manuelle", "Automatique"];


   postVoitureForm : FormGroup;
   isSpin: boolean = false;
   selectedFile: File | null;
   imagePreview: String | ArrayBuffer | null;


   constructor(private service: ClientService, private fb: FormBuilder, private router: Router, private message: NzMessageService){
    
   }

   ngOnInit(): void {
     this.postVoitureForm =  this.fb.group({
      marque:[null, Validators.required],
      nom:[null, Validators.required],
      type:[null, Validators.required],
      couleur:[null, Validators.required],
      transmission:[null, Validators.required],
      annee:[null, Validators.required],
      description:[null, Validators.required],
      prix:[null, Validators.required],
     });
   }

   postVoiture(){
    this.isSpin = true;
    console.log(this.postVoitureForm.value);
    console.log(this.selectedFile);
    
   let champs: string[] = ["nom", "marque", "type", "couleur" , "transmission", "description", "annee", "prix"];
    const formData: FormData =  new FormData();
    formData.append("img", this.selectedFile);
    for(let i=0; i<champs.length; i++){
      formData.append(champs[i], this.postVoitureForm.get(champs[i]).value);
    }
    formData.append("userId", StorageService.getUserId());
    this.service.postVoiture(formData).subscribe((res) => {
      this.isSpin = false;
      this.message.success("Voiture ajoutée avec succès ! ", {nzDuration:5000})
      this.router.navigateByUrl("/client/dashboard")
    }, error =>{
      this.message.error("Quelque chose n'a pas correctment fonctionné", {nzDuration: 5000})
    });
   }

   onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
    this.previewImage();
   }

   previewImage(){
    if (!this.selectedFile) return;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
   }



}
