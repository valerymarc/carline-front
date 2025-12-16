import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gerer-encheres',
  standalone:true,
  imports: [CommonModule, NzSpinModule, NzTableModule],
  templateUrl: './gerer-encheres.html',
  styleUrl: './gerer-encheres.scss'
})
export class GererEncheres implements OnInit {
   voitureId: number;
   encheres: any = [];
   isSpin: boolean = false;

  constructor(private service: ClientService, private activatedRoute: ActivatedRoute, private message: NzMessageService){
     this.voitureId = this.activatedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getEncheres();
  }

  

  getEncheres(){
    this.isSpin = true;
    this.service.getEnchereVoitureById(this.voitureId).subscribe((res)=>{
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
