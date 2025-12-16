import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from "ng-zorro-antd/button";

@Component({
  selector: 'app-voir-enchere',
  standalone:true,
  imports: [CommonModule, NzSpinModule, NzTableModule, NzButtonModule],
  templateUrl: './voir-enchere.html',
  styleUrl: './voir-enchere.scss'
})
export class VoirEnchere implements OnInit{
encheres: any = [];
isSpin: boolean = false;

  constructor(private service: ClientService, private message: NzMessageService){}

  ngOnInit(): void {
    this.getEncheres();
  }

  

  getEncheres(){
    this.isSpin = true;
    this.service.getMesEnchere().subscribe((res)=>{
      console.log(res);
      this.encheres = res;
      this.isSpin = false;
    });
  }

changeStatutEnchere(id: number, statut: string){
  this.isSpin = true;
this.service.updateStatutEnchere(id, statut).subscribe((res) => {
      this.isSpin = false;
      this.message.success("Le statut de l'enchère a bien été modifié", {nzDuration:5000})
      this.getEncheres();
    }, error =>{
      this.message.error("Quelque chose n'a pas correctment fonctionné", {nzDuration: 5000})
    });
}
 
}
