"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 5355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 2486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/shared-components/shared-components.module */ 7280);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4-routing.module */ 5355);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page */ 3631);








let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab4PageRoutingModule,
            _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_2__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page.html?ngResource */ 7520);
/* harmony import */ var _tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss?ngResource */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_playclips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/playclips.service */ 5800);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let Tab4Page = class Tab4Page {
    constructor(playclipsService, signinService, navCtrl) {
        this.playclipsService = playclipsService;
        this.signinService = signinService;
        this.navCtrl = navCtrl;
        this.pcLink = "assets/img/playclips.png";
        this.playclipsA = [];
        this.hlink = "assets/img/header.png";
        this.signinService.page = "tab4";
    }
    ngOnInit() {
        this.getPlayclips();
        this.signinService.page = "tab4";
    }
    ionViewDidEnter() {
        this.getPlayclips();
        this.signinService.page = "tab4";
    }
    ionViewDidLoad() {
        this.getPlayclips();
        this.signinService.page = "tab4";
    }
    getPlayclips() {
        this.playclipsService.getPlayclips().subscribe(response => {
            this.playclipsA.length = 0;
            console.log(response);
            this.playclipsData = response;
            console.log("Playclips Data");
            console.log(this.playclipsData);
            for (let pc of this.playclipsData.playclips) {
                console.log(pc);
                this.playclipsA.push(pc);
            }
        });
    }
    purgePlayclips() {
        console.log("Purge");
        this.playclipsService.purge();
        this.getPlayclips();
        this.navCtrl.navigateForward('tab1');
    }
    signout() {
        console.log("Signin");
        this.navCtrl.navigateForward('sign-in');
    }
    subscribe() {
        this.navCtrl.navigateForward("subscription");
    }
    createProfile() {
        console.log("create profile");
        this.navCtrl.navigateForward('create-profile');
    }
    createContents() {
        this.signinService.page = "create-contents";
        this.navCtrl.navigateForward('create-contents');
    }
};
Tab4Page.ctorParameters = () => [
    { type: _services_playclips_service__WEBPACK_IMPORTED_MODULE_2__.PlayclipsService },
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__.SigninService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab4',
        template: _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab4Page);



/***/ }),

/***/ 7432:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7520:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n       <center>  </center>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <div *ngIf=\"!signinService.logged\">\n        <ion-icon name=\"person-remove-outline\" (click)=\"signin()\"></ion-icon>\n      </div>\n      <div *ngIf=\"signinService.logged\">\n         <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"createProfile()\" >\n                <ion-icon name=\"exit\"  color=\"dark\" ></ion-icon>\n         </ion-button>\n          <ion-avatar slot=\"start\" (click)=\"signout()\" >\n                <img [src]=\"signinService.user.login\">\n          </ion-avatar>\n          <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"createContents()\" >\n                <ion-icon name=\"create\" color=\"dark\" ></ion-icon>\n         </ion-button>\n      </div>\n    </ion-buttons>\n     <ion-buttons slot=\"end\">\n    </ion-buttons>\n      <ion-img style=\"height:30%;width:100%\"  [src]=\"hlink\"></ion-img>\n   </ion-toolbar>\n  </ion-header>\n<ion-content>\n  <ion-list lines=\"none\">\n   <app-playclips *ngFor=\"let playclip of playclipsA\" [playclip]=\"playclip\"></app-playclips>\n  </ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map