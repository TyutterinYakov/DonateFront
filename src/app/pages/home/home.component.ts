import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import baseUrl from 'src/app/services/helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
