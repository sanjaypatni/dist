import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Content } from '../models/content';
import { ObjectCnt } from '../models/object-cnt';
import { KeyValue } from '../models/key-value';
import { Visit } from '../models/visit';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SigninService } from './sign-in.service';
import { Api } from '../api';


@Injectable({
  providedIn: 'root'
})
export class ContentsService {
         keyValue: KeyValue = new KeyValue();
         contentsData : any;
	 

	 constructor(private http: HttpClient, private signinService: SigninService, private api: Api, 
		) { }

	 // Http Options
	  httpOptions = {
	    headers: new HttpHeaders({
	   'Content-Type': 'application/json',
           'x-frame-options': 'SAMEORIGIN',
            'x-content-type-options': 'nosniff'
	  })
	 }
         status : string;
	 // Handle API errors


	  // Get clips data
	  getObjectCntByLogin(): Observable<ObjectCnt> {
               console.log(this.signinService.user.login);
              
	      return this.http
	      .get<ObjectCnt>(this.api.objectCntLogin + this.signinService.user.login)
		  .pipe(
			retry(2),
			catchError(this.handleError));
          }
	  getObjectCnt(): Observable<ObjectCnt> {
              
	      return this.http
	      .get<ObjectCnt>(this.api.objectCnt)
		  .pipe(
			retry(2),
			catchError(this.handleError));
          }
	  getContentByType(type): Observable<Content> {
              
	      return this.http
	      .get<Content>(this.api.contentType + "?login=" + this.signinService.user.login + "&type=" + type)
		  .pipe(
			retry(2),
			catchError(this.handleError));
	   }
	  getList(): Observable<Content> {
              
	      return this.http
	      .get<Content>(this.api.content + "?login=" + this.signinService.user.login)
		  .pipe(
			retry(2),
			catchError(this.handleError));
	   }
	   delete(id): void { 
	     this.http.delete(this.api.content + id + "?id=" + id)
	     .subscribe(() => this.status = 'Delete successful');
          }
	  purge(): void { 
	     this.http.get(this.api.purge)
	     .subscribe(() => this.status = 'Purge successful');
          }
	  get(id: string) : Observable<Content> {
			return  this.http.get<Content>(this.api.content + id + "?id=" + id )
			.pipe(
					retry(2),
					catchError(this.handleError));
		}
		like(content) : Observable<Content> {
		return	this.http.post<Content>(this.api.like, JSON.stringify(content), this.httpOptions)
			.pipe(
					retry(2),
					catchError(this.handleError));
		}
		object(content) : Observable<Content> {
		return	this.http.post<Content>(this.api.object, JSON.stringify(content), this.httpOptions)
			.pipe(
					retry(2),
					catchError(this.handleError));
		}
		unlike(content) : Observable<Content> {
		return	this.http.post<Content>(this.api.unlike, JSON.stringify(content), this.httpOptions)
			.pipe(
					retry(2),
					catchError(this.handleError));
		}
		archive(content) : Observable<Content> {
		return	this.http.post<Content>(this.api.archive, JSON.stringify(content), this.httpOptions)
			.pipe(
					retry(2),
					catchError(this.handleError));
		}
		setCnclips(content) : Observable<Content> {
			return	this.http.post<Content>(this.api.contentcount, JSON.stringify(content), this.httpOptions)
				.pipe(
						retry(2),
						catchError(this.handleError));
			}
		


		
       // Create a new item
      publishContent(key, value): Observable<KeyValue> {
        this.keyValue.key = key;
        this.keyValue.value = JSON.stringify(value);
      	return this.http.post<KeyValue>(this.api.publish , JSON.stringify(this.keyValue), this.httpOptions).pipe( retry(2), catchError(this.handleError)); 
      }
       
      createContent(content): Observable<Content> {
    	return this.http
      	.post<Content>(this.api.content , JSON.stringify(content), this.httpOptions)
		  .pipe(
			retry(2),
			catchError(this.handleError));
  	   }

       //track visit 
      trackContent(visit): Observable<Visit> {
    	return this.http
      	.post<Visit>(this.api.visit , JSON.stringify(visit), this.httpOptions)
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
      getContents(type) {
      this.getContentByType(type).subscribe(response => {
      this.contentsData = response;
      // this.contents = <Content[]>JSON.parse(this.contentsData);
      console.log(this.contentsData)
      for (let content of this.contentsData) {
        if ( content.type == "audio") 
          content.showAudio = true;

        if ( content.type =="image")
          content.showImage = true;

        if (content.type == "video")
          content.showVideo = true;

        if (content.type == "ytube")
          content.showYTube = true;
        if (content.type == "text")
          content.showText = true;
        if (content.type == "pdf")
          content.showPdf = true;
        if (content.type == "link")
          content.showLink = true;
        if (content.type == "appt")
          content.showAppt = true;
        if (content.type == "record")
          content.showRecord = true;

        if (content.likeCnt > 0)
          content.like = true;

        if (content.unlikeCnt > 0)
          content.unlike = true;
      }
      
    });
  }
  getAllContents() {
     this.getList().subscribe(response => {
      this.contentsData = response;
      for (let content of this.contentsData) {
        if ( content.type == "audio")
          content.showAudio = true;

        if ( content.type =="image")
          content.showImage = true;
        if (content.type == "record")
          content.showRecord = true;

        if (content.type == "video")
          content.showVideo = true;

        if (content.type == "ytube")
          content.showYTube = true;
        if (content.type == "text")
          content.showText = true;
        if (content.type == "pdf")
          content.showPdf = true;
        if (content.type == "link")
          content.showLink = true;
        if (content.type == "appt")
          content.showAppt = true;

        if (content.likeCnt > 0)
          content.like = true;

        if (content.unlikeCnt > 0)
          content.unlike = true;
      }
     });
   } 
}
