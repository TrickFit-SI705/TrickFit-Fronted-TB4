import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Recetaalimento } from 'src/app/model/recetaalimento';
import { RecetaalimentoService } from 'src/app/service/recetaalimento.service';
import { RecetaalimentoDialogoComponent } from './recetaalimento-dialogo/recetaalimento-dialogo.component';

@Component({
  selector: 'app-recetaalimento-listar',
  templateUrl: './recetaalimento-listar.component.html',
  styleUrls: ['./recetaalimento-listar.component.css']
})
export class RecetaalimentoListarComponent implements OnInit {

  lista: Recetaalimento[] = [];
  dataSource:MatTableDataSource<Recetaalimento>=new MatTableDataSource();
  displayedColumns: string[]=['id','receta','alimento','acciones'];
  private idMayor: number = 0;
  constructor(private pService:RecetaalimentoService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
    });

    this.pService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

    });

    this.pService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  getCantidad(){
   return this.dataSource.data.length;
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(RecetaalimentoDialogoComponent);
  }
  eliminar(id: number) {
    this.pService.eliminar(id).subscribe(() => {
      this.pService.listar().subscribe(data => {
        this.pService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }
}
