import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Help } from '../models/Modelo'

@Injectable({
  providedIn: 'root'
})
export class HelpService {

API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getHelps() {
    return this.http.get(`${this.API_URI}/consejos`);
  }


  getHelp(id: string) {
    return this.http.get(`${this.API_URI}/consejos${id}`);
  }

  saveHelp(help: Help) {
    return this.http.post(`${this.API_URI}/consejos`, help);
  }

  deleteHelp(id: string) {
    return this.http.delete(`${this.API_URI}/consejos/${id}`);
  }

  updateHelp(id: string, help: Help) {
    return this.http.put(`${this.API_URI}/consejos/${id}`, help);
  }
}
