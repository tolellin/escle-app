import { Injectable } from '@angular/core';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storage = firebase.app().storage().ref();

  constructor() { }

  async subirImagen(nombre:string, imgBase64:any) {
    try {
      let respuesta = await this.storage.child("users/" + nombre).putString(imgBase64, 'data_url');
      console.log(respuesta)
      return  await respuesta.ref.getDownloadURL();
    } catch(err) {
        console.log(err);
        return null;
    }

  }

  async almacenarDocumento(event: any) {
    try {
      let respuesta = await this.storage.child("documentos/").put(event);
      console.log(respuesta)
      return  await respuesta.ref.getDownloadURL();
    } catch(err) {
        console.log(err);
        return null;
    }
  }
}
