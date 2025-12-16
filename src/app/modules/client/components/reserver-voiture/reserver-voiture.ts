import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzFormModule } from "ng-zorro-antd/form";
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { StorageService } from '../../../../auth/services/storage/storage.service';

@Component({
  selector: 'app-reserver-voiture',
  imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzSpinModule, NzButtonModule, NzInputNumberModule],
  templateUrl: './reserver-voiture.html',
  styleUrl: './reserver-voiture.scss'
})
export class ReserverVoiture implements OnInit{

  id:number;
  voiture: any;
  bidForm: FormGroup;
  isSpin: boolean = false;

  constructor(private service: ClientService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router, private message: NzMessageService ){
    this.id = this.activatedRoute.snapshot.params["id"];
}

ngOnInit(): void {
 this.bidForm =  this.fb.group({
      prix:[null, Validators.required],
     });

    this.getVoiture();
  }

getVoiture(){
    this.service.getVoitureById(this.id).subscribe((res)=>{
      console.log(res);
      this.voiture = res;
    
    });
  }

  bidVoiture(formData: any){
    this.isSpin = true;
     const obj = {
      prix: formData.prix,
      userId: StorageService.getUserId(),
      voitureId: this.id  
    };

    this.service.bidVoiture(obj).subscribe((res) => {
      this.isSpin = false;
      this.message.success("L'enchère a bien été soumise ! ", {nzDuration:5000})
      this.router.navigateByUrl("/client/dashboard")
    }, error =>{
      this.message.error("Quelque chose n'a pas correctment fonctionné", {nzDuration: 5000})
    });

  }
}
