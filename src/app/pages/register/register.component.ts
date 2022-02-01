import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user={
    userName:'',
    password:'',
    email:''
  }

  constructor(private _user:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {


  }

  formSubmit()
  {
    console.log(this.user)
    if(this.user.userName=='' || this.user.userName==null){
      this.snack.open('Введите логин','',{
        duration:1000, 


      });
      return;
    }
//validate
//addUser
this._user.addUser(this.user).subscribe(
  (data: any)=>{
    //success
    console.log(data);
    Swal.fire('Добро пожаловать, '+data.firstName, 'Регистрация прошла успешно');
  },
  (error)=>{
    //error
    console.log(error);
    this.snack.open('Пользователь с таким ником уже зарегистрирован','',{
      duration: 2000,
    })
  }
);

  }

}
