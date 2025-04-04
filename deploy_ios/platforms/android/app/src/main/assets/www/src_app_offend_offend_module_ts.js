"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_offend_offend_module_ts"],{

/***/ 7538:
/*!*************************************************!*\
  !*** ./src/app/offend/offend-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffendPageRoutingModule": () => (/* binding */ OffendPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _offend_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offend.page */ 305);




const routes = [
    {
        path: '',
        component: _offend_page__WEBPACK_IMPORTED_MODULE_0__.OffendPage
    }
];
let OffendPageRoutingModule = class OffendPageRoutingModule {
};
OffendPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OffendPageRoutingModule);



/***/ }),

/***/ 1995:
/*!*****************************************!*\
  !*** ./src/app/offend/offend.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffendPageModule": () => (/* binding */ OffendPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _offend_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offend-routing.module */ 7538);
/* harmony import */ var _offend_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offend.page */ 305);
/* harmony import */ var _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components/shared-components.module */ 7280);








let OffendPageModule = class OffendPageModule {
};
OffendPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule,
            _offend_routing_module__WEBPACK_IMPORTED_MODULE_0__.OffendPageRoutingModule
        ],
        declarations: [_offend_page__WEBPACK_IMPORTED_MODULE_1__.OffendPage]
    })
], OffendPageModule);



/***/ }),

/***/ 305:
/*!***************************************!*\
  !*** ./src/app/offend/offend.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffendPage": () => (/* binding */ OffendPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _offend_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offend.page.html?ngResource */ 2804);
/* harmony import */ var _offend_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offend.page.scss?ngResource */ 4092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_contents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contents.service */ 5699);





let OffendPage = class OffendPage {
    constructor(contentService) {
        this.contentService = contentService;
    }
    ngOnInit() {
        this.contentService.getObjectCnt().subscribe(response => {
            this.objectCntList = response;
            console.log(response);
        });
    }
    ionViewWillEnter() {
        this.contentService.getObjectCnt().subscribe(response => {
            this.objectCntList = response;
        });
    }
    delete(login) {
        console.log(login);
    }
};
OffendPage.ctorParameters = () => [
    { type: _services_contents_service__WEBPACK_IMPORTED_MODULE_2__.ContentsService }
];
OffendPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-offend',
        template: _offend_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_offend_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OffendPage);



/***/ }),

/***/ 4092:
/*!****************************************************!*\
  !*** ./src/app/offend/offend.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlbmQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2804:
/*!****************************************************!*\
  !*** ./src/app/offend/offend.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Offend</ion-title>\n   <ion-buttons>\n      <ion-back-button defaultHref=\"tab1\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<app-object *ngFor=\"let objectCnt of this.objectCntList\" [item]=\"objectCnt\"> </app-object>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_offend_offend_module_ts.js.map