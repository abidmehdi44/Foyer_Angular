import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bloc } from 'app/models/bloc';
import { Foyer } from 'app/models/foyer';
import { environment } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private readonly storageKey = 'storedBloc';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }

  getStoredBloc(): Bloc {
    const storedBloc = localStorage.getItem(this.storageKey);
    return storedBloc ? JSON.parse(storedBloc) : null;
  }

  setStoredBloc(bloc: Bloc): void {
    localStorage.setItem(this.storageKey, JSON.stringify(bloc));
  }

  addBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>( `${environment.baseURL}${environment.BlocBackendAPIS}/add`, bloc, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllBloc(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${environment.baseURL}${environment.BlocBackendAPIS}/allbloc`, this.httpOptions);
  }

  deleteBloc(idBloc: any): Observable<Bloc> {
    return this.http.delete<Bloc>(`${environment.baseURL}${environment.BlocBackendAPIS}/delete/${idBloc}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.put<Bloc>(`${environment.baseURL}${environment.BlocBackendAPIS}/update/${bloc.idBloc}`, bloc, this.httpOptions)

      .pipe(
        catchError(this.handleError)
      );
  }
  getBlocById(idBloc: any): Observable<Bloc> {
    return this.http.get<Bloc>(`${environment.baseURL}${environment.BlocBackendAPIS}/${idBloc}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );  
  }
  getFoyersByBloc(idBloc: number): Observable<Foyer[]> {
    const url = `${environment.baseURL}${environment.BlocBackendAPIS}${idBloc}/foyers`;
    return this.http.get<Foyer[]>(url);
  }

  getAvailableFoyers(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseURL}${environment.FoyerBackendAPIS}/allfoyer`);
  }

  affecterBlocAFoyer(idBloc: number, idFoyer: number): Observable<any> {
    return this.http.put<any>(`${environment.baseURL}bloc/affecterBlocFoyer/${idBloc}/${idFoyer}`, {});
  }
}