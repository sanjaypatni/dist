"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_play_play_module_ts"],{

/***/ 1251:
/*!*********************************************!*\
  !*** ./src/app/play/play-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayPageRoutingModule": () => (/* binding */ PlayPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _play_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play.page */ 3612);




const routes = [
    {
        path: '',
        component: _play_page__WEBPACK_IMPORTED_MODULE_0__.PlayPage
    }
];
let PlayPageRoutingModule = class PlayPageRoutingModule {
};
PlayPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlayPageRoutingModule);



/***/ }),

/***/ 1797:
/*!*************************************!*\
  !*** ./src/app/play/play.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayPageModule": () => (/* binding */ PlayPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _play_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-routing.module */ 1251);
/* harmony import */ var _play_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play.page */ 3612);
/* harmony import */ var _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components/shared-components.module */ 7280);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 2302);









let PlayPageModule = class PlayPageModule {
};
PlayPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _play_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlayPageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule,
            _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [_play_page__WEBPACK_IMPORTED_MODULE_1__.PlayPage]
    })
], PlayPageModule);



/***/ }),

/***/ 3612:
/*!***********************************!*\
  !*** ./src/app/play/play.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayPage": () => (/* binding */ PlayPage)
/* harmony export */ });
/* harmony import */ var _Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _play_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play.page.html?ngResource */ 2525);
/* harmony import */ var _play_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play.page.scss?ngResource */ 7353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _models_playclip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/playclip */ 3667);
/* harmony import */ var _services_playclips_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/playclips.service */ 5800);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);









let PlayPage = class PlayPage {
  constructor(navCtrl, router, playclipsService) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.playclipsService = playclipsService;
    this.playclip = new _models_playclip__WEBPACK_IMPORTED_MODULE_3__.Playclip();
    this.href = "";
    this.count = 0;
    this.hide = true;
    this.itemsPerPage = 2;
    this.currentPage = 1;
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
          clip.playType = "playclip";

          if (cnt == 0) {
            clip.active = "panel active";
          } else clip.active = "panel";

          cnt = cnt + 1;
        }
      });
    })();
  }

  archive() {
    console.log("archive");
    this.playclipsService.archive(this.playclip).subscribe(response => {});
    this.hide = true;
  }

  purge() {
    var _this2 = this;

    return (0,_Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.hide = false;

      _this2.playclipsService.delete(_this2.playclip.id);

      yield _this2.sleep(500);

      _this2.playclipsService.getPlayclips();

      yield _this2.sleep(500);

      _this2.navCtrl.navigateForward("tab4");
    })();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

};

PlayPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _services_playclips_service__WEBPACK_IMPORTED_MODULE_4__.PlayclipsService
}];

PlayPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-play',
  template: _play_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_play_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PlayPage);


/***/ }),

/***/ 7353:
/*!************************************************!*\
  !*** ./src/app/play/play.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Muli&display=swap\");\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Muli\", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n}\n.container {\n  display: flex;\n  width: 90vw;\n}\n.panel {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 80vh;\n  border-radius: 50px;\n  color: #fff;\n  cursor: pointer;\n  flex: 0.5;\n  margin: 10px;\n  position: relative;\n  -webkit-transition: all 700ms ease-in;\n}\n.panel h3 {\n  font-size: 24px;\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  margin: 0;\n  opacity: 0;\n}\n.panel.active {\n  flex: 5;\n}\n.panel.active h3 {\n  opacity: 1;\n  transition: opacity 0.3s ease-in 0.4s;\n}\n@media (max-width: 480px) {\n  .container {\n    width: 100vw;\n  }\n  .panel:nth-of-type(4),\n.panel:nth-of-type(5) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHdFQUFBO0FBRVI7RUFDRSxzQkFBQTtBQUFGO0FBR0E7RUFDRSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLE9BQUE7QUFBRjtBQUdBO0VBQ0UsVUFBQTtFQUNBLHFDQUFBO0FBQUY7QUFHQTtFQUNFO0lBQ0UsWUFBQTtFQUFGO0VBR0E7O0lBRUUsYUFBQTtFQURGO0FBQ0YiLCJmaWxlIjoicGxheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU11bGkmZGlzcGxheT1zd2FwJyk7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdNdWxpJywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MHZ3O1xufVxuXG4ucGFuZWwge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogODB2aDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMC41O1xuICBtYXJnaW46IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNzAwbXMgZWFzZS1pbjtcbn1cblxuLnBhbmVsIGgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucGFuZWwuYWN0aXZlIHtcbiAgZmxleDogNTtcbn1cblxuLnBhbmVsLmFjdGl2ZSBoMyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluIDAuNHM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuICAucGFuZWw6bnRoLW9mLXR5cGUoNCksXG4gIC5wYW5lbDpudGgtb2YtdHlwZSg1KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 2525:
/*!************************************************!*\
  !*** ./src/app/play/play.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n <ion-toolbar>\n    <ion-title>Play</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"tab4\"></ion-back-button>\n    </ion-buttons>\n </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!-- Implement the app-tile component -->\n<ion-item>\n    <ion-label position=\"stacked\"> Title : {{ playclip.title }} </ion-label>\n    <ion-label position=\"stacked\"> Description : {{ playclip.description }} </ion-label>\n</ion-item>\n<div class=\"container\">\n<app-tile *ngFor=\"let clip of playclip.clips\"  [item]=\"clip\"></app-tile>\n</div>\n<ion-item>\n    <ion-avatar slot=\"start\">\n     <a  (click)=\"archive()\" *ngIf=\"hide == false\">\n                <ion-icon name=\"archive\"></ion-icon>\n     </a>\n     <a  (click)=\"purge()\" *ngIf=\"hide == true\">\n                <ion-icon name=\"trash\"></ion-icon>\n     </a>\n   </ion-avatar>\n</ion-item>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_play_play_module_ts.js.map