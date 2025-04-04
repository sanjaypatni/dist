"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components/shared-components.module */ 7280);
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../safe.pipe */ 3289);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);











let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_4__.Tab3PageRoutingModule,
            _components_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page, _safe_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var _Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sign-in.service */ 6496);
/* harmony import */ var _services_clips_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/clips.service */ 5336);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);










let Tab3Page = class Tab3Page {
  constructor(signinService, clipsService, navCtrl, alertController, dom) {
    this.signinService = signinService;
    this.clipsService = clipsService;
    this.navCtrl = navCtrl;
    this.alertController = alertController;
    this.dom = dom;
    this.cnt = 1;
    this.pcClips = [];
    this.pcCnt = 0;
    this.clipReviewed = [];
    this.clipReviewed1 = [];
    this.activeSlideIndex = 0;
    this.slidesLength = 4;
    this.hlink = this.signinService.hlink;
  }

  addToPc(clip) {
    console.log(clip);

    for (let i = 0; i < this.signinService.pcCnt; i++) {
      if (clip.link == this.signinService.pcClips[i].link) return;
    }

    this.signinService.pcClips[this.signinService.pcCnt] = clip;
    clip.disabled = true;
    this.signinService.pcCnt = this.signinService.pcCnt + 1;
  }

  ionViewWillEnter() {
    var _this = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.signinService.user) {
        yield _this.getClips();
      }
    })();
  }

  getClips() {
    var _this2 = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.clipReviewed1 = [];
      _this2.clipReviewed = [];

      _this2.clipsService.getList().subscribe(response => {
        _this2.clipData1 = response;

        for (let clip of _this2.clipData1) {
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

            _this2.clipReviewed1.push(clip);
          }
        }
      });

      _this2.clipsService.getList().subscribe(response => {
        _this2.clipData = response;
        i = 0;

        for (let clip of _this2.clipData) {
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

            _this2.clipReviewed.push(clip);
          }
        }
      });
    })();
  }

  email(link) {
    var _this3 = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("email");
      const alert = yield _this3.alertController.create({
        header: 'EMAIL LINK',
        subHeader: 'Enter email',
        inputs: [{
          name: 'email',
          type: 'text'
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Send',
          handler: alertData => {
            console.log(alertData.email);
            console.log(link);

            _this3.clipsService.emailClip(alertData.email, link).subscribe(response => {
              console.log(response);
            });
          }
        }]
      });
      yield alert.present();
    })();
  }

  text(link) {
    var _this4 = this;

    return (0,_Users_sanjaypatni_playclips_ios_latest_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("text");
      const alert = yield _this4.alertController.create({
        header: 'TEXT LINK',
        subHeader: 'To Be Implemented',
        inputs: [{
          name: 'text',
          type: 'text'
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: alertData => {
            console.log(alertData.phone);
            console.log(link);

            _this4.clipsService.textClip(alertData.phone, link).subscribe(response => {
              console.log(response);
            });
          }
        }]
      });
      yield alert.present();
    })();
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

  share() {
    this.navCtrl.navigateForward('share');
  }

  createContents() {
    this.navCtrl.navigateForward('create-contents');
  }

  createProfile() {
    console.log("create profile");
    this.navCtrl.navigateForward('create-profile');
  }

  createPc() {
    this.cnt = this.cnt + 1;
    this.navCtrl.navigateForward('create-pc/' + this.cnt);
  }

  upButton() {
    console.log("Change Slide Up");
    changeSlideUp();
  }

  downButton() {
    console.log("Change Slide Down");
    changeSlideDown();
  }

  subscribe() {
    this.navCtrl.navigateForward("subscription");
  }

};

Tab3Page.ctorParameters = () => [{
  type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_3__.SigninService
}, {
  type: _services_clips_service__WEBPACK_IMPORTED_MODULE_4__.ClipsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
}];

Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-tab3',
  template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab3Page);


/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  height: 100vh;\n}\n.slider-container {\n  position: relative;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n}\n.left-slide {\n  height: 100%;\n  width: 10%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.5s ease-in-out;\n}\n.left-slide > div {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.left-slide h1 {\n  font-size: 40px;\n  margin-bottom: 10px;\n  margin-top: -30px;\n}\n.right-slide {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 10%;\n  width: 90%;\n  transition: transform 0.5s ease-in-out;\n}\n.right-slide > div {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  height: 100%;\n  width: 100%;\n}\nbutton {\n  background-color: #fff;\n  border: none;\n  color: #aaa;\n  cursor: pointer;\n  font-size: 16px;\n  padding: 15px;\n}\nbutton:hover {\n  color: #222;\n}\nbutton:focus {\n  outline: none;\n}\n.slider-container .action-buttons button {\n  position: absolute;\n  left: 35%;\n  top: 50%;\n  z-index: 100;\n}\n.slider-container .action-buttons .down-button {\n  transform: translateX(-100%);\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.slider-container .action-buttons .up-button {\n  transform: translateY(-100%);\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGdFQUFBO0FBRVI7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLG9DQUFBO0VBQ0EsYUFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0NBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQ0FBQTtBQUFGO0FBR0E7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0E7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFBRjtBQUdBO0VBQ0UsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBQUYiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucycpO1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2xpZGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubGVmdC1zbGlkZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ubGVmdC1zbGlkZSA+IGRpdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxlZnQtc2xpZGUgaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4ucmlnaHQtc2xpZGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxMCU7XG4gIHdpZHRoOiA5MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ucmlnaHQtc2xpZGUgPiBkaXYge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjYWFhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMyMjI7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIC5hY3Rpb24tYnV0dG9ucyBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM1JTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLnNsaWRlci1jb250YWluZXIgLmFjdGlvbi1idXR0b25zIC5kb3duLWJ1dHRvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuXG4uc2xpZGVyLWNvbnRhaW5lciAuYWN0aW9uLWJ1dHRvbnMgLnVwLWJ1dHRvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4iXX0= */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n\t<ion-toolbar>\n    <ion-title>\n       <center> </center>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <div *ngIf=\"!signinService.logged\">\n        <ion-icon name=\"person-remove-outline\" (click)=\"signin()\"></ion-icon>\n      </div>\n      <div>\n         <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"createProfile()\" >\n                <ion-icon name=\"exit\"  color=\"dark\" ></ion-icon>\n         </ion-button>\n          <ion-avatar slot=\"start\" (click)=\"signout()\" >\n                <img [src]=\"signinService.user.login\">\n          </ion-avatar>\n         <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"createContents()\" >\n                <ion-icon name=\"create\"  color=\"dark\" ></ion-icon>\n         </ion-button>\n      </div>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n       <ion-icon name=\"logo-buffer\" color=\"dark\" (click)=\"createPc()\"></ion-icon>\n    \t <ion-label *ngIf=\"signinService.pcCnt>0\" >\n      \t\t{{ signinService.pcCnt }}\n    \t </ion-label>\n     </ion-buttons>\n     <ion-img style=\"height:30%;width:100%\"  [src]=\"hlink\"></ion-img>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n<div class=\"slider-container\" *ngIf=\"this.clipReviewed.length > 0\">\n     <div class=\"left-slide\">\n      <app-tile *ngFor=\"let clip of this.clipReviewed\" [item]=\"clip\"></app-tile>\n     </div>\n     <div class=\"right-slide\">\n      <app-tile *ngFor=\"let clip of this.clipReviewed1\" [item]=\"clip\"></app-tile>\n     </div>\n      <div class=\"action-buttons\">\n       <button class=\"down-button\" (click)=\"downButton()\">\n         <ion-icon name=\"chevron-down\" color=\"blue\"></ion-icon> \n       </button>\n       <button class=\"up-button\" (click)=\"upButton()\">\n         <ion-icon name=\"chevron-up\" color=\"blue\"></ion-icon> \n       </button>\n     </div>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map