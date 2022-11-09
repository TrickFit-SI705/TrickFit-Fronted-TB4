import { Component, OnInit } from '@angular/core';
import { Suscripcion } from 'src/app/model/suscripcion';
import { SuscripcionService } from 'src/app/service/suscripcion.service';

@Component({
  selector: 'app-suscripcion-buscar',
  templateUrl: './suscripcion-buscar.component.html',
  styleUrls: ['./suscripcion-buscar.component.css']
})
export class SuscripcionBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private pService: SuscripcionService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Suscripcion[] = [];
    this.pService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.usuario.nombreUsuario.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.pService.setLista(array);
    })
  }
}
