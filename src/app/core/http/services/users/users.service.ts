import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = `${this.config.apiEndpoint}/users`;

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get<any>(this.url);
  }

  addUser(data: any) {
    return this.http.post<any>(this.url, data);
  }

  updateUser(data: any, id: any) {
    return this.http.put<any>(`${this.url}/${id}`, data);
  }

  deleteUser(id: any) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}