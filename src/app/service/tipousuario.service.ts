import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tipousuario} from '../model/tipousuaio';
import { Subject , EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {
  private url10: string = "http://localhost:8080/tipo_usuarios";
  private listaCambio = new Subject<Tipousuario[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Tipousuario[]>(this.url10);
  }
  insertar(tipousuaio: Tipousuario) {
    return this.http.post(this.url10, tipousuaio);
  }
  setLista(listaNueva: Tipousuario[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(tipousuaio: Tipousuario) {
    return this.http.put(this.url10, tipousuaio);
  }
  listarId(id: number) {
    return this.http.get<Tipousuario>(`${this.url10}/${id}`);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Tipousuario[]>(`${this.url10}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
  eliminar(id: number) {
    return this.http.delete(this.url10 + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
