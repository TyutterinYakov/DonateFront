import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from 'src/app/services/widget.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-widget',
  templateUrl: './update-widget.component.html',
  styleUrls: ['./update-widget.component.css']
})
export class UpdateWidgetComponent implements OnInit {

  widgetId:number=0;
  widget={
    image:'',
    music:'',
    widgetId:'',
    summMin:'',
    time:'',
    personalizationId:''
  }
  fileName = '';
  formData = new FormData();
  constructor(private _widget:WidgetService, private _route:ActivatedRoute, private _router:Router) {

   }

  ngOnInit(): void {
    this.widgetId = this._route.snapshot.params['widgetId']
    this._widget.getWidgetById(this.widgetId).subscribe(
      (data:any)=>{
        this.widget=data;

      },
      (error)=>{
        Swal.fire("Ошибка", "Попробуйте позже");
        console.log(error);
        
      }
    );
  }
  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        this.formData.append("image", file);

    }
}
  updateWidget(){
    this.formData.append("time",this.widget.time);
    this.formData.append("music",this.widget.music);
    this.formData.append("summMin",this.widget.summMin);
    this.formData.append("personalizationId", this.widget.personalizationId);
    this._widget.updateWidget(this.formData).subscribe(
      (data)=>{
        Swal.fire("Успешно", "Виджет обновлен").then((e)=>{
          this._router.navigate(['/dashboard/widgets'])
        });
      },
      (error)=>{
        Swal.fire("Ошибка", "Попробуйте еще раз");
        console.log(error);
        
      }
    )
  }

}
