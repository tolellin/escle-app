import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../models/Modelo';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  API_URI = 'https://escleapp.herokuapp.com';

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(`${this.API_URI}/eventos`);
  }


  getEvent(id: number) {
    return this.http.get(`${this.API_URI}/eventos/${id}`);
  }

  saveEvent(evento: Evento) {
    return this.http.post(`${this.API_URI}/eventos`, evento);
  }

  deleteEvent(id: number) {
    return this.http.delete(`${this.API_URI}/eventos/${id}`);
  }

  updateEvent(id: number, evento: Evento) {
    return this.http.put(`${this.API_URI}/eventos/${id}`, evento);
  }
}
