"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_search-results-yt_search-results-yt_module_ts"],{

/***/ 8235:
/*!***********************************************************************!*\
  !*** ./src/app/search-results-yt/search-results-yt-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsYTPageRoutingModule": () => (/* binding */ SearchResultsYTPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _search_results_yt_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-results-yt.page */ 4120);




const routes = [
    {
        path: '',
        component: _search_results_yt_page__WEBPACK_IMPORTED_MODULE_0__.SearchResultsYTPage
    }
];
let SearchResultsYTPageRoutingModule = class SearchResultsYTPageRoutingModule {
};
SearchResultsYTPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchResultsYTPageRoutingModule);



/***/ }),

/***/ 3721:
/*!***************************************************************!*\
  !*** ./src/app/search-results-yt/search-results-yt.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsYTPageModule": () => (/* binding */ SearchResultsYTPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _search_results_yt_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-results-yt-routing.module */ 8235);
/* harmony import */ var _search_results_yt_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-results-yt.page */ 4120);







let SearchResultsYTPageModule = class SearchResultsYTPageModule {
};
SearchResultsYTPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_results_yt_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchResultsYTPageRoutingModule
        ],
        declarations: [_search_results_yt_page__WEBPACK_IMPORTED_MODULE_1__.SearchResultsYTPage]
    })
], SearchResultsYTPageModule);



/***/ }),

/***/ 4120:
/*!*************************************************************!*\
  !*** ./src/app/search-results-yt/search-results-yt.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsYTPage": () => (/* binding */ SearchResultsYTPage)
/* harmony export */ });
/* harmony import */ var _Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _search_results_yt_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-results-yt.page.html?ngResource */ 7195);
/* harmony import */ var _search_results_yt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-results-yt.page.scss?ngResource */ 8253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);








let SearchResultsYTPage = class SearchResultsYTPage {
  constructor(signinService) {
    this.signinService = signinService;
    this.ytSearch();
  }

  ionViewWillEnter() {
    this.ytSearch();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ytSearch() {
    var _this = this;

    return (0,_Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var results = _this.signinService.YTSearch().subscribe(response => {
        _this.results = response.items;
        console.log(_this.results);
      });

      yield _this.sleep(1000);

      for (var item in _this.results) {
        console.log(item);
        console.log(_this.results[item].id.videoId);
        console.log(_this.results[item].snippet.title);
        console.log(_this.results[item].snippet.thumbnails.default.url);
      }

      _this.signinService.searchResults = _this.results;
    })();
  }

  ngOnInit() {//this.ytSearch();
  }

  loadData(event) {
    console.log("load data"); // Using settimeout to simulate api call

    setTimeout(() => {
      // load more data
      this.ytSearch(); //Hide Infinite List Loader on Complete

      event.target.complete(); //Rerender Virtual Scroll List After Adding New Data

      this.virtualScroll.checkEnd(); // App logic to determine if all data is loaded
      // and disable the infinite scroll

      if (this.results.length == 10) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  add(title) {
    console.log(title);
  }

};

SearchResultsYTPage.ctorParameters = () => [{
  type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__.SigninService
}];

SearchResultsYTPage.propDecorators = {
  infiniteScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInfiniteScroll]
  }],
  virtualScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonVirtualScroll]
  }]
};
SearchResultsYTPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-search-results-yt',
  template: _search_results_yt_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_search_results_yt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SearchResultsYTPage);


/***/ }),

/***/ 8253:
/*!**************************************************************************!*\
  !*** ./src/app/search-results-yt/search-results-yt.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtcmVzdWx0cy15dC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7195:
/*!**************************************************************************!*\
  !*** ./src/app/search-results-yt/search-results-yt.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Search Results</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"tabs\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-list lines=\"none\">\n  <ion-list-header>\n    YouTube Search Results\n  </ion-list-header>\n  <ion-virtual-scroll [items]=\"results\">\n    <ion-item *virtualItem=\"let item\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{ item.snippet.thumbnails.default.url }}\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.snippet.title}}</h2>\n      </ion-label>\n      \n      <ion-icon  name=\"add-circle\" routerLink=\"/yt-add/{{item.snippet.publishedAt}}\" routerDirection=\"forward\" >\n      </ion-icon>\n      \n    </ion-item>\n  </ion-virtual-scroll>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_search-results-yt_search-results-yt_module_ts.js.map