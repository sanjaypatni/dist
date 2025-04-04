import { Injectable } from '@angular/core';
import { Subscription } from '../models/subscription'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Api } from '../api';
import { SigninService } from './sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  status : string;

  constructor(private http: HttpClient, private signinService: SigninService, private api: Api) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
   'Content-Type': 'application/json'
  })
 }

 deleteSubscription(email): void { 
  this.http.delete(this.api.subscription + "?email=" + email)
  .subscribe(() => this.status = 'Delete successful');
  }
  // Create a new item
  createSubscription(sub): Observable<Subscription> {
    return this.http
      .post<Subscription>(this.api.subscription , JSON.stringify(sub), this.httpOptions)
    .pipe(
    retry(2),
    catchError(this.handleError));
  }
  get(email: string) : Observable<Subscription> {
    console.log(email);
    return  this.http.get<Subscription>(this.api.subscription+  "?email=" + email)
    .pipe(
        retry(2),
        catchError(this.handleError));
  }

   // Handle API errors
   handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
		// A client-side or network error occurred. Handle it accordingly.
			 console.error('An error occurred:', error.error.message);
			 this.signinService.message = 'An error occurred:', error.error.message;
		} else {
		// The backend returned an unsuccessful response code.
		// The response body may contain clues as to what went wrong,
			console.error( `Backend returned code ${error.status}, ` + `body was: ${error.error}`);
			this.signinService.message = `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
		}
		// return an observable with a user-facing error message
		return throwError( 'Something bad happened; please try again later.');
	}; 

}
