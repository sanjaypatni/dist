"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_subscription_subscription_module_ts"],{

/***/ 3738:
/*!*************************************************************!*\
  !*** ./src/app/subscription/subscription-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionPageRoutingModule": () => (/* binding */ SubscriptionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscription.page */ 9888);




const routes = [
    {
        path: '',
        component: _subscription_page__WEBPACK_IMPORTED_MODULE_0__.SubscriptionPage
    }
];
let SubscriptionPageRoutingModule = class SubscriptionPageRoutingModule {
};
SubscriptionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubscriptionPageRoutingModule);



/***/ }),

/***/ 7474:
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionPageModule": () => (/* binding */ SubscriptionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _subscription_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscription-routing.module */ 3738);
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscription.page */ 9888);







let SubscriptionPageModule = class SubscriptionPageModule {
};
SubscriptionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _subscription_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubscriptionPageRoutingModule
        ],
        declarations: [_subscription_page__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPage]
    })
], SubscriptionPageModule);



/***/ }),

/***/ 9888:
/*!***************************************************!*\
  !*** ./src/app/subscription/subscription.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionPage": () => (/* binding */ SubscriptionPage)
/* harmony export */ });
/* harmony import */ var _Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _subscription_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscription.page.html?ngResource */ 8475);
/* harmony import */ var _subscription_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscription.page.scss?ngResource */ 1588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _models_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/subscription */ 4015);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/subscription.service */ 9063);










let SubscriptionPage = class SubscriptionPage {
  constructor(toastCtrl, navCtrl, signinService, subscriptionService, alertController) {
    this.toastCtrl = toastCtrl;
    this.navCtrl = navCtrl;
    this.signinService = signinService;
    this.subscriptionService = subscriptionService;
    this.alertController = alertController;
    this.sub = new _models_subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.ssub = new _models_subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.basicDesc = "20 clips";
    this.personalDesc = "500 clips <br\> Encrypted contents";
    this.teamDesc = "1000 clips <br\> Encrypted contents <br\> Playclips sharing";
    this.ngOnInit();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.signinService.getUser(_this.signinService.user.login).subscribe(response => {
        _this.signinService.user = response;
      });

      yield _this.sleep(500);

      _this.subscriptionService.get(_this.signinService.user.email).subscribe(response => {
        _this.ssub = response;
      });
    })();
  }

  basic() {
    if (this.validate()) {
      console.log("basic");
      this.subscriptionFunc(this.signinService.user.login, 20, "basic", this.signinService.user.email);
    } else this.showToast(this.message);
  }

  personal() {
    if (this.validate()) {
      console.log("personal");
      this.subscriptionFunc(this.signinService.user.login, 500, "personal", this.signinService.user.email);
    } else this.showToast(this.message);
  }

  personalCancel() {
    if (this.validate()) {
      console.log("personal");
      this.subscriptionFunc(this.signinService.user.login, 20, "basic", this.signinService.user.email);
    } else this.showToast(this.message);
  }

  team() {
    if (this.validate()) {
      console.log("team");
      this.subscriptionFunc(this.signinService.user.login, 1000, "team", this.signinService.user.email);
    } else this.showToast(this.message);
  }

  showToast(message) {
    this.toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => {
      console.log(toastData);
      toastData.present();
    });
  }

  validate() {
    console.log(this.signinService.user.email);

    if (this.signinService.user.email != undefined) {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.signinService.user.email)) {
        return true;
      }

      this.message = "Email is not valid!";
      return false;
    } else {
      this.message = "Please ensure to enter email in profile page using left top most icon !";
      return false;
    }
  }

  subscriptionFunc(username, nclips, subscription, email) {
    var _this2 = this;

    return (0,_Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.sub.username = username;
      _this2.sub.nclips = nclips;
      _this2.sub.subscription = subscription;
      _this2.sub.email = email;
      console.log(username);
      yield _this2.presentAlert(subscription);
    })();
  }

  presentAlert(subscription) {
    var _this3 = this;

    return (0,_Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Subscrible to ' + subscription + ' plan?',
        buttons: [{
          text: 'Disagree',
          handler: () => {
            _this3.navCtrl.navigateBack("tabs");
          }
        }, {
          text: 'Agree',
          handler: () => {
            _this3.showToast("Subscribing to " + subscription + " plan'");

            _this3.subscriptionService.deleteSubscription(_this3.signinService.user.email);

            console.log("deleted sub");

            _this3.subscriptionService.createSubscription(_this3.sub).subscribe(response => {
              console.log("subscription created");

              _this3.subscriptionService.get(_this3.signinService.user.email).subscribe(response => {
                _this3.ssub = response;
              });
            });
          }
        }]
      });
      yield alert.present();
    })();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

};

SubscriptionPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_4__.SigninService
}, {
  type: _services_subscription_service__WEBPACK_IMPORTED_MODULE_5__.SubscriptionService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}];

SubscriptionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-subscription',
  template: _subscription_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_subscription_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SubscriptionPage);


/***/ }),

/***/ 1588:
/*!****************************************************************!*\
  !*** ./src/app/subscription/subscription.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\n* {\n  box-sizing: border-box;\n}\nbody {\n  background-color: #686de0;\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n  padding: 20px;\n}\n.main {\n  display: flex;\n  padding: 40px;\n  background-color: #686de0;\n}\n.container {\n  background-color: #fff;\n  border-radius: 20px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n  padding: 50px 20px;\n  text-align: center;\n  max-width: 100%;\n  width: 300px;\n  background-color: #686de0;\n}\n.containers {\n  background-color: #fff;\n  border-radius: 20px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n  padding: 50px 20px;\n  text-align: center;\n  max-width: 100%;\n  width: 300px;\n  background-color: #9f68e0;\n}\nh3 {\n  margin: 0;\n  opacity: 0.5;\n  letter-spacing: 2px;\n}\n.joke {\n  font-size: 30px;\n  letter-spacing: 1px;\n  line-height: 40px;\n  margin: 50px auto;\n  max-width: 400px;\n}\n.btn {\n  background-color: #9f68e0;\n  color: #fff;\n  border: 0;\n  border-radius: 10px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n  padding: 14px 40px;\n  font-size: 16px;\n  cursor: pointer;\n}\n.btn:active {\n  transform: scale(0.98);\n}\n.btn:focus {\n  outline: 0;\n}\nth, td {\n  padding: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsd0ZBQUE7QUFFUjtFQUNFLHNCQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFBRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNGO0FBRUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0VBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0VBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQ0E7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx1RUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFFRjtBQUNBO0VBQ0Usc0JBQUE7QUFFRjtBQUNBO0VBQ0UsVUFBQTtBQUVGO0FBQUE7RUFDRSxhQUFBO0FBR0YiLCJmaWxlIjoic3Vic2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4NmRlMDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg2ZGUwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiA1MHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODZkZTA7XG59XG4uY29udGFpbmVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogNTBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWY2OGUwO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMC41O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uam9rZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmNjhlMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDE0cHggNDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG50aCwgdGQge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuIl19 */";

/***/ }),

/***/ 8475:
/*!****************************************************************!*\
  !*** ./src/app/subscription/subscription.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title></ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"tab1\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  \n  <div class=\"main\"  *ngIf=\"ssub.subscription == 'basic'\" >\n    <table>\n    <tr>\n    <td>\n    <div class=\"containers\">\n      <h3>Current subscription is Basic</h3>\n      <div id=\"joke\" class=\"joke\">Free</div>\n      <div [innerHtml]=\"basicDesc\"></div>\n    </div>\n    </td>\n    </tr>\n    </table>\n    <table>\n    <tr>\n    <td>\n    <div class=\"containers\">\n      <div id=\"joke\" class=\"joke\">Personal</div>\n      <div [innerHtml]=\"personalDesc\"></div>\n      <button id=\"jokeBtn\" class=\"btn\" (click)=\"personal()\">Subscribe</button>  \n    </div>\n    </td>\n    </tr>\n    </table>\n    <table>\n    <tr>\n    <td>\n    <div class=\"containers\">\n      <div id=\"joke\" class=\"joke\">Team</div>\n      <div [innerHtml]=\"teamDesc\"></div>\n      <button id=\"jokeBtn\" class=\"btn\" (click)=\"team()\">Subscribe</button>  \n    </div>\n    </td>\n    </tr>\n    </table>\n   </div>\n  <div class=\"main\"  *ngIf=\"ssub.subscription == 'personal'\" >\n <table>\n    <tr>\n    <td>\n    <div class=\"containers\">\n      <div id=\"joke\" class=\"joke\">Free</div>\n      <div [innerHtml]=\"basicDesc\"></div>\n      <button id=\"jokeBtn\" class=\"btn\" (click)=\"basic()\">Subscribe</button>\n    </div>\n    </td>\n    </tr>\n    </table>\n    <table>\n    <tr>\n    <td>\n    <div class=\"containers\">\n      <h3>Current subscription is Personal</h3>\n      <div id=\"joke\" class=\"joke\">Personal</div>\n      <div [innerHtml]=\"personalDesc\"></div>\n    </div>\n    </td>\n    </tr>\n    </table>\n    <table>\n    <tr>\n    <td>\n    <div class=\"containers\">\n      <div id=\"joke\" class=\"joke\">Team</div>\n      <div [innerHtml]=\"teamDesc\"></div>\n      <button id=\"jokeBtn\" class=\"btn\" (click)=\"team()\">Subscribe</button>\n    </div>\n    </td>\n    </tr>\n    </table>\n  </div>\n  <div class=\"main\"  *ngIf=\"ssub.subscription == 'team'\" >\n    <table>\n    <tr>\n    <td>\n    <div class=\"containers\">\n      <div id=\"joke\" class=\"joke\">Free</div>\n      <div [innerHtml]=\"basicDesc\"></div>\n      <button id=\"jokeBtn\" class=\"btn\" (click)=\"basic()\">Subscribe</button>\n    </div>\n    </td>\n    </tr>\n    </table>\n    <table>\n    <tr>\n    <td>\n    <div class=\"containers\">\n      <div id=\"joke\" class=\"joke\">Personal</div>\n      <div [innerHtml]=\"personalDesc\"></div>\n      <button id=\"jokeBtn\" class=\"btn\" (click)=\"personal()\">Subscribe</button>\n    </div>\n    </td>\n    </tr>\n    </table>\n    <table>\n    <tr>\n    <td>\n    <div class=\"containers\">\n      <h3>Current subscription is Team</h3>\n      <div id=\"joke\" class=\"joke\">Team</div>\n      <div [innerHtml]=\"teamDesc\"></div>\n    </div>\n    </td>\n    </tr>\n    </table>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_subscription_subscription_module_ts.js.map