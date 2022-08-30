import { Component, OnInit } from '@angular/core';
import { EjerciciosService } from 'src/app/services/ejercicios.service';

@Component({
  selector: 'app-nivelcuatro',
  templateUrl: './nivelcuatro.component.html',
  styleUrls: ['./nivelcuatro.component.css']
})
export class NivelcuatroComponent implements OnInit {

  help: any = [];
  ejercicios: any = [];

  constructor(private ejericicosService: EjerciciosService) { }

  ngOnInit(): void {
    this.ejericicosService.getEjercicios().subscribe(
      res => {
        this.help = res;
        this.help.forEach((h: { nivel: number; }) => {
          if(h.nivel == 4) {
            this.ejercicios.push(h);
          }

        });
      },
      err => console.log(err)
    )
  }

}
