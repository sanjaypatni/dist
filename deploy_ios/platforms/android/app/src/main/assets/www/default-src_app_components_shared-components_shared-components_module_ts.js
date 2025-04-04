"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_shared-components_shared-components_module_ts"],{

/***/ 3362:
/*!*******************************************************!*\
  !*** ./src/app/components/object/object.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectComponent": () => (/* binding */ ObjectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _object_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object.component.html?ngResource */ 5797);
/* harmony import */ var _object_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object.component.scss?ngResource */ 5983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sign-in.service */ 6496);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ 5111);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let ObjectComponent = class ObjectComponent {
    constructor(signinService, navCtrl, api) {
        this.signinService = signinService;
        this.navCtrl = navCtrl;
        this.api = api;
    }
    ;
    ngOnInit() { }
    block(login) {
        // this.signinService.deleteAccount(login);
        if (this.signinService.user.login == "assets/img/admin.png") {
            this.signinService.blockUser(login);
            this.navCtrl.navigateBack("sign-in?login=" + login);
        }
        else
            this.navCtrl.navigateBack(`sign-in?login=assets/img/admin.png`);
    }
};
ObjectComponent.ctorParameters = () => [
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _api__WEBPACK_IMPORTED_MODULE_3__.Api }
];
ObjectComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ObjectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-object',
        template: _object_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_object_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ObjectComponent);



/***/ }),

/***/ 4625:
/*!*************************************************************!*\
  !*** ./src/app/components/playclips/playclips.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayclipsComponent": () => (/* binding */ PlayclipsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _playclips_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playclips.component.html?ngResource */ 916);
/* harmony import */ var _playclips_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playclips.component.scss?ngResource */ 9511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_playclips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/playclips.service */ 5800);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/share.service */ 6994);







let PlayclipsComponent = class PlayclipsComponent {
    constructor(navCtrl, playclipsService, shareService) {
        this.navCtrl = navCtrl;
        this.playclipsService = playclipsService;
        this.shareService = shareService;
    }
    ngOnInit() { }
    play(id) {
        this.navCtrl.navigateForward('play/' + id);
    }
    buy(id) {
        this.playclipsService.playclip = this.playclip;
        this.navCtrl.navigateForward('payment');
    }
    share(id) {
        this.navCtrl.navigateForward('share/' + id);
    }
    preview(id) {
        this.navCtrl.navigateForward('preview/' + id);
    }
    delete(id) {
        this.playclipsService.delete(id);
        this.navCtrl.navigateForward('tab4/' + id);
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    mailPlayclip(id) {
        console.log("mail");
        this.shareService.mail(id).subscribe(response => {
            console.log("email");
            console.log(response);
            console.log("email");
        });
        this.shareService.text(id).subscribe(response => {
            console.log("text");
            console.log(response);
        });
    }
    waPlayclip(id) {
        console.log("wahatsapp");
        this.shareService.whatsapp(id).subscribe(response => {
            console.log("whatsapp");
            console.log(response);
        });
    }
};
PlayclipsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _services_playclips_service__WEBPACK_IMPORTED_MODULE_2__.PlayclipsService },
    { type: _services_share_service__WEBPACK_IMPORTED_MODULE_3__.ShareService }
];
PlayclipsComponent.propDecorators = {
    playclip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
PlayclipsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-playclips',
        template: _playclips_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_playclips_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlayclipsComponent);



/***/ }),

/***/ 7280:
/*!**************************************************************************!*\
  !*** ./src/app/components/shared-components/shared-components.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponentsModule": () => (/* binding */ SharedComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tile/tile.component */ 7612);
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../top-nav/top-nav.component */ 4372);
/* harmony import */ var _object_object_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/object.component */ 3362);
/* harmony import */ var _playclips_playclips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../playclips/playclips.component */ 4625);








let SharedComponentsModule = class SharedComponentsModule {
};
SharedComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule
        ],
        declarations: [_tile_tile_component__WEBPACK_IMPORTED_MODULE_0__.TileComponent, _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__.TopNavComponent, _playclips_playclips_component__WEBPACK_IMPORTED_MODULE_3__.PlayclipsComponent, _object_object_component__WEBPACK_IMPORTED_MODULE_2__.ObjectComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA],
        exports: [_tile_tile_component__WEBPACK_IMPORTED_MODULE_0__.TileComponent, _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__.TopNavComponent, _playclips_playclips_component__WEBPACK_IMPORTED_MODULE_3__.PlayclipsComponent, _object_object_component__WEBPACK_IMPORTED_MODULE_2__.ObjectComponent]
    })
], SharedComponentsModule);



/***/ }),

/***/ 7612:
/*!***************************************************!*\
  !*** ./src/app/components/tile/tile.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TileComponent": () => (/* binding */ TileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.component.html?ngResource */ 135);
/* harmony import */ var _tile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile.component.scss?ngResource */ 405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sign-in.service */ 6496);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);







let TileComponent = class TileComponent {
    constructor(navCtrl, signinService, dom) {
        this.navCtrl = navCtrl;
        this.signinService = signinService;
        this.dom = dom;
    }
    ngOnInit() {
    }
    viewPlayclipClip() {
        this.navCtrl.navigateForward('view-clip/' + this.item.id);
    }
    review() {
        this.navCtrl.navigateForward('edit-clip/' + this.item.id);
    }
    addToPc(clip) {
        for (let i = 0; i < this.signinService.pcCnt; i++) {
            if (clip.link === this.signinService.pcClips[i].link)
                return;
        }
        this.signinService.pcClips[this.signinService.pcCnt] = clip;
        clip.disabled = true;
        this.signinService.pcCnt = this.signinService.pcCnt + 1;
    }
};
TileComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer }
];
TileComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
TileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tile',
        template: _tile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TileComponent);



/***/ }),

/***/ 4372:
/*!*********************************************************!*\
  !*** ./src/app/components/top-nav/top-nav.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopNavComponent": () => (/* binding */ TopNavComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _top_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-nav.component.html?ngResource */ 9323);
/* harmony import */ var _top_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-nav.component.scss?ngResource */ 8532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sign-in.service */ 6496);
/* harmony import */ var _services_contents_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contents.service */ 5699);
/* harmony import */ var _services_clips_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/clips.service */ 5336);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ 5111);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../messages */ 4971);










let TopNavComponent = class TopNavComponent {
    constructor(toastCtrl, api, signinService, contentService, clipsService, navCtrl, messages, platform) {
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.signinService = signinService;
        this.contentService = contentService;
        this.clipsService = clipsService;
        this.navCtrl = navCtrl;
        this.messages = messages;
        this.platform = platform;
        this.title = "";
        this.message = "";
        this.tabs_item = [
            {
                id: '1',
                name: 'radio_list',
                value: 'media',
                text: 'MEDIA',
                disabled: false,
                checked: false,
                color: 'dark',
                media_widget: true,
                text_widget: false
            },
            {
                id: '2',
                name: 'radio_list',
                value: 'text',
                text: 'TEXTUAL',
                disabled: false,
                checked: false,
                color: 'dark',
                text_widget: true,
                media_widget: false
            },
            {
                id: '3',
                name: 'radio_list',
                value: 'text',
                text: 'CONNECT',
                disabled: false,
                checked: false,
                color: 'dark',
                text_widget: true,
                media_widget: false
            },
            {
                id: '4',
                name: 'radio_list',
                value: 'all',
                text: 'ALL',
                disabled: false,
                checked: false,
                color: 'dark',
                text_widget: false,
                media_widget: false
            }
        ];
        if (this.platform.platforms().includes("ios"))
            this.platforms = "ios";
        if (this.platform.platforms().includes("android"))
            this.platforms = "android";
    }
    ngOnInit() { }
    itemClick(i) {
        this.signinService.selectedTab = i;
        if (i == 0) {
            this.signinService.showMediaWidgets = true;
            this.signinService.showTextWidgets = false;
            this.signinService.showConnectWidgets = false;
            if (this.signinService.type == "audio" || this.signinService.type == "record" || this.signinService.type == "video" || this.signinService.type == "ytube") {
                if (this.signinService.page == "tab1")
                    this.contentService.getContents(this.signinService.type);
                if (this.signinService.page == "tab2")
                    this.getClipsByType(this.signinService.type);
            }
            else {
                this.signinService.type = "video";
                this.signinService.video = true;
                this.signinService.ytube = false;
                this.signinService.record = false;
                this.signinService.audio = false;
                if (this.signinService.page == "tab1")
                    this.contentService.getContents(this.signinService.type);
                if (this.signinService.page == "tab2")
                    this.getClipsByType(this.signinService.type);
            }
        }
        if (i == 1) {
            this.signinService.showMediaWidgets = false;
            this.signinService.showTextWidgets = true;
            this.signinService.showConnectWidgets = false;
            if (this.signinService.type == "text" || this.signinService.type == "image" || this.signinService.type == "pdf" || this.signinService.type == "link") {
                if (this.signinService.page == "tab1")
                    this.contentService.getContents(this.signinService.type);
                if (this.signinService.page == "tab2")
                    this.getClipsByType(this.signinService.type);
            }
            else {
                this.signinService.type = "pdf";
                this.signinService.pdf = true;
                this.signinService.text = false;
                this.signinService.link = false;
                this.signinService.image = false;
                if (this.signinService.page == "tab1")
                    this.contentService.getContents(this.signinService.type);
                if (this.signinService.page == "tab2")
                    this.getClipsByType(this.signinService.type);
            }
        }
        if (i == 2) {
            this.signinService.showMediaWidgets = false;
            this.signinService.showTextWidgets = false;
            this.signinService.showConnectWidgets = true;
            if (this.signinService.type == "contact" || this.signinService.type == "appt" || this.signinService.type == "chat" || this.signinService.type == "todo") {
                if (this.signinService.page == "tab1")
                    this.contentService.getContents(this.signinService.type);
                if (this.signinService.page == "tab2")
                    this.getClipsByType(this.signinService.type);
            }
            else {
                this.signinService.type = "contact";
                this.signinService.contact = true;
                this.signinService.todo = false;
                this.signinService.chat = false;
                this.signinService.appt = false;
                if (this.signinService.page == "tab1")
                    this.contentService.getContents(this.signinService.type);
                if (this.signinService.page == "tab2")
                    this.getClipsByType(this.signinService.type);
            }
        }
        if (i == 3) {
            if (this.signinService.page == "tab1")
                this.contentService.getAllContents();
            if (this.signinService.page == "tab2")
                this.getClips();
            this.signinService.video = true;
            this.signinService.audio = false;
            this.signinService.record = false;
            this.signinService.ytube = false;
            this.signinService.text = false;
            this.signinService.pdf = false;
            this.signinService.image = false;
            this.signinService.link = false;
            this.signinService.chat = false;
            this.signinService.todo = false;
            this.signinService.appt = false;
            this.signinService.contact = false;
        }
    }
    validate() {
        if (this.title != undefined) {
            if (this.title.length < 4)
                this.message = this.messages.titleLenght;
        }
        else
            this.message = this.messages.titleRequired;
    }
    video() {
        this.navCtrl.navigateForward("video");
    }
    link() {
        this.navCtrl.navigateForward("link");
    }
    appt() {
        this.navCtrl.navigateForward("appt");
    }
    audio() {
        this.navCtrl.navigateForward("audio");
    }
    pdf() {
        this.navCtrl.navigateForward("pdf");
    }
    image() {
        this.navCtrl.navigateForward("image");
    }
    text() {
        this.navCtrl.navigateForward("text");
    }
    contact() {
        this.navCtrl.navigateForward("contact");
    }
    todo() {
        this.navCtrl.navigateForward("todo");
    }
    chat() {
        this.navCtrl.navigateForward("chat");
    }
    youTube() {
        if (this.signinService.logged)
            this.navCtrl.navigateForward("search-results-yt");
    }
    record() {
        this.signinService.page = "tab1";
        window.open(this.api.audio + this.signinService.user.login + "&title=" + this.signinService.title + "&platform=" + this.platforms, "_self");
    }
    showToast(message) {
        this.toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        }).then((toastData) => {
            toastData.present();
        });
    }
    getClips() {
        this.clipsService.getList().subscribe(response => {
            this.signinService.clipData = response;
            for (let clip of this.signinService.clipData) {
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
    getClipsByType(type) {
        this.clipsService.getClipsByType(type).subscribe(response => {
            this.signinService.clipData = response;
            for (let clip of this.signinService.clipData) {
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
    toggleVideo() {
        console.log("Video");
        if (this.signinService.video) {
            this.signinService.video = false;
            if (this.signinService.page == "tab1")
                this.contentService.getContents("video1");
            if (this.signinService.page == "tab2")
                this.getClipsByType("video1");
        }
        else {
            this.signinService.video = true;
            if (this.signinService.page == "create-content")
                this.video();
            if (this.signinService.page == "tab1")
                this.contentService.getContents("video");
            if (this.signinService.page == "tab2")
                this.getClipsByType("video");
            this.signinService.audio = false;
            this.signinService.record = false;
            this.signinService.ytube = false;
            this.signinService.type = "video";
        }
    }
    toggleYtube() {
        console.log("ytube");
        if (this.signinService.ytube) {
            this.signinService.ytube = false;
            if (this.signinService.page == "tab1")
                this.contentService.getContents("ytube1");
            if (this.signinService.page == "tab2")
                this.getClipsByType("ytube1");
        }
        else {
            this.signinService.video = false;
            this.signinService.audio = false;
            this.signinService.record = false;
            this.signinService.ytube = true;
            if (this.signinService.page == "create-content")
                this.youTube();
            if (this.signinService.page == "tab1")
                this.contentService.getContents("ytube");
            if (this.signinService.page == "tab2")
                this.getClipsByType("ytube");
            this.signinService.type = "ytube";
        }
    }
    toggleAudio() {
        console.log("Audio");
        if (this.signinService.audio) {
            this.signinService.audio = false;
            if (this.signinService.page == "tab1")
                this.contentService.getContents("audio1");
            if (this.signinService.page == "tab2")
                this.getClipsByType("audio1");
        }
        else {
            this.signinService.video = false;
            this.signinService.audio = true;
            if (this.signinService.page == "create-content")
                this.audio();
            if (this.signinService.page == "tab1")
                this.contentService.getContents("audio");
            if (this.signinService.page == "tab2")
                this.getClipsByType("audio");
            this.signinService.type = "audio";
            this.signinService.record = false;
            this.signinService.ytube = false;
        }
    }
    toggleRecord() {
        console.log("Record");
        if (this.signinService.record) {
            this.signinService.record = false;
            if (this.signinService.page == "tab1")
                this.contentService.getContents("record1");
            if (this.signinService.page == "tab2")
                this.getClipsByType("record1");
        }
        else {
            this.signinService.video = false;
            this.signinService.audio = false;
            this.signinService.record = true;
            if (this.signinService.page == "create-content")
                this.record();
            if (this.signinService.page == "tab1")
                this.contentService.getContents("record");
            if (this.signinService.page == "tab2")
                this.getClipsByType("record");
            this.signinService.type = "record";
            this.signinService.ytube = false;
        }
    }
    toggleLink() {
        console.log("Link");
        if (this.signinService.link) {
            this.signinService.link = false;
            if (this.signinService.page == "tab1")
                this.contentService.getContents("link1");
            if (this.signinService.page == "tab2")
                this.getClipsByType("link1");
        }
        else {
            this.signinService.link = true;
            if (this.signinService.page == "create-content")
                this.link();
            if (this.signinService.page == "tab1")
                this.contentService.getContents("link");
            if (this.signinService.page == "tab2")
                this.getClipsByType("link");
            this.signinService.type = "link";
            this.signinService.text = false;
            this.signinService.pdf = false;
            this.signinService.image = false;
        }
    }
    toggleText() {
        console.log("Text");
        if (this.signinService.text) {
            this.signinService.text = false;
            if (this.signinService.page == "tab1")
                this.contentService.getContents("text1");
            if (this.signinService.page == "tab2")
                this.getClipsByType("text1");
        }
        else {
            this.signinService.link = false;
            this.signinService.text = true;
            if (this.signinService.page == "create-content")
                this.text();
            if (this.signinService.page == "tab1")
                this.contentService.getContents("text");
            if (this.signinService.page == "tab2")
                this.getClipsByType("text");
            this.signinService.type = "text";
            this.signinService.pdf = false;
            this.signinService.image = false;
        }
    }
    togglePdf() {
        console.log("Pdf");
        if (this.signinService.pdf) {
            this.signinService.pdf = false;
            if (this.signinService.page == "tab1")
                this.contentService.getContents("pdf1");
            if (this.signinService.page == "tab2")
                this.getClipsByType("pdf1");
        }
        else {
            this.signinService.link = false;
            this.signinService.text = false;
            this.signinService.pdf = true;
            if (this.signinService.page == "create-content")
                this.pdf();
            if (this.signinService.page == "tab1")
                this.contentService.getContents("ytube");
            if (this.signinService.page == "tab2")
                this.getClipsByType("pdf");
            this.signinService.image = false;
            this.signinService.type = "pdf";
        }
    }
    toggleImage() {
        console.log("Image");
        if (this.signinService.image) {
            this.signinService.image = false;
            if (this.signinService.page == "tab1")
                this.contentService.getContents("image1");
            if (this.signinService.page == "tab2")
                this.getClipsByType("image1");
        }
        else {
            this.signinService.link = false;
            this.signinService.text = false;
            this.signinService.pdf = false;
            this.signinService.image = true;
            if (this.signinService.page == "create-content")
                this.image();
            if (this.signinService.page == "tab1")
                this.contentService.getContents("image");
            if (this.signinService.page == "tab2")
                this.getClipsByType("image");
            this.signinService.type = "image";
        }
    }
    toggleContact() {
        console.log("Contact");
        if (this.signinService.contact) {
            this.signinService.contact = false;
            if (this.signinService.page == "tab1")
                this.contentService.getContents("contact1");
            if (this.signinService.page == "tab2")
                this.getClipsByType("contact1");
        }
        else {
            this.signinService.appt = false;
            this.signinService.todo = false;
            this.signinService.chat = false;
            this.signinService.contact = true;
            if (this.signinService.page == "create-content")
                this.contact();
            if (this.signinService.page == "tab1")
                this.contentService.getContents("contact");
            if (this.signinService.page == "tab2")
                this.getClipsByType("contact");
            this.signinService.type = "contact";
        }
    }
    toggleTodo() {
        console.log("Todo");
        if (this.signinService.todo) {
            this.signinService.todo = false;
            if (this.signinService.page == "tab1")
                this.contentService.getContents("todo1");
            if (this.signinService.page == "tab2")
                this.getClipsByType("todo1");
        }
        else {
            this.signinService.appt = false;
            this.signinService.todo = true;
            this.signinService.chat = false;
            this.signinService.contact = false;
            if (this.signinService.page == "create-content")
                this.todo();
            if (this.signinService.page == "tab1")
                this.contentService.getContents("todo");
            if (this.signinService.page == "tab2")
                this.getClipsByType("todo");
            this.signinService.type = "todo";
        }
    }
    toggleAppt() {
        console.log("Appt");
        if (this.signinService.appt) {
            this.signinService.appt = false;
            if (this.signinService.page == "tab1")
                this.contentService.getContents("contact1");
            if (this.signinService.page == "tab2")
                this.getClipsByType("contact1");
        }
        else {
            this.signinService.appt = true;
            this.signinService.todo = false;
            this.signinService.chat = false;
            this.signinService.contact = false;
            if (this.signinService.page == "create-content")
                this.appt();
            if (this.signinService.page == "tab1")
                this.contentService.getContents("appt");
            if (this.signinService.page == "tab2")
                this.getClipsByType("appt");
            this.signinService.type = "appt";
        }
    }
    toggleChat() {
        console.log("Chat");
        if (this.signinService.chat) {
            this.signinService.chat = false;
            if (this.signinService.page == "tab1")
                this.contentService.getContents("chat1");
            if (this.signinService.page == "tab2")
                this.getClipsByType("chat1");
        }
        else {
            this.signinService.appt = false;
            this.signinService.todo = false;
            this.signinService.chat = true;
            this.signinService.contact = false;
            if (this.signinService.page == "create-content")
                this.chat();
            if (this.signinService.page == "tab1")
                this.contentService.getContents("chat");
            if (this.signinService.page == "tab2")
                this.getClipsByType("chat");
            this.signinService.type = "chat";
        }
    }
};
TopNavComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _api__WEBPACK_IMPORTED_MODULE_5__.Api },
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService },
    { type: _services_contents_service__WEBPACK_IMPORTED_MODULE_3__.ContentsService },
    { type: _services_clips_service__WEBPACK_IMPORTED_MODULE_4__.ClipsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _messages__WEBPACK_IMPORTED_MODULE_6__.Messages },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform }
];
TopNavComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-top-nav',
        template: _top_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_top_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TopNavComponent);



/***/ }),

/***/ 272:
/*!********************************!*\
  !*** ./src/app/models/clip.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clip": () => (/* binding */ Clip)
/* harmony export */ });
class Clip {
    constructor() {
        this.type = "";
        this.rating = 0;
        this.disabled = false;
        this.archine = 0;
        this.price = 0.0;
        this.preview = false;
        this.base64Bytes = "";
        this.fileType = "";
        this.base64String = "data:" + this.type + "/" + this.fileType + ";base64," + this.base64Bytes;
        this.active = "panel";
        this.playType = "playclip";
    }
}


/***/ }),

/***/ 1917:
/*!*************************************!*\
  !*** ./src/app/models/key-value.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValue": () => (/* binding */ KeyValue)
/* harmony export */ });
class KeyValue {
}


/***/ }),

/***/ 3667:
/*!************************************!*\
  !*** ./src/app/models/playclip.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Playclip": () => (/* binding */ Playclip)
/* harmony export */ });
class Playclip {
    constructor() {
        this.title = "";
        this.login = "";
        this.description = "";
        this.application = "";
        this.startDate = "";
        this.endDate = "";
        this.createdBy = "";
        this.createDate = "";
        this.thumbnail = "";
        this.likes = 0;
        this.archive = 0;
        this.price = 0.0;
        this.bought = 0;
    }
}


/***/ }),

/***/ 5336:
/*!*******************************************!*\
  !*** ./src/app/services/clips.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipsService": () => (/* binding */ ClipsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models_clip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/clip */ 272);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ 5111);
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.service */ 6496);








let ClipsService = class ClipsService {
    constructor(http, api, signInService) {
        this.http = http;
        this.api = api;
        this.signInService = signInService;
        this.clip = new _models_clip__WEBPACK_IMPORTED_MODULE_0__.Clip();
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        console.log(this.signInService.jwt.token);
    }
    add(content) {
        this.clip.login = this.signInService.user.login;
        this.clip.link = content.link;
        this.clip.type = content.type;
        this.clip.title = content.title;
        this.createClip(this.clip).subscribe((response) => {
        });
    }
    // Handle API errors
    // Get clips data
    getList() {
        return this.http
            .get(this.api.clip + "?user=" + this.signInService.user.login + "&application=playclips", this.signInService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    // Get clips data
    getClipsByType(type) {
        return this.http
            .get(this.api.clipType + "?user=" + this.signInService.user.login + "&type=" + type + "&application=playclips", this.signInService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    // Create a new item
    createClip(clip) {
        console.log("post");
        this.clip.jwt = this.signInService.jwt.token;
        console.log(this.signInService.jwt.token);
        return this.http
            .post(this.api.clip + "?application=playclips", JSON.stringify(clip), this.signInService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    updateClip(id, clip) {
        return this.http.put(this.api.clip + "/" + id + "?application=playclips", JSON.stringify(clip), this.signInService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    // Create a new item
    getClip(id) {
        return this.http.get(this.api.clip + "/" + id + "?jwt=" + this.signInService.jwt.token)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    deleteClip(id) {
        this.http.delete(this.api.clip + "/" + id, this.signInService.httpOptionsAuth)
            .subscribe(() => this.status = 'Delete successful');
    }
    emailClip(email, link) {
        return this.http.get(this.api.email + "?email=" + email + "&id=" + link + "&login=" + this.signInService.user.login)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    textClip(phone, link) {
        return this.http.get(this.api.text + "?phone=" + phone + "&id=" + link + "&login=" + this.signInService.user.login)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)('Something bad happened; please try again later.');
    }
    ;
    purge() {
        this.http.get(this.api.purgeclip, this.signInService.httpOptionsAuth)
            .subscribe(() => this.status = 'Purge successful');
    }
    archive(clip) {
        return this.http.post(this.api.archiveclip, JSON.stringify(clip), this.signInService.httpOptionsAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
};
ClipsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _api__WEBPACK_IMPORTED_MODULE_1__.Api },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService }
];
ClipsService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], ClipsService);



/***/ }),

/***/ 5699:
/*!**********************************************!*\
  !*** ./src/app/services/contents.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentsService": () => (/* binding */ ContentsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _models_key_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/key-value */ 1917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.service */ 6496);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ 5111);








let ContentsService = class ContentsService {
    constructor(http, signinService, api) {
        this.http = http;
        this.signinService = signinService;
        this.api = api;
        this.keyValue = new _models_key_value__WEBPACK_IMPORTED_MODULE_0__.KeyValue();
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                'x-frame-options': 'SAMEORIGIN',
                'x-content-type-options': 'nosniff'
            })
        };
    }
    // Handle API errors
    // Get clips data
    getObjectCntByLogin() {
        console.log(this.signinService.user.login);
        return this.http
            .get(this.api.objectCntLogin + this.signinService.user.login)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    getObjectCnt() {
        return this.http
            .get(this.api.objectCnt)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    getContentByType(type) {
        return this.http
            .get(this.api.contentType + "?login=" + this.signinService.user.login + "&type=" + type)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    getList() {
        return this.http
            .get(this.api.content + "?login=" + this.signinService.user.login)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    delete(id) {
        this.http.delete(this.api.content + id + "?id=" + id)
            .subscribe(() => this.status = 'Delete successful');
    }
    purge() {
        this.http.get(this.api.purge)
            .subscribe(() => this.status = 'Purge successful');
    }
    get(id) {
        return this.http.get(this.api.content + id + "?id=" + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    like(content) {
        return this.http.post(this.api.like, JSON.stringify(content), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    object(content) {
        return this.http.post(this.api.object, JSON.stringify(content), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    unlike(content) {
        return this.http.post(this.api.unlike, JSON.stringify(content), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    archive(content) {
        return this.http.post(this.api.archive, JSON.stringify(content), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    setCnclips(content) {
        return this.http.post(this.api.contentcount, JSON.stringify(content), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    // Create a new item
    publishContent(key, value) {
        this.keyValue.key = key;
        this.keyValue.value = JSON.stringify(value);
        return this.http.post(this.api.publish, JSON.stringify(this.keyValue), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    createContent(content) {
        return this.http
            .post(this.api.content, JSON.stringify(content), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    //track visit 
    trackContent(visit) {
        return this.http
            .post(this.api.visit, JSON.stringify(visit), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            this.signinService.message = 'An error occurred:', error.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
            this.signinService.message = `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
        }
        // return an observable with a user-facing error message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)('Something bad happened; please try again later.');
    }
    ;
    getContents(type) {
        this.getContentByType(type).subscribe(response => {
            this.contentsData = response;
            // this.contents = <Content[]>JSON.parse(this.contentsData);
            console.log(this.contentsData);
            for (let content of this.contentsData) {
                if (content.type == "audio")
                    content.showAudio = true;
                if (content.type == "image")
                    content.showImage = true;
                if (content.type == "video")
                    content.showVideo = true;
                if (content.type == "ytube")
                    content.showYTube = true;
                if (content.type == "text")
                    content.showText = true;
                if (content.type == "pdf")
                    content.showPdf = true;
                if (content.type == "link")
                    content.showLink = true;
                if (content.type == "appt")
                    content.showAppt = true;
                if (content.type == "record")
                    content.showRecord = true;
                if (content.likeCnt > 0)
                    content.like = true;
                if (content.unlikeCnt > 0)
                    content.unlike = true;
            }
        });
    }
    getAllContents() {
        this.getList().subscribe(response => {
            this.contentsData = response;
            for (let content of this.contentsData) {
                if (content.type == "audio")
                    content.showAudio = true;
                if (content.type == "image")
                    content.showImage = true;
                if (content.type == "record")
                    content.showRecord = true;
                if (content.type == "video")
                    content.showVideo = true;
                if (content.type == "ytube")
                    content.showYTube = true;
                if (content.type == "text")
                    content.showText = true;
                if (content.type == "pdf")
                    content.showPdf = true;
                if (content.type == "link")
                    content.showLink = true;
                if (content.type == "appt")
                    content.showAppt = true;
                if (content.likeCnt > 0)
                    content.like = true;
                if (content.unlikeCnt > 0)
                    content.unlike = true;
            }
        });
    }
};
ContentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_1__.SigninService },
    { type: _api__WEBPACK_IMPORTED_MODULE_2__.Api }
];
ContentsService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], ContentsService);



/***/ }),

/***/ 5800:
/*!***********************************************!*\
  !*** ./src/app/services/playclips.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayclipsService": () => (/* binding */ PlayclipsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models_playclip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/playclip */ 3667);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ 5111);
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.service */ 6496);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);








let PlayclipsService = class PlayclipsService {
    constructor(http, api, signInService) {
        this.http = http;
        this.api = api;
        this.signInService = signInService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        this.playclip = new _models_playclip__WEBPACK_IMPORTED_MODULE_0__.Playclip();
    }
    createPlayclips(playclip) {
        this.delete(playclip.id);
        return this.http.post(this.api.playclips + "?application=playclips", JSON.stringify(playclip), this.signInService.httpOptionsAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    getPlayclips() {
        return this.http
            .get(this.api.playclips, this.signInService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    getPlayclip(id) {
        return this.http
            .get(this.api.playclips + "/" + id, this.signInService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    delete(id) {
        this.http.delete(this.api.playclips + "/" + id, this.signInService.httpOptionsAuth)
            .subscribe(() => this.status = 'Delete successful');
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)('Something bad happened; please try again later.');
    }
    ;
    archive(playclip) {
        return this.http.post(this.api.archiveplayclip, JSON.stringify(playclip), this.signInService.httpOptionsAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    bought(playclip) {
        return this.http.post(this.api.boughtplayclip, JSON.stringify(playclip), this.signInService.httpOptionsAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    }
    purge() {
        this.http.get(this.api.purgeplayclip, this.signInService.httpOptionsAuth)
            .subscribe(() => this.status = 'Purge successful');
    }
};
PlayclipsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _api__WEBPACK_IMPORTED_MODULE_1__.Api },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService }
];
PlayclipsService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], PlayclipsService);



/***/ }),

/***/ 6994:
/*!*******************************************!*\
  !*** ./src/app/services/share.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareService": () => (/* binding */ ShareService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ 5111);
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.service */ 6496);







let ShareService = class ShareService {
    constructor(http, signinService, api) {
        this.http = http;
        this.signinService = signinService;
        this.api = api;
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    sms() {
        return this.http.get(this.api.sms)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    mail(id) {
        return this.http.get(this.api.mail + "&id=" + id, this.signinService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    whatsapp(id) {
        return this.http.get(this.api.wa + id, this.signinService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    text(id) {
        return this.http.get(this.api.text, this.signinService.httpOptionsAuth)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            this.signinService.message = 'An error occurred:', error.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
            this.signinService.message = `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
        }
        // return an observable with a user-facing error message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)('Something bad happened; please try again later.');
    }
    ;
};
ShareService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_1__.SigninService },
    { type: _api__WEBPACK_IMPORTED_MODULE_0__.Api }
];
ShareService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], ShareService);



/***/ }),

/***/ 5983:
/*!********************************************************************!*\
  !*** ./src/app/components/object/object.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvYmplY3QuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9511:
/*!**************************************************************************!*\
  !*** ./src/app/components/playclips/playclips.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5Y2xpcHMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 405:
/*!****************************************************************!*\
  !*** ./src/app/components/tile/tile.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Muli&display=swap\");\n:root {\n  --primary-color: #22254b;\n  --secondary-color: #373b69;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  background-color: var(--primary-color);\n  font-family: \"Poppins\", sans-serif;\n  margin: 0;\n}\nheader {\n  padding: 1rem;\n  display: flex;\n  justify-content: flex-end;\n  background-color: var(--secondary-color);\n}\n.search {\n  background-color: transparent;\n  border: 2px solid var(--primary-color);\n  border-radius: 50px;\n  font-family: inherit;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  color: #fff;\n}\n.search::placeholder {\n  color: #7378c5;\n}\n.search:focus {\n  outline: none;\n  background-color: var(--primary-color);\n}\nmain {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.movie {\n  width: 300px;\n  margin: 1rem;\n  background-color: var(--secondary-color);\n  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);\n  position: relative;\n  overflow: hidden;\n  border-radius: 3px;\n}\n.movie img {\n  width: 100%;\n}\n.movie-info {\n  color: #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.2rem;\n  padding: 0.5rem 1rem 1rem;\n  letter-spacing: 0.5px;\n}\n.movie-info h3 {\n  margin-top: 0;\n}\n.movie-info span {\n  background-color: var(--primary-color);\n  padding: 0.25rem 0.5rem;\n  border-radius: 3px;\n  font-weight: bold;\n}\n.movie-info span.green {\n  color: lightgreen;\n}\n.movie-info span.orange {\n  color: orange;\n}\n.movie-info span.red {\n  color: red;\n}\n.overview {\n  background-color: #000;\n  padding: 2rem;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  max-height: 100%;\n  transform: translateY(101%);\n  overflow-y: auto;\n  transition: transform 0.3s ease-in;\n}\n.movie:hover .overview {\n  transform: translateY(0);\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Muli\", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n}\n.container {\n  display: flex;\n  width: 90vw;\n}\n.panel {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 80vh;\n  border-radius: 50px;\n  color: #fff;\n  cursor: pointer;\n  flex: 0.5;\n  margin: 10px;\n  position: relative;\n  -webkit-transition: all 700ms ease-in;\n}\n.panel h3 {\n  font-size: 24px;\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  margin: 0;\n  opacity: 0;\n}\n.panel.active {\n  flex: 5;\n}\n.panel.active h3 {\n  opacity: 1;\n  transition: opacity 0.3s ease-in 0.4s;\n}\n@media (max-width: 480px) {\n  .container {\n    width: 100vw;\n  }\n  .panel:nth-of-type(4),\n.panel:nth-of-type(5) {\n    display: none;\n  }\n}\n.slider-container {\n  position: relative;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n}\n.left-slide {\n  height: 100%;\n  width: 35%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.5s ease-in-out;\n}\n.left-slide > div {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.left-slide h1 {\n  font-size: 40px;\n  margin-bottom: 10px;\n  margin-top: -30px;\n}\n.right-slide {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 35%;\n  width: 65%;\n  transition: transform 0.5s ease-in-out;\n}\n.right-slide > div {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  height: 100%;\n  width: 100%;\n}\n.slider-container .action-buttons button {\n  position: absolute;\n  left: 35%;\n  top: 50%;\n  z-index: 100;\n}\n.slider-container .action-buttons .down-button {\n  transform: translateX(-100%);\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.slider-container .action-buttons .up-button {\n  transform: translateY(-100%);\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFpSEEsd0VBQUE7QUEvR1I7RUFDRSx3QkFBQTtFQUNBLDBCQUFBO0FBQ0Y7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7QUFFQTtFQUNFLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtBQUNGO0FBRUE7RUFDRSw2QkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFDRjtBQUVBO0VBQ0UsY0FBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0FBQ0Y7QUFFQTtFQUNFLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7QUFDRjtBQUVBO0VBQ0UsVUFBQTtBQUNGO0FBRUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7QUFJQTtFQUNFLHNCQUFBO0FBREY7QUFJQTtFQUNFLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFERjtBQUlBO0VBQ0UsT0FBQTtBQURGO0FBSUE7RUFDRSxVQUFBO0VBQ0EscUNBQUE7QUFERjtBQUlBO0VBQ0U7SUFDRSxZQUFBO0VBREY7RUFJQTs7SUFFRSxhQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSEY7QUFNQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNDQUFBO0FBSEY7QUFNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFIRjtBQU1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7QUFIRjtBQU1BO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFIRjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFIRjtBQU1BO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBSEY7QUFNQTtFQUNFLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQUhGIiwiZmlsZSI6InRpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzQwMCZkaXNwbGF5PXN3YXAnKTtcblxuOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICMyMjI1NGI7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMzczYjY5O1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG59XG5cbmhlYWRlciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5zZWFyY2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlYXJjaDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzczNzhjNTtcbn1cblxuLnNlYXJjaDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vdmllIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ubW92aWUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb3ZpZS1pbmZvIHtcbiAgY29sb3I6ICNlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOjAuMnJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4ubW92aWUtaW5mbyBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5tb3ZpZS1pbmZvIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tb3ZpZS1pbmZvIHNwYW4uZ3JlZW4ge1xuICBjb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLm1vdmllLWluZm8gc3Bhbi5vcmFuZ2Uge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ubW92aWUtaW5mbyBzcGFuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5vdmVydmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMSUpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluO1xufVxuXG4ubW92aWU6aG92ZXIgLm92ZXJ2aWV3IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU11bGkmZGlzcGxheT1zd2FwJyk7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdNdWxpJywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MHZ3O1xufVxuXG4ucGFuZWwge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogODB2aDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMC41O1xuICBtYXJnaW46IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNzAwbXMgZWFzZS1pbjtcbn1cblxuLnBhbmVsIGgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucGFuZWwuYWN0aXZlIHtcbiAgZmxleDogNTtcbn1cblxuLnBhbmVsLmFjdGl2ZSBoMyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluIDAuNHM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuICAucGFuZWw6bnRoLW9mLXR5cGUoNCksXG4gIC5wYW5lbDpudGgtb2YtdHlwZSg1KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uc2xpZGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubGVmdC1zbGlkZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDM1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ubGVmdC1zbGlkZSA+IGRpdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxlZnQtc2xpZGUgaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4ucmlnaHQtc2xpZGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAzNSU7XG4gIHdpZHRoOiA2NSU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ucmlnaHQtc2xpZGUgPiBkaXYge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2xpZGVyLWNvbnRhaW5lciAuYWN0aW9uLWJ1dHRvbnMgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzNSU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIC5hY3Rpb24tYnV0dG9ucyAuZG93bi1idXR0b24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cblxuLnNsaWRlci1jb250YWluZXIgLmFjdGlvbi1idXR0b25zIC51cC1idXR0b24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG5cbiJdfQ== */";

/***/ }),

/***/ 8532:
/*!**********************************************************************!*\
  !*** ./src/app/components/top-nav/top-nav.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\n.pagination {\n  --bs-pagination-padding-x: 0.75rem;\n  --bs-pagination-padding-y: 0.375rem;\n  --bs-pagination-font-size: 1rem;\n  --bs-pagination-color: #fff;\n  --bs-pagination-bg: var(--bs-red);\n  --bs-pagination-border-width: 1px;\n  --bs-pagination-border-color: #dee2e6;\n  --bs-pagination-border-radius: 0.375rem;\n  --bs-pagination-hover-color: var(--bs-link-hover-color);\n  --bs-pagination-hover-bg: #e9ecef;\n  --bs-pagination-hover-border-color: #dee2e6;\n  --bs-pagination-focus-color: var(--bs-link-hover-color);\n  --bs-pagination-focus-bg: #e9ecef;\n  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  --bs-pagination-active-color: #fff;\n  --bs-pagination-active-bg: #0d6efd;\n  --bs-pagination-active-border-color: #0d6efd;\n  --bs-pagination-disabled-color: #6c757d;\n  --bs-pagination-disabled-bg: #fff;\n  --bs-pagination-disabled-border-color: #dee2e6;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n}\n.toggle-container {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  width: 200px;\n}\n.toggle {\n  visibility: hidden;\n}\n.label {\n  position: relative;\n  background-color: #d0d0d0;\n  border-radius: 50px;\n  cursor: pointer;\n  display: inline-block;\n  margin: 0 15px 0;\n  width: 80px;\n  height: 40px;\n}\n.toggle:checked + .label {\n  background-color: #8e44ad;\n}\n.ball {\n  background: #fff;\n  height: 34px;\n  width: 34px;\n  border-radius: 50%;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  align-items: center;\n  justify-content: center;\n  animation: slideOff 0.3s linear forwards;\n}\n.toggle:checked + .label .ball {\n  animation: slideOn 0.3s linear forwards;\n}\n@keyframes slideOn {\n  0% {\n    transform: translateX(0) scale(1);\n  }\n  50% {\n    transform: translateX(20px) scale(1.2);\n  }\n  100% {\n    transform: translateX(40px) scale(1);\n  }\n}\n@keyframes slideOff {\n  0% {\n    transform: translateX(40px) scale(1);\n  }\n  50% {\n    transform: translateX(20px) scale(1.2);\n  }\n  100% {\n    transform: translateX(0) scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJRLHdGQUFBO0FBekJSO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHVEQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQ0FBQTtFQUNBLHVEQUFBO0VBQ0EsaUNBQUE7RUFDQSx3RUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUVBO0VBQ0Usc0JBQUE7QUFDRjtBQUVBO0VBQ0UsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7QUFDRjtBQUVBO0VBQ0UsdUNBQUE7QUFDRjtBQUVBO0VBQ0U7SUFDRSxpQ0FBQTtFQUNGO0VBQ0E7SUFDRSxzQ0FBQTtFQUNGO0VBQ0E7SUFDRSxvQ0FBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0Usb0NBQUE7RUFBRjtFQUVBO0lBQ0Usc0NBQUE7RUFBRjtFQUVBO0lBQ0UsaUNBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InRvcC1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbiB7XG4gIC0tYnMtcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuNzVyZW07XG4gIC0tYnMtcGFnaW5hdGlvbi1wYWRkaW5nLXk6IDAuMzc1cmVtO1xuICAtLWJzLXBhZ2luYXRpb24tZm9udC1zaXplOiAxcmVtO1xuICAtLWJzLXBhZ2luYXRpb24tY29sb3I6ICNmZmY7XG4gIC0tYnMtcGFnaW5hdGlvbi1iZzogIHZhcigtLWJzLXJlZCk7IFxuICAtLWJzLXBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYnMtcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIC0tYnMtcGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgLS1icy1wYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiB2YXIoLS1icy1saW5rLWhvdmVyLWNvbG9yKTtcbiAgLS1icy1wYWdpbmF0aW9uLWhvdmVyLWJnOiAjZTllY2VmO1xuICAtLWJzLXBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICAtLWJzLXBhZ2luYXRpb24tZm9jdXMtY29sb3I6IHZhcigtLWJzLWxpbmstaG92ZXItY29sb3IpO1xuICAtLWJzLXBhZ2luYXRpb24tZm9jdXMtYmc6ICNlOWVjZWY7XG4gIC0tYnMtcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIHJnYmEoMTMsIDExMCwgMjUzLCAwLjI1KTtcbiAgLS1icy1wYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogI2ZmZjtcbiAgLS1icy1wYWdpbmF0aW9uLWFjdGl2ZS1iZzogIzBkNmVmZDtcbiAgLS1icy1wYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICMwZDZlZmQ7XG4gIC0tYnMtcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogIzZjNzU3ZDtcbiAgLS1icy1wYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAjZmZmO1xuICAtLWJzLXBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbn1cblxuLnRvZ2dsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4udG9nZ2xlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGQwZDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTVweCAwO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udG9nZ2xlOmNoZWNrZWQgKyAubGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU0NGFkO1xufVxuXG4uYmFsbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogM3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBzbGlkZU9mZiAwLjNzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLnRvZ2dsZTpjaGVja2VkICsgLmxhYmVsIC5iYWxsIHtcbiAgYW5pbWF0aW9uOiBzbGlkZU9uIDAuM3MgbGluZWFyIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlT24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpIHNjYWxlKDEuMik7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwcHgpIHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVPZmYge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwcHgpIHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpIHNjYWxlKDEuMik7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 5797:
/*!********************************************************************!*\
  !*** ./src/app/components/object/object.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = " <ion-item *ngIf=\"item.login != 'assets/img/demo.png' && item.login != 'assets/img/admin.png'\">\n <ion-avatar slot=\"start\"> \n  <ion-img [src]=\"item.login\"></ion-img>\n </ion-avatar>\n <div *ngIf=\"item.object >= 5\">\n  <ion-icon name=\"close-circle-outline\" color=\"danger\" ></ion-icon>\n  <ion-label color=\"danger\"> {{ item.object }} </ion-label>\n </div>\n <div *ngIf=\"item.object < 5\">\n  <ion-icon name=\"close-circle-outline\" color=\"red\" ></ion-icon>\n  <ion-label> {{ item.object }} </ion-label>\n </div>\n  <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"block(item.login)\" *ngIf=\"item.object >= 2\" >\n     Block\n  </ion-button>\n</ion-item>\n";

/***/ }),

/***/ 916:
/*!**************************************************************************!*\
  !*** ./src/app/components/playclips/playclips.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-item *ngIf=\"playclip\" [routerLink]=\"'/playclip/' + playclip.id\" [detail]=\"false\">\n  <div slot=\"start\" [class]=\"!playclip.read ? 'dot dot-unread' : 'dot'\"></div>\n   <ion-avatar slot=\"start\">\n     <img [src]=\"playclip.thumbnail\">\n   </ion-avatar>\n   <ion-label class=\"ion-text-wrap\">\n    <h2>\n      {{ playclip.title }}\n    </h2>\n    <h2>\n      {{ playclip.description }}\n    </h2>\n    <h2>\n      Composer : {{ playclip.createdBy }}\n    </h2>\n    <h2>\n      Price : ${{ playclip.price }}\n    </h2>\n  <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"share(playclip.id)\" >\n    <ion-icon name=\"push-outline\" aria-label=\"Share\"></ion-icon>\n  </ion-button>\n  <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"mailPlayclip(playclip.id)\" >\n    <ion-icon name=\"mail-unread-outline\" aria-label=\"Email\"></ion-icon>\n  </ion-button>\n  <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"waPlayclip(playclip.id)\" >\n    <ion-icon name=\"logo-wordpress\" aria-label=\"WhatsApp\"></ion-icon>\n  </ion-button>\n  </ion-label>\n  <ion-item *ngIf=\"playclip.bought == 1\">\n  <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"play(playclip.id)\" >\n    <ion-icon name=\"caret-forward-circle-outline\" aria-label=\"Play\"></ion-icon>\n  </ion-button>\n   </ion-item>\n  <ion-item *ngIf=\"playclip.bought == 0\">\n  <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"buy(playclip.id)\" >\n    <ion-icon name=\"logo-usd\" aria-label=\"Buy\"></ion-icon>\n  </ion-button>\n  <ion-button  color=\"danger\" shape=\"round\" name=\"document\" (click)=\"preview(playclip.id)\" >\n    <ion-icon name=\"play-forward-circle-outline\" aria-label=\"Preview\"></ion-icon>\n  </ion-button>\n   </ion-item>\n  <ion-avatar slot=\"start\" *ngIf=\"playclip.archive == 1\" >\n        <ion-icon name=\"archive\"></ion-icon>\n  </ion-avatar>\n</ion-item>\n";

/***/ }),

/***/ 135:
/*!****************************************************************!*\
  !*** ./src/app/components/tile/tile.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"movie\" *ngIf=\"item.playType == 'clip'\">\n    <img [src]=\"item.thumbnail\" />\n    <div class=\"movie-info\">\n    <ion-label>\n     <div class=\"overview\">\n        <h3>{{item.title}}</h3>\n     </div>\n    </ion-label>\n     <a  (click)=\"review()\">\n          <ion-icon name=\"create\"></ion-icon>\n     </a>\n    </div>\n</div>\n<div class=\"movie\" *ngIf=\"item.playType == 'playclip'\">\n    <a  (click)=\"viewPlayclipClip()\">\n    <div [ngClass]=\"item.active\" style=\"background-image: url(' {{ item.thumbnail }} '); flex: 0.8\"></div>\n    <div class=\"movie-info\">\n    <ion-label>\n     <div class=\"overview\">\n        <h3>{{item.title}}</h3>\n        <h4>{{item.description}}</h4>\n     </div>\n    </ion-label>\n    </div>\n    </a>\n</div>\n<ion-item *ngIf=\"item.playType == 'clipvl'\">\n<div  [ngClass]=\"item.active\" style=\"background-color: #FD3555\">\n<h1> {{ item.title}} </h1>\n<p> {{ item.description }}</p>\n<p> {{ item.srating }}</p>\n<a  (click)=\"addToPc(item)\">\n      <ion-icon name=\"logo-buffer\"></ion-icon>\n</a>\n</div>\n <div *ngIf=\"item.type == 'video'\">\n   <p><a [href]=\"item.link\" target=\"_blank\"> <img [src]=\"item.thumbnail\" /> </a></p>\n </div>\n <div *ngIf=\"item.type == 'ytube'\">\n   <p><a [href]=\"item.link\" target=\"_blank\"> <img [src]=\"item.thumbnail\" /> </a></p>\n </div>\n <div *ngIf=\"item.type == 'pdf'\">\n   <iframe src=\"assets/iframe.html\" name=\"iframe_a1\" height=\"175px\" width=\"225px\" ></iframe>\n  <p><a [href]=\"this.dom.bypassSecurityTrustResourceUrl(item.base64String)\" target=\"iframe_a1\">Load</a></p>\n </div>\n <div *ngIf=\"item.type == 'image'\">\n  <ion-img [src]=\"item.base64String\"  height=\"175px\" width=\"225px\" ></ion-img>\n </div>\n <div *ngIf=\"item.type == 'text'\">\n    <ion-item text-wrap>\n          {{item.description}}\n    </ion-item>\n </div>\n <div *ngIf=\"item.type == 'appt'\">\n         <ion-item text-wrap>\n          {{item.description}}\n         </ion-item>\n         <ion-item text-wrap>\n          {{item.link}}\n         </ion-item>\n   <ion-item>\n    <ion-label>Start</ion-label>\n    <ion-datetime displayFormat=\"DD-MMM-YY HH:mm\" (ionChange)=\"toggle()\" [(ngModel)]=\"item.startDate\" min=\"{{ item.startDate }}\" max=\"{{ item.startDate }}\" > </ion-datetime>\n   </ion-item>\n   <ion-item>\n    <ion-label>End</ion-label>\n    <ion-datetime displayFormat=\"DD-MMM-YY HH:mm\" (ionChange)=\"toggle()\" [(ngModel)]=\"item.endDate\"  min=\"{{ item.endDate }}\" max=\"{{ item.endDate }}\" > </ion-datetime>\n   </ion-item>\n  </div>\n <div *ngIf=\"item.type == 'contact'\">\n        <ion-item>\n          {{item.email}}\n        </ion-item>\n        <ion-item>\n          {{item.phone}}\n        </ion-item>\n </div>\n<div *ngIf=\"item.type == 'audio'\">\n    <video  controls poster=\"{{ item.thumbnail }}\" height=\"175px\" width=\"225px\">\n     <source src=\"{{ item.link }}\" type=\"video/mp4\" >\n     Your browser does not support the <code>audio</code> element.\n    </video>\n</div>\n<div *ngIf=\"item.type == 'record'\">\n    <video  controls poster=\"{{ item.thumbnail }}\" height=\"175px\" width=\"225px\">\n     <source src=\"{{ item.link }}\" type=\"video/mp4\" >\n     Your browser does not support the <code>audio</code> element.\n    </video>\n</div>\n</ion-item>\n";

/***/ }),

/***/ 9323:
/*!**********************************************************************!*\
  !*** ./src/app/components/top-nav/top-nav.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-row class=\"ion-justify-content-center\" color=\"info\">\n<div *ngIf=\"signinService.user.role == 'creator'\" color=\"info\">\n  <ul class=\"pagination\">\n   <li\n      class=\"page-item\"\n      [ngClass]=\"{ active: i === signinService.selectedTab }\"\n      *ngFor=\"let item of tabs_item; let i = index\"\n    >\n    <a (click)=\"itemClick(i)\" class=\"page-link\">{{ item.text  }}</a>\n    </li>\n  </ul>\n</div>\n</ion-row>\n<ion-item *ngIf=\"signinService.showMediaWidgets && signinService.selectedTab==0\">\n       <div slot=\"start\">\n          <ion-icon name=\"videocam-outline\"></ion-icon>\n          <div *ngIf=\"signinService.video == true\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tvideo\" class=\"toggle\"  (click)=\"toggleVideo()\" checked />\n           <label for=\"tvideo\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Video </span>\n          </div>\n          <div *ngIf=\"signinService.video == false\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tvideo\" class=\"toggle\" (click)=\"toggleVideo()\" />\n           <label for=\"tvideo\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Video </span>\n          </div>\n          <ion-icon name=\"logo-youtube\"></ion-icon>\n          <div *ngIf=\"signinService.ytube == true\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tytube\" class=\"toggle\"  (click)=\"toggleYtube()\" checked />\n           <label for=\"tytube\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> YTube </span>\n          </div>\n          <div *ngIf=\"signinService.ytube == false\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tytube\" class=\"toggle\" (click)=\"toggleYtube()\" />\n           <label for=\"tytube\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> YTube </span>\n          </div>\n       </div>\n        <div slot=\"end\">\n          <ion-icon name=\"recording-outline\"></ion-icon>\n          <div *ngIf=\"signinService.record == true\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"trecord\" class=\"toggle\"  (click)=\"toggleYtube()\" checked />\n           <label for=\"trecord\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Record </span>\n          </div>\n          <div *ngIf=\"signinService.record == false\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"trecord\" class=\"toggle\" (click)=\"toggleRecord()\" />\n           <label for=\"trecord\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Record </span>\n          </div>\n          <ion-icon name=\"volume-high-outline\"></ion-icon>\n          <div *ngIf=\"signinService.audio == true\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"taudio\" class=\"toggle\"  (click)=\"toggleAudio()\" checked />\n           <label for=\"taudio\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Audio </span>\n          </div>\n          <div *ngIf=\"signinService.audio == false\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"taudio\" class=\"toggle\" (click)=\"toggleAudio()\" />\n           <label for=\"taudio\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Audio </span>\n          </div>\n        </div>\n    </ion-item>\n    <ion-item *ngIf=\"signinService.showTextWidgets && signinService.selectedTab==1\">\n        <div slot=\"start\">\n          <ion-icon name=\"newspaper-outline\"></ion-icon>\n          <div *ngIf=\"signinService.pdf == true\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tpdf\" class=\"toggle\"  (click)=\"togglePdf()\" checked />\n           <label for=\"tpdf\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Pdf </span>\n          </div>\n          <div *ngIf=\"signinService.pdf == false\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tpdf\" class=\"toggle\" (click)=\"togglePdf()\" />\n           <label for=\"tpdf\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Pdf </span>\n          </div>\n          <ion-icon name=\"reader-outline\"></ion-icon>\n          <div *ngIf=\"signinService.text == true\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"ttext\" class=\"toggle\"  (click)=\"toggleText()\" checked />\n           <label for=\"ttext\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Text </span>\n          </div>\n          <div *ngIf=\"signinService.text == false\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"ttext\" class=\"toggle\" (click)=\"toggleText()\" />\n           <label for=\"ttext\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Text </span>\n          </div>\n        </div>\n        <div slot=\"end\">\n          <ion-icon name=\"link-outline\"></ion-icon>\n          <div *ngIf=\"signinService.link == true\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tlink\" class=\"toggle\"  (click)=\"toggleLink()\" checked />\n           <label for=\"tlink\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Link </span>\n          </div>\n          <div *ngIf=\"signinService.link == false\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tlink\" class=\"toggle\" (click)=\"toggleLink()\" />\n           <label for=\"tlink\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Link </span>\n          </div>\n          <ion-icon name=\"camera-outline\"></ion-icon>\n          <div *ngIf=\"signinService.image == true\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"timage\" class=\"toggle\"  (click)=\"toggleImage()\" checked />\n           <label for=\"timage\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Image </span>\n          </div>\n          <div *ngIf=\"signinService.image == false\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"timage\" class=\"toggle\" (click)=\"toggleImage()\" />\n           <label for=\"timage\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Image </span>\n          </div>\n         </div>\n    </ion-item>\n    <ion-item *ngIf=\"signinService.showConnectWidgets && signinService.selectedTab==2\">\n        <div slot=\"start\">\n          <ion-icon name=\"people-circle-outline\"></ion-icon>\n          <div *ngIf=\"signinService.contact == true\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tcontact\" class=\"toggle\"  (click)=\"toggleContact()\" checked />\n           <label for=\"tcontact\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Contact </span>\n          </div>\n          <div *ngIf=\"signinService.contact == false\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tcontact\" class=\"toggle\" (click)=\"toggleContact()\" />\n           <label for=\"tcontact\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Contact </span>\n          </div>\n          <ion-icon name=\"calendar\"></ion-icon>\n          <div *ngIf=\"signinService.appt == true\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tappt\" class=\"toggle\"  (click)=\"toggleAppt()\" checked />\n           <label for=\"tappt\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Appointment </span>\n          </div>\n          <div *ngIf=\"signinService.appt == false\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tappt\" class=\"toggle\" (click)=\"toggleAppt()\" />\n           <label for=\"tappt\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Appointment </span>\n          </div>\n        </div>\n        <div slot=\"end\">\n          <ion-icon name=\"checkmark-outline\"></ion-icon>\n          <div *ngIf=\"signinService.todo == true\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"ttodo\" class=\"toggle\"  (click)=\"toggleTodo()\" checked />\n           <label for=\"ttodo\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Todo </span>\n          </div>\n          <div *ngIf=\"signinService.todo == false\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"ttodo\" class=\"toggle\" (click)=\"toggleTodo()\" />\n           <label for=\"ttodo\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Todo </span>\n          </div>\n          <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n          <div *ngIf=\"signinService.chat == true\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tchat\" class=\"toggle\"  (click)=\"toggleChat()\" checked />\n           <label for=\"tchat\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n\t  <span> Chat </span>\n          </div>\n          <div *ngIf=\"signinService.chat == false\" class=\"toggle-container\">\n           <input type=\"checkbox\" id=\"tchat\" class=\"toggle\" (click)=\"toggleChat()\" />\n           <label for=\"tchat\" class=\"label\">\n             <div class=\"ball\"></div>\n           </label>\n           <span> Chat </span>\n          </div>\n         </div>\n    </ion-item>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_shared-components_shared-components_module_ts.js.map