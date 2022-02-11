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
  addWidget(formData:FormData){
    return this.http.post(`${baseUrl}/widgets/`, formData);
  }

  getWidgetByUserAndSumm(username: string, summ: string) {
    return this.http.get(`${baseUrl}/widgets/all/${username}/${summ}`)
  }
  getWidgetById(widgetId:number) {
    return this.http.get(`${baseUrl}/widgets/${widgetId}`);
  }
  updateWidget(widget: any) {
    return this.http.put(`${baseUrl}/widgets/`, widget);
  }

  getMusic(musicName:any) {
    return this.http.get(`${baseUrl}/widget-animate/music/${musicName}`, {responseType:'blob'});
  }
}
