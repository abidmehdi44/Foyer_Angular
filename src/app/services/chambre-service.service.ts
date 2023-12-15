// chambre.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Chambre } from "../models/chambre";
import { environment } from 'environments/environment.prod';
import { Observable } from "rxjs";
import { Bloc } from "../models/bloc";
import { Foyer } from "../models/foyer";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  private api = 'http://localhost:8083/a/chambre/uploadImg/';

  constructor(private http: HttpClient) { }

  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${environment.baseURL}${environment.BlocBackendAPIS}/allbloc`, this.httpOptions);
  }

  addChambreEtAffecterBloc(chambre: Chambre, idBloc: number): Observable<Chambre> {
    const url = `${environment.baseURL}${environment.ChamberBackendAPIS}/ajouterChambreEtAffecterBloc/${idBloc}`;
    return this.http.post<Chambre>(url, chambre, this.httpOptions);
  }

  getAllChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${environment.baseURL}${environment.ChamberBackendAPIS}/allchambre`);
  }

  deleteChambre(id: any): Observable<Chambre> {
    return this.http.delete<Chambre>(`${environment.baseURL}${environment.ChamberBackendAPIS}/delete/${id}`, this.httpOptions);
  }

  updateChambre(idChambre: number, updatedChambre: Chambre): Observable<Chambre> {
    const url = `${environment.baseURL}${environment.ChamberBackendAPIS}/update/${idChambre}`;
    return this.http.put<Chambre>(url, updatedChambre, this.httpOptions);
  }

  getChambreById(id: any): Observable<Chambre> {
    return this.http.get<Chambre>(`${environment.baseURL}${environment.ChamberBackendAPIS}/getchambreById/${id}`, this.httpOptions);
  }

  getChambresParNomBloc(nomBloc: string): Observable<Chambre[]> {
    const url = `${environment.baseURL}${environment.ChamberBackendAPIS}/getChamberList/${nomBloc}`;
    return this.http.get<Chambre[]>(url, this.httpOptions);
  }

  getFoyer(idFoyer: number): Observable<Foyer> {
    const url = `${environment.baseURL}${environment.FoyerBackendAPIS}/foyer/getFoyer/${idFoyer}`;
    return this.http.get<Foyer>(url, this.httpOptions);
  }

uploadImg(formData: FormData, idChamber : any) : Observable<Chambre>{
    return this.http.post<Chambre>(this.api+idChamber, formData);
  }
  addChamberWithImage(chamber: Chambre): Observable<any> {
    const formData: FormData = new FormData();

    Object.entries(chamber).forEach(([key, value]) => {
      if (key === 'image' && value) {
        formData.append('image', value as Blob, (value as File).name);
      } else {
        formData.append(key, String(value));
      }
    });

    return this.http.post(`${this.api}`, formData);
  }
}
