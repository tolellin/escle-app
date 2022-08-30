import { User_medicamento } from './../../models/Modelo';
import { MedicamentoService } from './../../services/medicamento.service';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { } from '@angular/material';
import { UserMedicamentoService } from 'src/app/services/user-medicamento.service';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  idBusqueda = '';

  usuario: any = [];

  fecha: Date = new Date();

  medicamentos: any = [];

  um: any = [];
  uma: any = [];

  dum: any = [];

  umedicin: any = [];

  docs: any = [];
  documentos: any = [];

  documentario: any = [];

  constructor(private auth:AuthService, private usuarioService: UsuarioService,private medicamentoService: MedicamentoService, private user_medicamentoService: UserMedicamentoService, private documentosService: DocumentosService) { }

  ngOnInit(): void {
    try {
      this.auth.getUser().subscribe(res => {
        this.usuario.id = res?.uid!;
        this.idBusqueda = res?.uid!;
        console.log(this.idBusqueda);
        this.usuarioService.getUsuario(this.idBusqueda).subscribe(
          res => {
            this.usuario = res;
            this.medicamentoService.getMedicamentos().subscribe(
              medicals => {
                this.medicamentos = medicals;
                this.user_medicamentoService.getUser_medicamentos().subscribe(
                  userm => {
                    this.um = userm;
                    this.um.forEach((m: { id_user: string; }) => {
                      if(m.id_user == this.idBusqueda) {
                        this.uma.push(m);
                      }
                    },

                    console.log(this.uma),
                    setTimeout(() => {
                      this.uma.forEach((ma: { id_medicamento: any; }) => {
                      this.medicamentos.forEach((m: { id: any; }) => {
                        if(ma.id_medicamento == m.id) {
                          this.umedicin.push(m)
                        }
                      });
                    })
                    }, 500)
                    );
                  }
                )
              }
            )
            this.documentosService.getDocumentos().subscribe(
              resultado => {
                  this.docs = resultado;
                  this.docs.forEach((doc: { id_user: string; }) => {
                    if(doc.id_user == this.idBusqueda) {
                      this.documentos.push(doc);
                    }
                  });
              }
            )
          },
          err => console.log(err)
        )
      });
    } catch(err: any) {
      console.log(err);
    }
  }

  SignOut() {
    this.auth.logout;
    setTimeout(() => {
      window.location.href = "http://localhost:4200/login";
      }, 500)
  }

  eliminarMedicina(event: any) {
    console.log(event);
    this.user_medicamentoService.getUser_medicamentos().subscribe(res => {
      this.dum = res;
      this.dum.forEach((element: { id_user: string; id_medicamento: any; id: number; }) => {
        if(element.id_user == this.idBusqueda && element.id_medicamento == event.id) {
          this.user_medicamentoService.deleteUser_medicamento(element.id).subscribe(result => {
            console.log(result)
          })
        }
      });
    })
    setTimeout(() => {
      window.location.href = "http://localhost:4200/userdata";
      }, 300)
  }

  abrirDocumento(documento: any) {
    window.location.href = documento;
  }

  eliminarDocumento(event: any) {
    this.documentosService.getDocumentos().subscribe(
      res => {
        this.documentario = res;
        this.documentario.forEach((element: { id_user: string; id: any; }) => {
          if(element.id_user == this.idBusqueda && element.id == event) {
           this.documentosService.deleteDocumento(event).subscribe(
            res => {
              console.log(element.id)
            }
           )

          }
        });
      }
    );
    setTimeout(() => {
      window.location.href = "http://localhost:4200/userdata";
      }, 300)
  }


}
