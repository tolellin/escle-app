import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User_event } from '../models/Modelo';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUser_events() {
    return this.http.get(`${this.API_URI}/ue`);
  }


  getUser_event(id: number) {
    return this.http.get(`${this.API_URI}/ue/${id}`);
  }

  saveUser_event(help: User_event) {
    return this.http.post(`${this.API_URI}/ue`, help);
  }

  deleteUser_event(id: number) {
    return this.http.delete(`${this.API_URI}/ue/${id}`);
  }

  updateUser_event(id: number, help: User_event) {
    return this.http.put(`${this.API_URI}/ue/${id}`, help);
  }
}
