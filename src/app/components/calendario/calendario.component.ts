import { User_event } from './../../models/Modelo';
import { EventService } from './../../services/event.service';
import { UserEventService } from './../../services/user-event.service';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AuthService } from 'src/app/services/auth.service';
import { elementClosest } from '@fullcalendar/core/util/dom-manip';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  eventsLoaded: Promise<boolean> = new Promise((resolve, reject) => { resolve(false) })

  idBusqueda = '';

  public options: any;

  public events: any = [];
  public eventosFiltrados: any = [];
  public intermedia: any = [];
  public user_events : any = [];

  public ued : any = [];

  constructor(private user_eventService:UserEventService, private eventService: EventService, private auth:AuthService) { }

  ngOnInit(): void {

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      header: {
        left: 'prev,next',
        center: 'title',
        right: ''
      },
      body: {
        height: 'auto'
      },
      editable: false,
      height: 'auto'
    };

    //obtener usuario logeado
    try {
      this.auth.getUser().subscribe(
        res => {
        this.idBusqueda = res?.uid!;
        this.user_eventService.getUser_events().subscribe(
          ev => {
            this.events = ev;
            console.log(this.events);
            this.events.forEach((element: { id_user: string; }) => {
              if(element.id_user == this.idBusqueda) {
                this.eventosFiltrados.push(element);
              }
            });
            console.log(this.eventosFiltrados)
            this.eventService.getEvents().subscribe(
              evt => {
                this.intermedia = evt;
                console.log(this.intermedia)
                this.intermedia.forEach((i: { id: any; }) => {
                    this.eventosFiltrados.forEach((e: { id_event: any; }) => {
                      if(i.id == e.id_event) {
                        this.user_events.push(i)
                      }
                    });
                });
                console.log(this.user_events);
                this.eventsLoaded = new Promise((resolve, reject) => { resolve(true) })
              }
            )
          }
        )
        }
      )
    } catch(err: any) {
      console.log(err);
    }
  }

  eliminarCita(event: any) {
    console.log(event);
    this.user_eventService.getUser_events().subscribe(res => {
      this.ued = res;
      this.ued.forEach((element: { id_user: string; id_event: any; id: number; }) => {
        if(element.id_user == this.idBusqueda && element.id_event == event) {
          this.user_eventService.deleteUser_event(element.id).subscribe(result => {
            console.log(result)
          })
        }
      });
    })
    setTimeout(() => {
      window.location.href = "http://localhost:4200/calendar";
      }, 300)
  }
}
