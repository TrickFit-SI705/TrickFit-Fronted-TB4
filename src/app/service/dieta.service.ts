import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject , EMPTY } from 'rxjs';
import { Dieta } from '../model/Dieta';

@Injectable({
  providedIn: 'root'
})
export class DietaService {
  private url1: string = "http://localhost:8080/dietas";
  private listaCambio = new Subject<Dieta[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Dieta[]>(this.url1);
  }
  insertar(dieta: Dieta) {

    return this.http.post(this.url1, dieta);
  }

  modificar(dieta: Dieta) {

    return this.http.put(this.url1, dieta);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url1}/${id}`);
  }
  buscar(texto: string) {
    
    return this.http.post<Dieta[]>(`${this.url1}/buscar`, texto);
  }
  listarId(id: number) {

    return this.http.get<Dieta>(`${this.url1}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Dieta[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
