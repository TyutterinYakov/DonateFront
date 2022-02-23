import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {


  constructor(private http:HttpClient) { }

  getWidgetByUser() {
    return this.http.get(`${baseUrl}/api/user/widget`);
  }

  removeWidget(widgetId: number) {
    return this.http.delete(`${baseUrl}/api/user/widget/${widgetId}`)
  }
  addWidget(formData:FormData){
    return this.http.post(`${baseUrl}/api/user/widget`, formData);
  }

  getWidgetByUserAndSumm(username: string, summ: string) {
    return this.http.get(`${baseUrl}/api/user/widget/donate/${username}/${summ}`)
  }
  getWidgetById(widgetId:number) {
    return this.http.get(`${baseUrl}/api/user/widget/${widgetId}`);
  }
  updateWidget(widget: any) {
    return this.http.put(`${baseUrl}/api/user/widget`, widget);
  }

  getMusic(musicName:any) {
    return this.http.get(`${baseUrl}/api/widget/music/${musicName}`, {responseType:'blob'});
  }
}
