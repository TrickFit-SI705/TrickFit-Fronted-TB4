import { Component, OnInit } from '@angular/core';
import { Rutina } from 'src/app/model/rutina';
import { RutinaService } from 'src/app/service/rutina.service';

@Component({
  selector: 'app-rutina-buscar',
  templateUrl: './rutina-buscar.component.html',
  styleUrls: ['./rutina-buscar.component.css']
})
export class RutinaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private pService: RutinaService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Rutina[] = [];
    this.pService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.tituloRutina.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.pService.setLista(array);
    })
  }

}
