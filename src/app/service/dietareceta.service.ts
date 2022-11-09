import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DietaReceta } from '../model/dieta_receta';

@Injectable({
  providedIn: 'root'
})
export class DietarecetaService {
  private url1: string = "http://localhost:8080/dietas-recetas";
  private listaCambio = new Subject<DietaReceta[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<DietaReceta[]>(this.url1);
  }
  insertar(dieta: DietaReceta) {

    return this.http.post(this.url1, dieta);
  }

  modificar(dieta: DietaReceta) {

    return this.http.put(this.url1, dieta);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url1}/${id}`);
  }
  buscar(texto: string) {

    return this.http.post<DietaReceta[]>(`${this.url1}/buscar`, texto);
  }
  listarId(id: number) {

    return this.http.get<DietaReceta>(`${this.url1}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: DietaReceta[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
