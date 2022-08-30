import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent implements OnInit {

  imagen: any[] = [];

  usuario: any = [];

  constructor(private auth:AuthService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    try {
      this.auth.getUser().subscribe(res => {
        this.usuario.id = res?.uid!;
        console.log(this.usuario.id)
        this.usuario.email = res?.email!;
        this.usuarioService.getUsuario(res?.uid!).subscribe(
          res => {
            console.log(res)
            this.usuario = res;

          }
        )
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

}
