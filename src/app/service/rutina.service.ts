import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Rutina } from '../model/rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  private url1: string = "http://localhost:8080/rutinas";
  private listaCambio = new Subject<Rutina[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Rutina[]>(this.url1);
  }
  insertar(dieta: Rutina) {

    return this.http.post(this.url1, dieta);
  }

  modificar(dieta: Rutina) {

    return this.http.put(this.url1, dieta);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url1}/${id}`);
  }
  buscar(texto: string) {

    return this.http.post<Rutina[]>(`${this.url1}/buscar`, texto);
  }
  listarId(id: number) {

    return this.http.get<Rutina>(`${this.url1}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Rutina []) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
