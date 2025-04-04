"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_eula_eula_module_ts"],{

/***/ 9209:
/*!*********************************************!*\
  !*** ./src/app/eula/eula-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EulaPageRoutingModule": () => (/* binding */ EulaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _eula_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eula.page */ 2876);




const routes = [
    {
        path: '',
        component: _eula_page__WEBPACK_IMPORTED_MODULE_0__.EulaPage
    }
];
let EulaPageRoutingModule = class EulaPageRoutingModule {
};
EulaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EulaPageRoutingModule);



/***/ }),

/***/ 8015:
/*!*************************************!*\
  !*** ./src/app/eula/eula.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EulaPageModule": () => (/* binding */ EulaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _eula_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eula-routing.module */ 9209);
/* harmony import */ var _eula_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eula.page */ 2876);







let EulaPageModule = class EulaPageModule {
};
EulaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _eula_routing_module__WEBPACK_IMPORTED_MODULE_0__.EulaPageRoutingModule
        ],
        declarations: [_eula_page__WEBPACK_IMPORTED_MODULE_1__.EulaPage]
    })
], EulaPageModule);



/***/ }),

/***/ 2876:
/*!***********************************!*\
  !*** ./src/app/eula/eula.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EulaPage": () => (/* binding */ EulaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _eula_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eula.page.html?ngResource */ 7428);
/* harmony import */ var _eula_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eula.page.scss?ngResource */ 8859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);






let EulaPage = class EulaPage {
    constructor(navCtrl, signinService) {
        this.navCtrl = navCtrl;
        this.signinService = signinService;
        this.role = "creator";
    }
    ngOnInit() {
    }
    accept() {
        this.navCtrl.navigateForward('signup');
    }
    cancel() {
        this.navCtrl.navigateForward('sign-in');
    }
    radioGroupChange(event) {
        this.selectedRadioGroup = event.detail;
        this.signinService.role = this.selectedRadioGroup.value;
    }
};
EulaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService }
];
EulaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-eula',
        template: _eula_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_eula_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EulaPage);



/***/ }),

/***/ 8859:
/*!************************************************!*\
  !*** ./src/app/eula/eula.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldWxhLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7428:
/*!************************************************!*\
  !*** ./src/app/eula/eula.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <ion-title>Role</ion-title>\n  <ion-buttons>\n      <ion-back-button defaultHref=\"sign-in\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-list lines=\"none\">\n      <ion-radio-group value=\"user\" (ionChange)=\"radioGroupChange($event)\">\n        <ion-item>\n          <ion-label>User</ion-label>\n          <ion-radio [checked]=\"false\" slot=\"start\" value=\"user\" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Composer</ion-label>\n          <ion-radio [checked]=\"true\" slot=\"start\" value=\"creator\" ></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n</ion-list>\n<div *ngIf=\"signinService.role == 'creator'\">\n <iframe src=\"assets/eula.html\" name=\"iframe_eula\" height=\"575px\" width=\"800px\" ></iframe>\n<ion-item>\n    <ion-button shape=\"round\" color=\"danger\" (click)=\"accept()\" >Accept</ion-button>\n    <ion-button shape=\"round\" color=\"danger\" (click)=\"cancel()\" >Cancel</ion-button>\n</ion-item>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_eula_eula_module_ts.js.map