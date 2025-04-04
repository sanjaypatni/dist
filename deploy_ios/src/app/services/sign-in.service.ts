import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Clip } from '../models/clip';
import { Content } from '../models/content';
import { SearchItem } from '../models/search-item';
import { Api } from '../api';
import { User } from '../models/user'
import { Token } from '../models/token'
import { UserDetails } from '../models/userdetails'
import { Subscription } from '../models/subscription'

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  // API path
  
  clipData: any;
  uuid : any;
  role: string = "user";
  counter = 0;
  page = "tab1";
  at : String;
  domain : String;
  hlink : String;
  user : User = new User();
  userb : User = new User();
  userDetails : UserDetails = new UserDetails();
  logged : boolean = false;
  clip : Clip;
  content : Content;
  title  : string;
  searchResults : any;
  message : string = "";
  pc_link = "https://core4ed.com/content/listPlayclipsIonic.html"; 
  status : string;
  type : string = "video";
  media : string = "media";
  initial : boolean = true;
  showMediaWidgets : boolean = true;
  showTextWidgets : boolean = false;
  selectedTab = 3;
  platform: any = "";
  pcTitle = "";
  pcClips: Clip[] = [];
  pcCnt = 0;
  jwt : Token = new Token();
  showConnectWidgets = false;
  subscription : Subscription = new Subscription();


  video : boolean = false;
  audio : boolean = false;
  record : boolean = false;
  ytube : boolean = false;
  text : boolean = false;
  pdf : boolean = false;
  image : boolean = false;
  link : boolean = false;
  chat : boolean = false;
  todo : boolean = false;
  appt : boolean = false;
  contact : boolean = false;


  // Http Options
  httpOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient, private api : Api) { 
    // this.user.login = "demo";
    this.logged = true;
    this.jwtLogin("assets/img/demo.png", "1234").subscribe(response => {
     this.jwt = response;
     console.log(this.jwt.token);
     this.pc_link = this.pc_link + "?jwt=" + this.jwt.token + "&login=" + this.user.login;
     this.user.login = "assets/img/demo.png";
     this.httpOptionsAuth = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + this.jwt.token
     })
    }
    });
    this.user.login = "assets/img/demo.png";
    this.user.role = "creator";
  }
  getUsers(): Observable<User> {
      return this.httpClient.get<User>(this.api.user + "?jwt=" + this.jwt.token + "&application=playclips" , this.httpOptionsAuth)
    .pipe(
    retry(2),
    catchError(this.handleError));
   }
  login(login: string, password: string) : Observable<User> {
    return  this.httpClient.get<User>( this.api.auth + login + "&password="+password)
    .pipe(
			retry(2),
			catchError(this.handleError));;
  }
  getUser(login: string) : Observable<User> {
    return  this.httpClient.get<User>( this.api.userGet + "?jwt=" + this.jwt.token +   "&login="+login)
    .pipe(
			retry(2),
			catchError(this.handleError));;
  }
  getUserDetails(email: string) : Observable<UserDetails> {
    return  this.httpClient.get<UserDetails>( this.api.userDetailsCreate + "?jwt=" + this.jwt.token + "&email="+email, this.httpOptionsAuth)
    .pipe(
			retry(2),
			catchError(this.handleError));;
  }
  YTSearch() : Observable<SearchItem> {
    return  this.httpClient.get<SearchItem>( this.api.youtube + this.title)
    .pipe(
			retry(2),
			catchError(this.handleError));
  }

  // Create a new item
  create(user): Observable<User> {
    console.log(JSON.stringify(user));
    user.username = user.login;
    return this.httpClient
      .post<User>(this.api.userCreate, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  update(user): Observable<any> {
    return this.httpClient
      .post<any>(this.api.userCreate ,  JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  // Create a new item
  async createUserDetails(userDetails): Promise<Observable<any>> {
    this.deleteUserDetails(this.userDetails.email)
    await this.sleep(1000);
    return this.httpClient
      .post<any>(this.api.userDetailsCreate + "?jwt=" + this.jwt.token , JSON.stringify(userDetails), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)).toPromise();
  }
  getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
 }
 deleteAccount(login) {
     console.log("in delete");
     console.log(login);
     this.httpClient.delete(this.api.userDelete + "?jwt=" + this.jwt.token +  "&login=" + login)
     .subscribe(() => this.status = 'Delete successful');
 }
 deleteUserDetails(email) {
     this.httpClient.delete(this.api.userDetailsDelete + email + "?jwt=" + this.jwt.token )
     .subscribe(() => this.status = 'Delete successful');
 }
 jwtLogin(login: string, password: string) :  Observable<Token>   {
    this.user.login = login;
    this.getUser(this.user.login).subscribe(response => {
      this.user.role = response.role;
      this.user.auth = response.auth;
      console.log(response);
    });
    this.sleep(1000);
    console.log(this.user.auth);
    if (this.user.auth != "blocked")
    {
     this.user.password = password; 
     this.user.username = login;
     return this.httpClient
        .post<any>(this.api.auth , JSON.stringify(this.user), this.httpOptions)
                  .pipe(
                        retry(2),
                        catchError(this.handleError));
    }
  }
  async blockUser(login) {
    console.log(login);
    this.getUser(login).subscribe(response => {
      this.userb  = response;
      this.userb.auth = "blocked";
      console.log(this.userb);
    });
    await this.sleep(1000);
    console.log(this.userb);
    console.log(this.userb.login);
    this.deleteAccount(this.userb.login);
    await this.sleep(1000);
    this.create(this.userb).subscribe((response) => {
      console.log(response.id);
    });
  }
 
  sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
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
   async updateSubscription(email, login) : Promise<Observable<any>> {
   // get based upon udid
   // this.uuid = "D3F6C301-689C-49CA-AE84-E4ADA51CF08B";
   console.log(email);
   console.log(login);
   console.log(this.uuid);
   this.getSubscriptionUuid(this.uuid).subscribe(response =>  {
   	this.subscription = response;
        console.log(response);
        this.subscription.login = login;
        this.subscription.username = login;
        this.subscription.email = email;
        this.subscription.uuid = this.uuid;
        this.subscription.cnclips = 0;
        this.subscription.nclips = 50;

        console.log(this.subscription);
   });
   await this.sleep(1000);
   this.httpClient.delete(this.api.subscription + "?uuid=" + this.uuid).subscribe(() => {
     this.status = 'Delete successful';
     console.log(this.status);
   });
   await this.sleep(1000);
   return this.httpClient.post<any>(this.api.subscription, JSON.stringify(this.subscription), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }
  getSubscriptionUuid(uuid: string) : Observable<Subscription> {
    console.log(uuid);
    return  this.httpClient.get<Subscription>(this.api.subscription_uuid+  "?uuid=" + uuid)
    .pipe(
        retry(2),
        catchError(this.handleError));
  }

}
