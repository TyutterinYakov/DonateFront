import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user={
    userName:'',
    email:'',
    balance:'',
    profileImage:'',
    minSummDonate:''
  }
  constructor(private _user:UserService, private _login:LoginService) { }

  ngOnInit(): void {
    this._login.getCurrentUser().subscribe(
      (data:any)=>{
        this.user=data;
      },
      (error)=>{
        console.log(error);
        Swal.fire("Ошибка", "Попробуйте позже");
        
      }
    )
    
  }
  deleteProfile(){
    this._user.deleteUser().subscribe(
      (data)=>{
        Swal.fire("До свидания!", "Профиль удален. Сейчас вы покинете систему.").then(()=>{
          this._login.logout();
          window.location.reload();
        })
      }
    )
  }

}
