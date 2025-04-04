"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_appt_appt_module_ts"],{

/***/ 8136:
/*!*********************************************!*\
  !*** ./src/app/appt/appt-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApptPageRoutingModule": () => (/* binding */ ApptPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _appt_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appt.page */ 7932);




const routes = [
    {
        path: '',
        component: _appt_page__WEBPACK_IMPORTED_MODULE_0__.ApptPage
    }
];
let ApptPageRoutingModule = class ApptPageRoutingModule {
};
ApptPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApptPageRoutingModule);



/***/ }),

/***/ 5376:
/*!*************************************!*\
  !*** ./src/app/appt/appt.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApptPageModule": () => (/* binding */ ApptPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _appt_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appt-routing.module */ 8136);
/* harmony import */ var _appt_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appt.page */ 7932);







let ApptPageModule = class ApptPageModule {
};
ApptPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _appt_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApptPageRoutingModule
        ],
        declarations: [_appt_page__WEBPACK_IMPORTED_MODULE_1__.ApptPage]
    })
], ApptPageModule);



/***/ }),

/***/ 7932:
/*!***********************************!*\
  !*** ./src/app/appt/appt.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApptPage": () => (/* binding */ ApptPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _appt_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appt.page.html?ngResource */ 4284);
/* harmony import */ var _appt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appt.page.scss?ngResource */ 8298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/content */ 6945);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _services_contents_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contents.service */ 5699);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messages */ 4971);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);









let ApptPage = class ApptPage {
    constructor(navCtrl, signinService, contentService, messages, toastCtrl) {
        this.navCtrl = navCtrl;
        this.signinService = signinService;
        this.contentService = contentService;
        this.messages = messages;
        this.toastCtrl = toastCtrl;
        this.content = new _models_content__WEBPACK_IMPORTED_MODULE_2__.Content();
        this.message = "";
        this.link = "";
        this.description = "";
    }
    ngOnInit() {
        this.title = "";
    }
    save() {
        this.validate();
        if (this.message.length > 0) {
            this.showToast(this.message);
            this.message = "";
            return;
        }
        this.title = this.signinService.title;
        this.content = new _models_content__WEBPACK_IMPORTED_MODULE_2__.Content();
        this.content.login = this.signinService.user.login;
        this.content.title = this.signinService.title;
        ;
        this.content.type = "appt";
        this.content.startDate = this.startDate;
        this.content.endDate = this.endDate;
        this.content.link = this.link;
        this.content.description = this.description;
        this.content.thumbnail = "assets/img/calendar.png";
        this.content.link = this.title + Math.floor(Math.random() * 10000000);
        ;
        this.contentService.createContent(this.content).subscribe((response) => {
            this.navCtrl.navigateForward("tab1");
        });
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
ApptPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__.SigninService },
    { type: _services_contents_service__WEBPACK_IMPORTED_MODULE_4__.ContentsService },
    { type: _messages__WEBPACK_IMPORTED_MODULE_5__.Messages },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ApptPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-appt',
        template: _appt_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_appt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ApptPage);



/***/ }),

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

/***/ 8298:
/*!************************************************!*\
  !*** ./src/app/appt/appt.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHB0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4284:
/*!************************************************!*\
  !*** ./src/app/appt/appt.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Appointment</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"create-contents\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list lines=\"none\">\n<div id=\"container\">\n  <ion-item>\n    <ion-label position=\"stacked\"> Title:</ion-label>\n    <ion-input type=\"title\" placeholder=\"Title\" [(ngModel)]=\"signinService.title\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\"> Purpose:</ion-label>\n    <ion-input type=\"title\" placeholder=\"Purpose\" [(ngModel)]=\"description\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\"> Link:</ion-label>\n    <ion-input type=\"title\" placeholder=\"Link\" [(ngModel)]=\"link\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Start Date & Time</ion-label>\n    <ion-datetime displayFormat=\"DD-MMM-YY HH:mm\" (ionChange)=\"toggle()\" [(ngModel)]=\"startDate\"> </ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>End Date & Time</ion-label>\n    <ion-datetime displayFormat=\"DD-MMM-YY HH:mm\" (ionChange)=\"toggle()\" [(ngModel)]=\"endDate\"> </ion-datetime>\n  </ion-item>\n  <ion-item>\n     <ion-button slot=\"start\" shape=\"round\"  color=\"danger\" expand=\"full\" (click)=\"save();\" >Create</ion-button>\n<ion-button expand=\"block\" color=\"danger\"  shape=\"round\" (click)=\"cancel()\" >Cancel</ion-button>\n\n  </ion-item>\n</div>\n </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_appt_appt_module_ts.js.map