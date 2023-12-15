import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Universite } from 'app/models/universite';
import {catchError, Observable} from 'rxjs';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }



  getAllUniversite() {
    return this.http.get<Universite[]>('http://localhost:8083/a/universite/alluniversite')/*.pipe(
        catchError(error => {
          console.error('Error fetching universites:', error);
          throw error; // Rethrow the error to propagate it to the component*
        })
    );*/
  }


  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>("http://localhost:8083/a/universite/add", universite, this.httpOptions);
   // const url = `${environment.baseURL}${environment.FoyerBackendAPIS}/foyer/add/`;
  }

  deleteUniversite(id:any):Observable<Universite>{
    return this.http.delete<Universite>(`http://localhost:8083/a/universite/delete/${id}`);
    //return this.http.delete<Foyer>(environment.baseURL+environment.FoyerBackendAPIS+"/foyer/delete/"+id,this.httpOptions);
  }

  updateUniversite(idUniversite: number, universite: Universite): Observable<Universite> {
    return this.http.put<Universite>(`http://localhost:8083/a/universite/update/${idUniversite}`, universite);
  }

  getUniversitebyID(id: number): Observable<Universite> {
 return this.http.get<Universite>(`http://localhost:8083/a/universite/getuni/${id}`);
   }

  affecterFoyerAUniversite(idFoyer: number, nomUniversite: string): Observable<any> {
    return this.http.put<any>(`${environment.baseURL}universite/affecterFoyer/${idFoyer}/${nomUniversite}`, {});
  }

  desaffecterFoyerAUniversite(idUniversite: number): Observable<any> {
    return this.http.put<any>(`${environment.baseURL}universite/desaffecterFoyer/${idUniversite}`, {});
  }
  

}
