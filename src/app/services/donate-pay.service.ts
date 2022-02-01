import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DonatePayService {

  constructor(private http:HttpClient) { }

  donatePay(donate:any){
    return this.http.post(`${baseUrl}/pay/`, donate);
  }


}
