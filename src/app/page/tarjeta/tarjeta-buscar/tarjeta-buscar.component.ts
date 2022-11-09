import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/model/tarjeta';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-tarjeta-buscar',
  templateUrl: './tarjeta-buscar.component.html',
  styleUrls: ['./tarjeta-buscar.component.css']
})
export class TarjetaBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private pService: TarjetaService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Tarjeta[] = [];
    this.pService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.numeroTarjeta.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.pService.setLista(array);
    })
  }

}
