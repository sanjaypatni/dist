"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_content-details_content-details_module_ts"],{

/***/ 2230:
/*!*******************************************************************!*\
  !*** ./src/app/content-details/content-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentDetailsPageRoutingModule": () => (/* binding */ ContentDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _content_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-details.page */ 5771);




const routes = [
    {
        path: '',
        component: _content_details_page__WEBPACK_IMPORTED_MODULE_0__.ContentDetailsPage
    }
];
let ContentDetailsPageRoutingModule = class ContentDetailsPageRoutingModule {
};
ContentDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContentDetailsPageRoutingModule);



/***/ }),

/***/ 9387:
/*!***********************************************************!*\
  !*** ./src/app/content-details/content-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentDetailsPageModule": () => (/* binding */ ContentDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _content_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-details-routing.module */ 2230);
/* harmony import */ var _content_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-details.page */ 5771);







let ContentDetailsPageModule = class ContentDetailsPageModule {
};
ContentDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _content_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContentDetailsPageRoutingModule
        ],
        declarations: [_content_details_page__WEBPACK_IMPORTED_MODULE_1__.ContentDetailsPage]
    })
], ContentDetailsPageModule);



/***/ }),

/***/ 5771:
/*!*********************************************************!*\
  !*** ./src/app/content-details/content-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentDetailsPage": () => (/* binding */ ContentDetailsPage)
/* harmony export */ });
/* harmony import */ var _Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _content_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-details.page.html?ngResource */ 5898);
/* harmony import */ var _content_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-details.page.scss?ngResource */ 2447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _services_contents_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contents.service */ 5699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _services_clips_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/clips.service */ 5336);











let ContentDetailsPage = class ContentDetailsPage {
  constructor(signinService, contentsService, navCtrl, router, dom, clipsService) {
    this.signinService = signinService;
    this.contentsService = contentsService;
    this.navCtrl = navCtrl;
    this.router = router;
    this.dom = dom;
    this.clipsService = clipsService;
    this.hide = false;
    this.init();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnInit() {}

  init() {
    var _this = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.href = _this.router.url;

      var index = _this.href.lastIndexOf("/");

      var id = _this.href.substring(index + 1);

      _this.contentsService.get(id).subscribe(response => {
        _this.content = response;
        _this.content.base64String = "data:" + _this.content.type + "/" + _this.content.fileType + ";base64," + _this.content.base64Bytes;
      });

      yield _this.sleep(1000);
      console.log(_this.content.type);
      if (_this.content.type == "audio") _this.content.showAudio = true;
      if (_this.content.type == "record") _this.content.showAudio = true;
      if (_this.content.type == "image") _this.content.showImage = true;
      if (_this.content.type == "video") _this.content.showVideo = true;
      if (_this.content.type == "ytube") _this.content.showYTube = true;
      if (_this.content.type == "text") _this.content.showText = true;

      if (_this.content.type == "pdf") {
        _this.content.showPdf = true;
        _this.content.base64String = "data:" + "application" + "/" + _this.content.fileType + ";base64," + _this.content.base64Bytes; // const iFrame1 = document.querySelector("iframe_a");
        // const iFrame1Body = iFrame1.document.querySelector("a") ;
      }

      if (_this.content.type == "link") _this.content.showLink = true;
      if (_this.content.type == "appt") _this.content.showAppt = true;
    })();
  }

  delete() {
    this.contentsService.publishContent("content-delete", this.content).subscribe(response => {});
    this.contentsService.delete(this.content.id);
    this.navCtrl.navigateBack(`tab1`);
    this.hide = true;
  }

  unlike() {
    this.contentsService.unlike(this.content).subscribe(response => {
      this.navCtrl.navigateForward("tab1");
    });
  }

  like() {
    this.contentsService.like(this.content).subscribe(response => {
      this.navCtrl.navigateForward("tab1");
    });
  }

  object1() {
    this.content.object = 1;
    this.contentsService.object(this.content).subscribe(response => {
      this.navCtrl.navigateForward("tab1");
    });
  }

  object2() {
    this.content.object = 2;
    this.contentsService.object(this.content).subscribe(response => {
      this.navCtrl.navigateForward("tab1");
    });
  }

  archive() {
    this.content.archive = 1;
    this.contentsService.archive(this.content).subscribe(response => {});
    this.hide = true;
  }

  ytVideoIdSanitizer() {
    return this.dom.bypassSecurityTrustResourceUrl(this.content.link);
  }

  purge() {
    var _this2 = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.hide = false;

      _this2.contentsService.delete(_this2.content.id);

      yield _this2.sleep(500);

      _this2.contentsService.getAllContents();

      yield _this2.sleep(500);

      _this2.navCtrl.navigateForward("tab1");
    })();
  }

};

ContentDetailsPage.ctorParameters = () => [{
  type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__.SigninService
}, {
  type: _services_contents_service__WEBPACK_IMPORTED_MODULE_4__.ContentsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
}, {
  type: _services_clips_service__WEBPACK_IMPORTED_MODULE_5__.ClipsService
}];

ContentDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-content-details',
  template: _content_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_content_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ContentDetailsPage);


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

/***/ 2447:
/*!**********************************************************************!*\
  !*** ./src/app/content-details/content-details.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LWRldGFpbHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5898:
/*!**********************************************************************!*\
  !*** ./src/app/content-details/content-details.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Content Details</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"tab1\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"content != undefind\">\n <ion-list lines=\"none\">\n  <ion-item>\n    <div>\n      <ion-label>\n        <ion-text >\n          <h2 >\n          {{content.title}}\n          </h2>\n        </ion-text>\n      </ion-label>\n    </div>  \n    </ion-item>\n  <ion-item>  \n   <div *ngIf=\"content.type == 'contact'\">\n        <ion-text>\n        <h4>\n          {{content.email}}\n        </h4>\n        </ion-text>\n        <ion-text >\n        <h4>\n          {{content.phone}}\n        </h4>\n        </ion-text>\n   </div>\n    <div *ngIf=\"content.showImage\" height=\"175px\" width=\"225px\">\n         <ion-img [src]=\"content.base64String\"  height=\"175px\" width=\"225px\" ></ion-img>\n   </div>\n   <div *ngIf=\"content.showAudio\">\n    <video  controls poster=\"{{ content.thumbnail }}\" height=\"175px\" width=\"225px\">\n     <source src=\"{{ content.link }}\" type=\"video/mp4\" >\n     Your browser does not support the <code>audio</code> element.\n    </video>\n   </div>\n   <div *ngIf=\"content.showPdf && signinService.platform.platforms().includes('ios')\">\n         <ion-img [src]=\"content.base64String\"  height=\"175px\" width=\"225px\" ></ion-img>\n   </div>\n   <div *ngIf=\"content.showPdf && !signinService.platform.platforms().includes('ios')\">\n\t   <p><a [href]=\"this.dom.bypassSecurityTrustResourceUrl(content.base64String)\" target=\"_blank\">\n     \t\t<table>\n     \t\t\t\t<tr>\n          \t\t\t\t<td>\n             \t\t\t\t\t\t<img [src]=\"content.thumbnail\" height=\"250\" width=\"350\" />\n                                        </td>\n    \t\t\t\t</tr>\n  \t\t</table>\n           </a></p>\n   </div>\n   <div *ngIf=\"content.showVideo\" poster=\"{{ content.thumbnail }}\" width=\"420\" height=\"315\">\n   <video controls width=\"225\" height=\"175\">\n     <source src=\"{{ content.link }}\" type=\"video/mp4\" height=\"175px\" width=\"225px\" >\n     Your browser does not support the <code>video</code> element.\n   </video>\n   </div>\n   <div *ngIf=\"content.showText\" poster=\"{{ content.thumbnail }}\" width=\"420\" height=\"315\">\n         <ion-item text-wrap>\n          {{content.description}}\n         </ion-item>\n   </div>\n   <div *ngIf=\"content.showAppt\" poster=\"{{ content.thumbnail }}\" width=\"420\" height=\"315\">\n         <ion-item text-wrap>\n          {{content.description}}\n         </ion-item>\n         <ion-item text-wrap>\n          {{content.link}}\n         </ion-item>\n   <ion-item>\n    <ion-label>Start</ion-label>\n    <ion-datetime displayFormat=\"DD-MMM-YY HH:mm\" (ionChange)=\"toggle()\" [(ngModel)]=\"content.startDate\" min=\"{{ content.startDate }}\" max=\"{{ content.startDate }}\" > </ion-datetime>\n   </ion-item>\n   <ion-item>\n    <ion-label>End</ion-label>\n    <ion-datetime displayFormat=\"DD-MMM-YY HH:mm\" (ionChange)=\"toggle()\" [(ngModel)]=\"content.endDate\"  min=\"{{ content.endDate }}\" max=\"{{ content.endDate }}\" > </ion-datetime>\n   </ion-item>\n   </div>\n   <div *ngIf=\"content.showYTube\">\n     <a [href]=\"content.link\" target=\"_blank\">\n     <table>\n     <tr>\n          <td>\n             <img [src]=\"content.thumbnail\" height=\"250\" width=\"350\" />\n           <table>\n                  <tr>\n                  <td background=\"https://pc-clips-storage.s3.us-west-1.amazonaws.com/play.png\" height=\"50\" width=\"60\">\n                  </td>\n                  </tr>\n           </table>\n          </td>\n     </tr>\n   </table>\n    </a>\n    </div>\n    <div *ngIf=\"content.showLink\">\n    <a [href]=\"content.link\">{{ content.title }}</a>\n    </div>\n   </ion-item>\n  <div *ngIf=\"content.object == 2\">\n  <ion-item>\n    <ion-avatar slot=\"start\">\n     <a  (click)=\"unlike()\">\n                <ion-icon name=\"thumbs-down\"></ion-icon>\n     </a>\n  </ion-avatar>\n  &nbsp;&nbsp; &nbsp;\n  <ion-avatar slot=\"start\">\n     <a  (click)=\"like()\">\n                <ion-icon name=\"thumbs-up\"></ion-icon>\n     </a>\n  </ion-avatar>\n  </ion-item>\n  </div>\n  <div *ngIf=\"content.object != 2\">\n  <ion-item>\n  <ion-avatar slot=\"start\" *ngIf=\"content.archive == 0\">\n     <a  (click)=\"object2()\">\n                <ion-icon name=\"checkbox-outline\"></ion-icon>\n     </a>\n  </ion-avatar>\n  &nbsp;&nbsp; &nbsp;\n  <ion-avatar slot=\"start\">\n     <a  (click)=\"object1()\" *ngIf=\"content.archive == 0\">\n                <ion-icon name=\"close-circle-outline\"></ion-icon>\n     </a>\n  </ion-avatar>\n  &nbsp;&nbsp; &nbsp;\n  <ion-avatar slot=\"start\" *ngIf=\"content.archive == 0\">\n     <a  (click)=\"archive()\">\n                <ion-icon name=\"archive\"></ion-icon>\n     </a>\n  </ion-avatar>\n  &nbsp;&nbsp; &nbsp;\n  <ion-avatar slot=\"start\" *ngIf=\"content.archive == 1\">\n     <a  (click)=\"purge()\">\n                <ion-icon name=\"trash\"></ion-icon>\n     </a>\n  </ion-avatar>\n </ion-item>\n  </div>\n </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_content-details_content-details_module_ts.js.map