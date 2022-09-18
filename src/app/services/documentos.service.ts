import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { Documento } from '../models/Modelo';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  API_URI = 'https://escleapp.herokuapp.com';

constructor(private http: HttpClient) {}

  getDocumentos() {
    return this.http.get(`${this.API_URI}/documentos`);
  }

  getDocumento(id: string) {
    return this.http.get(`${this.API_URI}/documentos${id}`);
  }

  saveDocumento(documento: Documento) {
    return this.http.post(`${this.API_URI}/documentos`, documento);
  }

  deleteDocumento(id: string) {
    return this.http.delete(`${this.API_URI}/documentos/${id}`);
  }

  updateDocumento(id: string, documento: Documento) {
    return this.http.put(`${this.API_URI}/documentos/${id}`, documento);
  }
}
