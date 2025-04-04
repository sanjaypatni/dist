"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_text_text_module_ts"],{

/***/ 1917:
/*!*************************************!*\
  !*** ./src/app/models/key-value.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValue": () => (/* binding */ KeyValue)
/* harmony export */ });
class KeyValue {
}


/***/ }),

/***/ 5699:
/*!**********************************************!*\
  !*** ./src/app/services/contents.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentsService": () => (/* binding */ ContentsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _models_key_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/key-value */ 1917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.service */ 6496);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ 5111);








let ContentsService = class ContentsService {
    constructor(http, signinService, api) {
        this.http = http;
        this.signinService = signinService;
        this.api = api;
        this.keyValue = new _models_key_value__WEBPACK_IMPORTED_MODULE_0__.KeyValue();
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'x-frame-options': 'SAMEORIGIN',
                'x-content-type-options': 'nosniff'
            })
        };
    }
    // Handle API errors
    // Get clips data
    getObjectCntByLogin() {
        console.log(this.signinService.user.login);
        return this.http
            .get(this.api.objectCntLogin + this.signinService.user.login)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    getObjectCnt() {
        return this.http
            .get(this.api.objectCnt)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    getContentByType(type) {
        return this.http
            .get(this.api.contentType + "?login=" + this.signinService.user.login + "&type=" + type)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    getList() {
        return this.http
            .get(this.api.content + "?login=" + this.signinService.user.login)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    delete(id) {
        this.http.delete(this.api.content + id + "?id=" + id)
            .subscribe(() => this.status = 'Delete successful');
    }
    purge() {
        this.http.get(this.api.purge)
            .subscribe(() => this.status = 'Purge successful');
    }
    get(id) {
        return this.http.get(this.api.content + id + "?id=" + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    like(content) {
        return this.http.post(this.api.like, JSON.stringify(content), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    object(content) {
        return this.http.post(this.api.object, JSON.stringify(content), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    unlike(content) {
        return this.http.post(this.api.unlike, JSON.stringify(content), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    archive(content) {
        return this.http.post(this.api.archive, JSON.stringify(content), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    setCnclips(content) {
        return this.http.post(this.api.contentcount, JSON.stringify(content), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    // Create a new item
    publishContent(key, value) {
        this.keyValue.key = key;
        this.keyValue.value = JSON.stringify(value);
        return this.http.post(this.api.publish, JSON.stringify(this.keyValue), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    createContent(content) {
        return this.http
            .post(this.api.content, JSON.stringify(content), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    //track visit 
    trackContent(visit) {
        return this.http
            .post(this.api.visit, JSON.stringify(visit), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            this.signinService.message = 'An error occurred:', error.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
            this.signinService.message = `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
        }
        // return an observable with a user-facing error message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)('Something bad happened; please try again later.');
    }
    ;
    getContents(type) {
        this.getContentByType(type).subscribe(response => {
            this.contentsData = response;
            // this.contents = <Content[]>JSON.parse(this.contentsData);
            console.log(this.contentsData);
            for (let content of this.contentsData) {
                if (content.type == "audio")
                    content.showAudio = true;
                if (content.type == "image")
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
                if (content.type == "audio")
                    content.showAudio = true;
                if (content.type == "image")
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
};
ContentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_1__.SigninService },
    { type: _api__WEBPACK_IMPORTED_MODULE_2__.Api }
];
ContentsService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], ContentsService);



/***/ }),

/***/ 5245:
/*!*********************************************!*\
  !*** ./src/app/text/text-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextPageRoutingModule": () => (/* binding */ TextPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _text_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.page */ 3153);




const routes = [
    {
        path: '',
        component: _text_page__WEBPACK_IMPORTED_MODULE_0__.TextPage
    }
];
let TextPageRoutingModule = class TextPageRoutingModule {
};
TextPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TextPageRoutingModule);



/***/ }),

/***/ 6259:
/*!*************************************!*\
  !*** ./src/app/text/text.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextPageModule": () => (/* binding */ TextPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _text_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-routing.module */ 5245);
/* harmony import */ var _text_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.page */ 3153);







let TextPageModule = class TextPageModule {
};
TextPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _text_routing_module__WEBPACK_IMPORTED_MODULE_0__.TextPageRoutingModule
        ],
        declarations: [_text_page__WEBPACK_IMPORTED_MODULE_1__.TextPage]
    })
], TextPageModule);



/***/ }),

/***/ 3153:
/*!***********************************!*\
  !*** ./src/app/text/text.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextPage": () => (/* binding */ TextPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _text_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.page.html?ngResource */ 7644);
/* harmony import */ var _text_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.page.scss?ngResource */ 1819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_contents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contents.service */ 5699);
/* harmony import */ var _models_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/content */ 6945);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messages */ 4971);










let TextPage = class TextPage {
    constructor(signinService, contentService, router, navCtrl, messages, toastCtrl) {
        this.signinService = signinService;
        this.contentService = contentService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.messages = messages;
        this.toastCtrl = toastCtrl;
        this.content = new _models_content__WEBPACK_IMPORTED_MODULE_3__.Content();
        this.description = "";
        this.message = "";
    }
    ngOnInit() {
    }
    save() {
        this.validate();
        if (this.message.length > 0) {
            this.showToast(this.message);
            this.message = "";
            return;
        }
        this.content.login = this.signinService.user.login;
        this.content.link = this.signinService.title + Math.floor(Math.random() * 10000000);
        this.content.title = this.signinService.title;
        this.content.type = "text";
        this.content.taskStatus = "";
        this.content.description = this.description.substring(0, 2056);
        this.contentService.createContent(this.content).subscribe((response) => {
            this.signinService.page = "tab1";
            this.navCtrl.navigateForward("tab1");
        });
        /**
           this.contentService.publishContent("content-post", this.content).subscribe((response) => {
              this.navCtrl.navigateForward("tab1")
            });
        **/
    }
    cancel() {
        this.navCtrl.navigateBack("tab1");
    }
    validate() {
        if (this.signinService.title != undefined) {
            if (this.signinService.title.length < 4)
                this.message = this.messages.titleLenght;
        }
        else
            this.message = this.messages.titleRequired;
    }
    showToast(message) {
        this.toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        }).then((toastData) => {
            toastData.present();
        });
    }
};
TextPage.ctorParameters = () => [
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_4__.SigninService },
    { type: _services_contents_service__WEBPACK_IMPORTED_MODULE_2__.ContentsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _messages__WEBPACK_IMPORTED_MODULE_5__.Messages },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
TextPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-text',
        template: _text_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_text_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TextPage);



/***/ }),

/***/ 1819:
/*!************************************************!*\
  !*** ./src/app/text/text.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap\");\n* {\n  box-sizing: border-box;\n  outline: none;\n}\nbody {\n  background-color: #7bdaf3;\n  font-family: \"Poppins\", sans-serif;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding-top: 3rem;\n}\n.add {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  background-color: #9ec862;\n  color: #fff;\n  border: none;\n  border-radius: 3px;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n}\n.add:active {\n  transform: scale(0.98);\n}\n.note {\n  background-color: #fff;\n  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);\n  margin: 30px 20px;\n  height: 400px;\n  width: 400px;\n  overflow-y: scroll;\n}\n.note .tools {\n  background-color: #9ec862;\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.5rem;\n}\n.note .tools button {\n  background-color: transparent;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1rem;\n  margin-left: 0.5rem;\n}\n.note textarea {\n  outline: none;\n  font-family: inherit;\n  font-size: 1.2rem;\n  border: none;\n  height: 400px;\n  width: 100%;\n  padding: 20px;\n}\n.main {\n  padding: 20px;\n}\n.hidden {\n  display: none;\n}\n.md {\n  --ion-text-color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBRVI7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUFBRjtBQUdBO0VBQ0UseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7RUFDRSxzQkFBQTtBQUFGO0FBR0E7RUFDRSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0FBQUY7QUFHQTtFQUNFLHNCQUFBO0FBQUYiLCJmaWxlIjoidGV4dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzQwMCZkaXNwbGF5PXN3YXAnKTtcblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JkYWYzO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDNyZW07XG59XG5cbi5hZGQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWM4NjI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xufVxuXG4ubm90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbjogMzBweCAyMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLm5vdGUgLnRvb2xzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllYzg2MjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ubm90ZSAudG9vbHMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4ubm90ZSB0ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLm1haW4ge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1kIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogIzAwMDtcbiB9XG4iXX0= */";

/***/ }),

/***/ 7644:
/*!************************************************!*\
  !*** ./src/app/text/text.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Text</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"create-contents\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n <ion-list lines=\"none\">\n <ion-item>\n    <ion-label position=\"stacked\"> Title:</ion-label>\n    <ion-input type=\"title\" placeholder=\"Title\" [(ngModel)]=\"signinService.title\" minlength=\"4\" maxlength=\"50\" ></ion-input>\n  </ion-item>\n  <ion-item>\n  <div class=\"note\">\n  \t<div class=\"tools\">\n              <button class=\"edit\"><i class=\"fas fa-edit\"></i></button>\n              <button class=\"delete\"><i class=\"fas fa-trash-alt\"></i></button>\n        </div>\n        <ion-textarea rows=\"6\" cols=\"20\" class=\"textarea\" [(ngModel)]=\"description\" placeholder=\"Enter any notes here...\"></ion-textarea>\n  </div>\n  </ion-item>\n<ion-item>\n      <ion-button expand=\"block\" color=\"danger\" shape=\"round\" (click)=\"save()\" >Save</ion-button>\n      <ion-button expand=\"block\" color=\"danger\" shape=\"round\" (click)=\"cancel()\" >Cancel</ion-button>\n</ion-item>\n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_text_text_module_ts.js.map