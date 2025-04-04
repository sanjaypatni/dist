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
/* harmony import */ var _Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _preview_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.page.html?ngResource */ 4059);
/* harmony import */ var _preview_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview.page.scss?ngResource */ 4409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _models_playclip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/playclip */ 3667);
/* harmony import */ var _services_playclips_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/playclips.service */ 5800);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);









let PreviewPage = class PreviewPage {
  constructor(navCtrl, router, playclipsService) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.playclipsService = playclipsService;
    this.playclip = new _models_playclip__WEBPACK_IMPORTED_MODULE_3__.Playclip();
    this.playclip1 = new _models_playclip__WEBPACK_IMPORTED_MODULE_3__.Playclip();
    this.href = "";
    this.count = 0;
    this.hide = true;
    this.itemsPerPage = 2;
    this.currentPage = 1;
    this.clipReviewed = [];
    this.clipReviewed1 = [];
    this.init();
  }

  ngOnInit() {}

  onChange(event) {
    console.log(event);
    this.currentPage = event;
  }

  ionViewWillEnter() {
    var _this = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.init();
    })();
  }

  init() {
    var _this2 = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.href = _this2.router.url;
      console.log(_this2.router.url);

      var index = _this2.href.lastIndexOf("/");

      var id = _this2.href.substring(index + 1);

      console.log(id);
      console.log(index);

      _this2.playclipsService.getPlayclip(id).subscribe(response => {
        console.log(response);
        _this2.playclip = response;

        _this2.playclipsService.getPlayclip(id).subscribe(response => {
          console.log(response);
          _this2.playclip1 = response;

          _this2.processClips(_this2.playclip.clips, _this2.playclip1.clips);
        });
      });
    })();
  }

  archive() {
    console.log("archive");
    this.playclipsService.archive(this.playclip).subscribe(response => {});
    this.hide = true;
  }

  purge() {
    var _this3 = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.hide = false;

      _this3.playclipsService.delete(_this3.playclip.id);

      yield _this3.sleep(500);

      _this3.playclipsService.getPlayclips();

      yield _this3.sleep(500);

      _this3.navCtrl.navigateForward("tab4");
    })();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  processClips(clips, clips1) {
    this.clipReviewed1 = [];
    this.clipReviewed = [];
    this.clipData1 = clips1;

    for (let clip of this.clipData1) {
      clip.playType = "clipvl";
      clip.active = "panel active";
      clip.base64String = "data:" + clip.type + "/" + clip.fileType + ";base64," + clip.base64Bytes;
      clip.srating = "*";

      if (clip.rating > 3) {
        clip.showItem = true;
        var i;

        for (i = 0; i < clip.rating - 1; i++) {
          clip.srating = "*" + clip.srating;
        }
      }

      if (clip.rating == 4 || clip.rating == 5) {
        clip.showItem = true;
        if (this.clipReviewed1.length < 1) this.clipReviewed1.push(clip);
      }
    }

    console.log("processedClips");
    this.clipData = clips;
    i = 0;

    for (let clip of this.clipData) {
      if (i % 2 == 0) clip.playType = "clipvreven";else clip.playType = "clipvrodd";
      i = i + 1;
      clip.active = "panel active";
      clip.base64String = "data:" + clip.type + "/" + clip.fileType + ";base64," + clip.base64Bytes;
      clip.showItem = false;
      clip.srating = "*";

      if (clip.rating > 3) {
        clip.showItem = true;
        var i;

        for (i = 0; i < clip.rating - 1; i++) {
          clip.srating = "*" + clip.srating;
        }

        if (clip.type == "audio") clip.showAudio = true;
        if (clip.type == "image") clip.showImage = true;
        if (clip.type == "video") clip.showVideo = true;
        if (clip.type == "ytube") clip.showYTube = true;
        if (clip.type == "text") clip.showText = true;
        if (clip.type == "record") clip.showRecord = true;
        if (clip.type == "todo") clip.showTodo = true;
        if (clip.type == "appt") clip.showAppt = true;
        if (clip.type == "pdf") clip.showPdf = true;
        if (clip.type == "link") clip.showLink = true;
        if (clip.type == "contact") clip.showContact = true;
        if (clip.type == "chat") clip.showChat = true;
        if (clip.rating == 1) clip.srating1 = true;
        if (clip.rating == 2) clip.srating2 = true;
        if (clip.rating == 3) clip.srating3 = true;
        if (clip.rating == 4) clip.srating4 = true;
        if (clip.rating == 5) clip.srating5 = true;
        if (clip.rating == 4 || clip.rating == 5) clip.showItem = true;
        this.clipReviewed.push(clip);
      }
    }

    console.log("processedClips2");
  }

  upButton() {
    console.log("Change Slide Up");
    changeSlideUp();
  }

  downButton() {
    console.log("Change Slide Down");
    changeSlideDown();
  }

};

PreviewPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _services_playclips_service__WEBPACK_IMPORTED_MODULE_4__.PlayclipsService
}];

PreviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  height: 100vh;\n}\n.slider-container {\n  position: relative;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n}\n.left-slide {\n  height: 100%;\n  width: 10%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.5s ease-in-out;\n}\n.left-slide > div {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.left-slide h1 {\n  font-size: 40px;\n  margin-bottom: 10px;\n  margin-top: -30px;\n}\n.right-slide {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 10%;\n  width: 90%;\n  transition: transform 0.5s ease-in-out;\n}\n.right-slide > div {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  height: 100%;\n  width: 100%;\n}\nbutton {\n  background-color: #fff;\n  border: none;\n  color: #aaa;\n  cursor: pointer;\n  font-size: 16px;\n  padding: 15px;\n}\nbutton:hover {\n  color: #222;\n}\nbutton:focus {\n  outline: none;\n}\n.slider-container .action-buttons button {\n  position: absolute;\n  left: 35%;\n  top: 50%;\n  z-index: 100;\n}\n.slider-container .action-buttons .down-button {\n  transform: translateX(-100%);\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.slider-container .action-buttons .up-button {\n  transform: translateY(-100%);\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGdFQUFBO0FBRVI7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLG9DQUFBO0VBQ0EsYUFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0NBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQ0FBQTtBQUFGO0FBR0E7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0E7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFBRjtBQUdBO0VBQ0UsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBQUYiLCJmaWxlIjoicHJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucycpO1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2xpZGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubGVmdC1zbGlkZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ubGVmdC1zbGlkZSA+IGRpdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxlZnQtc2xpZGUgaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4ucmlnaHQtc2xpZGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxMCU7XG4gIHdpZHRoOiA5MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ucmlnaHQtc2xpZGUgPiBkaXYge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjYWFhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMyMjI7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIC5hY3Rpb24tYnV0dG9ucyBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM1JTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLnNsaWRlci1jb250YWluZXIgLmFjdGlvbi1idXR0b25zIC5kb3duLWJ1dHRvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuXG4uc2xpZGVyLWNvbnRhaW5lciAuYWN0aW9uLWJ1dHRvbnMgLnVwLWJ1dHRvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4iXX0= */";

/***/ }),

/***/ 4059:
/*!******************************************************!*\
  !*** ./src/app/preview/preview.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n   <ion-toolbar>\n    <ion-title>\n       <center> Preview Playclip {{ playclip.title }} </center>\n    </ion-title>\n    <ion-buttons>\n     <ion-back-button defaultHref=\"tab4\"></ion-back-button>\n    </ion-buttons>\n </ion-toolbar>\n</ion-header>\n<ion-content>\n<div class=\"slider-container\" *ngIf=\"this.clipReviewed.length > 0\" >\n     <div class=\"left-slide\">\n      <app-tile *ngFor=\"let clip of this.clipReviewed\" [item]=\"clip\"></app-tile>\n     </div>\n     <div class=\"right-slide\">\n      <app-tile *ngFor=\"let clip of this.clipReviewed1\" [item]=\"clip\"></app-tile>\n     </div>\n      <div class=\"action-buttons\">\n       <button class=\"down-button\" (click)=\"downButton()\">\n         <ion-icon name=\"chevron-down\" color=\"blue\"></ion-icon> \n       </button>\n       <button class=\"up-button\" (click)=\"upButton()\">\n         <ion-icon name=\"chevron-up\" color=\"blue\"></ion-icon> \n       </button>\n     </div>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_preview_preview_module_ts.js.map