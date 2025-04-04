import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Api } from '../api';
import { Message } from '../models/message'
import { SigninService } from './sign-in.service'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  message : Message;
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private api : Api, private signInService : SigninService) {
  }


  // Create a new item
  create(message): Observable<Message> {
    console.log(JSON.stringify(message));
    return this.http
      .post<Message>(this.api.chat, JSON.stringify(message), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get clips data
  getList(): Observable<Message> {
      return this.http.get<Message>(this.api.chat + "/list/" + this.signInService.user.login).pipe(retry(2),catchError(this.handleError));
   }
  getTo(): Observable<String> {
      return this.http.get<String>(this.api.chat + "/to/").pipe(retry(2),catchError(this.handleError));
   }

  // Handle API errors
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


}
