"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_create-profile_create-profile_module_ts"],{

/***/ 4455:
/*!*****************************************************************!*\
  !*** ./src/app/create-profile/create-profile-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProfilePageRoutingModule": () => (/* binding */ CreateProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-profile.page */ 9268);




const routes = [
    {
        path: '',
        component: _create_profile_page__WEBPACK_IMPORTED_MODULE_0__.CreateProfilePage
    }
];
let CreateProfilePageRoutingModule = class CreateProfilePageRoutingModule {
};
CreateProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateProfilePageRoutingModule);



/***/ }),

/***/ 1292:
/*!*********************************************************!*\
  !*** ./src/app/create-profile/create-profile.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProfilePageModule": () => (/* binding */ CreateProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _create_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-profile-routing.module */ 4455);
/* harmony import */ var _create_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-profile.page */ 9268);
/* harmony import */ var _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components/shared-components.module */ 7280);








let CreateProfilePageModule = class CreateProfilePageModule {
};
CreateProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _create_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateProfilePageRoutingModule,
            _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [_create_profile_page__WEBPACK_IMPORTED_MODULE_1__.CreateProfilePage]
    })
], CreateProfilePageModule);



/***/ }),

/***/ 9268:
/*!*******************************************************!*\
  !*** ./src/app/create-profile/create-profile.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProfilePage": () => (/* binding */ CreateProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _create_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-profile.page.html?ngResource */ 527);
/* harmony import */ var _create_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-profile.page.scss?ngResource */ 6593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _models_userdetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/userdetails */ 8268);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let CreateProfilePage = class CreateProfilePage {
    constructor(signinService, navCtrl) {
        this.signinService = signinService;
        this.navCtrl = navCtrl;
        this.signinService.getUser(this.signinService.user.login).subscribe(response => {
            this.signinService.user = response;
            this.signinService.userDetails = new _models_userdetails__WEBPACK_IMPORTED_MODULE_3__.UserDetails();
            if (this.signinService.user.email)
                this.signinService.getUserDetails(this.signinService.user.email).subscribe(response => {
                    if (response != null)
                        this.signinService.userDetails = response;
                    else
                        this.signinService.userDetails = new _models_userdetails__WEBPACK_IMPORTED_MODULE_3__.UserDetails();
                });
        });
    }
    ionViewDidLoad() {
        this.signinService.getUser(this.signinService.user.login).subscribe(response => {
            this.signinService.user = response;
            this.signinService.userDetails = new _models_userdetails__WEBPACK_IMPORTED_MODULE_3__.UserDetails();
            if (this.signinService.user.email)
                this.signinService.getUserDetails(this.signinService.user.email).subscribe(response => {
                    if (response != null)
                        this.signinService.userDetails = response;
                    else
                        this.signinService.userDetails = new _models_userdetails__WEBPACK_IMPORTED_MODULE_3__.UserDetails();
                });
        });
    }
    ionViewDidEnter() {
        this.signinService.getUser(this.signinService.user.login).subscribe(response => {
            this.signinService.user = response;
            this.signinService.userDetails = new _models_userdetails__WEBPACK_IMPORTED_MODULE_3__.UserDetails();
            if (this.signinService.user.email)
                this.signinService.getUserDetails(this.signinService.user.email).subscribe(response => {
                    if (response != null)
                        this.signinService.userDetails = response;
                    else
                        this.signinService.userDetails = new _models_userdetails__WEBPACK_IMPORTED_MODULE_3__.UserDetails();
                });
        });
    }
    ngOnInit() {
    }
    save() {
        this.signinService.userDetails.email = this.signinService.user.email;
        // this.signinService.update(this.signinService.user).subscribe((response) => {
        this.signinService.createUserDetails(this.signinService.userDetails).subscribe((response) => {
            this.signinService.updateSubscription(this.signinService.user.email, this.signinService.login).subscribe((response) => { });
            this.navCtrl.navigateForward("tab1");
        });
        //  });
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    cancel() {
        this.navCtrl.navigateForward("tab1");
    }
};
CreateProfilePage.ctorParameters = () => [
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
CreateProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-create-profile',
        template: _create_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateProfilePage);



/***/ }),

/***/ 6593:
/*!********************************************************************!*\
  !*** ./src/app/create-profile/create-profile.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcHJvZmlsZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 527:
/*!********************************************************************!*\
  !*** ./src/app/create-profile/create-profile.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Create Profile</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"tab1\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-list lines=\"none\">\n<ion-item>\n\t <ion-avatar slot=\"start\" >\n         <img [src]=\"signinService.user.login\"/>\n        </ion-avatar>\n</ion-item>\n<ion-item>\n    <ion-label position=\"stacked\">Email</ion-label>\n    <ion-input type=\"email\"  readonly=\"true\"  placeholder=\"Email\" [(ngModel)]=\"signinService.user.email\"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label position=\"stacked\">Credit Card Number</ion-label>\n    <ion-input type=\"creditcard\" maxlength=\"16\"  placeholder=\"Credit Card Number\" [(ngModel)]=\"signinService.userDetails.creditCardNumber\"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label position=\"stacked\">Expiry</ion-label>\n    <ion-input type=\"expiry\" placeholder=\"Expiry\" maxlength=\"6\" [(ngModel)]=\"signinService.userDetails.expiry\"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label position=\"stacked\">Address Line 1</ion-label>\n    <ion-input type=\"addressLine1\" placeholder=\"Address Line 1\" [(ngModel)]=\"signinService.userDetails.addressLine1\"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label position=\"stacked\">Address Line 2</ion-label>\n    <ion-input type=\"addressLine2\" placeholder=\"Address Line 2\" [(ngModel)]=\"signinService.userDetails.addressLine2\"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label position=\"stacked\">City</ion-label>\n    <ion-input type=\"city\" placeholder=\"City\" [(ngModel)]=\"signinService.userDetails.city\"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label position=\"stacked\">Postal Code</ion-label>\n    <ion-input type=\"postalCode\" placeholder=\"Postal Code\" maxlength=\"5\"  [(ngModel)]=\"signinService.userDetails.postalCode\"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label position=\"stacked\">Country Code</ion-label>\n    <ion-input type=\"countryCode\" placeholder=\"Country Code\" maxlength=\"3\" [(ngModel)]=\"signinService.userDetails.countryCode\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-button shape=\"round\" color=\"danger\" (click)=\"save();\" >Save</ion-button>\n  <ion-button shape=\"round\" color=\"danger\" (click)=\"cancel();\" >Cancel</ion-button>\n</ion-item>\n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_create-profile_create-profile_module_ts.js.map