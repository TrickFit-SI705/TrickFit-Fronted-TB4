import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/model/cita';
import { CitaService } from 'src/app/service/cita.service';

@Component({
  selector: 'app-cita-buscar',
  templateUrl: './cita-buscar.component.html',
  styleUrls: ['./cita-buscar.component.css']
})
export class CitaBuscarComponent implements OnInit {
  textoBuscar: string =""
  constructor(private citaService: CitaService) { }
  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Cita[] = [];
    this.citaService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.fechaCita.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.citaService.setLista(array);
    })
  }


}
