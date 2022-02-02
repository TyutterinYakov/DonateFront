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
    time:''
  }
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

  updateWidget(){
    this._widget.updateWidget(this.widget).subscribe(
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
