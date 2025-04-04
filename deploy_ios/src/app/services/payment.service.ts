import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Api } from '../api';
import { Charge } from '../models/charge';
import { BlockchainTransaction } from '../models/blockchain-transaction';
import { SigninService } from './sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor( private http: HttpClient, private api: Api, private signinService: SigninService ) {
  }
  stripeToken(cvc : string)  {
    return  this.http.get(this.api.st + "?jwt=" +  this.signinService.jwt.token + "&email="   + this.signinService.userDetails.email + "&cvc=" + cvc, {responseType: 'text'} )
    .pipe(
			retry(2),
			catchError(this.handleError));
  }
  chargeFn(charge): Observable<Charge>  {
  return this.http.post<Charge>(this.api.charge + "?jwt=" + this.signinService.jwt.token, JSON.stringify(charge), this.signinService.httpOptionsAuth)
    .pipe(
    retry(2),
    catchError(this.handleError));
 }
  blockchainTransaction(transaction): Observable<BlockchainTransaction>  {
  return this.http.post<BlockchainTransaction>(this.api.blockchainTransaction + "?jwt=" + this.signinService.jwt.token, JSON.stringify(transaction), this.signinService.httpOptionsAuth)
    .pipe(
    retry(2),
    catchError(this.handleError));
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
}
