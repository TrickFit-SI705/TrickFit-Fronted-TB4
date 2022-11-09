import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/model/receta';
import { RecetaService } from 'src/app/service/receta.service';

@Component({
  selector: 'app-receta-buscar',
  templateUrl: './receta-buscar.component.html',
  styleUrls: ['./receta-buscar.component.css']
})
export class RecetaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private recetaService: RecetaService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Receta[] = [];
    this.recetaService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.tituloReceta.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.recetaService.setLista(array);
    })
  }
}
