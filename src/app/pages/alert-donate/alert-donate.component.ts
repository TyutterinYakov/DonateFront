import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonatePayService } from 'src/app/services/donate-pay.service';

@Component({
  selector: 'app-alert-donate',
  templateUrl: './alert-donate.component.html',
  styleUrls: ['./alert-donate.component.css']
})
export class AlertDonateComponent implements OnInit {

  username="";
  donate={
    message:'',
    donationName:''
  }
  private delay(ms: number)
  {
  return new Promise(resolve => setTimeout(resolve, ms));
  }
  constructor(private _donation:DonatePayService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.username=this.route.snapshot.params['userName'];
    this.sleepExample();
  }


  private async sleepExample()
  {
  while(true){
    this.getDonation();
    if(this.donate!=null){
      
    }
    await this.delay(6000);

  }
}
  getDonation(){
    this._donation.getDonationFromUserDontPlay(this.username).subscribe(
      (data:any)=>{
        console.log(data);
        this.donate=data;
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

}
