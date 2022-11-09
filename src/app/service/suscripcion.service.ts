import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Suscripcion } from '../model/suscripcion';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  private url9: string = "http://localhost:8080/suscripciones";
  private listaCambio = new Subject<Suscripcion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Suscripcion[]>(this.url9);
  }
  insertar(dieta: Suscripcion) {

    return this.http.post(this.url9, dieta);
  }

  modificar(dieta: Suscripcion) {

    return this.http.put(this.url9, dieta);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url9}/${id}`);
  }
  buscar(texto: string) {

    return this.http.post<Suscripcion[]>(`${this.url9}/buscar`, texto);
  }
  listarId(id: number) {

    return this.http.get<Suscripcion>(`${this.url9}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Suscripcion[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
