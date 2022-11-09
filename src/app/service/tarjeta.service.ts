import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tarjeta } from '../model/tarjeta';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  private url11:string= "http://localhost:8080/tarjetas";
  private listaCambio = new Subject<Tarjeta[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Tarjeta[]>(this.url11);
  }
  insertar(dieta: Tarjeta) {

    return this.http.post(this.url11, dieta);
  }

  modificar(dieta: Tarjeta) {

    return this.http.put(this.url11, dieta);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url11}/${id}`);
  }
  buscar(texto: string) {

    return this.http.post<Tarjeta[]>(`${this.url11}/buscar`, texto);
  }
  listarId(id: number) {

    return this.http.get<Tarjeta>(`${this.url11}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Tarjeta[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
