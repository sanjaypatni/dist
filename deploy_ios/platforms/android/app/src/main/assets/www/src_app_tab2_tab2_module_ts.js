"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components/shared-components.module */ 7280);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../safe-html.pipe */ 3263);










let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab2PageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule,
            _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__.SafeHtmlPipe]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _services_clips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/clips.service */ 5336);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);








let Tab2Page = class Tab2Page {
    constructor(signinService, clipsService, navCtrl, dom) {
        this.signinService = signinService;
        this.clipsService = clipsService;
        this.navCtrl = navCtrl;
        this.dom = dom;
        this.imagesCar = "";
        this.showMediaWidgets = true;
        this.showTextWidgets = false;
        this.count = 0;
        this.itemsPerPage = 1;
        this.currentPage = 1;
        this.hlink = this.signinService.hlink;
        this.signinService.page = "tab2";
    }
    ionViewWillEnter() {
        this.signinService.page = "tab2";
        this.getClips();
    }
    ionViewDidEnter() {
        this.signinService.page = "tab2";
        this.getClips();
    }
    onChange(event) {
        console.log(event);
        this.currentPage = event;
    }
    signin() {
        console.log("Signin");
        this.navCtrl.navigateForward('sign-in');
    }
    signout() {
        console.log("Signin");
        this.navCtrl.navigateForward('sign-in');
    }
    showProfile() {
        console.log("profile");
        this.navCtrl.navigateForward('profile');
    }
    ytVideoIdSanitizer(link) {
        console.log(link);
        return this.dom.bypassSecurityTrustResourceUrl(link);
    }
    chat() {
        this.navCtrl.navigateForward('chat');
    }
    createContents() {
        this.navCtrl.navigateForward('create-contents');
    }
    createProfile() {
        console.log("create profile");
        this.navCtrl.navigateForward('create-profile');
    }
    purgeClips() {
        console.log("Purge");
        this.clipsService.purge();
        this.getClips();
        this.navCtrl.navigateForward('tab1');
    }
    getClips() {
        this.imagesCar = "";
        this.clipsService.getList().subscribe(response => {
            this.signinService.clipData = response;
            for (let clip of this.signinService.clipData) {
                clip.playType = "clip";
                if (clip.type == "audio")
                    clip.showAudio = true;
                if (clip.type == "image")
                    clip.showImage = true;
                if (clip.type == "video")
                    clip.showVideo = true;
                if (clip.type == "ytube")
                    clip.showYTube = true;
                if (clip.type == "pdf")
                    clip.showPdf = true;
                if (clip.type == "contact")
                    clip.showContact = true;
                if (clip.type == "todo")
                    clip.showTodo = true;
                if (clip.type == "chat")
                    clip.showChat = true;
                if (clip.type == "link")
                    clip.showLink = true;
                if (clip.type == "text")
                    clip.showText = true;
                if (clip.type == "record")
                    clip.showRecord = true;
                if (clip.type == "appt")
                    clip.showAppt = true;
            }
        });
    }
    left() {
        console.log(idx);
        idx--;
        changeImage();
        resetInterval();
    }
    right() {
        console.log(idx);
        idx++;
        changeImage();
        resetInterval();
    }
    subscribe() {
        this.navCtrl.navigateForward("subscription");
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService },
    { type: _services_clips_service__WEBPACK_IMPORTED_MODULE_3__.ClipsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  margin: 0;\n}\nimg {\n  width: 500px;\n  height: 500px;\n  object-fit: cover;\n}\n.carousel {\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n  height: auto;\n  max-width: 100%;\n  overflow: hidden;\n}\n.image-container {\n  display: flex;\n  transform: translateX(0);\n  transition: transform 0.5s ease-in-out;\n}\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n}\n.btn {\n  background-color: rebeccapurple;\n  color: #fff;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  width: 49.5%;\n}\n.btn:hover {\n  opacity: 0.9;\n}\n.btn:focus {\n  outline: none;\n}\n.movie-info {\n  color: #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.2rem;\n  padding: 0.5rem 1rem 1rem;\n  letter-spacing: 0.5px;\n}\n.overview {\n  background-color: #000;\n  padding: 2rem;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  max-height: 100%;\n  transform: translateY(101%);\n  overflow-y: auto;\n  transition: transform 0.3s ease-in;\n}\n.movie {\n  width: 300px;\n  margin: 1rem;\n  background-color: var(--secondary-color);\n  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);\n  position: relative;\n  overflow: hidden;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHdGQUFBO0FBRVI7RUFDRSxzQkFBQTtBQUFGO0FBR0E7RUFDRSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0NBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQUY7QUFHQTtFQUNFLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0FBQUY7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFFRjtBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBR0YiLCJmaWxlIjoidGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNhcm91c2VsIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNDkuNSU7XG59XG5cbi5idG46aG92ZXIge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLm1vdmllLWluZm8ge1xuICBjb2xvcjogI2VlZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6MC4ycmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAxcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4ub3ZlcnZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAycmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDElKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbjtcbn1cbi5tb3ZpZSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuIl19 */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n       <center> </center>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <div *ngIf=\"!signinService.logged\">\n        <ion-icon name=\"person-remove-outline\" (click)=\"signin()\"></ion-icon>\n      </div>\n      <div>\n         <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"createProfile()\" >\n                <ion-icon name=\"exit\"  color=\"dark\" ></ion-icon>\n         </ion-button>\n          <ion-avatar slot=\"start\" (click)=\"signout()\" >\n                <ion-img [src]=\"signinService.user.login\"></ion-img>\n          </ion-avatar>\n          <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"createContents()\" >\n                <ion-icon name=\"create\"  color=\"dark\" ></ion-icon>\n         </ion-button>\n      </div>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n    </ion-buttons>\n    <ion-img style=\"height:30%;width:100%\"  [src]=\"hlink\"></ion-img>\n </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" lines=\"none\">\n  <app-top-nav></app-top-nav>\n <div class=\"carousel\" *ngIf=\"this.signinService.clipData.length > 0\">\n  <div class=\"buttons-container\" *ngIf=\"this.signinService.clipData.length > 0\">\n       <button class=\"left-button\" (click)=\"left()\">\n          <ion-icon name=\"chevron-forward\" color=\"blue\"></ion-icon> \n       </button>\n       <button class=\"right-button\" (click)=\"right()\">\n          <ion-icon name=\"chevron-back\" color=\"blue\"></ion-icon> \n       </button>\n   </div>\n  <div class=\"image-container\" id=\"imgs\">\n   <app-tile *ngFor=\"let clip of this.signinService.clipData\" [item]=\"clip\"></app-tile>\n  </div>\n </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map