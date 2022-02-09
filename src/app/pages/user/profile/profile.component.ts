import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  profileImage:any;
  fileName = '';
  constructor(private _user:UserService, private _login:LoginService, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this._user.getProfileImage().subscribe(
      (data:any)=>{
        let objectURL = URL.createObjectURL(data);
        this.profileImage=data;
        this.profileImage = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      (error)=>{
        Swal.fire("Ошибка", "Попробуйте позже");
        console.log(error);
        
      }
    )
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

  onFileSelected(event:any) {

      const file:File = event.target.files[0];

      if (file) {

          this.fileName = file.name;

          const formData = new FormData();

          formData.append("image", file);

          this._user.updateImageProfile(formData).subscribe(
            (data)=>{
              Swal.fire("Успешно", "Фото профиля обновлено").then(()=>{
                window.location.reload();
              })
            },
            (error)=>{
              Swal.fire("Ошибка", "Попробуйте позже");
            }
          )
      }
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
