import { Component, OnInit } from '@angular/core';
import { Rutinaejercicio } from 'src/app/model/rutinaejercicio';
import { RutinaejercicioService } from 'src/app/service/rutinaejercicio.service';

@Component({
  selector: 'app-rutinaejercicio-buscar',
  templateUrl: './rutinaejercicio-buscar.component.html',
  styleUrls: ['./rutinaejercicio-buscar.component.css']
})
export class RutinaejercicioBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private pService: RutinaejercicioService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Rutinaejercicio[] = [];
    this.pService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.rutina.tituloRutina.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.pService.setLista(array);
    })
  }
}
