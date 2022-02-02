import { Component, OnInit } from '@angular/core';
import { WidgetService } from 'src/app/services/widget.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  widgets=[
    {
      image:'',
      summMin:'',
      music:'',
      personalizationId:'',
      time:''
    }
  ]
  constructor(private _widget:WidgetService) { }

  ngOnInit(): void {
    this._widget.getWidgetByUser().subscribe(
      (data:any)=>{
        this.widgets = data;
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  removeWidget(widgetId:any){
    this._widget.removeWidget(widgetId).subscribe(
      (data)=>{
        Swal.fire("Успешно!", "Виджет удален").then((e)=>{
          window.location.reload();
        })
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

}
