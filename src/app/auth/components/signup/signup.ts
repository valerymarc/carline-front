import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AdminRoutingModule } from "../../../modules/admin/admin-routing-module";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthService } from '../../services/auth/auth.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzSpinModule, NzButtonModule, NzFormModule, AdminRoutingModule, NzIconModule, NzInputModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {

  inscriptionForm!: FormGroup
  isSpin:boolean = false;

  constructor(private fb: FormBuilder, private service: AuthService){
    this.inscriptionForm = this.fb.group({
      nom:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required]],
      confimPassword:[null, [Validators.required], this.confirmationValidator],
    });
  }

  confirmationValidator = (control: FormControl):{ [s:string]:boolean } => {
    if(!control.value){
      return { require:true }
    }else if(control.value !== this.inscriptionForm.controls["password"].value){
      return { confirm:true, error: true };
    }

    return {}
  }

  inscription(){
    console.log(this.inscriptionForm.value)
    this.service.register(this.inscriptionForm.value).subscribe((res) => {
      console.log(res)
    });
  }
}
