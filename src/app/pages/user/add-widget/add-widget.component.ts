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

  widget={
    image:'',
    summMin:'',
    music:'',
    time:''
  }
  constructor(private _widget:WidgetService, private router:Router) { }

  ngOnInit(): void {
  }

  addWidget(){
    this._widget.addWidget(this.widget).subscribe(
      (data)=>{
        Swal.fire("Успешно", "Виджет добавлен").then((e)=>{
          this.router.navigate(['/dashboard/widgets/']);
        });
        
      }
    )
  }



}
