import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetService } from 'src/app/services/widget.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.css']
})
export class AddWidgetComponent implements OnInit {

  widget:any={
    image:'',
    summMin:'',
    music:'',
    time:''
  }
  fileName = '';
  musicName='';
  constructor(private _widget:WidgetService, private router:Router) { }

  ngOnInit(): void {
  }
  formData = new FormData();
  //Загрузка изображения
  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        this.formData.append("image", file);

    }
}
//Загрузка музыки
onFileSelectedMusic(event:any) {

  const file:File = event.target.files[0];

  if (file) {

      this.musicName = file.name;

      this.formData.append("music", file);

  }
}
addWidget(){
  this.formData.append("time",this.widget.time);
  this.formData.append("summMin",this.widget.summMin);
  this._widget.addWidget(this.formData).subscribe(
    (data)=>{
      Swal.fire("Успешно", "Виджет добавлен").then((e)=>{
        this.router.navigate(['/dashboard/widgets/']);
      });
      
    }
  )
}



}
