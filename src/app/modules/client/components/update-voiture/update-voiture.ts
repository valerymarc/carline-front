import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { StorageService } from '../../../../auth/services/storage/storage.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-update-voiture',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzSpinModule, NzFormModule, NzSelectModule, NzDatePickerModule, NzButtonModule],
  templateUrl: './update-voiture.html',
  styleUrl: './update-voiture.scss'
})
export class UpdateVoiture implements OnInit{

  //Recuperer la valeur de l'id dans l'url
  id: number;
  voiture: any;
  imageExistante: string | null = null;
   selectedFile: File | null;
   imagePreview: String | ArrayBuffer | null;
   imgChanged: boolean = false;

  listeMarques = ["BMW", "AUDI", "FERRARI", "TESLA", "VOLVO", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDAI", "LEXUS", "KIA", "HAVAL"];
  listeTypes = ["Petrole", "Hybride", "Diesel", "Electrique", "CNG"];
  listeCouleurs = ["Rouge", "Blanc", "Bleue", "Noir", "Orange", "Vert", "Gris", "Argentée"];
  listeTransmissions = ["Manuelle", "Automatique"];

  updateVoitureForm : FormGroup;
  isSpin: boolean = false;

constructor(private service: ClientService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router, private message: NzMessageService){
    this.id = this.activatedRoute.snapshot.params["id"];
}

  ngOnInit(): void {
    this.updateVoitureForm =  this.fb.group({
      marque:[null, Validators.required],
      nom:[null, Validators.required],
      type:[null, Validators.required],
      couleur:[null, Validators.required],
      transmission:[null, Validators.required],
      annee:[null, Validators.required],
      description:[null, Validators.required],
      prix:[null, Validators.required],
     });
    this.getVoiture();
  }

  getVoiture(){
    this.service.getVoitureById(this.id).subscribe((res)=>{
      console.log(res);
      this.voiture = res;
      this.imageExistante = "data:image/jpeg;base64," + res.returnedImg;
        if (res.annee && typeof res.annee === 'string') {
      res.annee = new Date(res.annee);
    }
      this.updateVoitureForm.patchValue(res);
    });
  }

  updateVoiture(){
this.isSpin = true;
    console.log(this.updateVoitureForm.value);
    console.log(this.selectedFile);
    
   let champs: string[] = ["nom", "marque", "type", "couleur" , "transmission", "description", "annee", "prix"];
    const formData: FormData =  new FormData();
    formData.append("img", this.selectedFile);
    for(let i=0; i<champs.length; i++){
      formData.append(champs[i], this.updateVoitureForm.get(champs[i]).value);
    }
    formData.append("userId", StorageService.getUserId());
    this.service.updateVoiture(this.id, formData).subscribe((res) => {
      this.isSpin = false;
      this.message.success("Voiture mise à jour avec succès ! ", {nzDuration:5000})
      this.router.navigateByUrl("/client/dashboard")
    }, error =>{
      this.message.error("Quelque chose n'a pas correctment fonctionné", {nzDuration: 5000})
    });
  }

  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
    this.previewImage();
    this.imgChanged = true;
    this.imageExistante = null;
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
