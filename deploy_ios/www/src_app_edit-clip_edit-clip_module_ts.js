"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-clip_edit-clip_module_ts"],{

/***/ 6669:
/*!*******************************************************!*\
  !*** ./src/app/edit-clip/edit-clip-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditClipPageRoutingModule": () => (/* binding */ EditClipPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _edit_clip_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-clip.page */ 3509);




const routes = [
    {
        path: '',
        component: _edit_clip_page__WEBPACK_IMPORTED_MODULE_0__.EditClipPage
    }
];
let EditClipPageRoutingModule = class EditClipPageRoutingModule {
};
EditClipPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditClipPageRoutingModule);



/***/ }),

/***/ 9412:
/*!***********************************************!*\
  !*** ./src/app/edit-clip/edit-clip.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditClipPageModule": () => (/* binding */ EditClipPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _edit_clip_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-clip-routing.module */ 6669);
/* harmony import */ var _edit_clip_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-clip.page */ 3509);







let EditClipPageModule = class EditClipPageModule {
};
EditClipPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_clip_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditClipPageRoutingModule
        ],
        declarations: [_edit_clip_page__WEBPACK_IMPORTED_MODULE_1__.EditClipPage]
    })
], EditClipPageModule);



/***/ }),

/***/ 3509:
/*!*********************************************!*\
  !*** ./src/app/edit-clip/edit-clip.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditClipPage": () => (/* binding */ EditClipPage)
/* harmony export */ });
/* harmony import */ var _Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _edit_clip_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-clip.page.html?ngResource */ 2457);
/* harmony import */ var _edit_clip_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-clip.page.scss?ngResource */ 162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_clips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/clips.service */ 5336);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _models_clip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/clip */ 272);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);











let EditClipPage = class EditClipPage {
  constructor(signinService, clipsService, router, navCtrl, dom) {
    this.signinService = signinService;
    this.clipsService = clipsService;
    this.router = router;
    this.navCtrl = navCtrl;
    this.dom = dom;
    this.href = "";
    this.hide = false;
    this.clip = new _models_clip__WEBPACK_IMPORTED_MODULE_5__.Clip();
    this.init();
  }

  ngOnInit() {}

  radioGroupChange(event) {
    this.selectedRadioGroup = event.detail;
    this.selectedRadioItem = this.selectedRadioGroup.value;
  }

  init() {
    var _this = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.href = _this.router.url;

      var index = _this.href.lastIndexOf("/");

      var id = _this.href.substring(index + 1);

      _this.radio_list = [{
        id: '1',
        name: 'radio_list',
        value: '1',
        img: 'assets/img/star.png',
        disabled: false,
        checked: false,
        color: 'danger'
      }, {
        id: '2',
        name: 'radio_list',
        value: '2',
        img: 'assets/img/star.png',
        disabled: false,
        checked: false,
        color: 'danger'
      }, {
        id: '3',
        name: 'radio_list',
        value: '3',
        img: 'assets/img/star.png',
        disabled: false,
        checked: false,
        color: 'danger'
      }, {
        id: '4',
        name: 'radio_list',
        value: '4',
        img: 'assets/img/star.img',
        disabled: false,
        checked: false,
        color: 'danger'
      }, {
        id: '5',
        name: 'radio_list',
        value: '5',
        img: 'assets/img/star.png',
        disabled: false,
        checked: false,
        color: 'danger'
      }];

      _this.clipsService.getClip(id).subscribe(response => {
        _this.clip = response;
        if (_this.clip.type == "audio") _this.clip.showAudio = true;
        if (_this.clip.type == "record") _this.clip.showRecord = true;

        if (_this.clip.type == "image") {
          _this.clip.showImage = true;
          _this.clip.base64String = "data:" + _this.clip.type + "/" + _this.clip.fileType + ";base64," + _this.clip.base64Bytes;
        }

        if (_this.clip.type == "video") _this.clip.showVideo = true;
        if (_this.clip.type == "ytube") _this.clip.showYTube = true;
        if (_this.clip.type == "text") _this.clip.showText = true;
        if (_this.clip.type == "appt") _this.clip.showAppt = true;
        if (_this.clip.type == "link") _this.clip.showLink = true;
        if (_this.clip.type == "contact") _this.clip.showContact = true;

        if (_this.clip.type == "pdf") {
          _this.clip.showPdf = true;
          _this.clip.base64String = "data:" + "application" + "/" + _this.clip.fileType + ";base64," + _this.clip.base64Bytes;
        }
      });

      yield _this.sleep(500);
    })();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  delete() {
    this.clipsService.deleteClip(this.clip.id);
    this.navCtrl.navigateBack(`tab2/` + this.clip.id);
  }

  update() {
    var _this2 = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.clipsService.updateClip(this.clip.id, this.clip);
      // this.clip.rating = this.selectedRadioItem;
      _this2.clipsService.deleteClip(_this2.clip.id);

      yield _this2.sleep(500);

      _this2.clipsService.createClip(_this2.clip).subscribe(response => {});

      _this2.navCtrl.navigateBack('tab2');
    })();
  }

  ytVideoIdSanitizer() {
    return this.dom.bypassSecurityTrustResourceUrl(this.clip.link);
  }

  archive() {
    this.clipsService.archive(this.clip).subscribe(response => {});
    this.hide = true;
  }

  purge() {
    var _this3 = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.hide = false;

      _this3.clipsService.deleteClip(_this3.clip.id);

      yield _this3.sleep(500);

      _this3.clipsService.getList();

      yield _this3.sleep(500);

      _this3.navCtrl.navigateForward("tab2");
    })();
  }

  oneStar() {
    this.clip.rating = 1;
  }

  twoStar() {
    this.clip.rating = 2;
  }

  threeStar() {
    this.clip.rating = 3;
  }

  fourStar() {
    this.clip.rating = 4;
  }

  fiveStar() {
    this.clip.rating = 5;
  }

};

EditClipPage.ctorParameters = () => [{
  type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_4__.SigninService
}, {
  type: _services_clips_service__WEBPACK_IMPORTED_MODULE_3__.ClipsService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
}];

EditClipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-edit-clip',
  template: _edit_clip_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_edit_clip_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EditClipPage);


/***/ }),

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

/***/ 162:
/*!**********************************************************!*\
  !*** ./src/app/edit-clip/edit-clip.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNsaXAucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2457:
/*!**********************************************************!*\
  !*** ./src/app/edit-clip/edit-clip.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Review</ion-title>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label position=\"stacked\">Title</ion-label>\n      <ion-label> {{ clip.title }} </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Review</ion-label>\n      <ion-input type=\"text\" placeholder=\"Write your review about clip here\" [(ngModel)]=\"clip.description\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" >\n    <div *ngIf=\"clip.showImage\" height=\"175px\" width=\"225px\">\n          <ion-avatar slot=\"end\">\n        \t<ion-icon name=\"camera-outline\"></ion-icon>\n      \t  </ion-avatar>\n         <ion-img [src]=\"clip.base64String\"  ></ion-img>\n   </div>\n   <div *ngIf=\"clip.showAudio\">\n          <ion-avatar slot=\"end\">\n        \t<ion-icon name=\"volume-high-outline\"></ion-icon>\n      \t  </ion-avatar>\n    <video  controls poster=\"{{ clip.thumbnail }}\" height=\"175px\" width=\"225px\">\n     <source src=\"{{ clip.link }}\" type=\"video/mp4\" >\n     Your browser does not support the <code>audio</code> element.\n    </video>\n   </div>\n   <div *ngIf=\"clip.showRecord\">\n          <ion-avatar slot=\"end\">\n        \t<ion-icon name=\"recording-outline\"></ion-icon>\n      \t  </ion-avatar>\n    <video  controls poster=\"{{ clip.thumbnail }}\" height=\"175px\" width=\"225px\">\n     <source src=\"{{ clip.link }}\" type=\"video/mp4\" >\n     Your browser does not support the <code>audio</code> element.\n    </video>\n   </div>\n   <div *ngIf=\"clip.showVideo\" poster=\"{{ clip.thumbnail }}\" height=\"175px\" width=\"225px\">\n          <ion-avatar slot=\"end\">\n        \t<ion-icon name=\"videocam-outline\"></ion-icon>\n      \t  </ion-avatar>\n   <video controls>\n     <source src=\"{{ clip.link }}\" type=\"video/mp4\" >\n     Your browser does not support the <code>video</code> element.\n   </video>\n   </div>\n   <div *ngIf=\"clip.showYTube\">\n          <ion-avatar slot=\"end\">\n        \t<ion-icon name=\"logo-youtube\"></ion-icon>\n      \t  </ion-avatar>\n    <a [href]=\"clip.link\" target=\"_blank\">\n     <table>\n     <tr>\n          <td>\n             <img [src]=\"clip.thumbnail\" height=\"250\" width=\"350\" />\n           <table>\n                  <tr>\n                  <td background=\"https://pc-clips-storage.s3.us-west-1.amazonaws.com/play.png\" height=\"50\" width=\"60\">\n                  </td>\n                  </tr>\n           </table>\n          </td>\n     </tr>\n   </table>\n    </a>\n    </div>\n    <div *ngIf=\"clip.showText\">\n          <ion-avatar slot=\"end\">\n        <ion-icon name=\"reader-outline\"></ion-icon>\n      </ion-avatar>\n         {{ clip.description }}\n   </div>\n    <div *ngIf=\"clip.showContact\">\n          <ion-avatar slot=\"end\">\n        <ion-icon name=\"people-circle-outline\"></ion-icon>\n      </ion-avatar>\n         {{ clip.email }}\n         {{ clip.phone }}\n   </div>\n    <div *ngIf=\"clip.showLink\">\n          <ion-avatar slot=\"end\">\n        <ion-icon name=\"link-outline\"></ion-icon>\n      </ion-avatar>\n         <a [href]=\"clip.link\"> {{ clip.title }}</a>\n   </div>\n   <div *ngIf=\"clip.showPdf && !signinService.platform.platforms().includes('ios')\">\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"newspaper-outline\"></ion-icon>\n      </ion-avatar>\n           <iframe src=\"assets/iframe.html\" name=\"iframe_a_{{ clip.title }\" height=\"450px\" width=\"800px\" ></iframe>\n           <p><a [href]=\"this.dom.bypassSecurityTrustUrl(clip.base64String)\" target=\"iframe_a_{{ clip.title }\">Load</a></p>\n   </div>\n   <div *ngIf=\"clip.showPdf && signinService.platform.platforms().includes('ios')\">\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"newspaper-outline\"></ion-icon>\n      </ion-avatar>\n         <ion-img [src]=\"clip.base64String\"  ></ion-img>\n   </div>\n   <div *ngIf=\"clip.showAppt\" poster=\"{{ clip.thumbnail }}\" width=\"420\" height=\"315\">\n    <ion-avatar slot=\"end\">\n        <ion-icon name=\"calendar\"></ion-icon>\n      </ion-avatar>\n   <ion-item>\n    <ion-label>Start</ion-label>\n    <ion-datetime displayFormat=\"DD-MMM-YY HH:mm\" (ionChange)=\"toggle()\" [(ngModel)]=\"clip.startDate\" min=\"{{ clip.startDate }}\" max=\"{{ clip.startDate }}\" > </ion-datetime>\n   </ion-item>\n   <ion-item>\n    <ion-label>End</ion-label>\n    <ion-datetime displayFormat=\"DD-MMM-YY HH:mm\" (ionChange)=\"toggle()\" [(ngModel)]=\"clip.endDate\"  min=\"{{ clip.endDate }}\" max=\"{{ clip.endDate }}\" > </ion-datetime>\n   </ion-item>\n   </div>\n   </ion-item>\n\n    <ion-label>\n        Rating \n    </ion-label>\n   <ion-item *ngIf=\"clip.rating == 0\">\n     <ion-img src=\"assets/icon/star.png\" (click)=\"oneStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"   (click)=\"twoStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"  (click)=\"threeStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"  (click)=\"fourStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"  (click)=\"fiveStar()\"></ion-img>\n   </ion-item>\n   <ion-item *ngIf=\"clip.rating == 1\">\n     <ion-img src=\"assets/icon/star-filled.png\" (click)=\"oneStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"   (click)=\"twoStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"  (click)=\"threeStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"  (click)=\"fourStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"  (click)=\"fiveStar()\"></ion-img>\n   </ion-item>\n   <ion-item *ngIf=\"clip.rating == 2\">\n     <ion-img src=\"assets/icon/star-filled.png\" (click)=\"oneStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star-filled.png\"   (click)=\"twoStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"  (click)=\"threeStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"  (click)=\"fourStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"  (click)=\"fiveStar()\"></ion-img>\n   </ion-item>\n   <ion-item *ngIf=\"clip.rating == 3\">\n     <ion-img src=\"assets/icon/star-filled.png\" (click)=\"oneStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star-filled.png\"   (click)=\"twoStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star-filled.png\"  (click)=\"threeStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"  (click)=\"fourStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"  (click)=\"fiveStar()\"></ion-img>\n   </ion-item>\n   <ion-item *ngIf=\"clip.rating == 4\">\n     <ion-img src=\"assets/icon/star-filled.png\" (click)=\"oneStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star-filled.png\"   (click)=\"twoStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star-filled.png\"  (click)=\"threeStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star-filled.png\"  (click)=\"fourStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star.png\"  (click)=\"fiveStar()\"></ion-img>\n   </ion-item>\n   <ion-item *ngIf=\"clip.rating == 5\">\n     <ion-img src=\"assets/icon/star-filled.png\" (click)=\"oneStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star-filled.png\"   (click)=\"twoStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star-filled.png\"  (click)=\"threeStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star-filled.png\"  (click)=\"fourStar()\"></ion-img>\n     <ion-img src=\"assets/icon/star-filled.png\"  (click)=\"fiveStar()\"></ion-img>\n   </ion-item>\n\n    <ion-item>\n      <div *ngIf=\"signinService.page == 'tab2'\"> \n      <ion-avatar slot=\"start\">\n       <a  (click)=\"update()\">\n                <ion-icon name=\"save\"></ion-icon>\n       </a>\n&nbsp;&nbsp; &nbsp;\n       <a  (click)=\"archive()\" *ngIf=\"hide == false\">\n                <ion-icon name=\"archive\"></ion-icon>\n       </a>\n&nbsp;&nbsp; &nbsp;\n       <a  (click)=\"purge()\" *ngIf=\"hide == true\">\n                <ion-icon name=\"trash\"></ion-icon>\n       </a>\n      </ion-avatar>\n      </div>\n    </ion-item>\n  </ion-list>\n  </ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-clip_edit-clip_module_ts.js.map