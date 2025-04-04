"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_upload_upload_module_ts"],{

/***/ 6563:
/*!*************************************************!*\
  !*** ./src/app/upload/upload-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPageRoutingModule": () => (/* binding */ UploadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _upload_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.page */ 292);




const routes = [
    {
        path: '',
        component: _upload_page__WEBPACK_IMPORTED_MODULE_0__.UploadPage
    }
];
let UploadPageRoutingModule = class UploadPageRoutingModule {
};
UploadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UploadPageRoutingModule);



/***/ }),

/***/ 4494:
/*!*****************************************!*\
  !*** ./src/app/upload/upload.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPageModule": () => (/* binding */ UploadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _upload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-routing.module */ 6563);
/* harmony import */ var _upload_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.page */ 292);







let UploadPageModule = class UploadPageModule {
};
UploadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.UploadPageRoutingModule
        ],
        declarations: [_upload_page__WEBPACK_IMPORTED_MODULE_1__.UploadPage]
    })
], UploadPageModule);



/***/ }),

/***/ 292:
/*!***************************************!*\
  !*** ./src/app/upload/upload.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPage": () => (/* binding */ UploadPage)
/* harmony export */ });
/* harmony import */ var _Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _upload_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.page.html?ngResource */ 9669);
/* harmony import */ var _upload_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.page.scss?ngResource */ 3474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);






let UploadPage = class UploadPage {
  constructor(http) {
    this.http = http;
    this.link = "";
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  submitForm() {
    var _this = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let formData = new FormData();
      formData.append("file", _this.file, _this.file.name);

      _this.http.post("https://playclips-uat.com/app/file/upload", formData).subscribe(response => {
        console.log(response);
        _this.link = response.link;
      });
    })();
  }

  ngOnInit() {}

};

UploadPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}];

UploadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-upload',
  template: _upload_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_upload_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UploadPage);


class UploadResponse {}

/***/ }),

/***/ 3474:
/*!****************************************************!*\
  !*** ./src/app/upload/upload.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9669:
/*!****************************************************!*\
  !*** ./src/app/upload/upload.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>upload</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-input type=\"file\" accept=\"image/*, video/*, audio/*\"  (change)=\"onFileChange($event)\"  ></ion-input>\n  </ion-item>\n  <img [src]=\"link\">\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"submitForm()\">Upload</ion-button>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_upload_upload_module_ts.js.map