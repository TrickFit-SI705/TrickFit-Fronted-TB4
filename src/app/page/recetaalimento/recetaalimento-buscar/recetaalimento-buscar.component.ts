import { Component, OnInit } from '@angular/core';
import { Recetaalimento } from 'src/app/model/recetaalimento';
import { RecetaalimentoService } from 'src/app/service/recetaalimento.service';

@Component({
  selector: 'app-recetaalimento-buscar',
  templateUrl: './recetaalimento-buscar.component.html',
  styleUrls: ['./recetaalimento-buscar.component.css']
})
export class RecetaalimentoBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private pService: RecetaalimentoService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Recetaalimento[] = [];
    this.pService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.receta.tituloReceta.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.pService.setLista(array);
    })
  }

}
