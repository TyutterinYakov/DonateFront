import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }


  getAllMessageUser(){
    return this.http.get(`${baseUrl}/donation/`)
  }
}
