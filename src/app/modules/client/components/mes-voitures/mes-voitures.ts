import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminRoutingModule } from "../../../admin/admin-routing-module";


@Component({
  selector: 'app-mes-voitures',
  standalone: true,
  imports: [CommonModule, NzFormModule, NzButtonModule, AdminRoutingModule],
  templateUrl: './mes-voitures.html',
  styleUrl: './mes-voitures.scss'
})
export class MesVoitures implements OnInit{
  listeVoitures: any = [];

  constructor(private service: ClientService, private message: NzMessageService){}

  ngOnInit(): void {
    this.getVoitures();
  }

  

  getVoitures(){
    this.service.getMesVoitures().subscribe((res)=>{
      console.log(res);
      this.listeVoitures = res;
    });
  }

  deleteVoiture(id:number){
     this.service.deleteVoiture(id).subscribe((res)=>{
        this.message.success("la voiture a bien été retiré de la liste", {nzDuration:5000});
        this.getVoitures();
     });
  }
}
