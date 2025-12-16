import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, NzFormModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboard implements OnInit {
listeVoitures: any = [];
  constructor(private service: AdminService){}

  ngOnInit(): void {
    this.getVoitures();
  }

  getVoitures(){
    this.service.getAllVoitures().subscribe((res)=>{
      console.log(res);
      this.listeVoitures = res;
    });
  }
}
