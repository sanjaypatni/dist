"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 6661:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 771);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7648:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 6661);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 771);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var _Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 1998);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 2444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ 5783);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messages */ 4971);
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/subscription.service */ 9063);
/* harmony import */ var _models_subscription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/subscription */ 4015);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api */ 5111);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);














let SignupPage = class SignupPage {
  constructor(signinService, router, toastCtrl, subscriptionService, messages, subscription, api, http, loadingController) {
    this.signinService = signinService;
    this.router = router;
    this.toastCtrl = toastCtrl;
    this.subscriptionService = subscriptionService;
    this.messages = messages;
    this.subscription = subscription;
    this.api = api;
    this.http = http;
    this.loadingController = loadingController;
    this.message = "Signup Error - Email used. Please try using different email.";
    this.data = new _models_user__WEBPACK_IMPORTED_MODULE_3__.User();
  }

  ngOnInit() {}

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  submitForm() {
    var _this = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.data.role = _this.signinService.role;

      if (_this.data.login != undefined && _this.data.password != undefined && _this.data.rpassword != undefined) {
        if (_this.data.password != _this.data.rpassword) _this.message = _this.messages.passwordMismatch;else if (_this.data.login.length < 4 && _this.data.login.length > 15) _this.message = _this.messages.userLenght;else if (_this.data.password.length < 4) _this.message = _this.messages.passwordLenght;else _this.signinService.create(_this.data).subscribe(response => {
          console.log(response.id);
          if (response.id == "0") _this.message = _this.messages.userExists;else {
            _this.router.navigate(['sign-in']);

            _this.message = _this.messages.success;
          }

          _this.showToast(_this.message);
        });
      } else _this.message = _this.messages.undefined;

      yield _this.sleep(500);

      _this.showToast(_this.message);

      _this.subscription.username = _this.data.login;
      _this.subscription.cnclips = 0;
      _this.subscription.nclips = 20;
      _this.subscription.email = _this.data.email;
      _this.subscription.subscription = "basic"; //this.subscriptionService.createSubscription(this.subscription).subscribe((response) => {
      //  console.log("subscription created");
      //});
    })();
  }

  showToast(message) {
    this.toast = this.toastCtrl.create({
      message: message,
      duration: 2000
    }).then(toastData => {
      console.log(toastData);
      toastData.present();
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  uploadFile() {
    var _this2 = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.file.size > 30096000) {
        _this2.showToast("File size restricted to less then 30MB");

        return;
      }

      let formData = new FormData();
      formData.append("file", _this2.file, _this2.file.name);
      let rheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders({
        'Transfer-Encoding': 'chunked'
      });

      _this2.presentLoading();

      _this2.http.post(_this2.api.upload, formData, {
        headers: rheaders
      }).subscribe(response => {
        console.log(response);
        console.log(response.link);
        _this2.data.login = response.link;
        _this2.signinService.user.login = response.link;
        _this2.signinService.user.username = response.link;
      });
    })();
  }

  presentLoading() {
    var _this3 = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 7500
      });
      yield loading.present();
      const {
        role,
        data
      } = yield loading.onDidDismiss();
      console.log('Loading dismissed!');
    })();
  }

};

SignupPage.ctorParameters = () => [{
  type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_4__.SigninService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}, {
  type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionService
}, {
  type: _messages__WEBPACK_IMPORTED_MODULE_5__.Messages
}, {
  type: _models_subscription__WEBPACK_IMPORTED_MODULE_7__.Subscription
}, {
  type: _api__WEBPACK_IMPORTED_MODULE_8__.Api
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}];

SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-signup',
  template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SignupPage);


class UploadResponse {}

/***/ }),

/***/ 2444:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1998:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = " <ion-header>\n  <ion-toolbar>\n    <ion-title>Signup</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"sign-in\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n </ion-header>\n <ion-content>\n <ion-list lines=\"none\">\n  <ion-item>\n    <input type=\"file\" (change)=\"onFileChange($event)\" enctype=\"multipart/form-data\"   accept=\"image/*\" />\n  </ion-item>\n  <ion-item>\n  <ion-button color=\"danger\" shape=\"round\"  expand=\"full\" (click)=\"uploadFile()\">Upload</ion-button>\n  </ion-item>\n  <ion-item>\n\t <ion-avatar slot=\"start\" >\n         <img [src]=\"signinService.user.login\"/>\n        </ion-avatar>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">Password</ion-label>\n    <ion-input type=\"password\" placeholder=\"password\" [(ngModel)]=\"data.password\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">Repeat Password</ion-label>\n    <ion-input type=\"password\" placeholder=\"repeat password\" [(ngModel)]=\"data.rpassword\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">Email</ion-label>\n    <ion-input type=\"text\" placeholder=\"email\" [(ngModel)]=\"data.email\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-button shape=\"round\" color=\"danger\" (click)=\"submitForm()\" >Sign-up</ion-button>\n  </ion-item>\n </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map