import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonatePayService } from 'src/app/services/donate-pay.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {


  minSummDonate=1;
  username="";
  donation={
    summ:'',
    donateName:'',
    username:'',
    message:''
  }
  constructor(private route:ActivatedRoute, private donate:DonatePayService, private router:Router) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['userName'];
    this.donation.username=this.username;

    this.donate.getMinSummDonateUser(this.username).subscribe(
      (data:any)=>{
        this.minSummDonate=data;
      },
      (error)=>{
        Swal.fire("Ссылка некорректна").then(()=>{
          this.router.navigate(['/']);
        });
      }
    )
  }

  submitPay(){
    this.donate.donatePay(this.donation).subscribe(
      (date)=>{
        console.log("Okey");
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
