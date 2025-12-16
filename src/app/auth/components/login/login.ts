import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AdminRoutingModule } from '../../../modules/admin/admin-routing-module';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzSpinModule, NzButtonModule, NzFormModule, AdminRoutingModule, NzIconModule, NzInputModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  connexionForm!: FormGroup
  isSpin: boolean = false;

  constructor(private fb: FormBuilder, private service: AuthService, private message: NzMessageService, private router: Router) {
    this.connexionForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  connexion() {
    this.isSpin = true;
    console.log(this.connexionForm.value)
    this.service.login(this.connexionForm.value).subscribe((res) => {
      console.log(res);
      if (res.userId !== null) {
        const user = {
          id: res.userId,
          role: res.userRole
        }
        StorageService.saveUser(user);
        StorageService.saveToken(res.jwt);

        if (StorageService.isAdminLoggedIn()) {
          this.router.navigateByUrl("/admin/dashboard");
        } else if (StorageService.isClientLoggedIn) {
          this.router.navigateByUrl("/client/dashboard");
        }
      } else {
        this.message.error("Identifiants incorrects", { nzDuration: 5000 })
      }
      this.isSpin = false;
    });
  }
}
