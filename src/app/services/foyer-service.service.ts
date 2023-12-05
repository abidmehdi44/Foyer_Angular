import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foyer } from 'app/models/foyer';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

 

  getAllFoyer(): Observable<Foyer[]> {
    
    return this.http.get<Foyer[]>("http://localhost:8083/a/foyer/allfoyer");
    //return this.http.get<Foyer[]>(`${environment.baseURL}${environment.FoyerBackendAPIS}/allfoyer`, this.httpOptions);
  }
  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>("http://localhost:8083/a/foyer/add", foyer, this.httpOptions);
   // const url = `${environment.baseURL}${environment.FoyerBackendAPIS}/foyer/add/`;
  }

  deleteFoyer(id:any):Observable<Foyer>{
    return this.http.delete<Foyer>(`http://localhost:8083/a/foyer/delete/${id}`);
    //return this.http.delete<Foyer>(environment.baseURL+environment.FoyerBackendAPIS+"/foyer/delete/"+id,this.httpOptions);
  }

  updateFoyer(idFoyer: number, foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(`http://localhost:8083/a/foyer/update/${idFoyer}`, foyer);
  }

  getFoyerbyID(id: number): Observable<Foyer> {
    return this.http.get<Foyer>(`http://localhost:8083/a/foyer/getfoyer/${id}`);
  }
  

}
