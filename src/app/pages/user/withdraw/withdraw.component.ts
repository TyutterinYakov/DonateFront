import { Serializer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { WithdrawService } from 'src/app/services/withdraw.service';
import Swal from 'sweetalert2';

export interface withdraw {
  status: string;
  summWithdraw: number;
  dateWithdraw: Date;
}

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})

export class WithdrawComponent implements OnInit {
  withdraws:withdraw[]=[];
  displayedColumns: string[] = ['summWithdraw', 'dateWithdraw', 'status'];
  dataSource = this.withdraws;
  user={
    withDrawSumm:'',
    withDrawCount:'',
    balance:''
  }
  withDrawSummPay=null;
  constructor(private _withdraw:WithdrawService, private _login:LoginService) { }

  ngOnInit(): void {
    this._withdraw.getAllWithDraw().subscribe(
      (data:any)=>{
        this.withdraws=data;
      },
      (error)=>{
        Swal.fire("Ошибка", "Попробуйте позже");
        console.log(error);
        
      }
    )
    this._login.getCurrentUser().subscribe(
      (data:any)=>{
        this.user=data;
      },
      (error)=>{
        Swal.fire("Ошибка", "Попробуйте позже");
        console.log(error);
        
      }
    )
  }
  withdrawSubmit(){
    this._withdraw.addWithdrawPay(this.withDrawSummPay).subscribe(
      (data)=>{
          window.location.reload();

      },
      (error)=>{
        Swal.fire("Ошибка", "Попробуйте позже");
        console.log(error);
        
      }
    )
  }

}
