import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../models/etudiant";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {

  api = 'http://localhost:8083/a/etudiant'

  constructor(private httpclient: HttpClient) {
  }
  GetAllEtudiants(): Observable<any> {
    return this.httpclient.get<any>(`${this.api}/alletudiant`);
  }

  deleteEtudiant(id: any): Observable<any> {
    return this.httpclient.delete(`${this.api}/delete/${id}`);
  }

  GetEtudiantById(id: any): Observable<any> {
    return this.httpclient.get<any>(`${this.api}/etudiantById/${id}`);
  }

  modifyEtudiant( Etudiant: any) {
    return this.httpclient.put<Etudiant>(`${this.api}/update`, Etudiant)
  }
  addEtudiant(Etudiant: any) {
    return this.httpclient.post<Etudiant>(`${this.api}/add`, Etudiant);
  }
}