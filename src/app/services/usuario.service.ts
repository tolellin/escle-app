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

API_URI = 'postgres://tgpvtqbwbejieg:d6e2dac148e8a97ddbbeb4c91c1d7517337ad3c1a9c53419092f10a3e85e91cd@ec2-176-34-215-248.eu-west-1.compute.amazonaws.com:5432/dbcv1k8n42ae59';

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
