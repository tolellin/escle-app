import { Usuario } from './../../models/Modelo';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { browserSessionPersistence, getAuth, setPersistence } from '@firebase/auth';
import * as firebase from 'firebase/compat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  usuario = {
    id: 'kjhgfdsdfghjklñ7654',
    nombre: '',
    apellido: '',
    imagen: '',
    edad: 0,
    sexo: '',
    email: '',
    documentos: [],
    password: ''
  }

  constructor(private authService:AuthService, private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }

  register() {

    const {email, password} = this.usuario;
    this.authService.register(email, password).then(res => {
      console.log("se registro " + res);
    });

    this.authService.setPersistence("local");


    setTimeout(() => {
      this.authService.getUser().subscribe(res => {
      this.usuario.id = res?.uid!;
      this.usuario.email = res?.email!;
      console.log(res?.uid);
      });
    }, 2000)

    setTimeout(() => {
      console.log("Usuario insertado " + this.usuario);
      this.usuarioService.saveUsuario(this.usuario).subscribe(
      res => {
        console.log("Usuario guardado " + res);
      },
      err => console.log(err)
      );
     }, 3000)

    setTimeout(() => {
    this.router.navigateByUrl('/aditionaldata');
    }, 4000)
  }
}
