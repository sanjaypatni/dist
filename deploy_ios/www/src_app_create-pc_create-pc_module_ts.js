"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_create-pc_create-pc_module_ts"],{

/***/ 3260:
/*!*******************************************************!*\
  !*** ./src/app/create-pc/create-pc-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcPageRoutingModule": () => (/* binding */ CreatePcPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_pc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-pc.page */ 2446);




const routes = [
    {
        path: '',
        component: _create_pc_page__WEBPACK_IMPORTED_MODULE_0__.CreatePcPage
    }
];
let CreatePcPageRoutingModule = class CreatePcPageRoutingModule {
};
CreatePcPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreatePcPageRoutingModule);



/***/ }),

/***/ 3665:
/*!***********************************************!*\
  !*** ./src/app/create-pc/create-pc.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcPageModule": () => (/* binding */ CreatePcPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _create_pc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-pc-routing.module */ 3260);
/* harmony import */ var _create_pc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-pc.page */ 2446);







let CreatePcPageModule = class CreatePcPageModule {
};
CreatePcPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_pc_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreatePcPageRoutingModule
        ],
        declarations: [_create_pc_page__WEBPACK_IMPORTED_MODULE_1__.CreatePcPage]
    })
], CreatePcPageModule);



/***/ }),

/***/ 2446:
/*!*********************************************!*\
  !*** ./src/app/create-pc/create-pc.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePcPage": () => (/* binding */ CreatePcPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _create_pc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-pc.page.html?ngResource */ 1077);
/* harmony import */ var _create_pc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-pc.page.scss?ngResource */ 471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _services_playclips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/playclips.service */ 5800);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../messages */ 4971);
/* harmony import */ var _models_playclip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/playclip */ 3667);











let CreatePcPage = class CreatePcPage {
    constructor(signinService, playclipsService, toastCtrl, navCtrl, messages) {
        this.signinService = signinService;
        this.playclipsService = playclipsService;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.messages = messages;
        this.message = "";
        this.mlink = "";
        this.playclip = new _models_playclip__WEBPACK_IMPORTED_MODULE_5__.Playclip();
    }
    ngOnInit() {
    }
    delete(link) {
        for (let i = 0; i < this.signinService.pcClips.length; i++)
            this.signinService.pcClips[i].ilink = link;
        const uClips = this.signinService.pcClips.filter(this.deleteItem);
        this.signinService.pcClips = uClips;
        this.signinService.pcCnt = this.signinService.pcCnt - 1;
    }
    deleteItem(item) {
        return item.ilink != item.link;
    }
    savePc() {
        this.validate();
        if (this.message.length > 0) {
            this.showToast(this.message);
            this.message = "";
            return;
        }
        this.playclip = new _models_playclip__WEBPACK_IMPORTED_MODULE_5__.Playclip();
        this.playclip.login = this.signinService.user.login;
        this.playclip.title = this.title;
        this.playclip.description = this.description;
        this.playclip.createdBy = this.createdBy;
        this.playclip.clips = this.signinService.pcClips;
        for (let i = 0; i < this.signinService.pcClips.length; i++)
            this.playclip.price = this.playclip.price + this.signinService.pcClips[i].price;
        this.playclip.thumbnail = this.signinService.pcClips[0].thumbnail;
        this.playclipsService.createPlayclips(this.playclip).subscribe((response) => {
            this.message = this.messages.success;
            this.showToast(this.message);
            this.navCtrl.navigateForward("tab4");
        });
    }
    loadData(event) {
        // Using settimeout to simulate api call
        setTimeout(() => {
            // load more data
            //Hide Infinite List Loader on Complete
            event.target.complete();
            //Rerender Virtual Scroll List After Adding New Data
            this.virtualScroll.checkEnd();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.signinService.pcClips.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    showToast(message) {
        this.toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        }).then((toastData) => {
            toastData.present();
        });
    }
    validate() {
        if (this.title != undefined) {
            if (this.title.length < 4)
                this.message = this.messages.titleLenght;
        }
        else
            this.message = this.messages.titleRequired;
    }
};
CreatePcPage.ctorParameters = () => [
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService },
    { type: _services_playclips_service__WEBPACK_IMPORTED_MODULE_3__.PlayclipsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _messages__WEBPACK_IMPORTED_MODULE_4__.Messages }
];
CreatePcPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll,] }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonVirtualScroll,] }]
};
CreatePcPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-create-pc',
        template: _create_pc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_pc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreatePcPage);



/***/ }),

/***/ 3667:
/*!************************************!*\
  !*** ./src/app/models/playclip.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Playclip": () => (/* binding */ Playclip)
/* harmony export */ });
class Playclip {
    constructor() {
        this.title = "";
        this.login = "";
        this.description = "";
        this.application = "";
        this.startDate = "";
        this.endDate = "";
        this.createdBy = "";
        this.createDate = "";
        this.thumbnail = "";
        this.likes = 0;
        this.archive = 0;
        this.price = 0.0;
        this.bought = 0;
    }
}


/***/ }),

/***/ 5800:
/*!***********************************************!*\
  !*** ./src/app/services/playclips.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayclipsService": () => (/* binding */ PlayclipsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models_playclip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/playclip */ 3667);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ 5111);
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.service */ 6496);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);








let PlayclipsService = class PlayclipsService {
    constructor(http, api, signInService) {
        this.http = http;
        this.api = api;
        this.signInService = signInService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        this.playclip = new _models_playclip__WEBPACK_IMPORTED_MODULE_0__.Playclip();
    }
    createPlayclips(playclip) {
        this.delete(playclip.id);
        return this.http.post(this.api.playclips + "?application=playclips", JSON.stringify(playclip), this.signInService.httpOptionsAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    getPlayclips() {
        return this.http
            .get(this.api.playclips, this.signInService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    getPlayclip(id) {
        return this.http
            .get(this.api.playclips + "/" + id, this.signInService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    delete(id) {
        this.http.delete(this.api.playclips + "/" + id, this.signInService.httpOptionsAuth)
            .subscribe(() => this.status = 'Delete successful');
    }
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
    archive(playclip) {
        return this.http.post(this.api.archiveplayclip, JSON.stringify(playclip), this.signInService.httpOptionsAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    bought(playclip) {
        return this.http.post(this.api.boughtplayclip, JSON.stringify(playclip), this.signInService.httpOptionsAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    purge() {
        this.http.get(this.api.purgeplayclip, this.signInService.httpOptionsAuth)
            .subscribe(() => this.status = 'Purge successful');
    }
};
PlayclipsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _api__WEBPACK_IMPORTED_MODULE_1__.Api },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService }
];
PlayclipsService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], PlayclipsService);



/***/ }),

/***/ 471:
/*!**********************************************************!*\
  !*** ./src/app/create-pc/create-pc.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1077:
/*!**********************************************************!*\
  !*** ./src/app/create-pc/create-pc.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Create Playclip</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"tab3\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-list *ngIf=\"signinService.pcClips.length > 0\" lines=\"none\">\n  <ion-item>\n    <ion-label position=\"stacked\"> Title:</ion-label>\n    <ion-input type=\"title\" placeholder=\"Title\" [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\"> Description:</ion-label>\n    <ion-input type=\"title\" placeholder=\"Description\" [(ngModel)]=\"description\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\"> Composer:</ion-label>\n    <ion-input type=\"title\" placeholder=\"Composer\" [(ngModel)]=\"createdBy\"></ion-input>\n  </ion-item>\n  <ion-virtual-scroll [items]=\"signinService.pcClips\">\n   <ion-item *virtualItem=\"let item\">\n      <ion-item *ngIf=\"item.showImage\">\n      <ion-avatar slot=\"start\" >\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"camera-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item *ngIf=\"item.showAudio\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"volume-high-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item *ngIf=\"item.showVideo\">\n      <ion-avatar slot=\"start\" >\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"videocam-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item *ngIf=\"item.showYTube\">\n        <ion-avatar slot=\"start\" >\n          <img src=\"{{item.thumbnail}}\">\n        </ion-avatar>\n        <ion-avatar slot=\"end\">\n          <ion-icon name=\"logo-youtube\"></ion-icon>\n        </ion-avatar>\n        </ion-item>\n     <ion-item *ngIf=\"item.showText\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"reader-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n     <ion-item *ngIf=\"item.showPdf\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"newspaper-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n     <ion-item *ngIf=\"item.showLink\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"link-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item *ngIf=\"item.showAppt\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"calendar\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item *ngIf=\"item.showRecord\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"recording-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-label>\n        <h2>{{item.title}}</h2>\n      </ion-label>\n      <ion-item>\n       <ion-avatar slot=\"start\" *ngIf=\"item.like\" >\n        <ion-icon name=\"thumbs-up\"></ion-icon>\n      </ion-avatar>\n      <ion-avatar slot=\"start\" *ngIf=\"item.unlike\" >\n        <ion-icon name=\"thumbs-down\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n\n\n     <div *ngIf=\"item.srating1\">\n                <ion-icon name=\"star\"></ion-icon>\n     </div>\n     <div *ngIf=\"item.srating2\">\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n     </div>\n     <div *ngIf=\"item.srating3\">\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n     </div>\n     <div *ngIf=\"item.srating4\">\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n     </div>\n     <div *ngIf=\"item.srating5\">\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n     </div>\n     <ion-item> \n      <ion-label> $ {{ item.price }} </ion-label>\n      <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"delete(item.link)\" >\n       Delete\n      </ion-button>\n     </ion-item> \n    </ion-item>\n  </ion-virtual-scroll>\n   <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"savePc()\" >\n     Save\n   </ion-button>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_create-pc_create-pc_module_ts.js.map