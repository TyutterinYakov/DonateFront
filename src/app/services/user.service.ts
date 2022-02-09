import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getProfileImage() {
    return this.http.get(`${baseUrl}/profile/image`, {responseType:'blob'});
  }

  updateImageProfile(formData: FormData) {
    return this.http.post(`${baseUrl}/profile/image`, formData);
  }
  public addUser(user:any)
{
  return this.http.post(`${baseUrl}/register`, user);
}
  public updateUser(user:any){
    return this.http.put(`${baseUrl}/profile/`, user);
  }
  public deleteUser(){
    return this.http.delete(`${baseUrl}/profile/`);
  }

}
