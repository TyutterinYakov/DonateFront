import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonatePayService } from 'src/app/services/donate-pay.service';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-alert-donate',
  templateUrl: './alert-donate.component.html',
  styleUrls: ['./alert-donate.component.css']
})
export class AlertDonateComponent implements OnInit {

  username="";
  donate:any={
    message:'',
    donationName:'',
    summ:0
  }

  widget:any={
    image:"",
    music:'',
    time:0,
  }
  private delay(ms: number)
  {
  return new Promise(resolve => setTimeout(resolve, ms));
  }
  constructor(private _donation:DonatePayService, private route:ActivatedRoute, private _widget:WidgetService) { 

  }

  ngOnInit(): void {
    this.username=this.route.snapshot.params['userName'];
    this.sleepExample();
  }


  private async sleepExample()
  {
  while(true){
    this.getDonation();
    await this.delay(3000);
    if(this.donate.summ==0){
      await this.delay(30000);
    } else {
      this.getWidgetBySumm();
      await this.delay(6000);
      if(this.widget.time!=0){
      await this.delay(this.widget.time*1000);
      }
    }
    this.donate=null;
    this.widget={
      image:"",
      music:'',
      time:0
    }
  }
}
  getDonation(){
    this._donation.getDonationFromUserDontPlay(this.username).subscribe(
      (data:any)=>{
        this.donate=data;
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  getWidgetBySumm(){
    this._widget.getWidgetByUserAndSumm(this.username, this.donate.summ).subscribe(
      (data:any)=>{
        this.widget=data;
        console.log(data);
        
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }


}