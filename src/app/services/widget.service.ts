import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {


  constructor(private http:HttpClient) { }

  getWidgetByUser() {
    return this.http.get(`${baseUrl}/widgets/`);
  }

  removeWidget(widgetId: number) {
    return this.http.delete(`${baseUrl}/widgets/${widgetId}`)
  }
  addWidget(widget:any){
    return this.http.post(`${baseUrl}/widgets/`, widget);
  }

  getWidgetByUserAndSumm(username: string, summ: string) {
    return this.http.get(`${baseUrl}/widgets/all/${username}/${summ}`)
  }
}
