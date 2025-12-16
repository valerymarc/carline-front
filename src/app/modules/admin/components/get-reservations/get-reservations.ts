import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-get-reservations',
  standalone: true,
  imports: [CommonModule, NzSpinModule, NzTableModule],
  templateUrl: './get-reservations.html',
  styleUrl: './get-reservations.scss'
})

export class GetReservations implements OnInit {
encheres: any = [];
isSpin: boolean = false;

  constructor(private service: AdminService, private message: NzMessageService){}

  ngOnInit(): void {
    this.getEncheres();
  }

  

  getEncheres(){
    this.isSpin = true;
    this.service.getEncheres().subscribe((res)=>{
      console.log(res);
      this.encheres = res;
      this.isSpin = false;
    });
  }

}
