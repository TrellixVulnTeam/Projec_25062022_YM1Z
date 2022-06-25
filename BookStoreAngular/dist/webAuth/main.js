"use strict";
(self["webpackChunkwebAuth"] = self["webpackChunkwebAuth"] || []).push([["main"],{

/***/ 5197:
/*!*************************************!*\
  !*** ./src/app/Helper/constants.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
class Constants {
}
Constants.USER_KEY = "userInfo";
Constants.BASE_URL = "http://localhost:56710/api/";


/***/ }),

/***/ 5190:
/*!**************************************!*\
  !*** ./src/app/Models/tokenModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITokenModel": () => (/* binding */ ITokenModel),
/* harmony export */   "TokenModel": () => (/* binding */ TokenModel)
/* harmony export */ });
class ITokenModel {
    constructor() {
        this.accessToken = "";
        this.refreshToken = "";
    }
}
class TokenModel {
}


/***/ }),

/***/ 5275:
/*!********************************!*\
  !*** ./src/app/Models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(id, firstName, lastName, email, userName) {
        this.userId = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.userName = "";
        this.userId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
    }
}


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/public-layout/public-layout.component */ 8257);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: "", component: _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_0__.PublicLayoutComponent,
        children: [
            { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent },
            { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
            { path: "publicLayout", component: _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_0__.PublicLayoutComponent },
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ 7247);
/* harmony import */ var _Helper_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helper/constants */ 5197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router) {
        this.router = router;
        this.loaderMessage = "loading test";
        this.title = 'webAuth';
        if (this.isUserlogin) {
            // this.router.navigate(["/user-management"]);
        }
    }
    onLogout() {
        localStorage.removeItem(_Helper_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.USER_KEY);
    }
    get isUserlogin() {
        const user = localStorage.getItem(_Helper_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.USER_KEY);
        return user && user.length > 0;
    }
    get user() {
        return JSON.parse(localStorage.getItem(_Helper_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.USER_KEY));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 3, consts: [["style", "height: 100vh;", 4, "blockUI", "blockUIMessage", "blockUITemplate"], [2, "height", "100vh"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "main-loader")("blockUIMessage", ctx.loaderMessage)("blockUITemplate", ctx.blockUiTemplateComponent);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["a.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5hLmRpc2FibGVke1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOm5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAuNjtcbn1cbiJdfQ== */"] });
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,ng_block_ui__WEBPACK_IMPORTED_MODULE_4__.BlockUI)('main-loader')
], AppComponent.prototype, "blockUI", void 0);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ 6528);
/* harmony import */ var _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/public-layout/public-layout.component */ 8257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrModule.forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.ModalModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent,
        _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_4__.PublicLayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.ModalModule] }); })();


/***/ }),

/***/ 2999:
/*!***************************************!*\
  !*** ./src/app/enums/responseCode.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponseCode": () => (/* binding */ ResponseCode)
/* harmony export */ });
var ResponseCode;
(function (ResponseCode) {
    ResponseCode[ResponseCode["NotSet"] = 0] = "NotSet";
    ResponseCode[ResponseCode["OK"] = 1] = "OK";
    ResponseCode[ResponseCode["Error"] = 2] = "Error";
})(ResponseCode || (ResponseCode = {}));


/***/ }),

/***/ 8257:
/*!*****************************************************************!*\
  !*** ./src/app/layout/public-layout/public-layout.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicLayoutComponent": () => (/* binding */ PublicLayoutComponent)
/* harmony export */ });
/* harmony import */ var src_app_Helper_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Helper/constants */ 5197);
/* harmony import */ var src_app_Models_tokenModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/tokenModel */ 5190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book.service */ 4371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function PublicLayoutComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PublicLayoutComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PublicLayoutComponent_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PublicLayoutComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const a_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", a_r5.coverURL, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Book Name:", a_r5.bookName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Author Name:", a_r5.writerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Price:", a_r5.price, "");
} }
class PublicLayoutComponent {
    constructor(router, bookServie) {
        this.router = router;
        this.bookServie = bookServie;
        this.tokenModel = new src_app_Models_tokenModel__WEBPACK_IMPORTED_MODULE_1__.TokenModel();
        this.title = 'webAuth';
        if (this.isUserlogin) {
            // this.router.navigate(["/user-management"]);
        }
    }
    ngOnInit() {
        this.getBookInfo();
        // if (this.tokenExpired) {
        //   this.getTokenByRefreshToken();
        // } 
    }
    onLogout() {
        localStorage.removeItem(src_app_Helper_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.USER_KEY);
        this.router.navigate(["/register"]);
    }
    get isUserlogin() {
        const user = localStorage.getItem(src_app_Helper_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.USER_KEY);
        return user && user.length > 0;
    }
    tokenExpired() {
        let userInfo = JSON.parse(localStorage.getItem(src_app_Helper_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.USER_KEY));
        const expiry = (JSON.parse(atob(userInfo === null || userInfo === void 0 ? void 0 : userInfo.token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }
    get user() {
        return JSON.parse(localStorage.getItem(src_app_Helper_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.USER_KEY));
    }
    getBookInfo() {
        this.bookServie.getBookList().subscribe(response => {
            debugger;
            this.bookInfos = response;
        }, error => {
            console.log(error);
        });
    }
}
PublicLayoutComponent.ɵfac = function PublicLayoutComponent_Factory(t) { return new (t || PublicLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__.BookService)); };
PublicLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PublicLayoutComponent, selectors: [["app-public-layout"]], decls: 21, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["routerLink", "/portal/article-management", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/register", 1, "nav-link", "active"], ["class", "nav-link active", "aria-current", "page", "routerLink", "/login", 4, "ngIf"], ["class", "nav-link active", "aria-current", "page", "routerLink", "/login", 3, "click", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-10"], [1, "table"], [4, "ngFor", "ngForOf"], ["aria-current", "page", "routerLink", "/login", 1, "nav-link", "active"], ["aria-current", "page", "routerLink", "/login", 1, "nav-link", "active", 3, "click"], ["alt", "User Self-Desk", 2, "width", "100%", 3, "src"]], template: function PublicLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "DevBugFix");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PublicLayoutComponent_a_12_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, PublicLayoutComponent_a_14_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "table", 13)(19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, PublicLayoutComponent_td_20_Template, 8, 4, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isUserlogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isUserlogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bookInfos);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWMtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _Helper_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helper/constants */ 5197);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ 7247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);









function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_0_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 6)(6, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8)(14, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.loginForm.valid);
} }
class LoginComponent {
    constructor(formBuilder, userServie, router) {
        this.formBuilder = formBuilder;
        this.userServie = userServie;
        this.router = router;
        this.isLoggedIn = true;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    ngOnInit() {
        debugger;
        if (this.isUserlogin) {
            this.isLoggedIn = false;
        }
        else {
            this.isLoggedIn = true;
        }
    }
    onSubmit() {
        console.log("on submit");
        this.blockUI.start();
        let email = this.loginForm.controls["email"].value;
        let password = this.loginForm.controls["password"].value;
        this.userServie.login(email, password).subscribe((data) => {
            debugger;
            if (data.responseCode == 1) {
                localStorage.setItem(_Helper_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.USER_KEY, JSON.stringify(data.dateSet));
                let user = data.dateSet;
                //this.router.navigate(["/publicLayout"]);
                this.isLoggedIn = false;
            }
            this.blockUI.stop();
            console.log("response", data);
        }, error => {
            this.blockUI.stop();
            console.log("error", error);
            this.isLoggedIn = true;
        });
    }
    get isUserlogin() {
        const user = localStorage.getItem(_Helper_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.USER_KEY);
        return user && user.length > 0;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-6"], [1, "card"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "card-title", "text-center"], [1, "mb-3", "row"], ["for", "staticEmail", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "formControlName", "email", "id", "staticEmail", "value", "", 1, "form-control"], ["for", "inputPassword", 1, "col-sm-2", "col-form-label"], ["type", "password", "formControlName", "password", "id", "inputPassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 20, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('main-loader')
], LoginComponent.prototype, "blockUI", void 0);


/***/ }),

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _enums_responseCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/responseCode */ 2999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4101);







class RegisterComponent {
    constructor(router, formBuilder, userServie, toastr) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userServie = userServie;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    onSubmit() {
        let firstName = this.registerForm.controls["firstName"].value;
        let lastName = this.registerForm.controls["lastName"].value;
        let email = this.registerForm.controls["email"].value;
        let password = this.registerForm.controls["password"].value;
        this.userServie.register(firstName, lastName, email, password).subscribe((data) => {
            if (data.responseCode == _enums_responseCode__WEBPACK_IMPORTED_MODULE_0__.ResponseCode.OK) {
                this.registerForm.controls["firstName"].setValue("");
                this.registerForm.controls["lastName"].setValue("");
                this.registerForm.controls["email"].setValue("");
                this.registerForm.controls["password"].setValue("");
                this.toastr.success("You have created account please login");
                this.router.navigate(["login"]);
            }
            else {
                this.toastr.error(data.dateSet[0]);
            }
            console.log("response", data);
        }, error => {
            console.log("error", error);
            this.toastr.error("Something went wrong please try again later");
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 30, vars: 2, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-6"], [1, "card"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "card-title", "text-center"], [1, "mb-3", "row"], ["for", "firstName", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "formControlName", "firstName", "id", "firstName", "value", "", 1, "form-control"], ["for", "staticEmail", 1, "col-sm-2", "col-form-label"], ["type", "text", "formControlName", "lastName", "id", "lastName", "value", "", 1, "form-control"], ["type", "text", "formControlName", "email", "id", "staticEmail", "value", "", 1, "form-control"], ["for", "inputPassword", 1, "col-sm-2", "col-form-label"], ["type", "password", "formControlName", "password", "id", "inputPassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7)(14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7)(19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 7)(24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4371:
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookService": () => (/* binding */ BookService)
/* harmony export */ });
/* harmony import */ var _Helper_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helper/constants */ 5197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4101);




class BookService {
    constructor(httpClient, toastr) {
        this.httpClient = httpClient;
        this.toastr = toastr;
    }
    getBookList() {
        return this.httpClient.get(_Helper_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.BASE_URL + 'book/getBookList');
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
BookService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _enums_responseCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/responseCode */ 2999);
/* harmony import */ var _Models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/user */ 5275);
/* harmony import */ var _Helper_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helper/constants */ 5197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4101);








class UserService {
    constructor(httpClient, toastr) {
        this.httpClient = httpClient;
        this.toastr = toastr;
    }
    login(email, password) {
        const body = {
            Email: email,
            Password: password
        };
        return this.httpClient.post(_Helper_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.BASE_URL + "user/Login", body);
    }
    register(firstName, lastName, email, password) {
        const body = {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Password: password,
        };
        return this.httpClient.post(_Helper_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.BASE_URL + "user/RegisterUser", body);
    }
    getAllUser() {
        let userInfo = JSON.parse(localStorage.getItem(_Helper_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.USER_KEY));
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            'Authorization': `Bearer ${userInfo === null || userInfo === void 0 ? void 0 : userInfo.token}`
        });
        return this.httpClient.get(_Helper_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.BASE_URL + "user/GetAllUser", { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => {
            let userList = new Array();
            if (res.responseCode == _enums_responseCode__WEBPACK_IMPORTED_MODULE_0__.ResponseCode.OK) {
                if (res.dateSet) {
                    res.dateSet.map((x) => {
                        userList.push(new _Models_user__WEBPACK_IMPORTED_MODULE_1__.User(x.userId, x.firstName, x.lastName, x.email, x.userName));
                    });
                }
            }
            return userList;
        }));
    }
    getUserList() {
        let userInfo = JSON.parse(localStorage.getItem(_Helper_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.USER_KEY));
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            'Authorization': `Bearer ${userInfo === null || userInfo === void 0 ? void 0 : userInfo.token}`
        });
        return this.httpClient.get(_Helper_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.BASE_URL + "user/GetUserList", { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => {
            let userList = new Array();
            if (res.responseCode == _enums_responseCode__WEBPACK_IMPORTED_MODULE_0__.ResponseCode.OK) {
                if (res.dateSet) {
                    res.dateSet.map((x) => {
                        userList.push(new _Models_user__WEBPACK_IMPORTED_MODULE_1__.User(x.userId, x.firstName, x.lastName, x.email, x.userName));
                    });
                }
            }
            else {
                this.toastr.error(res.responseMessage);
            }
            return userList;
        }));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map