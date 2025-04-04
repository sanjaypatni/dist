"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_image_image_module_ts"],{

/***/ 7078:
/*!***********************************************!*\
  !*** ./src/app/image/image-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePageRoutingModule": () => (/* binding */ ImagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _image_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.page */ 8677);




const routes = [
    {
        path: '',
        component: _image_page__WEBPACK_IMPORTED_MODULE_0__.ImagePage
    }
];
let ImagePageRoutingModule = class ImagePageRoutingModule {
};
ImagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImagePageRoutingModule);



/***/ }),

/***/ 8474:
/*!***************************************!*\
  !*** ./src/app/image/image.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePageModule": () => (/* binding */ ImagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _image_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-routing.module */ 7078);
/* harmony import */ var _image_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.page */ 8677);







let ImagePageModule = class ImagePageModule {
};
ImagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _image_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImagePageRoutingModule
        ],
        declarations: [_image_page__WEBPACK_IMPORTED_MODULE_1__.ImagePage]
    })
], ImagePageModule);



/***/ }),

/***/ 8677:
/*!*************************************!*\
  !*** ./src/app/image/image.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePage": () => (/* binding */ ImagePage)
/* harmony export */ });
/* harmony import */ var _Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _image_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.page.html?ngResource */ 3307);
/* harmony import */ var _image_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.page.scss?ngResource */ 2795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_contents_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contents.service */ 5699);
/* harmony import */ var _models_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/content */ 6945);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ 5111);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../messages */ 4971);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/subscription.service */ 9063);














let ImagePage = class ImagePage {
  constructor(signinService, contentService, router, navCtrl, toastCtrl, loadingController, api, http, subscriptionService, messages) {
    this.signinService = signinService;
    this.contentService = contentService;
    this.router = router;
    this.navCtrl = navCtrl;
    this.toastCtrl = toastCtrl;
    this.loadingController = loadingController;
    this.api = api;
    this.http = http;
    this.subscriptionService = subscriptionService;
    this.messages = messages;
    this.content = new _models_content__WEBPACK_IMPORTED_MODULE_4__.Content();
    this.description = "";
    this.link = "";
    this.message = "";
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  ngOnInit() {}

  showToast(message) {
    this.toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => {
      console.log(toastData);
      toastData.present();
    });
  }

  save() {
    this.validate();

    if (this.message.length > 0) {
      this.showToast(this.message);
      this.message = "";
      return;
    }

    console.log(this.description);
    this.content.login = this.signinService.user.login;
    this.content.title = this.signinService.title;
    this.content.type = "image";
    this.content.description = this.description.substring(0, 500);
    this.contentService.createContent(this.content).subscribe(response => {
      this.signinService.page = "tab1";
      this.navCtrl.navigateForward("tab1");
    });
  }

  cancel() {
    this.navCtrl.navigateBack("tab1");
  }

  submitForm() {
    var _this = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.file.size > 30096000) {
        _this.showToast("File size restricted to less then 30MB");

        return;
      }

      let formData = new FormData();
      formData.append("file", _this.file, _this.file.name);
      let rheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders({
        'Transfer-Encoding': 'chunked'
      });

      _this.checkSubscription();

      _this.presentLoading();

      _this.http.post(_this.api.uploadBytes, formData, {
        headers: rheaders
      }).subscribe(response => {
        _this.content.link = _this.file.name;
        console.log(response);
        _this.content.base64Bytes = response.uploadBytes;
        ;
        _this.content.fileType = response.fileType;
        _this.content.base64String = "data:" + "image" + "/" + _this.content.fileType + ";base64," + _this.content.base64Bytes;
        console.log(_this.content.base64String);
      });
    })();
  }

  checkSubscription() {
    var _this2 = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.content.login = _this2.signinService.user.login;

      _this2.contentService.setCnclips(_this2.content).subscribe(response => {});

      yield _this2.sleep(1000);

      _this2.subscriptionService.get(_this2.signinService.user.login).subscribe(response => {
        _this2.nclips = response.nclips;
        _this2.cnclips = response.cnclips;
      });

      yield _this2.sleep(1000);
    })();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  presentLoading() {
    var _this3 = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 15000
      });
      yield loading.present();
      const {
        role,
        data
      } = yield loading.onDidDismiss();
      console.log('Loading dismissed!');
    })();
  }

  validate() {
    if (this.signinService.title != undefined) {
      if (this.signinService.title.length < 4) this.message = this.messages.titleLenght;
    } else this.message = this.messages.titleRequired;
  }

};

ImagePage.ctorParameters = () => [{
  type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_6__.SigninService
}, {
  type: _services_contents_service__WEBPACK_IMPORTED_MODULE_3__.ContentsService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _api__WEBPACK_IMPORTED_MODULE_5__.Api
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
}, {
  type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionService
}, {
  type: _messages__WEBPACK_IMPORTED_MODULE_7__.Messages
}];

ImagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-image',
  template: _image_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_image_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ImagePage);


class UploadResponse {}

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

/***/ 2795:
/*!**************************************************!*\
  !*** ./src/app/image/image.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3307:
/*!**************************************************!*\
  !*** ./src/app/image/image.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = " <ion-header>\n  <ion-toolbar>\n    <ion-title>Image</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"create-contents\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n </ion-header>\n <ion-content>\n <ion-list lines=\"none\">\n <ion-item>\n    <ion-label position=\"stacked\"> Title:</ion-label>\n    <ion-input type=\"title\" placeholder=\"Title\" [(ngModel)]=\"signinService.title\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <input type=\"file\" (change)=\"onFileChange($event)\" enctype=\"multipart/form-data\"   accept=\"image/*\" />\n  </ion-item>\n  <ion-item>\n  <ion-button color=\"danger\" expand=\"full\" shape=\"round\" (click)=\"submitForm()\">Upload</ion-button>\n  </ion-item>\n      <ion-item>\n        <img [src]=\"content.base64String\" height=\"175px\" width=\"225px\" />\n      </ion-item>\n  <ion-item>\n      <ion-button expand=\"block\" color=\"danger\" shape=\"round\" (click)=\"save()\" >Save</ion-button>\n      <ion-button expand=\"block\" color=\"danger\"  shape=\"round\" (click)=\"cancel()\" >Cancel</ion-button>\n  </ion-item>\n </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_image_image_module_ts.js.map