import { UserMedicamentoService } from 'src/app/services/user-medicamento.service';
import { MedicamentoService } from './../../services/medicamento.service';
import { Medicamento, User_event, User_medicamento } from './../../models/Modelo';
import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Evento } from 'src/app/models/Modelo';
import { UserEventService } from 'src/app/services/user-event.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-newitems',
  templateUrl: './newitems.component.html',
  styleUrls: ['./newitems.component.css']
})
export class NewitemsComponent implements OnInit {




  medicacion: any;

  nombre: string = '';
  descripcion: string ='';
  date: Date = new Date();

  idUsuario = '';
  idCita = '';

  evento: Evento = {
    id: 0,
    title : '',
    description : '',
    start : new Date()
  }

  usermedi: User_medicamento = {
    id: 0,
    id_user: '',
    id_medicamento: 0
  }

  medicamentos: any;

  ani: any

  user_event: User_event = {
    id : 0,
    id_event : 0,
    id_user : ''
  }

  file: any;

  constructor(private auth:AuthService, private usuarioService: UsuarioService, private eventService: EventService, private usereventService: UserEventService, private medicamentoService: MedicamentoService, private usermedicamentoService: UserMedicamentoService) { }

  ngOnInit(): void {
    try {
      this.auth.getUser().subscribe(res => {
        this.idUsuario = res?.uid!;
        this.user_event.id_user = this.idUsuario;
        console.log(this.idUsuario)
      });
    } catch(err) {
      console.log(err);
    }

    try {
      this.medicamentoService.getMedicamentos().subscribe(res => {
        this.medicamentos = res;
        console.log(this.medicacion)
      })
    } catch(err) {
      console.log(err);
    }
  }

  nuevaCita() {
    try {
      this.evento.title = this.nombre;
      this.evento.description = this.descripcion;
      this.evento.start = this.date;
      console.log(this.evento.title)
      console.log(this.evento.description)
      console.log(this.evento.start)
      this.eventService.saveEvent(this.evento).subscribe(res => {
          this.ani = res;
          const e = this.ani[0];
          this.user_event.id_event = e[0].id;
          console.log(e[0].id)

          this.usereventService.saveUser_event(this.user_event).subscribe(res => {
            console.log(res)
          })
      })
    } catch(err) {
      console.log(err);

    }
  }

  anyadirMedicacion() {
    console.log(this.medicacion.nombre)
    this.usermedi.id_user = this.idUsuario;
    this.usermedi.id_medicamento = this.medicacion.id;
    console.log(this.medicacion.id)
    this.usermedicamentoService.saveUser_medicamento(this.usermedi).subscribe(res => {
      console.log(res)
    })
  }
  /*
  subirDoc(event: any) {
    this.storageService.almacenarDocumento(event).then( res => {
      console.log(res);
    })
  }
  */
}


