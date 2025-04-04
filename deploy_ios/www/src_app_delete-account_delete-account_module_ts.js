"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_delete-account_delete-account_module_ts"],{

/***/ 6302:
/*!*****************************************************************!*\
  !*** ./src/app/delete-account/delete-account-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteAccountPageRoutingModule": () => (/* binding */ DeleteAccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _delete_account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-account.page */ 9551);




const routes = [
    {
        path: '',
        component: _delete_account_page__WEBPACK_IMPORTED_MODULE_0__.DeleteAccountPage
    }
];
let DeleteAccountPageRoutingModule = class DeleteAccountPageRoutingModule {
};
DeleteAccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeleteAccountPageRoutingModule);



/***/ }),

/***/ 7789:
/*!*********************************************************!*\
  !*** ./src/app/delete-account/delete-account.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteAccountPageModule": () => (/* binding */ DeleteAccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _delete_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-account-routing.module */ 6302);
/* harmony import */ var _delete_account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-account.page */ 9551);







let DeleteAccountPageModule = class DeleteAccountPageModule {
};
DeleteAccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _delete_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeleteAccountPageRoutingModule
        ],
        declarations: [_delete_account_page__WEBPACK_IMPORTED_MODULE_1__.DeleteAccountPage]
    })
], DeleteAccountPageModule);



/***/ }),

/***/ 9551:
/*!*******************************************************!*\
  !*** ./src/app/delete-account/delete-account.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteAccountPage": () => (/* binding */ DeleteAccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _delete_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-account.page.html?ngResource */ 2063);
/* harmony import */ var _delete_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-account.page.scss?ngResource */ 1965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ 5111);







let DeleteAccountPage = class DeleteAccountPage {
    constructor(signinService, navCtrl, api) {
        this.signinService = signinService;
        this.navCtrl = navCtrl;
        this.api = api;
    }
    ngOnInit() {
    }
    deleteAccount() {
        this.signinService.deleteAccount(this.signinService.user.login);
        this.signinService.user.login = "https://playclips-api.com/app/assets/img/sanjay.png";
        this.navCtrl.navigateBack(`sign-in`);
    }
};
DeleteAccountPage.ctorParameters = () => [
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _api__WEBPACK_IMPORTED_MODULE_3__.Api }
];
DeleteAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-delete-account',
        template: _delete_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteAccountPage);



/***/ }),

/***/ 1965:
/*!********************************************************************!*\
  !*** ./src/app/delete-account/delete-account.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtYWNjb3VudC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2063:
/*!********************************************************************!*\
  !*** ./src/app/delete-account/delete-account.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Delete Account</ion-title>\n  </ion-toolbar>\n  <ion-buttons>\n      <ion-back-button defaultHref=\"sign-in\"></ion-back-button>\n  </ion-buttons>\n</ion-header>\n<ion-content>\n<ion-list lines=\"none\">\n<ion-item>\n        <ion-item>\n         <ion-avatar slot=\"start\" >\n         <img [src]=\"signinService.user.login\"/>\n        </ion-avatar>\n  </ion-item>\n</ion-item>\n<ion-item>\n      <ion-button expand=\"block\" shape=\"round\" color=\"danger\" (click)=\"deleteAccount()\" >Delete</ion-button>\n</ion-item>\n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_delete-account_delete-account_module_ts.js.map