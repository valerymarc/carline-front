import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from "ng-zorro-antd/form";
import { AdminRoutingModule } from "./modules/admin/admin-routing-module";
import { NzButtonModule } from "ng-zorro-antd/button";
import { StorageService } from './auth/services/storage/storage.service';
import { CommonModule } from '@angular/common';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule, RouterOutlet, NzLayoutModule, NzFormModule, AdminRoutingModule, NzButtonModule, NzModalModule, NzIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('carline-front');

  isAdminLoggedIn = StorageService.isAdminLoggedIn();
  isClientLoggedIn = StorageService.isClientLoggedIn();
  constructor(private router: Router, private modal: NzModalService){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event.constructor.name === "NavigationEnd"){
         this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
         this.isClientLoggedIn = StorageService.isClientLoggedIn();
      }
    });
  }

  /*logout(){
    StorageService.signOut();
    this.router.navigateByUrl("/login")
  }*/


    logout(): void {
  this.modal.confirm({
    nzTitle: 'Confirmation',
    nzContent: 'Êtes-vous sûr de vouloir vous déconnecter ?',
    nzOkText: 'Oui',
    nzCancelText: 'Non',
    nzOnOk: () => {
      StorageService.signOut();
      this.router.navigateByUrl('/login');
    }
  });
}

}
