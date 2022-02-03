import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private _login:LoginService, private _user:UserService) { }

  user={
    password:'',
    userName:'',
    email:'',
  }
  ngOnInit(): void {
    this._login.getCurrentUser().subscribe(
      (data:any)=>{
        this.user=data;
      },
      (error)=>{
        console.log(error);
        
      }
    )
   }

  saveProfile(){
    this._user.updateUser(this.user).subscribe(
      (data)=>{
        Swal.fire("Успешно", "Сейчас будет произведен выход из системы").then((e)=>{
          this._login.logout();
          window.location.reload();
        });
      },
      (error)=>{
        Swal.fire("Возникла ошибка", "Попробуйте позже");
        console.log(error);
        
      }
    )
  }

}
