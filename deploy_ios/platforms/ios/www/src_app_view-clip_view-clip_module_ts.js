"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view-clip_view-clip_module_ts"],{

/***/ 272:
/*!********************************!*\
  !*** ./src/app/models/clip.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clip": () => (/* binding */ Clip)
/* harmony export */ });
class Clip {
    constructor() {
        this.type = "";
        this.rating = 0;
        this.disabled = false;
        this.archine = 0;
        this.price = 0.0;
        this.preview = false;
        this.base64Bytes = "";
        this.fileType = "";
        this.base64String = "data:" + this.type + "/" + this.fileType + ";base64," + this.base64Bytes;
        this.active = "panel";
        this.playType = "playclip";
    }
}


/***/ }),

/***/ 5336:
/*!*******************************************!*\
  !*** ./src/app/services/clips.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipsService": () => (/* binding */ ClipsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models_clip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/clip */ 272);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ 5111);
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.service */ 6496);








let ClipsService = class ClipsService {
    constructor(http, api, signInService) {
        this.http = http;
        this.api = api;
        this.signInService = signInService;
        this.clip = new _models_clip__WEBPACK_IMPORTED_MODULE_0__.Clip();
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        console.log(this.signInService.jwt.token);
    }
    add(content) {
        this.clip.login = this.signInService.user.login;
        this.clip.link = content.link;
        this.clip.type = content.type;
        this.clip.title = content.title;
        this.createClip(this.clip).subscribe((response) => {
        });
    }
    // Handle API errors
    // Get clips data
    getList() {
        return this.http
            .get(this.api.clip + "?user=" + this.signInService.user.login + "&application=playclips", this.signInService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    // Get clips data
    getClipsByType(type) {
        return this.http
            .get(this.api.clipType + "?user=" + this.signInService.user.login + "&type=" + type + "&application=playclips", this.signInService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    // Create a new item
    createClip(clip) {
        console.log("post");
        this.clip.jwt = this.signInService.jwt.token;
        console.log(this.signInService.jwt.token);
        return this.http
            .post(this.api.clip + "?application=playclips", JSON.stringify(clip), this.signInService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    updateClip(id, clip) {
        return this.http.put(this.api.clip + "/" + id + "?application=playclips", JSON.stringify(clip), this.signInService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    // Create a new item
    getClip(id) {
        return this.http.get(this.api.clip + "/" + id + "?jwt=" + this.signInService.jwt.token)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    deleteClip(id) {
        this.http.delete(this.api.clip + "/" + id, this.signInService.httpOptionsAuth)
            .subscribe(() => this.status = 'Delete successful');
    }
    emailClip(email, link) {
        return this.http.get(this.api.email + "?email=" + email + "&id=" + link + "&login=" + this.signInService.user.login)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    textClip(phone, link) {
        return this.http.get(this.api.text + "?phone=" + phone + "&id=" + link + "&login=" + this.signInService.user.login)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)('Something bad happened; please try again later.');
    }
    ;
    purge() {
        this.http.get(this.api.purgeclip, this.signInService.httpOptionsAuth)
            .subscribe(() => this.status = 'Purge successful');
    }
    archive(clip) {
        return this.http.post(this.api.archiveclip, JSON.stringify(clip), this.signInService.httpOptionsAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
};
ClipsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _api__WEBPACK_IMPORTED_MODULE_1__.Api },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService }
];
ClipsService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], ClipsService);



/***/ }),

/***/ 9275:
/*!*******************************************************!*\
  !*** ./src/app/view-clip/view-clip-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewClipPageRoutingModule": () => (/* binding */ ViewClipPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _view_clip_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-clip.page */ 3360);




const routes = [
    {
        path: '',
        component: _view_clip_page__WEBPACK_IMPORTED_MODULE_0__.ViewClipPage
    }
];
let ViewClipPageRoutingModule = class ViewClipPageRoutingModule {
};
ViewClipPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewClipPageRoutingModule);



/***/ }),

/***/ 749:
/*!***********************************************!*\
  !*** ./src/app/view-clip/view-clip.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewClipPageModule": () => (/* binding */ ViewClipPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_clip_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-clip-routing.module */ 9275);
/* harmony import */ var _view_clip_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-clip.page */ 3360);







let ViewClipPageModule = class ViewClipPageModule {
};
ViewClipPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_clip_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewClipPageRoutingModule
        ],
        declarations: [_view_clip_page__WEBPACK_IMPORTED_MODULE_1__.ViewClipPage]
    })
], ViewClipPageModule);



/***/ }),

/***/ 3360:
/*!*********************************************!*\
  !*** ./src/app/view-clip/view-clip.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewClipPage": () => (/* binding */ ViewClipPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _view_clip_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-clip.page.html?ngResource */ 6012);
/* harmony import */ var _view_clip_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-clip.page.scss?ngResource */ 4802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _models_clip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/clip */ 272);
/* harmony import */ var _services_clips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/clips.service */ 5336);







let ViewClipPage = class ViewClipPage {
    constructor(router, clipService) {
        this.router = router;
        this.clipService = clipService;
        this.href = "";
        this.item = new _models_clip__WEBPACK_IMPORTED_MODULE_2__.Clip();
        this.ngOnInit();
    }
    ngOnInit() {
        this.href = this.router.url;
        var index = this.href.lastIndexOf("/");
        var id = this.href.substring(index + 1);
        console.log(id);
        this.clipService.getClip(id).subscribe(response => {
            console.log(response);
            this.item = response;
        });
    }
};
ViewClipPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_clips_service__WEBPACK_IMPORTED_MODULE_3__.ClipsService }
];
ViewClipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-view-clip',
        template: _view_clip_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_clip_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewClipPage);



/***/ }),

/***/ 4802:
/*!**********************************************************!*\
  !*** ./src/app/view-clip/view-clip.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWNsaXAucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6012:
/*!**********************************************************!*\
  !*** ./src/app/view-clip/view-clip.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>View</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div class=\"overview\">\n   <h3>{{item.title}}</h3>\n   <h4>{{item.description}}</h4>\n</div>\n<ion-item *ngIf=\"item.type == 'video'\">\n   <p><a [href]=\"item.link\" target=\"_blank\"> <img [src]=\"item.thumbnail\" /> </a></p>\n </ion-item>\n <ion-item *ngIf=\"item.type == 'ytube'\">\n   <p><a [href]=\"item.link\" target=\"_blank\"> <img [src]=\"item.thumbnail\" /> </a></p>\n </ion-item>\n <ion-item *ngIf=\"item.type == 'pdf'\">\n   <iframe src=\"assets/iframe.html\" name=\"iframe_a1\" height=\"175px\" width=\"225px\" ></iframe>\n  <p><a [href]=\"this.dom.bypassSecurityTrustResourceUrl(item.base64String)\" target=\"iframe_a1\">Load</a></p>\n </ion-item>\n <ion-item *ngIf=\"item.type == 'image'\">\n  <ion-img [src]=\"item.base64String\"  height=\"175px\" width=\"225px\" ></ion-img>\n </ion-item>\n <ion-item *ngIf=\"item.type == 'text'\">\n    <ion-item text-wrap>\n          {{item.description}}\n    </ion-item>\n </ion-item>\n <ion-item *ngIf=\"item.type == 'appt'\">\n         <ion-item text-wrap>\n          {{item.description}}\n         </ion-item>\n         <ion-item text-wrap>\n          {{item.link}}\n         </ion-item>\n   <ion-item>\n    <ion-label>Start</ion-label>\n    <ion-datetime displayFormat=\"DD-MMM-YY HH:mm\" (ionChange)=\"toggle()\" [(ngModel)]=\"item.startDate\" min=\"{{ item.startDate }}\" max=\"{{ item.startDate }}\" > </ion-datetime>\n   </ion-item>\n   <ion-item>\n    <ion-label>End</ion-label>\n    <ion-datetime displayFormat=\"DD-MMM-YY HH:mm\" (ionChange)=\"toggle()\" [(ngModel)]=\"item.endDate\"  min=\"{{ item.endDate }}\" max=\"{{ item.endDate }}\" > </ion-datetime>\n   </ion-item>\n  </ion-item>\n <ion-item *ngIf=\"item.type == 'contact'\">\n        <ion-item>\n          {{item.email}}\n        </ion-item>\n        <ion-item>\n          {{item.phone}}\n        </ion-item>\n </ion-item>\n<ion-item *ngIf=\"item.type == 'audio'\">\n    <video  controls poster=\"{{ item.thumbnail }}\" height=\"175px\" width=\"225px\">\n     <source src=\"{{ item.link }}\" type=\"video/mp4\" >\n     Your browser does not support the <code>audio</code> element.\n    </video>\n</ion-item>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view-clip_view-clip_module_ts.js.map