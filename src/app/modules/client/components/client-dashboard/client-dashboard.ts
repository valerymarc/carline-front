import { Component, OnInit, REQUEST_CONTEXT } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { AdminRoutingModule } from "../../../admin/admin-routing-module";
import { NzCardModule } from 'ng-zorro-antd/card';



@Component({
  selector: 'app-client-dashboard',
  standalone:true,
  imports: [CommonModule, NzFormModule, NzButtonComponent, NzCardModule, AdminRoutingModule],
  templateUrl: './client-dashboard.html',
  styleUrl: './client-dashboard.scss'
})
export class ClientDashboard implements OnInit {

  listeVoitures: any = [];
  statistiques: any;
  reste: number;
  constructor(private service: ClientService){}

  ngOnInit(): void {
    this.getVoitures();
    this.getStatistiques();
  }

  getVoitures(){
    this.service.getAllVoitures().subscribe((res)=>{
      console.log(res);
      this.listeVoitures = res;
    });
  }

  getStatistiques(){
    this.service.getStatistiques().subscribe((res)=>{
      console.log(res);
      this.statistiques = res;
      this.reste = res.totalVoitures - res.nbVoitureVendues;
    });
  }

  gridStyle = {
    with: '50%',
    textAlign: 'center'
  }
}
