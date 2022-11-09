import { Component, OnInit } from '@angular/core';
import { Banco } from 'src/app/model/banco';
import { BancoService } from 'src/app/service/banco.service';

@Component({
  selector: 'app-banco-buscar',
  templateUrl: './banco-buscar.component.html',
  styleUrls: ['./banco-buscar.component.css']
})
export class BancoBuscarComponent implements OnInit {
  textoBuscar: string =""
  constructor(private bancoService: BancoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Banco[] = [];
    this.bancoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreBanco.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.bancoService.setLista(array);
    })
  }

}
