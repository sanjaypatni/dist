"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_preview_preview_module_ts"],{

/***/ 7302:
/*!***************************************************!*\
  !*** ./src/app/preview/preview-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewPageRoutingModule": () => (/* binding */ PreviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _preview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.page */ 2722);




const routes = [
    {
        path: '',
        component: _preview_page__WEBPACK_IMPORTED_MODULE_0__.PreviewPage
    }
];
let PreviewPageRoutingModule = class PreviewPageRoutingModule {
};
PreviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreviewPageRoutingModule);



/***/ }),

/***/ 5792:
/*!*******************************************!*\
  !*** ./src/app/preview/preview.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewPageModule": () => (/* binding */ PreviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _preview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview-routing.module */ 7302);
/* harmony import */ var _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/shared-components/shared-components.module */ 7280);
/* harmony import */ var _preview_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview.page */ 2722);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 2302);









let PreviewPageModule = class PreviewPageModule {
};
PreviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _preview_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreviewPageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule,
            _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentsModule
        ],
        declarations: [_preview_page__WEBPACK_IMPORTED_MODULE_2__.PreviewPage]
    })
], PreviewPageModule);



/***/ }),

/***/ 2722:
/*!*****************************************!*\
  !*** ./src/app/preview/preview.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewPage": () => (/* binding */ PreviewPage)
/* harmony export */ });
/* harmony import */ var _Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _preview_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.page.html?ngResource */ 4059);
/* harmony import */ var _preview_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview.page.scss?ngResource */ 4409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _models_playclip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/playclip */ 3667);
/* harmony import */ var _models_clip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/clip */ 272);
/* harmony import */ var _services_playclips_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/playclips.service */ 5800);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);










let PreviewPage = class PreviewPage {
  constructor(navCtrl, router, playclipsService) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.playclipsService = playclipsService;
    this.playclip = new _models_playclip__WEBPACK_IMPORTED_MODULE_3__.Playclip();
    this.href = "";
    this.count = 0;
    this.itemsPerPage = 2;
    this.currentPage = 1;
    this.selectedClip = new _models_clip__WEBPACK_IMPORTED_MODULE_4__.Clip();
    this.init();
  }

  ngOnInit() {}

  onChange(event) {
    console.log(event);
    this.currentPage = event;
  }

  init() {
    var _this = this;

    return (0,_Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.href = _this.router.url;
      console.log(_this.router.url);

      var index = _this.href.lastIndexOf("/");

      var id = _this.href.substring(index + 1);

      console.log(id);
      console.log(index);

      _this.playclipsService.getPlayclip(id).subscribe(response => {
        console.log(response);
        _this.playclip = response;
        let cnt = 0;

        for (let clip of _this.playclip.clips) {
          clip.preview = true;
          if (clip.type == "image") clip.base64String = "data:" + clip.type + "/" + clip.fileType + ";base64," + clip.base64Bytes;

          if (cnt == 0) {
            clip.active = "panel active";
            _this.selectedClip = clip;
          } else clip.active = "panel";

          cnt = cnt + 1;
        }

        console.log(_this.playclip.title);
      });
    })();
  }

  archive() {
    console.log("archive");
    this.playclipsService.archive(this.playclip).subscribe(response => {
      this.navCtrl.navigateForward("tab4");
    });
  }

  addActiveClass(clip) {
    console.log("clicked");
    this.removeActiveClasses();
    clip.active = "panel active";
  }

  removeActiveClasses() {
    for (let clip of this.playclip.clips) clip.active = "panel";
  }

  setClip(clip) {
    console.log("set clip");
    this.selectedClip = clip;
  }

};

PreviewPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _services_playclips_service__WEBPACK_IMPORTED_MODULE_5__.PlayclipsService
}];

PreviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-preview',
  template: _preview_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_preview_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PreviewPage);


/***/ }),

/***/ 4409:
/*!******************************************************!*\
  !*** ./src/app/preview/preview.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Muli&display=swap\");\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Muli\", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n}\n.container {\n  display: flex;\n  width: 90vw;\n}\n.panel {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 80vh;\n  border-radius: 50px;\n  color: #fff;\n  cursor: pointer;\n  flex: 0.5;\n  margin: 10px;\n  position: relative;\n  -webkit-transition: all 700ms ease-in;\n}\n.panel h3 {\n  font-size: 24px;\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  margin: 0;\n  opacity: 0;\n}\n.panel.active {\n  flex: 5;\n}\n.panel.active h3 {\n  opacity: 1;\n  transition: opacity 0.3s ease-in 0.4s;\n}\n@media (max-width: 480px) {\n  .container {\n    width: 100vw;\n  }\n  .panel:nth-of-type(4),\n.panel:nth-of-type(5) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHdFQUFBO0FBRVI7RUFDRSxzQkFBQTtBQUFGO0FBR0E7RUFDRSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLE9BQUE7QUFBRjtBQUdBO0VBQ0UsVUFBQTtFQUNBLHFDQUFBO0FBQUY7QUFHQTtFQUNFO0lBQ0UsWUFBQTtFQUFGO0VBR0E7O0lBRUUsYUFBQTtFQURGO0FBQ0YiLCJmaWxlIjoicHJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU11bGkmZGlzcGxheT1zd2FwJyk7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdNdWxpJywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MHZ3O1xufVxuXG4ucGFuZWwge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogODB2aDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMC41O1xuICBtYXJnaW46IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNzAwbXMgZWFzZS1pbjtcbn1cblxuLnBhbmVsIGgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucGFuZWwuYWN0aXZlIHtcbiAgZmxleDogNTtcbn1cblxuLnBhbmVsLmFjdGl2ZSBoMyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluIDAuNHM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuICAucGFuZWw6bnRoLW9mLXR5cGUoNCksXG4gIC5wYW5lbDpudGgtb2YtdHlwZSg1KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 4059:
/*!******************************************************!*\
  !*** ./src/app/preview/preview.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n    <ion-title>Preview</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"tab4\"></ion-back-button>\n    </ion-buttons>\n</ion-toolbar>\n<ion-content>\n<ion-item>\n    <ion-label position=\"stacked\"> Title : {{ playclip.title }} </ion-label>\n    <ion-label position=\"stacked\"> Description : {{ playclip.description }} </ion-label>\n</ion-item>\n<ion-grid>\n<ion-row class=\"ion-nowrap\">\n     <ion-col>\n      <div *ngIf=\"selectedClip.type == 'video'\">\n       <div   class=\"panel\"  style=\"background-image: url('{{ selectedClip.link }}')\" > </div>\n      </div>\n      <div *ngIf=\"selectedClip.type == 'image'\">\n       <div   class=\"panel\"  style=\"background-image: url('{{ selectedClip.base64String }}')\" > </div>\n      </div>\n      <div *ngIf=\"selectedClip.type == 'ytube'\">\n  <a [href]=\"selectedClip.link\" >\n  <table>\n  <tr>\n          <td>\n           <img [src]=\"selectedClip.thumbnail\" height=\"250\" width=\"350\" /> \n          <table>\n                  <tr>\n                  <td background=\"https://pc-clips-storage.s3.us-west-1.amazonaws.com/play.png\" height=\"50\" width=\"60\">\n                  </td>\n                  </tr>\n           </table>\n          </td>\n  </tr>\n  </table>\n  </a>\n\n      </div>\n     </ion-col>\n</ion-row>\n<ion-row class=\"ion-nowrap\">\n    <ion-col *ngFor=\"let clip of playclip.clips\"> \n    <div *ngIf=\"clip.type == 'video'\">\n       <a (click)=\"setClip(clip)\">\n        <div   [ngClass]=\"clip.active\" style=\"background-image: url('{{ clip.link }}')\" > </div>\n       </a>\n     </div>\n     <div *ngIf=\"clip.type == 'image'\" height=\"175px\" width=\"225px\">\n         <a (click)=\"setClip(clip)\">\n          <ion-img [src]=\"clip.base64String\"  ></ion-img>\n       </a>\n     </div>\n     <div *ngIf=\"clip.type == 'ytube'\" height=\"175px\" width=\"225px\">\n         <a (click)=\"setClip(clip)\">\n        \t<div   [ngClass]=\"clip.active\" style=\"background-image: url('{{ clip.thumbnail }}')\" > </div>\n       </a>\n     </div>\n     <div *ngIf=\"clip.type == 'text'\" height=\"175px\" width=\"225px\">\n       <ion-item text-wrap>\n          {{clip.description}}\n       </ion-item>\n     </div>\n     <div *ngIf=\"clip.type == 'contact'\" height=\"175px\" width=\"225px\">\n        <ion-item>\n          {{clip.email}}\n        </ion-item>\n        <ion-item>\n          {{clip.phone}}\n        </ion-item> \n     </div>\n     <div *ngIf=\"clip.type =='appt'\" poster=\"{{ clip.thumbnail }}\" width=\"420\" height=\"315\">\n       <ion-item text-wrap>\n          {{clip.description}}\n         </ion-item>\n         <ion-item text-wrap>\n          {{clip.link}}\n         </ion-item>\n   <ion-item>\n    <ion-label>Start</ion-label>\n    <ion-datetime displayFormat=\"DD-MMM-YY HH:mm\" (ionChange)=\"toggle()\" [(ngModel)]=\"clip.startDate\" min=\"{{ clip.startDate }}\" max=\"{{ clip.startDate }}\" > </ion-datetime>\n   </ion-item>\n   <ion-item>\n    <ion-label>End</ion-label>\n    <ion-datetime displayFormat=\"DD-MMM-YY HH:mm\" (ionChange)=\"toggle()\" [(ngModel)]=\"clip.endDate\"  min=\"{{ clip.endDate }}\" max=\"{{ clip.endDate }}\" > </ion-datetime>\n   </ion-item>\n   </div>\n   <div *ngIf=\"clip.type == 'audio'\">\n    <video  controls poster=\"{{ clip.thumbnail }}\" height=\"175px\" width=\"225px\">\n     <source src=\"{{ clip.link }}\" type=\"video/mp4\" >\n     Your browser does not support the <code>audio</code> element.\n    </video>\n   </div>\n   <div *ngIf=\"clip.type == 'record'\">\n    <video  controls poster=\"{{ clip.thumbnail }}\" height=\"175px\" width=\"225px\">\n     <source src=\"{{ clip.link }}\" type=\"video/mp4\" >\n     Your browser does not support the <code>audio</code> element.\n    </video>\n   </div>\n  </ion-col>\n</ion-row>\n</ion-grid>\n<ion-avatar slot=\"start\">\n     <a  (click)=\"archive()\">\n                <ion-icon name=\"archive\"></ion-icon>\n     </a>\n</ion-avatar>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_preview_preview_module_ts.js.map