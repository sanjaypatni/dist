"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2945:
/*!**************************************!*\
  !*** ./src/app/models/object-cnt.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectCnt": () => (/* binding */ ObjectCnt)
/* harmony export */ });
class ObjectCnt {
    constructor() {
        this.object = 0;
    }
}


/***/ }),

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components/shared-components.module */ 7280);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_3__.Tab1PageRoutingModule,
            _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_contents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contents.service */ 5699);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _models_object_cnt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/object-cnt */ 2945);










let Tab1Page = class Tab1Page {
    constructor(signinService, contentService, platform, navCtrl) {
        // this.picture = this.signinService.user.login;
        this.signinService = signinService;
        this.contentService = contentService;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.pc_link = "https://playclips-api.com/content/listPlayclipsIonic.html";
        this.objectCnt = new _models_object_cnt__WEBPACK_IMPORTED_MODULE_4__.ObjectCnt();
        this.assetLink = "assets/img/assets.png";
        this.contentService.getObjectCntByLogin().subscribe(response => {
            this.objectCnt = response;
        });
        this.signinService.platform = this.platform;
        this.signinService.page = "tab1";
        this.ionViewWillEnter();
        this.host = window.location.hostname;
        this.hlink = "assets/img/header.png";
        this.signinService.hlink = this.hlink;
        if (this.host == "coretakeaways.com" && this.signinService.user.login == "") {
            this.hlink = "assets/img/header-main1.png";
            this.signinService.user.login = "assets/img/demo.png";
            this.signinService.hlink = this.hlink;
        }
        if (this.host == "localhost" && this.signinService.user.login == "") {
            this.hlink = "assets/img/header-main1.png";
            this.signinService.user.login = "assets/img/demo.png";
            this.signinService.hlink = this.hlink;
        }
        if (this.host == "kidsplayclips.com" && this.signinService.user.login == "") {
            this.hlink = "assets/img/home_kids_1.png";
            this.signinService.user.login = "assets/img/home_kids_1.png";
            this.signinService.hlink = this.hlink;
        }
        if (this.host == "demo-patni.com" && this.signinService.user.login == "") {
            this.hlink = "assets/img/header_tw.png";
            this.signinService.hlink = this.hlink;
            this.signinService.user.login = "assets/img/logo.png";
        }
        if (this.host == "1895mccandless.com" && this.signinService.user.login == "") {
            this.hlink = "assets/img/header_home_1.png";
            this.signinService.hlink = this.hlink;
            this.signinService.user.login = "assets/img/header_home_1.png";
        }
        if (this.platform.platforms().includes("android") && this.signinService.user.login == "") {
            this.hlink = "assets/img/header-main1.png";
            this.signinService.user.login = "assets/img/demo.png";
            this.signinService.hlink = this.hlink;
        }
        if (this.platform.platforms().includes("ios") && this.signinService.user.login == "") {
            this.hlink = "assets/img/header-main1.png";
            this.signinService.user.login = "assets/img/demo.png";
            this.signinService.hlink = this.hlink;
        }
    }
    ionViewWillEnter() {
        this.contentService.getObjectCntByLogin().subscribe(response => {
            this.objectCnt = response;
        });
        if (this.signinService.user && this.signinService.selectedTab <= 1)
            this.contentService.getContents(this.signinService.type);
        else
            this.contentService.getAllContents();
    }
    ionViewDidLoad() {
        this.signinService.page = "tab1";
    }
    ngOnInit() {
        this.signinService.page = "tab1";
    }
    ionViewDidEnter() {
        this.signinService.page = "tab1";
    }
    createContents() {
        this.signinService.page = "create-contents";
        this.navCtrl.navigateForward('create-contents');
    }
    signin() {
        console.log("Signin");
        this.navCtrl.navigateForward('sign-in');
        this.pc_link = this.signinService.pc_link;
    }
    signout() {
        console.log("Signin");
        this.navCtrl.navigateForward('sign-in');
    }
    chat() {
        this.navCtrl.navigateForward('chat');
    }
    offend() {
        // if ( this.signinService.user.login == "assets/img/admin.png" )
        this.navCtrl.navigateForward('offend');
    }
    purgeContents() {
        console.log("Purge");
        this.contentService.purge();
        this.contentService.getAllContents();
    }
    showDetails(content) {
        console.log(content.title);
        this.signinService.content = content;
        this.navCtrl.navigateForward("content-details");
    }
    playclip() {
        this.navCtrl.navigateForward("demo");
    }
    loadData(event) {
        // Using settimeout to simulate api call
        setTimeout(() => {
            // load more data
            //Hide Infinite List Loader on Complete
            event.target.complete();
            //Rerender Virtual Scroll List After Adding New Data
            this.virtualScroll.checkEnd();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.contentService.contentsData.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    contentDetails(id) {
        this.navCtrl.navigateForward("/content-details/" + id);
    }
    show(id, type, link) {
        /**
           if ( type == "pdf") {
            console.log(type);
            window.open(link, '_blank');
           }
           else
        **/
        this.navCtrl.navigateForward("/content-details/" + id);
    }
    showProfile() {
        console.log("profile");
        this.navCtrl.navigateForward('profile');
    }
    payment() {
        console.log("payment");
        this.navCtrl.navigateForward('payment');
    }
    createProfile() {
        console.log("create profile");
        this.navCtrl.navigateForward('create-profile');
    }
    subscribe() {
        this.navCtrl.navigateForward("subscription");
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__.SigninService },
    { type: _services_contents_service__WEBPACK_IMPORTED_MODULE_2__.ContentsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
Tab1Page.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInfiniteScroll,] }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonVirtualScroll,] }]
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".pagination {\n  --bs-pagination-padding-x: 0.75rem;\n  --bs-pagination-padding-y: 0.375rem;\n  --bs-pagination-font-size: 1rem;\n  --bs-pagination-color: #9e0000;\n  --bs-pagination-bg: var(--bs-red);\n  --bs-pagination-border-width: 1px;\n  --bs-pagination-border-color: #dee2e6;\n  --bs-pagination-border-radius: 0.375rem;\n  --bs-pagination-hover-color: var(--bs-link-hover-color);\n  --bs-pagination-hover-bg: #e9ecef;\n  --bs-pagination-hover-border-color: #dee2e6;\n  --bs-pagination-focus-color: var(--bs-link-hover-color);\n  --bs-pagination-focus-bg: #e9ecef;\n  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  --bs-pagination-active-color: #fff;\n  --bs-pagination-active-bg: #0d6efd;\n  --bs-pagination-active-border-color: #0d6efd;\n  --bs-pagination-disabled-color: #6c757d;\n  --bs-pagination-disabled-bg: #fff;\n  --bs-pagination-disabled-border-color: #dee2e6;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHVEQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQ0FBQTtFQUNBLHVEQUFBO0VBQ0EsaUNBQUE7RUFDQSx3RUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uIHtcbiAgLS1icy1wYWdpbmF0aW9uLXBhZGRpbmcteDogMC43NXJlbTtcbiAgLS1icy1wYWdpbmF0aW9uLXBhZGRpbmcteTogMC4zNzVyZW07XG4gIC0tYnMtcGFnaW5hdGlvbi1mb250LXNpemU6IDFyZW07XG4gIC0tYnMtcGFnaW5hdGlvbi1jb2xvcjogICM5ZTAwMDA7XG4gIC0tYnMtcGFnaW5hdGlvbi1iZzogIHZhcigtLWJzLXJlZCk7IFxuICAtLWJzLXBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYnMtcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIC0tYnMtcGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgLS1icy1wYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiB2YXIoLS1icy1saW5rLWhvdmVyLWNvbG9yKTtcbiAgLS1icy1wYWdpbmF0aW9uLWhvdmVyLWJnOiAjZTllY2VmO1xuICAtLWJzLXBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICAtLWJzLXBhZ2luYXRpb24tZm9jdXMtY29sb3I6IHZhcigtLWJzLWxpbmstaG92ZXItY29sb3IpO1xuICAtLWJzLXBhZ2luYXRpb24tZm9jdXMtYmc6ICNlOWVjZWY7XG4gIC0tYnMtcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIHJnYmEoMTMsIDExMCwgMjUzLCAwLjI1KTtcbiAgLS1icy1wYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogI2ZmZjtcbiAgLS1icy1wYWdpbmF0aW9uLWFjdGl2ZS1iZzogIzBkNmVmZDtcbiAgLS1icy1wYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICMwZDZlZmQ7XG4gIC0tYnMtcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogIzZjNzU3ZDtcbiAgLS1icy1wYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAjZmZmO1xuICAtLWJzLXBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4iXX0= */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <div *ngIf=\"!signinService.logged\">\n        <ion-icon name=\"person-remove-outline\" (click)=\"signin()\"></ion-icon>\n      </div>\n      <div *ngIf=\"signinService.logged\">\n         <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"createProfile()\" >\n                <ion-icon name=\"exit\"  color=\"dark\" ></ion-icon>\n         </ion-button>\n          <ion-avatar slot=\"start\" (click)=\"signout()\" >\n                <img [src]=\"signinService.user.login\">\n          </ion-avatar>\n         <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"createContents()\" >\n                <ion-icon name=\"create\" color=\"dark\" ></ion-icon>\n         </ion-button>\n      </div>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n         <a  (click)=\"offend()\" ion-button full clear>\n                <ion-icon name=\"close-circle-outline\" color=\"danger\" ></ion-icon>\n                <ion-label color=\"danger\" *ngIf=\"objectCnt.object > 0\" > {{ objectCnt.object }} </ion-label>\n         </a>\n    </ion-buttons>\n    <ion-img style=\"height:30%;width:100%\"  [src]=\"hlink\"></ion-img>\n     <a (click)=\"playclip()\" >\n\t<center>  ©™Playclips</center>\n     </a>\n   </ion-toolbar>\n  </ion-header>\n<ion-content>\n <ion-list lines=\"none\">\n <app-top-nav></app-top-nav>\n  <ion-virtual-scroll [items]=\"contentService.contentsData\">\n\n    <ion-item *virtualItem=\"let item\">\n      <ion-item *ngIf=\"item.type == 'contact'\">\n      <ion-avatar slot=\"start\" >\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"person-circle-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item *ngIf=\"item.type == 'todo'\">\n      <ion-avatar slot=\"start\" >\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"checkmark-done-circle-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item *ngIf=\"item.showImage\">\n      <ion-avatar slot=\"start\" >\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"camera-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item *ngIf=\"item.showAudio\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"volume-high-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item *ngIf=\"item.showVideo\">\n      <ion-avatar slot=\"start\" >\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"videocam-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item *ngIf=\"item.showYTube\">\n        <ion-avatar slot=\"start\" >\n          <img src=\"{{item.thumbnail}}\">\n        </ion-avatar>\n        <ion-avatar slot=\"end\">\n          <ion-icon name=\"logo-youtube\"></ion-icon>\n        </ion-avatar>\n        </ion-item>\n     <ion-item *ngIf=\"item.showText\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"reader-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n     <ion-item *ngIf=\"item.showPdf\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"newspaper-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n     <ion-item *ngIf=\"item.showLink\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"link-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item *ngIf=\"item.showAppt\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"calendar\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item *ngIf=\"item.showRecord\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.thumbnail}}\">\n      </ion-avatar>\n      <ion-avatar slot=\"end\">\n        <ion-icon name=\"recording-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-label>\n        <h2>{{item.title}}</h2>\n      </ion-label>\n      <ion-item>\n       <ion-avatar slot=\"start\" *ngIf=\"item.like\" >\n        <ion-icon name=\"thumbs-up\"></ion-icon>\n      </ion-avatar>\n      <ion-avatar slot=\"start\" *ngIf=\"item.unlike\" >\n        <ion-icon name=\"thumbs-down\"></ion-icon>\n      </ion-avatar>\n       <ion-avatar slot=\"start\" *ngIf=\"item.object == 1 && !(item.like || item.unlike)\" >\n        <ion-icon name=\"close-circle-outline\"></ion-icon>\n      </ion-avatar>\n       <ion-avatar slot=\"start\" *ngIf=\"item.object == 2 && !(item.like || item.unlike)\" >\n        <ion-icon name=\"checkbox-outline\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n      <ion-item>\n       <ion-avatar slot=\"start\" *ngIf=\"item.archive == 1\" >\n        <ion-icon name=\"archive\"></ion-icon>\n      </ion-avatar>\n      </ion-item>\n\n      <ion-avatar>\n        <ion-icon name=\"chevron-forward\" (click)=\"show(item.id, item.type, item.link)\"></ion-icon>\n      </ion-avatar>\n      \n    </ion-item>\n\n\n\n\n  </ion-virtual-scroll>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-list>\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map