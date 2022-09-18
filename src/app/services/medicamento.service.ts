import { Medicamento } from './../models/Modelo';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

API_URI = 'https://escleapp.herokuapp.com';

  constructor(private http: HttpClient) {}

  getMedicamentos() {
    return this.http.get(`${this.API_URI}/medicamentos`);
  }


  getMedicamento(id: string) {
    return this.http.get(`${this.API_URI}/medicamentos${id}`);
  }

  saveUsuario(medicamento: Medicamento) {
    return this.http.post(`${this.API_URI}/medicamentos`, medicamento);
  }

  deleteUsuario(id: string) {
    return this.http.delete(`${this.API_URI}/medicamentos${id}`);
  }

  updateUsuario(id: string, medicamento: Medicamento) {
    return this.http.put(`${this.API_URI}/medicamentos${id}`, medicamento);
  }
}
