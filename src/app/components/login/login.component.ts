import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { EmailAuthCredential } from '@firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id = "";

  usuario = {
    email : '',
    password : ''
  }



  constructor(private authService:AuthService, private router : Router) {}

  ngOnInit(): void {
    try {
      this.authService.getUser().subscribe(res => {
        this.id = res?.uid!;
        console.log(this.id)
        this.usuario.email = res?.email!;
      });
    } catch(err) {
      console.log(err);
    }
  }

  Login() {
    const {email, password} = this.usuario;
    this.authService.login(email, password).then(res => {
      console.log("se logeo " + res);

      setTimeout(() => {
        window.location.href = "http://localhost:4200/userdata";
        }, 1000)
    })


  }





  LoginGoogle() {
    try {
        const {email, password} = this.usuario;
        this.authService.loginGoogle(email, password).then(res => {
          console.log("se logeo con Google " + res);

          setTimeout(() => {
            window.location.href = "http://localhost:4200/userdata";
            }, 1000)
        })
        .catch(error => {
          console.log('Error - ' + error.message)
        })
    } catch (error) {
      console.log('Error - ' + error)
    }

  }

}
