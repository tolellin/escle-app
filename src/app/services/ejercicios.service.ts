import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ejercicio, Help } from '../models/Modelo';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {


API_URI = 'https://escleapp.herokuapp.com';

constructor(private http: HttpClient) {}

  getEjercicios() {
    return this.http.get(`${this.API_URI}/ejercicios`);
  }

  getEjercicio(id: string) {
    return this.http.get(`${this.API_URI}/ejercicios${id}`);
  }

  saveEjercicio(help: Help) {
    return this.http.post(`${this.API_URI}/ejercicios`, help);
  }

  deleteEjericicio(id: string) {
    return this.http.delete(`${this.API_URI}/ejercicios/${id}`);
  }

  updateEjercicio(id: string, ejercicio: Ejercicio) {
    return this.http.put(`${this.API_URI}/ejercicios/${id}`, ejercicio);
  }
}

