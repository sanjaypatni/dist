"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_create-contents_create-contents_module_ts"],{

/***/ 1659:
/*!*******************************************************************!*\
  !*** ./src/app/create-contents/create-contents-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateContentsPageRoutingModule": () => (/* binding */ CreateContentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_contents_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-contents.page */ 4430);




const routes = [
    {
        path: '',
        component: _create_contents_page__WEBPACK_IMPORTED_MODULE_0__.CreateContentsPage
    }
];
let CreateContentsPageRoutingModule = class CreateContentsPageRoutingModule {
};
CreateContentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateContentsPageRoutingModule);



/***/ }),

/***/ 6768:
/*!***********************************************************!*\
  !*** ./src/app/create-contents/create-contents.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateContentsPageModule": () => (/* binding */ CreateContentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _create_contents_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-contents-routing.module */ 1659);
/* harmony import */ var _create_contents_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-contents.page */ 4430);
/* harmony import */ var _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components/shared-components.module */ 7280);








let CreateContentsPageModule = class CreateContentsPageModule {
};
CreateContentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _create_contents_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateContentsPageRoutingModule,
            _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [_create_contents_page__WEBPACK_IMPORTED_MODULE_1__.CreateContentsPage]
    })
], CreateContentsPageModule);



/***/ }),

/***/ 4430:
/*!*********************************************************!*\
  !*** ./src/app/create-contents/create-contents.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateContentsPage": () => (/* binding */ CreateContentsPage)
/* harmony export */ });
/* harmony import */ var _Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _create_contents_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-contents.page.html?ngResource */ 3387);
/* harmony import */ var _create_contents_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-contents.page.scss?ngResource */ 6214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messages */ 4971);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ 5111);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _models_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/content */ 6945);
/* harmony import */ var _services_contents_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/contents.service */ 5699);
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/subscription.service */ 9063);













let CreateContentsPage = class CreateContentsPage {
  constructor(alertCtrl, navCtrl, signinService, contentService, messages, toastCtrl, platform, api, http, loadingController, subscriptionService) {
    this.alertCtrl = alertCtrl;
    this.navCtrl = navCtrl;
    this.signinService = signinService;
    this.contentService = contentService;
    this.messages = messages;
    this.toastCtrl = toastCtrl;
    this.platform = platform;
    this.api = api;
    this.http = http;
    this.loadingController = loadingController;
    this.subscriptionService = subscriptionService;
    this.picture = "https://playclips-api.com/app/assets/img/sanjay.png";
    this.message = "";
    this.platforms = "desktop";
    this.youtube = true; //radio_list: any;

    this.defaultSelectedRadio = "radio_2";
    this.content = new _models_content__WEBPACK_IMPORTED_MODULE_6__.Content();
    this.link_a = "http://spatni.com/contents/playclips.m4p";
    this.pc_link = "https://playclips-api.com/app/listPlayclipsIonic.html";
    this.showPdf = false;
    this.showAudio = false;
    this.showAll = false;
    this.showMediaWidgets = true;
    this.showTextWidgets = false;
    this.link = "";
    this.signinService.page = "create-content";
    if (this.platform.platforms().includes("ios")) this.platforms = "ios";
    if (this.platform.platforms().includes("android")) this.platforms = "ios";
  }

  ionViewWillEnter() {
    this.signinService.title = this.title;
    this.signinService.page = "create-content";
  }

  navigate() {
    this.validate();

    if (this.message.length > 0) {
      this.showToast(this.message);
      this.message = "";
      return;
    }
  }

  getPcLink() {
    this.pc_link = this.signinService.pc_link;
    return this.pc_link;
  }

  signin() {
    this.navCtrl.navigateForward('sign-in');
    this.pc_link = this.signinService.pc_link;
  }

  signout() {
    this.navCtrl.navigateForward('sign-in');
  }

  listContents() {
    this.navCtrl.navigateForward('list-contents');
  }

  chat() {
    this.navCtrl.navigateForward('chat');
  }

  validate() {
    if (this.title != undefined) {
      if (this.title.length < 4) this.message = this.messages.titleLenght;
    } else this.message = this.messages.titleRequired;
  }

  uploadAudio() {
    this.validate();

    if (this.message.length > 0) {
      this.showToast(this.message);
      this.message = "";
    } else if (this.signinService.logged) {
      window.open(this.api.audio + this.signinService.user.login + "&title=" + this.title + "&platform=" + this.platforms, "_self");
      this.title = "";
    } else this.showAlert(this.messages.signin);
  }

  text() {
    this.signinService.title = this.title;
    this.navCtrl.navigateForward("text");
  }

  youTube() {
    this.validate();

    if (this.message.length > 0) {
      this.showToast(this.message);
      this.message = "";
    } else if (this.signinService.logged) {
      this.signinService.title = this.title;
      this.navCtrl.navigateForward("search-results-yt");
    } else this.showAlert(this.messages.signin);
  }

  showAlert(message) {
    var _this = this;

    return (0,_Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let alert = yield _this.alertCtrl.create({
        header: "Sign-in",
        message: message,
        buttons: [{
          text: "Ok",
          handler: () => {}
        }]
      });
      alert.present();
    })();
  }

  showToast(message) {
    this.toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => {
      toastData.present();
    });
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  submitForm() {
    var _this2 = this;

    return (0,_Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.file.size > 30096000) {
        _this2.showToast("File size restricted to less then 30MB");

        return;
      }

      yield _this2.checkSubscription();

      if (_this2.cnclips > _this2.nclips) {
        _this2.showToast("Subscription - clips storage limit reached");

        _this2.navCtrl.navigateForward("subscription");

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
        _this2.link = response.link;
      });
    })();
  }

  checkSubscription() {
    var _this3 = this;

    return (0,_Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.content.login = _this3.signinService.user.login;

      _this3.contentService.setCnclips(_this3.content).subscribe(response => {});

      yield _this3.sleep(1000);

      _this3.subscriptionService.get(_this3.signinService.user.login).subscribe(response => {
        _this3.nclips = response.nclips;
        _this3.cnclips = response.cnclips;
      });

      yield _this3.sleep(1000);
    })();
  }

  radioFocus() {}

  radioSelect(event) {
    this.selectedRadioItem = event.detail;
  }

  radioBlur() {}

  createContent() {
    this.content = new _models_content__WEBPACK_IMPORTED_MODULE_6__.Content(); // check for clips uploaded for this user

    this.content.login = this.signinService.user.login;
    this.content.link = this.link;
    this.content.title = this.title;
    this.content.type = this.signinService.type;
    this.contentService.publishContent("content-post", this.content).subscribe(response => {
      this.message = this.messages.success;
      this.showToast(this.message);
      this.navCtrl.navigateForward("tab1");
    });
    /**
        this.contentService.createContent(this.content).subscribe((response) => {
          this.message = this.messages.success;
          this.showToast(this.message);
          this.navCtrl.navigateForward("tab1")
         });
    **/
  }

  presentLoading() {
    var _this4 = this;

    return (0,_Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this4.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2500
      });
      yield loading.present();
      const {
        role,
        data
      } = yield loading.onDidDismiss();
    })();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  app_link() {
    window.open("https://apps.apple.com/us/app/playclips-playclips/id1549384191", "_system");
  }

  api_link() {
    window.open("https://playclips-api.com/app/sign-in.html", "_system");
  }

};

CreateContentsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
}, {
  type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_4__.SigninService
}, {
  type: _services_contents_service__WEBPACK_IMPORTED_MODULE_7__.ContentsService
}, {
  type: _messages__WEBPACK_IMPORTED_MODULE_3__.Messages
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
}, {
  type: _api__WEBPACK_IMPORTED_MODULE_5__.Api
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}, {
  type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionService
}];

CreateContentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-create-contents',
  template: _create_contents_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_create_contents_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreateContentsPage);


class UploadResponse {}

/***/ }),

/***/ 6214:
/*!**********************************************************************!*\
  !*** ./src/app/create-contents/create-contents.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".pagination {\n  --bs-pagination-padding-x: 0.75rem;\n  --bs-pagination-padding-y: 0.375rem;\n  --bs-pagination-font-size: 1rem;\n  --bs-pagination-color: #fff;\n  --bs-pagination-bg: var(--bs-red);\n  --bs-pagination-border-width: 1px;\n  --bs-pagination-border-color: #dee2e6;\n  --bs-pagination-border-radius: 0.375rem;\n  --bs-pagination-hover-color: var(--bs-link-hover-color);\n  --bs-pagination-hover-bg: #e9ecef;\n  --bs-pagination-hover-border-color: #dee2e6;\n  --bs-pagination-focus-color: var(--bs-link-hover-color);\n  --bs-pagination-focus-bg: #e9ecef;\n  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  --bs-pagination-active-color: #fff;\n  --bs-pagination-active-bg: #0d6efd;\n  --bs-pagination-active-border-color: #0d6efd;\n  --bs-pagination-disabled-color: #6c757d;\n  --bs-pagination-disabled-bg: #fff;\n  --bs-pagination-disabled-border-color: #dee2e6;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jb250ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsdURBQUE7RUFDQSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsdURBQUE7RUFDQSxpQ0FBQTtFQUNBLHdFQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImNyZWF0ZS1jb250ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbiB7XG4gIC0tYnMtcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuNzVyZW07XG4gIC0tYnMtcGFnaW5hdGlvbi1wYWRkaW5nLXk6IDAuMzc1cmVtO1xuICAtLWJzLXBhZ2luYXRpb24tZm9udC1zaXplOiAxcmVtO1xuICAtLWJzLXBhZ2luYXRpb24tY29sb3I6ICNmZmY7XG4gIC0tYnMtcGFnaW5hdGlvbi1iZzogIHZhcigtLWJzLXJlZCk7IFxuICAtLWJzLXBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYnMtcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIC0tYnMtcGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgLS1icy1wYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiB2YXIoLS1icy1saW5rLWhvdmVyLWNvbG9yKTtcbiAgLS1icy1wYWdpbmF0aW9uLWhvdmVyLWJnOiAjZTllY2VmO1xuICAtLWJzLXBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICAtLWJzLXBhZ2luYXRpb24tZm9jdXMtY29sb3I6IHZhcigtLWJzLWxpbmstaG92ZXItY29sb3IpO1xuICAtLWJzLXBhZ2luYXRpb24tZm9jdXMtYmc6ICNlOWVjZWY7XG4gIC0tYnMtcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIHJnYmEoMTMsIDExMCwgMjUzLCAwLjI1KTtcbiAgLS1icy1wYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogI2ZmZjtcbiAgLS1icy1wYWdpbmF0aW9uLWFjdGl2ZS1iZzogIzBkNmVmZDtcbiAgLS1icy1wYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICMwZDZlZmQ7XG4gIC0tYnMtcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogIzZjNzU3ZDtcbiAgLS1icy1wYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAjZmZmO1xuICAtLWJzLXBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4iXX0= */";

/***/ }),

/***/ 3387:
/*!**********************************************************************!*\
  !*** ./src/app/create-contents/create-contents.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Create</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"tabs\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list lines=\"none\">\n  <ion-item>\n   <ion-icon name=\"create\" slot=\"end\"></ion-icon>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\"> Title:</ion-label>\n    <ion-input type=\"title\" placeholder=\"Title\" [(ngModel)]=\"signinService.title\"></ion-input>\n  </ion-item>\n  <ion-list lines=\"none\">\n  <app-top-nav></app-top-nav>\n  </ion-list>\n </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_create-contents_create-contents_module_ts.js.map