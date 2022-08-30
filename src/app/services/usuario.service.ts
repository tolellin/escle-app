import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Usuario } from '../models/Modelo'

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get(`${this.API_URI}/usuarios`);
  }


  getUsuario(id: string) {
    return this.http.get(`${this.API_URI}/usuarios/${id}`);
  }

  saveUsuario(usuario: Usuario) {
    return this.http.post(`${this.API_URI}/usuarios`, usuario, httpOptions);
  }

  deleteUsuario(id: string) {
    return this.http.delete(`${this.API_URI}/usuarios/${id}`);
  }

  updateUsuario(id: string, usuario: Usuario) {
    return this.http.put(`${this.API_URI}/usuarios/${id}`, usuario, httpOptions);
  }
}
