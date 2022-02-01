import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';

export interface message {
  donationName: string;
  message: string;
  summ: number;
  date: Date;
  button: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages:message[]=[];
  displayedColumns: string[] = ['donationName', 'message', 'summ', 'date', 'button'];
  dataSource = this.messages;

  constructor(private message:MessageService) { }

  ngOnInit(): void {
    this.message.getAllMessageUser().subscribe(
      (data:any)=>{
        console.log(data);
        this.messages=data;

        
      },
      (error)=>{
        Swal.fire("Ошибка", "попробуйте позже");
      })
  }

  removeDonation(donationId:number){
    this.message.removeMessage(donationId).subscribe(
      (data)=>{
        Swal.fire("Успешно!", "Сообщение удалено").then((e)=>
        window.location.reload());

        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

}
