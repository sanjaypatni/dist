import { Injectable } from '@angular/core';
import { Clip } from '../models/clip';
import { Content } from '../models/content';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Api } from '../api';
import { SigninService } from './sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class ClipsService {
  clip : Clip = new Clip();
  status : string;
  constructor(private http: HttpClient, private api : Api, private signInService : SigninService) { 
  	console.log(this.signInService.jwt.token);
  }

  add(content) {
    this.clip.login= this.signInService.user.login;
    this.clip.link = content.link;
    this.clip.type = content.type;
    this.clip.title = content.title;
    this.createClip(this.clip).subscribe((response) => {
    });
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
   'Content-Type': 'application/json',
  })
 }
 // Handle API errors


  // Get clips data
  getList(): Observable<Clip> {
      return this.http
      .get<Clip>(this.api.clip +  "?user=" + this.signInService.user.login + "&application=playclips", this.signInService.httpOptionsAuth)
    .pipe(
    retry(2),
    catchError(this.handleError));
   }

  // Get clips data
  getClipsByType(type): Observable<Clip> {
      return this.http
      .get<Clip>(this.api.clipType +  "?user=" + this.signInService.user.login + "&type=" + type + "&application=playclips", this.signInService.httpOptionsAuth)
    .pipe(
    retry(2),
    catchError(this.handleError));
   }
   

   // Create a new item
  createClip(clip): Observable<Clip> {
    console.log("post");
    this.clip.jwt = this.signInService.jwt.token;
    console.log(this.signInService.jwt.token);
    return this.http
      .post<Clip>(this.api.clip + "?application=playclips", JSON.stringify(clip), this.signInService.httpOptionsAuth)
    .pipe(
    retry(2),
    catchError(this.handleError));
    }
    updateClip(id, clip): Observable<Clip> {
    return this.http.put<Clip>(this.api.clip + "/" +  id +  "?application=playclips" , JSON.stringify(clip), this.signInService.httpOptionsAuth)
    .pipe(
    retry(2),
    catchError(this.handleError));
    }

     // Create a new item

    getClip(id: string) : Observable<Clip> {
			return  this.http.get<Clip>(this.api.clip + "/" + id + "?jwt=" + this.signInService.jwt.token)
			.pipe(
					retry(2),
					catchError(this.handleError));
		}

    deleteClip(id: string): void { 
      this.http.delete(this.api.clip + "/" + id , this.signInService.httpOptionsAuth)
      .subscribe(() => this.status = 'Delete successful');
    }

    emailClip(email: string, link : string) : Observable<String> {
                        
                        return this.http.get<String>(this.api.email + "?email=" + email+"&id=" + link + "&login=" + this.signInService.user.login)
			.pipe(
					retry(2),
					catchError(this.handleError));
	}
				
    textClip(phone: string, link : string) : Observable<String> {
                        return this.http.get<String>(this.api.text + "?phone=" + phone+"&id=" + link + "&login=" + this.signInService.user.login)
			.pipe(
					retry(2),
					catchError(this.handleError));
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
  purge(): void { 
   this.http.get(this.api.purgeclip, this.signInService.httpOptionsAuth )
     .subscribe(() => this.status = 'Purge successful');
  }
  archive(clip) : Observable<Clip> {
	return	this.http.post<Clip>(this.api.archiveclip , JSON.stringify(clip), this.signInService.httpOptionsAuth).pipe(
					retry(2),
					catchError(this.handleError));
	}
}
