"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_demo_demo_module_ts"],{

/***/ 2199:
/*!*********************************************!*\
  !*** ./src/app/demo/demo-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoPageRoutingModule": () => (/* binding */ DemoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _demo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo.page */ 2311);




const routes = [
    {
        path: '',
        component: _demo_page__WEBPACK_IMPORTED_MODULE_0__.DemoPage
    }
];
let DemoPageRoutingModule = class DemoPageRoutingModule {
};
DemoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DemoPageRoutingModule);



/***/ }),

/***/ 849:
/*!*************************************!*\
  !*** ./src/app/demo/demo.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoPageModule": () => (/* binding */ DemoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _demo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-routing.module */ 2199);
/* harmony import */ var _demo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.page */ 2311);







let DemoPageModule = class DemoPageModule {
};
DemoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _demo_routing_module__WEBPACK_IMPORTED_MODULE_0__.DemoPageRoutingModule
        ],
        declarations: [_demo_page__WEBPACK_IMPORTED_MODULE_1__.DemoPage]
    })
], DemoPageModule);



/***/ }),

/***/ 2311:
/*!***********************************!*\
  !*** ./src/app/demo/demo.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoPage": () => (/* binding */ DemoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _demo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo.page.html?ngResource */ 2586);
/* harmony import */ var _demo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.page.scss?ngResource */ 3433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let DemoPage = class DemoPage {
    constructor() { }
    ngOnInit() {
    }
};
DemoPage.ctorParameters = () => [];
DemoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-demo',
        template: _demo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_demo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DemoPage);



/***/ }),

/***/ 3433:
/*!************************************************!*\
  !*** ./src/app/demo/demo.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2586:
/*!************************************************!*\
  !*** ./src/app/demo/demo.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Playclips Demo</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n <iframe src=\"assets/playclip.html\" name=\"iframe_playclip\" height=\"600px\" width=\"900px\" ></iframe>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_demo_demo_module_ts.js.map