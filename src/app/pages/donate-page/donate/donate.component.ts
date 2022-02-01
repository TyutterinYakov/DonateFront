import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonatePayService } from 'src/app/services/donate-pay.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {


  username="";
  donation={
    summ:'',
    donateName:'',
    username:'',
    message:''
  }
  constructor(private route:ActivatedRoute, private donate:DonatePayService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['userName'];
    this.donation.username=this.username;
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
