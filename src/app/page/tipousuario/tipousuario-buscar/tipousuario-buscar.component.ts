import { Component, OnInit } from '@angular/core';
import { Tipousuario } from 'src/app/model/tipousuaio';
import { TipousuarioService } from 'src/app/service/tipousuario.service';


@Component({
  selector: 'app-tipousuario-buscar',
  templateUrl: './tipousuario-buscar.component.html',
  styleUrls: ['./tipousuario-buscar.component.css']
})
export class TipousuarioBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private tipousuarioService: TipousuarioService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Tipousuario[] = [];
    this.tipousuarioService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreTipoUsuario.startsWith(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.tipousuarioService.setLista(array);
    })
  }
}
