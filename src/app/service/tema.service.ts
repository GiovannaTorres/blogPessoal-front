import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization',environment.token)
    }
  }

  

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>(`${environment.endpoint}/tema`, this.token)
  }

  getByIdTema(id:number): Observable<Tema>{
    return this.http.get<Tema>(`${environment.endpoint}/tema/${id}`, this.token)
  }

  getByNomeTema(nome: string): Observable<Tema[]> {
    return this.http.get<Tema[]>(`${environment.endpoint}/tema/nome/${nome}`, this.token)
  }

  postTema(tema:Tema): Observable<Tema>{
    return this.http.post<Tema>(`${environment.endpoint}/tema`, tema, this.token)
  }

  putTema(tema:Tema): Observable<Tema>{
    return this.http.put<Tema>(`${environment.endpoint}/tema`, tema, this.token)
  }

  deleteTema(id:number){
    return this.http.delete(`${environment.endpoint}/tema/${id}`, this.token)
  }
  
}
