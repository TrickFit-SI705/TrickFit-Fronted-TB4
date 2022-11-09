import { Component, OnInit } from '@angular/core';
import { Alimento } from 'src/app/model/alimento';
import { AlimentoService } from 'src/app/service/alimento.service';

@Component({
  selector: 'app-alimento-buscar',
  templateUrl: './alimento-buscar.component.html',
  styleUrls: ['./alimento-buscar.component.css']
})
export class AlimentoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private alimentoService: AlimentoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Alimento[] = [];
    this.alimentoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreAlimento.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.alimentoService.setLista(array);
    })
  }

}
