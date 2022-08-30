import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-aditionaldata',
  templateUrl: './aditionaldata.component.html',
  styleUrls: ['./aditionaldata.component.css']
})
export class AditionaldataComponent implements OnInit {



  imagen: any[] = [];

  usuario = {
    id : 'o3NrSeMraycq6JTiGjn49EVvT503',
    nombre: '',
    apellido: '',
    imagen: 'https://firebasestorage.googleapis.com/v0/b/escleapp.appspot.com/o/users%2FXM0.png?alt=media&token=f4b30193-9db0-4105-9439-d778b4b4c16a',
    edad: 0,
    sexo: 'Otro',
    email: '',
    documentos: []
  }

  constructor(private auth:AuthService, private usuarioService: UsuarioService, private storageService : StorageService) { }

  ngOnInit(): void {
    try {
      this.auth.getUser().subscribe(res => {
        this.usuario.id = res?.uid!;
        console.log(this.usuario.id)
        this.usuario.email = res?.email!;
      });
    } catch(err) {
      console.log(err);
    }
  }

  updateData() {

    this.usuarioService.updateUsuario(this.usuario.id, this.usuario).subscribe(
      res => {
        console.log("Usuario guardado " + res);
      },
      err => console.log(err)
      );
  }

  cargarImagen(event : any) {
      let imagenes = event.target.files;
      let reader = new FileReader();

      reader.readAsDataURL(imagenes[0]);
      reader.onloadend = () => {
      this.imagen.push(reader.result);
      this.storageService.subirImagen(this.usuario.id + "_" + Date.now(), reader.result).then(
        urlImagen =>
        {
          this.usuario.imagen = urlImagen!;
        }
      )
      }
  }
}
