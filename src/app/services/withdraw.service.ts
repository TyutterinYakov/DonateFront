import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {


  constructor(private http:HttpClient) { }

  getAllWithDraw() {
    return this.http.get(`${baseUrl}/withdraw/`);
  }
  addWithdrawPay(withDrawSummPay: any) {
    return this.http.post(`${baseUrl}/withdraw/`, withDrawSummPay);
  }
}
