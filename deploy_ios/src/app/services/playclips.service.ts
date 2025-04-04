import { Injectable } from '@angular/core';
import { Playclip } from '../models/playclip';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Api } from '../api';
import { SigninService } from './sign-in.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayclipsService {
  httpOptions = {
    headers: new HttpHeaders({
   'Content-Type': 'application/json',
  })
 }
  status: any;
  playclip: Playclip = new Playclip();
  constructor(private http: HttpClient, private api : Api, private signInService : SigninService) { }
  createPlayclips(playclip: Playclip) : Observable<Playclip> {
     this.delete(playclip.id);
     return this.http.post<Playclip>(this.api.playclips + "?application=playclips", JSON.stringify(playclip), this.signInService.httpOptionsAuth).pipe( retry(2), catchError(this.handleError));
  }
   getPlayclips() : Observable<Playclip> {
    return this.http
      .get<Playclip>(this.api.playclips, this.signInService.httpOptionsAuth)
    .pipe(
    retry(2),
    catchError(this.handleError));

   }
   getPlayclip(id) : Observable<Playclip> {
    return this.http
      .get<Playclip>(this.api.playclips + "/" + id, this.signInService.httpOptionsAuth)
    .pipe(
    retry(2),
    catchError(this.handleError));
   }
   delete(id: string): void { 
      this.http.delete(this.api.playclips + "/" + id, this.signInService.httpOptionsAuth)
      .subscribe(() => this.status = 'Delete successful');
    }

  handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
  // A client-side or network error occurred. Handle it accordingly.
     console.error('An error occurred:', error.error.message);
  } else {
  // The backend returned an unsuccessful response code.
  // The response body may contain clues as to what went wrong,
    console.error( `Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError( 'Something bad happened; please try again later.');
 }; 
  archive(playclip) : Observable<Playclip> {
        return  this.http.post<Playclip>(this.api.archiveplayclip, JSON.stringify(playclip), this.signInService.httpOptionsAuth).pipe(
                                        retry(2),
                                        catchError(this.handleError));
        }
  bought(playclip) : Observable<Playclip> {
        return  this.http.post<Playclip>(this.api.boughtplayclip, JSON.stringify(playclip), this.signInService.httpOptionsAuth).pipe(
                                        retry(2),
                                        catchError(this.handleError));
}
 purge(): void {
   this.http.get(this.api.purgeplayclip,this.signInService.httpOptionsAuth)
     .subscribe(() => this.status = 'Purge successful');
  }
}
