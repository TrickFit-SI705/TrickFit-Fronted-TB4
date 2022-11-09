import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cita } from '../model/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private url8: string = "http://localhost:8080/citas";
  private listaCambio = new Subject<Cita[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Cita[]>(this.url8);
  }
  insertar(dieta: Cita) {

    return this.http.post(this.url8, dieta);
  }

  modificar(dieta: Cita) {

    return this.http.put(this.url8, dieta);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url8}/${id}`);
  }
  buscar(texto: string) {

    return this.http.post<Cita[]>(`${this.url8}/buscar`, texto);
  }
  listarId(id: number) {

    return this.http.get<Cita>(`${this.url8}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Cita[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
