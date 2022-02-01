import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    userName:'',
    password:'',
  }

  constructor(private snack:MatSnackBar, private login:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log("login btn click");
    if(this.loginData.userName.trim()==''||this.loginData.password.trim()==''){
      this.snack.open("Не введено имя пользователя или пароль","",{
        duration:3000,
      });
      return;
    }


    //Генерация токена
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{



        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);

            if(this.login.getUserRole()=="ADMIN"){
              window.location.href='/admin';


            } else if(this.login.getUserRole()=="USER"){
              window.location.href='/dashboard';
              
            } else {
            this.login.logout();

            }
            

          }
        )


      },
      (error)=>{
        console.log("Error generate token");
        this.snack.open("Неправильный логин или пароль", '', {
          duration:3000
        });
      }
    )


  }

}
