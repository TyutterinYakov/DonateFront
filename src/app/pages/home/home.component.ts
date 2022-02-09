import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import baseUrl from 'src/app/services/helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fileName = '';
  formData = new FormData();

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {
        this.fileName = file.name;
        this.formData.append("image", file);
    }

}
  onFileUpload(){
    if(this.formData){
      const upload$ = this._http.post(`${baseUrl}/file/`, this.formData);
      upload$.subscribe();
    }
  }

}
