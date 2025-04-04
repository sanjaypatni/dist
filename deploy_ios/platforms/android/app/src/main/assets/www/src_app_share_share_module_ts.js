"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_share_share_module_ts"],{

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

/***/ 6994:
/*!*******************************************!*\
  !*** ./src/app/services/share.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareService": () => (/* binding */ ShareService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ 5111);
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.service */ 6496);







let ShareService = class ShareService {
    constructor(http, signinService, api) {
        this.http = http;
        this.signinService = signinService;
        this.api = api;
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    sms() {
        return this.http.get(this.api.sms)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    mail(id) {
        return this.http.get(this.api.mail + "&id=" + id, this.signinService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    whatsapp(id) {
        return this.http.get(this.api.wa + id, this.signinService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    text(id) {
        return this.http.get(this.api.text, this.signinService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)('Something bad happened; please try again later.');
    }
    ;
};
ShareService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_1__.SigninService },
    { type: _api__WEBPACK_IMPORTED_MODULE_0__.Api }
];
ShareService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], ShareService);



/***/ }),

/***/ 1465:
/*!***********************************************!*\
  !*** ./src/app/share/share-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharePageRoutingModule": () => (/* binding */ SharePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _share_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share.page */ 5586);




const routes = [
    {
        path: '',
        component: _share_page__WEBPACK_IMPORTED_MODULE_0__.SharePage
    }
];
let SharePageRoutingModule = class SharePageRoutingModule {
};
SharePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SharePageRoutingModule);



/***/ }),

/***/ 7841:
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharePageModule": () => (/* binding */ SharePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _share_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share-routing.module */ 1465);
/* harmony import */ var _share_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share.page */ 5586);







let SharePageModule = class SharePageModule {
};
SharePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _share_routing_module__WEBPACK_IMPORTED_MODULE_0__.SharePageRoutingModule
        ],
        declarations: [_share_page__WEBPACK_IMPORTED_MODULE_1__.SharePage]
    })
], SharePageModule);



/***/ }),

/***/ 5586:
/*!*************************************!*\
  !*** ./src/app/share/share.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharePage": () => (/* binding */ SharePage)
/* harmony export */ });
/* harmony import */ var _Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _share_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share.page.html?ngResource */ 2390);
/* harmony import */ var _share_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share.page.scss?ngResource */ 7329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _models_playclip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/playclip */ 3667);
/* harmony import */ var _services_playclips_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/playclips.service */ 5800);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/share.service */ 6994);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);











let SharePage = class SharePage {
  constructor(navCtrl, router, playclipsService, signinService, shareService) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.playclipsService = playclipsService;
    this.signinService = signinService;
    this.shareService = shareService;
    this.playclip = new _models_playclip__WEBPACK_IMPORTED_MODULE_3__.Playclip();
    this.href = "";
    this.susers = [];
    this.init();
    this.signinService.getUsers().subscribe(response => {
      console.log(response);
      this.users = response;
    });
  }

  ngOnInit() {}

  init() {
    var _this = this;

    return (0,_Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.href = _this.router.url;
      console.log(_this.router.url);

      var index = _this.href.lastIndexOf("/");

      var id = _this.href.substring(index + 1);

      console.log(id);
      console.log(index);
      console.log(_this.signinService.user.login);

      _this.playclipsService.getPlayclip(id).subscribe(response => {
        console.log(response);
        _this.playclip = response;
        console.log(_this.playclip.title);
      });
    })();
  }

  checkCheckbox() {
    setTimeout(() => {
      this.users.forEach(item => {
        item.isUserSelected = this.checkParent;
      });
    });
  }

  verifyEvent() {
    const allItems = this.users.length;
    let selected = 0;
    this.users.map(item => {
      if (item.isUserSelected) selected++;
    });

    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.indeterminateState = true;
      this.checkParent = false;
    } else if (selected == allItems) {
      // All item selected
      this.checkParent = true;
      this.indeterminateState = false;
    } else {
      // No item is selected
      this.indeterminateState = false;
      this.checkParent = false;
    }
  }

  smsPlayclip() {
    console.log("sms");
    this.shareService.sms().subscribe(response => {
      console.log(response);
    });
  }

  mailPlayclip() {
    console.log("mail");
    console.log(this.playclip.id);
    this.shareService.mail(this.playclip.id).subscribe(response => {
      console.log("mail");
      console.log(response);
    });
    this.shareService.text(this.playclip.id).subscribe(response => {
      console.log("text");
      console.log(response);
    });
  }

  sharePlayclip() {
    this.susers = [];
    this.users.map(item => {
      if (item.isUserSelected) {
        console.log(item);
        this.susers.push(item);
      }
    });
    console.log(this.susers);
    this.playclip.users = this.susers;
    console.log(this.playclip);
    this.playclipsService.createPlayclips(this.playclip).subscribe(response => {
      this.navCtrl.navigateForward("tab4");
    });
  }

};

SharePage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _services_playclips_service__WEBPACK_IMPORTED_MODULE_4__.PlayclipsService
}, {
  type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_5__.SigninService
}, {
  type: _services_share_service__WEBPACK_IMPORTED_MODULE_6__.ShareService
}];

SharePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-share',
  template: _share_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_share_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SharePage);


/***/ }),

/***/ 7329:
/*!**************************************************!*\
  !*** ./src/app/share/share.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2390:
/*!**************************************************!*\
  !*** ./src/app/share/share.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n    <ion-title>Share</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"tab4\"></ion-back-button>\n    </ion-buttons>\n</ion-toolbar>\n\n<ion-content>\n<ion-list lines=\"none\">\n  <ion-item>\n    <ion-label><strong>All</strong></ion-label>\n    <ion-checkbox slot=\"start\" [(ngModel)]=\"checkParent\" [indeterminate]=\"indeterminateState\"\n      (click)=\"checkCheckbox($event)\"></ion-checkbox>\n  </ion-item>\n</ion-list>\n<ion-list>\n  <ion-item *ngFor=\"let user of users\">\n   <ion-item *ngIf=\"signinService.user.login != user.login\">\n   <ion-avatar slot=\"start\">\n    <img [src]=\"user.login\" />\n   </ion-avatar>\n    <ion-label> {{ user.email }} </ion-label>\n   <ion-checkbox slot=\"start\" [(ngModel)]=\"user.isUserSelected\" (ionChange)=\"verifyEvent()\"> </ion-checkbox>\n  </ion-item>\n  </ion-item>\n</ion-list>\n<ion-item>\n      <a  (click)=\"sharePlayclip()\">\n                <ion-icon name=\"share\"></ion-icon>\n     </a>\n</ion-item>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_share_share_module_ts.js.map