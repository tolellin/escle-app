import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth:AngularFireAuth) { }


  async register(email:string, password:string) {
    try {
      return await this.auth.createUserWithEmailAndPassword(email, password);
    } catch(err) {
      console.log(err);
      return null;
    }
  }

  async login(email:string, password:string) {
    try {
      return await this.auth.signInWithEmailAndPassword(email, password);
    } catch(err) {
      console.log(err);
      return null;
    }
  }

  async loginGoogle(email:string, password:string) {
    try {
      return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch(err) {
      console.log(err);
      return null;
    }
  }

  getUser() {
    return this.auth.authState;
  }

  logout() {
    this.auth.signOut();
  }

  setPersistence(tipo: string) {
    this.auth.setPersistence(tipo);
  }
}
