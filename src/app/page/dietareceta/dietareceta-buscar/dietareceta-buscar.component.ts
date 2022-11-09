import { Component, OnInit } from '@angular/core';
import { DietaReceta } from 'src/app/model/dieta_receta';
import { DietarecetaService } from 'src/app/service/dietareceta.service';

@Component({
  selector: 'app-dietareceta-buscar',
  templateUrl: './dietareceta-buscar.component.html',
  styleUrls: ['./dietareceta-buscar.component.css']
})
export class DietarecetaBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private pService: DietarecetaService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: DietaReceta[] = [];
    this.pService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.dieta.tituloDieta.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.pService.setLista(array);
    })
  }

}
