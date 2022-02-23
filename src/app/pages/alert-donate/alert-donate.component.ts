import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DonatePayService } from 'src/app/services/donate-pay.service';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-alert-donate',
  templateUrl: './alert-donate.component.html',
  styleUrls: ['./alert-donate.component.css']
})
export class AlertDonateComponent implements OnInit {

  start=false;
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
  music:any;
  musicName:any;
  private delay(ms: number)
  {
  return new Promise(resolve => setTimeout(resolve, ms));
  }
  constructor(private _donation:DonatePayService, private route:ActivatedRoute, private _widget:WidgetService, private sanitizer:DomSanitizer) { 

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
      await this.delay(3000);
      if(this.widget.time!=0){
        this.musicName = this.widget.music;
        this.getMusicByName();
        await this.delay(3000);
        this.start=true;
        await this.delay(this.widget.time*1000);
        this.musicName=null;
      }
    }
    this.donate=null;
    this.widget={
      image:"",
      music:'',
      time:0
    }
    this.start=false;
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
  getMusicByName(){
    this._widget.getMusic(this.musicName).subscribe(
      (data:any)=>{
        let objectURL = URL.createObjectURL(data);
        this.music=data;
        this.music = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      (error)=>{
        // Swal.fire("Ошибка", "Попробуйте позже");
        console.log(error);
        
      }
    )
  }

  


}