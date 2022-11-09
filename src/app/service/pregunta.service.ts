import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pregunta } from '../model/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  private url2: string = "http://localhost:8080/preguntas";
  private listaCambio = new Subject<Pregunta[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Pregunta[]>(this.url2);
  }
  insertar(dieta: Pregunta) {

    return this.http.post(this.url2, dieta);
  }

  modificar(dieta: Pregunta) {

    return this.http.put(this.url2, dieta);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url2}/${id}`);
  }
  buscar(texto: string) {

    return this.http.post<Pregunta[]>(`${this.url2}/buscar`, texto);
  }
  listarId(id: number) {

    return this.http.get<Pregunta>(`${this.url2}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Pregunta[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
