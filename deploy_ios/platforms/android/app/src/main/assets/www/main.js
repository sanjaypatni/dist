(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 5111:
/*!************************!*\
  !*** ./src/app/api.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": () => (/* binding */ Api)
/* harmony export */ });
class Api {
    constructor() {
        this.protocol = "https";
        this.server = "core4ed.com";
        this.kafka = "core4ed.com:5014";
        this.publish = this.protocol + "://" + this.kafka + "/event/publish";
        this.visit = this.protocol + "://" + this.server + "/api/visit";
        this.text = "http" + "://" + this.server + ":5011" + "/text";
        this.email = "http" + "://" + this.server + ":5011" + "/email";
        this.upload = this.protocol + "://" + this.server + "/upload/s3/upload";
        this.uploadv = this.protocol + "://" + this.server + "/upload/s3/video/upload";
        this.uploadCrypt = this.protocol + "://" + this.server + "/upload/s3/uploadCrypt";
        this.uploadBytes = this.protocol + "://" + this.server + "/upload/s3/uploadBytes";
        this.download = this.protocol + "://" + this.server + "/upload/s3/download";
        this.audio = "http://" + this.server + "/content/audio.html?login=";
        this.auth = this.protocol + "://" + this.server + "/api/authenticate";
        this.at = this.protocol + "://" + this.server + "/api/accesstoken?client_id=demo&client_secret=demo&login=";
        this.userCreate = this.protocol + "://" + this.server + "/api/register";
        this.userDetailsCreate = this.protocol + "://" + this.server + "/api/userdetails";
        this.userDelete = this.protocol + "://" + this.server + "/api/user";
        this.user = this.protocol + "://" + this.server + "/api/user";
        this.userDetailsDelete = this.protocol + "://" + this.server + "/api/userdetails/";
        this.userGet = this.protocol + "://" + this.server + "/api/user/get";
        this.clip = this.protocol + "://" + this.server + "/api/clip";
        this.clipType = this.protocol + "://" + this.server + "/api/clip/type";
        this.content = this.protocol + "://" + this.server + "/content/content/";
        this.contentType = this.protocol + "://" + this.server + "/content/content/type";
        this.contentcount = this.protocol + "://" + this.server + "/content/contentcount/";
        this.like = this.protocol + "://" + this.server + "/content/like/";
        this.object = this.protocol + "://" + this.server + "/content/object/";
        this.archive = this.protocol + "://" + this.server + "/content/archive/";
        this.archiveplayclip = this.protocol + "://" + this.server + "/api/archiveplayclip";
        this.boughtplayclip = this.protocol + "://" + this.server + "/api/boughtplayclip";
        this.archiveclip = this.protocol + "://" + this.server + "/api/archiveclip";
        this.purge = this.protocol + "://" + this.server + "/content/purge";
        this.purgeclip = this.protocol + "://" + this.server + "/api/purgeclip";
        this.purgeplayclip = this.protocol + "://" + this.server + "/api/purgeplayclip";
        this.unlike = this.protocol + "://" + this.server + "/content/unlike/";
        this.subscription = this.protocol + "://" + this.server + "/content/subscription";
        this.subscription_uuid = this.protocol + "://" + this.server + "/content/subscription/uuid";
        this.playclips = this.protocol + "://" + this.server + "/api/playclip";
        this.youtube = "https://www.googleapis.com/youtube/v3/search?short&part=snippet&maxResults=50&type=video&videoDuration=short&key=AIzaSyDjsc4_LlCVoFVGUTar5T4o0zdS4zrS6Uk&q=";
        this.chat = "http://playclips-uat.com/message";
        this.st = this.protocol + "://" + this.server + "/api/stripetoken";
        this.wa = this.protocol + "://" + this.server + "/api/whatsapp?id=";
        this.charge = this.protocol + "://" + this.server + "/api/charge";
        this.mail = this.protocol + "://" + this.server + "/api/email?email=sanjaypatni@yahoo.com";
        this.sms = "http://localhost:8080/sms";
        this.objectCnt = this.protocol + "://" + this.server + "/content/objectCnt";
        this.objectCntLogin = this.protocol + "://" + this.server + "/content/objectCnt/login?login=";
    }
}


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
    },
    {
        path: 'sign-in',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sign-in_sign-in_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sign-in/sign-in.module */ 5391)).then(m => m.SignInPageModule)
    },
    {
        path: 'create-contents',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared-components_shared-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_create-contents_create-contents_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-contents/create-contents.module */ 6768)).then(m => m.CreateContentsPageModule)
    },
    {
        path: 'create-contents/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared-components_shared-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_create-contents_create-contents_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-contents/create-contents.module */ 6768)).then(m => m.CreateContentsPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 7648)).then(m => m.SignupPageModule)
    },
    {
        path: 'eula',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_eula_eula_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./eula/eula.module */ 8015)).then(m => m.EulaPageModule)
    },
    {
        path: 'content-details/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content-details_content-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./content-details/content-details.module */ 9387)).then(m => m.ContentDetailsPageModule)
    },
    {
        path: 'search-results-yt',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_search-results-yt_search-results-yt_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search-results-yt/search-results-yt.module */ 3721)).then(m => m.SearchResultsYTPageModule)
    },
    {
        path: 'yt-add/:title',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_yt-add_yt-add_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./yt-add/yt-add.module */ 2129)).then(m => m.YtAddPageModule)
    },
    {
        path: 'upload',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_upload_upload_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./upload/upload.module */ 4494)).then(m => m.UploadPageModule)
    },
    {
        path: 'subscription',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_subscription_subscription_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./subscription/subscription.module */ 7474)).then(m => m.SubscriptionPageModule)
    },
    {
        path: 'edit-clip/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_edit-clip_edit-clip_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-clip/edit-clip.module */ 9412)).then(m => m.EditClipPageModule)
    },
    {
        path: 'edit-clip',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_edit-clip_edit-clip_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-clip/edit-clip.module */ 9412)).then(m => m.EditClipPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(m => m.ProfilePageModule)
    },
    {
        path: 'tab1',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared-components_shared-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
    },
    {
        path: 'tab2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared-components_shared-components_module_ts"), __webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tab2/tab2.module */ 4608)).then(m => m.Tab2PageModule)
    },
    {
        path: 'tab2/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared-components_shared-components_module_ts"), __webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tab2/tab2.module */ 4608)).then(m => m.Tab2PageModule)
    },
    {
        path: 'tab3',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared-components_shared-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tab3/tab3.module */ 3746)).then(m => m.Tab3PageModule)
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    },
    {
        path: 'text',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_text_text_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./text/text.module */ 6259)).then(m => m.TextPageModule)
    },
    {
        path: 'appt',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_appt_appt_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./appt/appt.module */ 5376)).then(m => m.ApptPageModule)
    },
    {
        path: 'audio',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_audio_audio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./audio/audio.module */ 1700)).then(m => m.AudioPageModule)
    },
    {
        path: 'pdf',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pdf_pdf_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pdf/pdf.module */ 3254)).then(m => m.PdfPageModule)
    },
    {
        path: 'video',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_video_video_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./video/video.module */ 3607)).then(m => m.VideoPageModule)
    },
    {
        path: 'image',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_image_image_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./image/image.module */ 8474)).then(m => m.ImagePageModule)
    },
    {
        path: 'contact',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_contact_contact_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contact/contact.module */ 5486)).then(m => m.ContactPageModule)
    },
    {
        path: 'todo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_todo_todo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./todo/todo.module */ 4088)).then(m => m.TodoPageModule)
    },
    {
        path: 'delete-account',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_delete-account_delete-account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./delete-account/delete-account.module */ 7789)).then(m => m.DeleteAccountPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_payment_payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payment/payment.module */ 4068)).then(m => m.PaymentPageModule)
    },
    {
        path: 'create-profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared-components_shared-components_module_ts"), __webpack_require__.e("src_app_create-profile_create-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-profile/create-profile.module */ 1292)).then(m => m.CreateProfilePageModule)
    },
    {
        path: 'create-pc',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_create-pc_create-pc_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./create-pc/create-pc.module */ 3665)).then(m => m.CreatePcPageModule)
    },
    {
        path: 'create-pc/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_create-pc_create-pc_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./create-pc/create-pc.module */ 3665)).then(m => m.CreatePcPageModule)
    },
    {
        path: 'tab4',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared-components_shared-components_module_ts"), __webpack_require__.e("src_app_tab4_tab4_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tab4/tab4.module */ 2486)).then(m => m.Tab4PageModule)
    },
    {
        path: 'tab4/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared-components_shared-components_module_ts"), __webpack_require__.e("src_app_tab4_tab4_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tab4/tab4.module */ 2486)).then(m => m.Tab4PageModule)
    },
    {
        path: 'play/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared-components_shared-components_module_ts"), __webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("src_app_play_play_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./play/play.module */ 1797)).then(m => m.PlayPageModule)
    },
    {
        path: 'share/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_share_share_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./share/share.module */ 7841)).then(m => m.SharePageModule)
    },
    {
        path: 'preview/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared-components_shared-components_module_ts"), __webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("src_app_preview_preview_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./preview/preview.module */ 5792)).then(m => m.PreviewPageModule)
    },
    {
        path: 'view-clip',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view-clip_view-clip_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./view-clip/view-clip.module */ 749)).then(m => m.ViewClipPageModule)
    },
    {
        path: 'view-clip/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view-clip_view-clip_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./view-clip/view-clip.module */ 749)).then(m => m.ViewClipPageModule)
    },
    {
        path: 'link',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_link_link_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./link/link.module */ 2902)).then(m => m.LinkPageModule)
    },
    {
        path: 'demo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_demo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/demo.module */ 849)).then(m => m.DemoPageModule)
    },
    {
        path: 'offend',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_shared-components_shared-components_module_ts"), __webpack_require__.e("src_app_offend_offend_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./offend/offend.module */ 1995)).then(m => m.OffendPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/sign-in.service */ 6496);





let AppComponent = class AppComponent {
    constructor(signinService) {
        this.signinService = signinService;
        this.tab1 = "Assets";
        this.tab2 = "Likes";
        this.tab3 = "Core";
        this.tab4 = "Playclips";
        this.tab5 = "Royalties";
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_2__.SigninService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ 5111);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ 4971);
/* harmony import */ var _models_subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/subscription */ 4015);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./safe-html.pipe */ 3263);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__.SafeHtmlPipe],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }, _api__WEBPACK_IMPORTED_MODULE_2__.Api, _messages__WEBPACK_IMPORTED_MODULE_3__.Messages, _models_subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4971:
/*!*****************************!*\
  !*** ./src/app/messages.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Messages": () => (/* binding */ Messages)
/* harmony export */ });
class Messages {
    constructor() {
        this.signin = "Please sigin-in!";
        this.error = "Error!";
        this.success = "Successful";
        this.userExists = "User Exists";
        this.titleExists = "Title Exists";
        this.passwordLenght = "Password - Min 4 chars!";
        this.userLenght = "Login - Min 4 and max 15 chars!";
        this.passwordMismatch = "Password mismatch!";
        this.undefined = "Please enter values!";
        this.titleRequired = "Please enter title!";
        this.titleLenght = "Title - min 4 chars!";
    }
}


/***/ }),

/***/ 4015:
/*!****************************************!*\
  !*** ./src/app/models/subscription.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscription": () => (/* binding */ Subscription)
/* harmony export */ });
class Subscription {
    constructor() {
        this.nclips = 0;
        this.cnclips = 0;
    }
}


/***/ }),

/***/ 3589:
/*!*********************************!*\
  !*** ./src/app/models/token.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Token": () => (/* binding */ Token)
/* harmony export */ });
class Token {
}


/***/ }),

/***/ 5783:
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor() {
        this.login = "";
        this.password = "demo";
        this.rpassword = "";
        this.role = "user";
        this.application = "playclips";
        this.email = "";
        this.auth = "1004";
        this.username = "";
        this.isUserSelected = false;
    }
}


/***/ }),

/***/ 8268:
/*!***************************************!*\
  !*** ./src/app/models/userdetails.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetails": () => (/* binding */ UserDetails)
/* harmony export */ });
class UserDetails {
    constructor() {
        this.id = "";
        this.username = "";
        this.password = "";
        this.email = "";
        this.creditCardNumber = "";
        this.expiry = "";
        this.addressLine1 = "";
        this.addressLine2 = "";
        this.city = "";
        this.postalCode = "";
        this.countryCode = "";
    }
}


/***/ }),

/***/ 3263:
/*!***********************************!*\
  !*** ./src/app/safe-html.pipe.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeHtmlPipe": () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4497);



let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer }
];
SafeHtmlPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'safeHtml',
    })
], SafeHtmlPipe);



/***/ }),

/***/ 6496:
/*!*********************************************!*\
  !*** ./src/app/services/sign-in.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninService": () => (/* binding */ SigninService)
/* harmony export */ });
/* harmony import */ var _Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ 5111);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ 5783);
/* harmony import */ var _models_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/token */ 3589);
/* harmony import */ var _models_userdetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/userdetails */ 8268);
/* harmony import */ var _models_subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/subscription */ 4015);











let SigninService = class SigninService {
  constructor(httpClient, api) {
    this.httpClient = httpClient;
    this.api = api;
    this.counter = 0;
    this.page = "tab1";
    this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__.User();
    this.userb = new _models_user__WEBPACK_IMPORTED_MODULE_2__.User();
    this.userDetails = new _models_userdetails__WEBPACK_IMPORTED_MODULE_4__.UserDetails();
    this.logged = false;
    this.message = "";
    this.pc_link = "https://core4ed.com/content/listPlayclipsIonic.html";
    this.type = "video";
    this.media = "media";
    this.initial = true;
    this.showMediaWidgets = true;
    this.showTextWidgets = false;
    this.selectedTab = 3;
    this.platform = "";
    this.pcTitle = "";
    this.pcClips = [];
    this.pcCnt = 0;
    this.jwt = new _models_token__WEBPACK_IMPORTED_MODULE_3__.Token();
    this.showConnectWidgets = false;
    this.subscription = new _models_subscription__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.video = false;
    this.audio = false;
    this.record = false;
    this.ytube = false;
    this.text = false;
    this.pdf = false;
    this.image = false;
    this.link = false;
    this.chat = false;
    this.todo = false;
    this.appt = false;
    this.contact = false; // Http Options

    this.httpOptionsAuth = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    }; // this.user.login = "demo";

    this.logged = true;
    this.jwtLogin("assets/img/demo.png", "1234").subscribe(response => {
      this.jwt = response;
      console.log(this.jwt.token);
      this.pc_link = this.pc_link + "?jwt=" + this.jwt.token + "&login=" + this.user.login;
      this.user.login = "assets/img/demo.png";
      this.httpOptionsAuth = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.jwt.token
        })
      };
    });
    this.user.login = "assets/img/demo.png";
    this.user.role = "creator";
  }

  getUsers() {
    return this.httpClient.get(this.api.user + "?jwt=" + this.jwt.token + "&application=playclips", this.httpOptionsAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError));
  }

  login(login, password) {
    return this.httpClient.get(this.api.auth + login + "&password=" + password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError));
    ;
  }

  getUser(login) {
    return this.httpClient.get(this.api.userGet + "?jwt=" + this.jwt.token + "&login=" + login).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError));
    ;
  }

  getUserDetails(email) {
    return this.httpClient.get(this.api.userDetailsCreate + "?jwt=" + this.jwt.token + "&email=" + email, this.httpOptionsAuth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError));
    ;
  }

  YTSearch() {
    return this.httpClient.get(this.api.youtube + this.title).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError));
  } // Create a new item


  create(user) {
    console.log(JSON.stringify(user));
    user.username = user.login;
    return this.httpClient.post(this.api.userCreate, JSON.stringify(user), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError));
  }

  update(user) {
    return this.httpClient.post(this.api.userCreate, JSON.stringify(user), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError));
  } // Create a new item


  createUserDetails(userDetails) {
    this.deleteUserDetails(this.userDetails.email);
    return this.httpClient.post(this.api.userDetailsCreate + "?jwt=" + this.jwt.token, JSON.stringify(userDetails), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError));
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  }

  deleteAccount(login) {
    console.log("in delete");
    console.log(login);
    this.httpClient.delete(this.api.userDelete + "?jwt=" + this.jwt.token + "&login=" + login).subscribe(() => this.status = 'Delete successful');
  }

  deleteUserDetails(email) {
    this.httpClient.delete(this.api.userDetailsDelete + email + "?jwt=" + this.jwt.token).subscribe(() => this.status = 'Delete successful');
  }

  jwtLogin(login, password) {
    this.user.login = login;
    this.getUser(this.user.login).subscribe(response => {
      this.user.role = response.role;
      this.user.auth = response.auth;
      console.log(response);
    });
    this.sleep(1000);
    console.log(this.user.auth);

    if (this.user.auth != "blocked") {
      this.user.password = password;
      this.user.username = login;
      return this.httpClient.post(this.api.auth, JSON.stringify(this.user), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError));
    }
  }

  blockUser(login) {
    var _this = this;

    return (0,_Users_playclips_latest_client_inapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(login);

      _this.getUser(login).subscribe(response => {
        _this.userb = response;
        _this.userb.auth = "blocked";
        console.log(_this.userb);
      });

      yield _this.sleep(1000);
      console.log(_this.userb);
      console.log(_this.userb.login);

      _this.deleteAccount(_this.userb.login);

      yield _this.sleep(1000);

      _this.create(_this.userb).subscribe(response => {
        console.log(response.id);
      });
    })();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  } // Handle API errors


  handleError(error) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    } // return an observable with a user-facing error message


    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)('Something bad happened; please try again later.');
  }

  updateSubscription(email, login) {
    // get based upon udid
    this.getSubscriptionUuid(this.uuid).subscribe(response => {
      this.subscription = response;
      this.subscription.login = login;
      this.subscription.email = email;
      this.subscription.uuid = this.uuid;
      this.subscription.cnclips = 0;
      this.subscription.nclips = 50;
    }); // delete based upon udid

    this.deleteSubscriptionUuid(this.uuid); // create adding email and login

    return this.httpClient.post(this.api.subscription, JSON.stringify(this.subscription), this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError));
  }

  deleteSubscriptionUuid(uuid) {
    this.httpClient.delete(this.api.subscription + "?uuid=" + uuid).subscribe(() => this.status = 'Delete successful');
  }

  getSubscriptionUuid(uuid) {
    console.log(uuid);
    return this.httpClient.get(this.api.subscription_uuid + "?uuid=" + uuid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError));
  }

};

SigninService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _api__WEBPACK_IMPORTED_MODULE_1__.Api
}];

SigninService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
  providedIn: 'root'
})], SigninService);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		306,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		8404,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		4249,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n\n  <ion-router-outlet></ion-router-outlet>\n  <ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"tab1\" *ngIf=\"signinService.user.role == 'creator' || signinService.user.role == 'admin'\">\n        <ion-label color=\"dark\">{{ tab1 }} </ion-label>\n        <ion-icon name=\"server-outline\" color=\"dark\"></ion-icon>\n      </ion-tab-button>\n  \n    \n      <ion-tab-button tab=\"tab2\" *ngIf=\"signinService.user.role == 'creator' || signinService.user.role == 'admin'\">\n        <ion-label color=\"dark\">{{ tab2 }} </ion-label>\n        <ion-icon name=\"stop-outline\" color=\"dark\"></ion-icon>\n      </ion-tab-button>\n    \n      <ion-tab-button tab=\"tab3\" *ngIf=\"signinService.user.role == 'creator' || signinService.user.role == 'admin'\">\n        <ion-label color=\"dark\">{{ tab3 }} </ion-label>\n        <ion-icon name=\"square\" color=\"dark\"></ion-icon>\n      </ion-tab-button>\n      <ion-tab-button tab=\"tab4\" *ngIf=\"signinService.user.role == 'creator' || signinService.user.role == 'user' || signinService.user.role == 'admin' \">\n        <ion-label color=\"dark\">{{ tab4 }} </ion-label>\n        <ion-icon name=\"logo-buffer\" color=\"dark\"></ion-icon>\n      </ion-tab-button>\n      <ion-tab-button tab=\"tab5\" *ngIf=\"signinService.user.role == 'admin' \">\n        <ion-label color=\"dark\">{{ tab5 }} </ion-label>\n        <ion-icon name=\"logo-usd\" color=\"dark\"></ion-icon>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-app>\n<ion-row class=\"ion-justify-content-center\">\n   Copyright © 2016 - 2024 Core Takeaways(Playclips), CA.  All Rights Reserved.\n</ion-row>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map