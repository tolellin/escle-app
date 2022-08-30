import { Help } from '../../models/Modelo';
import { HelpService } from './../../services/help.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-help-list',
  templateUrl: './help-list.component.html',
  styleUrls: ['./help-list.component.css']
})
export class HelpListComponent implements OnInit {

help: any = [];
element = false;

titulo="";
descripcion = "";


  constructor(private helpService: HelpService) {
  }

  ngOnInit(): void {
    this.helpService.getHelps().subscribe(
      res => {
        this.help = res;
      },
      err => console.log(err)
    )
  }

  cambiarDescripcion(title: string, description: string) {
    this.titulo = title
    this.descripcion = description;
  }

}
