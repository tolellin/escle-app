import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User_medicamento } from '../models/Modelo';

@Injectable({
  providedIn: 'root'
})
export class UserMedicamentoService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUser_medicamentos() {
    return this.http.get(`${this.API_URI}/um`);
  }


  getUser_medicamento(id: number) {
    return this.http.get(`${this.API_URI}/um/${id}`);
  }

  saveUser_medicamento(help: User_medicamento) {
    return this.http.post(`${this.API_URI}/um`, help);
  }

  deleteUser_medicamento(id: number) {
    return this.http.delete(`${this.API_URI}/um/${id}`);
  }

  updateUser_medicamento(id: number, help: User_medicamento) {
    return this.http.put(`${this.API_URI}/um/${id}`, help);
  }
}
