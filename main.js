(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\johnh\Development\Personal\pregnancy-scenario\src\main.ts */"zUnb");


/***/ }),

/***/ "0bl4":
/*!***************************************************************!*\
  !*** ./src/app/overlay/scene-buttons/change-scene.service.ts ***!
  \***************************************************************/
/*! exports provided: ChangeSceneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeSceneService", function() { return ChangeSceneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ChangeSceneService {
    constructor() {
        this.invokeSceneChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onSceneButtonClick(sceneId) {
        this.invokeSceneChange.emit(sceneId);
    }
}
ChangeSceneService.ɵfac = function ChangeSceneService_Factory(t) { return new (t || ChangeSceneService)(); };
ChangeSceneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChangeSceneService, factory: ChangeSceneService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeSceneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "3Fce":
/*!**********************************!*\
  !*** ./src/app/scenes/scene5.ts ***!
  \**********************************/
/*! exports provided: scene5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scene5", function() { return scene5; });
const scene5 = {
    responses: [
        {
            response: "I can see that you really want to make changes in your life. Understanding what will happen is an important part of a healthy pregnancy. As you advance through your pregnancy on medication assisted treatment, it is common to need an adjustment with the medication. It is important to contact your provider to let them know if you begin to experience cravings or withdrawal symptoms.",
            codeMessage: "The nurse is maintaining an open and honest relationship with the patient by preparing them for the changes that commonly occur during pregnancy while on medication assisted treatment.",
            correct: true,
            src: "scene5/r1.mp4",
        },
        {
            response: "Well, I hope you don’t relapse and do all of this for nothing. A lot of people relapse when pregnant.",
            codeMessage: "The nurse’s statement doesn’t promote discussion about the patient’s way of keeping safe if they experience cravings or do relapse. This is a missed opportunity to assess the patient’s risk factors and to provide harm reduction education.",
            correct: false,
            src: "scene5/r2.mp4",
        },
        {
            response: "You know that going on medication assisted treatment is just trading one drug for another.  As soon as the baby is born, you really should get off it.",
            codeMessage: "This is not a therapeutic message. The nurse is inaccurate in their statement about replacing one drug for another. This statement does nothing to build rapport and instead damages the relationship between the patient and health care providers.",
            correct: false,
            src: "scene5/r3.mp4",
        },
    ],
    situation: "You have been asking questions about the patient to get to know them better as a person, and their goals of their pregnancy and delivery.  You also provided resources for peer support from persons with a lived experience. You also know that there is a risk of relapse during the pregnancy.",
    sceneId: 4
};


/***/ }),

/***/ "9FNU":
/*!************************************************************************!*\
  !*** ./src/app/overlay/response-buttons/response-buttons.component.ts ***!
  \************************************************************************/
/*! exports provided: ResponseButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseButtonsComponent", function() { return ResponseButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _select_response_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-response.service */ "AtQ7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




function ResponseButtonsComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResponseButtonsComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const response_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changeVideo(response_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const response_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", response_r1.response, " ");
} }
class ResponseButtonsComponent {
    constructor(changeResponseService) {
        this.changeResponseService = changeResponseService;
    }
    changeVideo(src) {
        this.changeResponseService.onResponseButtonClick(src);
    }
}
ResponseButtonsComponent.ɵfac = function ResponseButtonsComponent_Factory(t) { return new (t || ResponseButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_select_response_service__WEBPACK_IMPORTED_MODULE_1__["ChangeResponseService"])); };
ResponseButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResponseButtonsComponent, selectors: [["app-response-buttons"]], inputs: { currentScene: "currentScene" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])], decls: 2, vars: 1, consts: [["role", "group", 1, "btn-group-vertical"], ["class", "my-1 btn btn-primary btn-lg", 3, "click", 4, "ngFor", "ngForOf"], [1, "my-1", "btn", "btn-primary", "btn-lg", 3, "click"]], template: function ResponseButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResponseButtonsComponent_button_1_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentScene.responses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponseButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-response-buttons',
                templateUrl: './response-buttons.component.html',
                providers: []
            }]
    }], function () { return [{ type: _select_response_service__WEBPACK_IMPORTED_MODULE_1__["ChangeResponseService"] }]; }, { currentScene: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9PSt":
/*!**************************************!*\
  !*** ./src/app/scenes/scene-data.ts ***!
  \**************************************/
/*! exports provided: scenes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scenes", function() { return scenes; });
/* harmony import */ var _scene1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene1 */ "zqjT");
/* harmony import */ var _scene2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene2 */ "TJqS");
/* harmony import */ var _scene3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene3 */ "BQ0+");
/* harmony import */ var _scene4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene4 */ "b6gM");
/* harmony import */ var _scene5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene5 */ "3Fce");





const scenes = [
    _scene1__WEBPACK_IMPORTED_MODULE_0__["scene1"],
    _scene2__WEBPACK_IMPORTED_MODULE_1__["scene2"],
    _scene3__WEBPACK_IMPORTED_MODULE_2__["scene3"],
    _scene4__WEBPACK_IMPORTED_MODULE_3__["scene4"],
    _scene5__WEBPACK_IMPORTED_MODULE_4__["scene5"]
];


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 0, consts: [[1, "jumbotron", "overlay", "p-xl-5"], [1, "display-4", "text-center"], [1, "my-auto"], [1, "lead", "text-center"], [1, "my-1"], [1, "mx-auto", "mb-auto", "row", "scene-wrapper"], ["type", "button", "routerLink", "/introduction", 1, "btn", "btn-primary", "btn-lg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Caring for the Pregnant Patient Who Uses Drugs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Explore the various scenarios of each nurse to see how the conversation goes. This scenario and the associated statements are based on real stories and experiences provided by people with a lived experience. As you think about each response, think about the long term effects that the interaction has not only on the patient, but on the nurse and future patients with substance use disorder. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Click the button below to begin the scenario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Begin Scenario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".jumbotron.overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uLm92ZXJsYXkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "AtQ7":
/*!*********************************************************************!*\
  !*** ./src/app/overlay/response-buttons/select-response.service.ts ***!
  \*********************************************************************/
/*! exports provided: ChangeResponseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeResponseService", function() { return ChangeResponseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ChangeResponseService {
    constructor() {
        this.invokeResponseSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onResponseButtonClick(response) {
        this.invokeResponseSelection.emit(response);
    }
}
ChangeResponseService.ɵfac = function ChangeResponseService_Factory(t) { return new (t || ChangeResponseService)(); };
ChangeResponseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChangeResponseService, factory: ChangeResponseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeResponseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "AzdY":
/*!**********************************************!*\
  !*** ./src/app/overlay/overlay.component.ts ***!
  \**********************************************/
/*! exports provided: OverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayComponent", function() { return OverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _scene_buttons_scene_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene-buttons/scene-buttons.component */ "EVDg");
/* harmony import */ var _response_buttons_response_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response-buttons/response-buttons.component */ "9FNU");





function OverlayComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-scene-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentSceneId", ctx_r0.currentScene.sceneId)("canContinue", ctx_r0.correct);
} }
function OverlayComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How do you respond? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-response-buttons", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentScene", ctx_r2.currentScene);
} }
class OverlayComponent {
    constructor() {
        this.overlayTitle = "Situation:";
        this.initialized = false;
        this.passNextScene = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.needsRetry = false;
        this.needsResponse = true;
    }
    set currentScene(scene) {
        console.log("Current scene changed to: ", scene);
        this._currentScene = scene;
        this.overlayTitle = "Situation:";
        this.overlayText = scene.situation;
    }
    get currentScene() {
        return this._currentScene;
    }
    set hasResponded(responded) {
        this._hasResponded = responded;
        if (this.initialized) {
            if (this._hasResponded) {
                return;
            }
            else {
                this.overlayText = this.currentScene.situation;
                this.overlayTitle = "Situation: ";
            }
        }
    }
    get hasResponded() {
        return this._hasResponded;
    }
    set currentResponse(response) {
        console.log("Current response changed to: ", response);
        console.log("hasResponded: ", this.hasResponded);
        if (this.hasResponded) {
            this.correct = response.correct;
            this.needsRetry = !this.correct;
            if (this.correct) {
                this.overlayTitle = "Well done!";
            }
            else if (!this.correct) {
                this.overlayTitle = "Incorrect Response!";
            }
            this.overlayText = response.codeMessage;
        }
        this._currentResponse = response;
    }
    get currentResponse() {
        console.log("Got current response: ", this._currentResponse);
        return this._currentResponse;
    }
    ngOnInit() {
        console.log(this.scenes);
        this.initialized = true;
    }
}
OverlayComponent.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(); };
OverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverlayComponent, selectors: [["app-overlay"]], inputs: { currentScene: "currentScene", hasResponded: "hasResponded", currentSceneId: "currentSceneId", currentResponse: "currentResponse" }, outputs: { passNextScene: "passNextScene" }, decls: 10, vars: 4, consts: [[1, "jumbotron", "overlay", "p-xl-5"], [1, "display-6", "text-center", "overlay-title"], [1, "overlay-text"], [1, "my-4"], ["class", "mx-auto row scene-wrapper", 4, "ngIf", "ngIfElse"], ["notRetry", ""], [1, "mx-auto", "row", "scene-wrapper"], [3, "currentSceneId", "canContinue"], [1, "text-center"], [2, "width", "50%"], [1, "response-buttons", 3, "currentScene"]], template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OverlayComponent_div_7_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OverlayComponent_ng_template_8_Template, 4, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.overlayTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.overlayText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasResponded)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _scene_buttons_scene_buttons_component__WEBPACK_IMPORTED_MODULE_2__["SceneButtonsComponent"], _response_buttons_response_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ResponseButtonsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-overlay",
                templateUrl: "./overlay.component.html",
            }]
    }], function () { return []; }, { currentScene: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasResponded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentSceneId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentResponse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], passNextScene: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "BQ0+":
/*!**********************************!*\
  !*** ./src/app/scenes/scene3.ts ***!
  \**********************************/
/*! exports provided: scene3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scene3", function() { return scene3; });
const scene3 = {
    responses: [
        {
            response: "You should have done this when you first suspected you were pregnant, but you absolutely need to stop using drugs now before you hurt your baby any more than you already have!",
            codeMessage: "This is not a therapeutic response. Shaming the patient is not helpful and causes damage to the relationship.  Pregnant individuals who are dependent on drugs should not stop using abruptly as this may cause seizures to the fetus, a miscarriage, premature birth, or death of the fetus. Abrupt cessation of drug use is dangerous and contraindicated.",
            correct: false,
            src: "scene3/r1.mp4",
        },
        {
            response: "You can’t raise a baby while using drugs. You know that after you give birth, they are going to take your baby away from you.",
            codeMessage: "This is not a therapeutic response and is assumptive on the nurse’s part. Removal of the newborn from parental care is based on a number of factors.",
            correct: false,
            src: "scene3/r2.mp4",
        },
        {
            response: "Thank you for sharing that you are pregnant. I would like permission to share this information with your health care team so that we are making sure that your antibiotic is safe to use during pregnancy. It is important that you don’t abruptly stop using drugs because it can be harmful to the baby. There are medications that you can get started on that are safe for you and the baby so that you don’t go through withdrawal. If you are okay with it, I’d like to get someone to help you with this.",
            codeMessage: "This response opens the door to communication and education that is nonjudgmental and safer for the patient and fetus. The nurse recognizes that pregnancy is a pivotal event that has been shown to move the parent toward treatment and recovery.",
            correct: true,
            src: "scene3/r3.mp4",
        },
    ],
    situation: 'The patient admits that she is pregnant and had been isolating herself to avoid anyone asking questions. She states that she “wants to stop using drugs all together” and has tried “quitting cold turkey” a few times since she found out she was pregnant.',
    sceneId: 2,
};


/***/ }),

/***/ "EVDg":
/*!******************************************************************!*\
  !*** ./src/app/overlay/scene-buttons/scene-buttons.component.ts ***!
  \******************************************************************/
/*! exports provided: SceneButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneButtonsComponent", function() { return SceneButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _change_scene_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-scene.service */ "0bl4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




function SceneButtonsComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SceneButtonsComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.changeScene(ctx_r1.currentSceneId + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SceneButtonsComponent {
    constructor(changeSceneService) {
        this.changeSceneService = changeSceneService;
    }
    changeScene(sceneId) {
        this.changeSceneService.onSceneButtonClick(sceneId);
    }
}
SceneButtonsComponent.ɵfac = function SceneButtonsComponent_Factory(t) { return new (t || SceneButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_change_scene_service__WEBPACK_IMPORTED_MODULE_1__["ChangeSceneService"])); };
SceneButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SceneButtonsComponent, selectors: [["app-scene-buttons"]], inputs: { currentSceneId: "currentSceneId", canContinue: "canContinue" }, decls: 4, vars: 1, consts: [["role", "group", 1, "btn-group-vertical"], ["class", "my-1 btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "my-1", "btn", "btn-primary", "btn-lg", 3, "click"]], template: function SceneButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SceneButtonsComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SceneButtonsComponent_Template_button_click_2_listener() { return ctx.changeScene(ctx.currentSceneId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Try a Different Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canContinue);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SceneButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scene-buttons',
                templateUrl: './scene-buttons.component.html',
            }]
    }], function () { return [{ type: _change_scene_service__WEBPACK_IMPORTED_MODULE_1__["ChangeSceneService"] }]; }, { currentSceneId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canContinue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "GSEy":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "VbpA");




class IntroductionComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.videoSource = "assets/videos/OL.mp4"; //disable for electron build
        this.beginPlaying = false;
        this.overlayHidden = false;
    }
    onPlayerReady(api) {
        this.api = api;
    }
    playVideo() {
        this.router.navigate(['/main']);
    }
    ngOnDestroy() {
        const subs = [this.videoEndedSubscription];
        subs.forEach(sub => {
            this.unsubscribeEach(sub);
        });
    }
    unsubscribeEach(subscription) {
        if (subscription) {
            subscription.unsubscribe();
        }
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], decls: 14, vars: 3, consts: [[3, "onPlayerReady"], ["type", "video/mp4", "id", "introVideo", "preload", "auto", 3, "src", "vgMedia"], ["introMedia", ""], [1, "player-overlay", 3, "hidden"], [1, "jumbotron", "overlay", "p-xl-5"], [1, "display-6", "mt-auto", "text-center"], [1, "my-auto"], [1, "mx-auto", "mb-auto", "row", "scene-wrapper"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vg-player", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPlayerReady", function IntroductionComponent_Template_vg_player_onPlayerReady_0_listener($event) { return ctx.onPlayerReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scenario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Situation- You are caring for a 22 year old female patient admitted for an abscess on their forearm. The patient has been injecting drugs for the past 2 years and admits to using marijuana and heroin, and occasionally cocaine and alcohol. They have been admitted to the hospital for antibiotic treatment and you are getting ready to complete the admission assessment. You have reached the part of the assessment where you are asking about the last menstrual period and if the patient is pregnant. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroductionComponent_Template_button_click_12_listener() { return ctx.playVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter the Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.videoSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("vgMedia", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.overlayHidden);
    } }, directives: [_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgPlayerComponent"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgMediaDirective"]], styles: [".jumbotron.overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoiaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbi5vdmVybGF5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-introduction",
                templateUrl: "./introduction.component.html",
                styleUrls: [
                    "./introduction.component.scss"
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "LvuO":
/*!**************************************!*\
  !*** ./src/app/end/end.component.ts ***!
  \**************************************/
/*! exports provided: EndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndComponent", function() { return EndComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class EndComponent {
}
EndComponent.ɵfac = function EndComponent_Factory(t) { return new (t || EndComponent)(); };
EndComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EndComponent, selectors: [["app-end"]], decls: 21, vars: 0, consts: [[1, "jumbotron", "overlay", "p-xl-5"], [1, "display-6", "text-center"], [1, "list-group"], [1, "list-group-item"], [1, "my-4"], [1, "mx-auto", "row", "scene-wrapper"], ["type", "button", "routerLink", "/credits", 1, "btn", "btn-primary", "btn-lg"]], template: function EndComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reflection Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "How did you feel about the patient suspecting they were pregnant and continuing to use drugs?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What other harm reduction education tips would you provide for the patient?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "What stage of change does the patient appear to be in at this time? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " How would you educate the patient if they were one stage prior? One stage later?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "How would you respond to your colleague if they stated \u201CIt\u2019s so unfair that there are so many people that want a baby and can\u2019t have one, and here is someone who gets pregnant and doesn\u2019t even deserve to have a baby.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "What trauma informed principles would be used during this interaction?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "View Credits and Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EndComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-end',
                templateUrl: './end.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "SCN6":
/*!**********************************************!*\
  !*** ./src/app/credits/credits.component.ts ***!
  \**********************************************/
/*! exports provided: CreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsComponent", function() { return CreditsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class CreditsComponent {
}
CreditsComponent.ɵfac = function CreditsComponent_Factory(t) { return new (t || CreditsComponent)(); };
CreditsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreditsComponent, selectors: [["app-credits"]], decls: 26, vars: 0, consts: [[1, ""], [1, "jumbotron", "overlay", "p-xl-5"], [1, "display-6", "text-center"], [1, "list-group"], [1, "list-group-item", "text-center"], ["href", "https://johnbugden.com/"], [1, "display-10", "text-center"], [1, "text-center"], ["href", "mailto: kadion@nursing.umass.edu", 1, "text-center"], [1, "my-4"]], template: function CreditsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Credits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Patient - Alison Butts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nurse - Kimberly Dion, PhD, RN, CNE, CARN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Written by Kimberly Dion, PhD, RN, CNE, CARN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Application design and programming by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "John Bugden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Kimberly Dion, PhD, RN, CNE, CARN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "kadion@nursing.umass.edu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-credits",
                templateUrl: "./credits.component.html",
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




const _c0 = function (a0, a1) { return { "width.px": a0, "height.px": a1 }; };
class AppComponent {
    constructor() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.title = "Caring for People Who use Drugs";
    }
    onResize(event) {
        console.log(event.target.innerWidth);
        this.screenWidth = event.target.innerWidth;
        this.screenHeight = Math.round(this.screenWidth * .5625);
    }
    ngOnInit() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = Math.round(this.screenWidth * .5625);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 4, consts: [[1, "responsive-container", 3, "ngStyle"], [1, "row"], [1, "col-sm-4"], ["routerLink", "/", 1, "col-sm-4", "text-center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Restart Scenario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.screenWidth, ctx.screenHeight));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html"
            }]
    }], null, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "TJqS":
/*!**********************************!*\
  !*** ./src/app/scenes/scene2.ts ***!
  \**********************************/
/*! exports provided: scene2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scene2", function() { return scene2; });
const scene2 = {
    responses: [
        {
            response: "You look concerned. Are you worried about anything related to your period?",
            codeMessage: "This approach allows the patient to decide if they want to talk about their reproductive health and puts the patient as the person in the position of power. This approach allows the patient to see that the nurse is interested in learning and hearing from the patient.",
            correct: true,
            src: "scene2/r1.mp4",
        },
        {
            response: "If you don’t remember the date, I can just put anything down.",
            codeMessage: "This is not a therapeutic response and is false documentation. By not acknowledging the patient’s uneasiness with the question and probing further, the health of the patient may be compromised.",
            correct: false,
            src: "scene2/r2.mp4",
        },
        {
            response: "It’s not a really big deal to answer a question about when your last period was-just tell me!",
            codeMessage: "This is not a therapeutic response. This response is presumptive and judgmental and does not demonstrate an understanding of the patient’s uneasiness regarding the question. The patient will be less likely to be honest and open with the nurse.",
            correct: false,
            src: "scene2/r3.mp4",
        },
    ],
    situation: "You begin to ask questions around reproductive and sexual health. When you ask when the patient’s last menstrual period was, the client becomes visibly unsettled.",
    sceneId: 1,
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "VbpA");
/* harmony import */ var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videogular/ngx-videogular/controls */ "0igQ");
/* harmony import */ var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videogular/ngx-videogular/overlay-play */ "7uiw");
/* harmony import */ var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videogular/ngx-videogular/buffering */ "+yVL");
/* harmony import */ var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overlay/overlay.component */ "AzdY");
/* harmony import */ var _overlay_response_buttons_response_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overlay/response-buttons/response-buttons.component */ "9FNU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _overlay_response_buttons_select_response_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overlay/response-buttons/select-response.service */ "AtQ7");
/* harmony import */ var _overlay_scene_buttons_scene_buttons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overlay/scene-buttons/scene-buttons.component */ "EVDg");
/* harmony import */ var _overlay_scene_buttons_change_scene_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./overlay/scene-buttons/change-scene.service */ "0bl4");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./introduction/introduction.component */ "GSEy");
/* harmony import */ var _end_end_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./end/end.component */ "LvuO");
/* harmony import */ var _credits_credits_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./credits/credits.component */ "SCN6");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "9vUh");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_overlay_response_buttons_select_response_service__WEBPACK_IMPORTED_MODULE_11__["ChangeResponseService"], _overlay_scene_buttons_change_scene_service__WEBPACK_IMPORTED_MODULE_13__["ChangeSceneService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_4__["VgCoreModule"],
            _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_5__["VgControlsModule"],
            _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_6__["VgOverlayPlayModule"],
            _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_7__["VgBufferingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_8__["OverlayComponent"],
        _overlay_response_buttons_response_buttons_component__WEBPACK_IMPORTED_MODULE_9__["ResponseButtonsComponent"],
        _overlay_scene_buttons_scene_buttons_component__WEBPACK_IMPORTED_MODULE_12__["SceneButtonsComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
        _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_15__["IntroductionComponent"],
        _end_end_component__WEBPACK_IMPORTED_MODULE_16__["EndComponent"],
        _credits_credits_component__WEBPACK_IMPORTED_MODULE_17__["CreditsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_4__["VgCoreModule"],
        _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_5__["VgControlsModule"],
        _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_6__["VgOverlayPlayModule"],
        _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_7__["VgBufferingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_8__["OverlayComponent"],
                    _overlay_response_buttons_response_buttons_component__WEBPACK_IMPORTED_MODULE_9__["ResponseButtonsComponent"],
                    _overlay_scene_buttons_scene_buttons_component__WEBPACK_IMPORTED_MODULE_12__["SceneButtonsComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                    _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_15__["IntroductionComponent"],
                    _end_end_component__WEBPACK_IMPORTED_MODULE_16__["EndComponent"],
                    _credits_credits_component__WEBPACK_IMPORTED_MODULE_17__["CreditsComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_4__["VgCoreModule"],
                    _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_5__["VgControlsModule"],
                    _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_6__["VgOverlayPlayModule"],
                    _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_7__["VgBufferingModule"],
                ],
                providers: [_overlay_response_buttons_select_response_service__WEBPACK_IMPORTED_MODULE_11__["ChangeResponseService"], _overlay_scene_buttons_change_scene_service__WEBPACK_IMPORTED_MODULE_13__["ChangeSceneService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "b6gM":
/*!**********************************!*\
  !*** ./src/app/scenes/scene4.ts ***!
  \**********************************/
/*! exports provided: scene4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scene4", function() { return scene4; });
const scene4 = {
    responses: [
        {
            response: "Well of course your baby is going to go through horrible withdrawals. They will be crying, shaking, and just plain miserable because of what you did.",
            codeMessage: "This is blaming and shaming and not part of a therapeutic response.",
            correct: false,
            src: "scene4/r1.mp4",
        },
        {
            response: "If you are on medication assisted treatment, your baby may experience withdrawal symptoms from the medication but the baby will receive treatment to make them comfortable. Your love and cuddling have been shown to be some of the best ways to help with the newborn’s withdrawal.",
            codeMessage: "By being open and honest with the patient, the development of rapport can occur. The nurse is engaging in trauma informed care by supporting the patient in their decision making. The nurse acknowledges and responds honestly to the patient’s question but doesn’t shame or blame them. The patient is making statements that move them toward the next step in recovery.",
            correct: true,
            src: "scene4/r2.mp4",
        },
        {
            response: "There are a lot of people that can’t have a baby and if you love your baby, you will want to consider adoption or foster care until you get your life together.",
            codeMessage: "This is not a therapeutic response and does not meet the patient where they are at in their life. This response does not build rapport with the patient or recognize their level of motivation to change behaviors.",
            correct: false,
            src: "scene4/r3.mp4",
        },
    ],
    situation: "You have provided education to the patient about medications used during pregnancy for opioid dependence and the effects of marijuana, alcohol, and cocaine on the fetus. The patient asks about what happens to the newborn after delivery and if the “heroin withdrawals” will be as bad as when they quit “cold turkey”.",
    sceneId: 3,
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _credits_credits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credits/credits.component */ "SCN6");
/* harmony import */ var _end_end_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./end/end.component */ "LvuO");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introduction/introduction.component */ "GSEy");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "wlho");









const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "introduction", component: _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__["IntroductionComponent"] },
    { path: "main", component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
    { path: "end", component: _end_end_component__WEBPACK_IMPORTED_MODULE_3__["EndComponent"] },
    { path: "credits", component: _credits_credits_component__WEBPACK_IMPORTED_MODULE_2__["CreditsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _scenes_scene_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scenes/scene-data */ "9PSt");
/* harmony import */ var _overlay_response_buttons_select_response_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../overlay/response-buttons/select-response.service */ "AtQ7");
/* harmony import */ var _overlay_scene_buttons_change_scene_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../overlay/scene-buttons/change-scene.service */ "0bl4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "VbpA");
/* harmony import */ var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../overlay/overlay.component */ "AzdY");








class MainComponent {
    constructor(getResponseService, getSceneService, router) {
        this.getResponseService = getResponseService;
        this.getSceneService = getSceneService;
        this.router = router;
        this.title = "pregnancy-scenario";
        this.scenes = _scenes_scene_data__WEBPACK_IMPORTED_MODULE_1__["scenes"];
    }
    ngOnInit() {
        this.initializeComponent();
    }
    initializeComponent() {
        this.scenes = _scenes_scene_data__WEBPACK_IMPORTED_MODULE_1__["scenes"];
        this.needsToRetry = false;
        this.sceneId = 0;
        this.overlayIsHidden = false;
        this.currentScene = _scenes_scene_data__WEBPACK_IMPORTED_MODULE_1__["scenes"][0];
        this.hasResponded = false;
        this.responsesSubscription = this.subscribeToResponses();
        this.sceneSubscription = this.subscribeToSceneChanges();
        this.correctResponse = null;
        if (this.api !== undefined) {
            console.log("API is not null", this.api);
        }
        else {
            console.log("API is Null");
        }
    }
    onPlayerReady(api) {
        this.api = api;
    }
    chooseResponse() {
        this.api.play();
    }
    subscribeToSceneChanges() {
        return this.getSceneService.invokeSceneChange.subscribe((sceneId) => {
            if (sceneId < 5) {
                this.hasResponded = false;
                this.currentScene = _scenes_scene_data__WEBPACK_IMPORTED_MODULE_1__["scenes"][sceneId];
                this.sceneId = sceneId;
                this.responsesSubscription = this.subscribeToResponses();
            }
            else {
                console.debug('Reached the end of the scenario.');
                this.router.navigate(['/end']);
            }
        });
    }
    subscribeToResponses() {
        return this.getResponseService.invokeResponseSelection.subscribe((response) => {
            console.log("New response: ", response);
            this.responsesSubscription.unsubscribe();
            this.responseOngoing = true;
            this.videoSource = "";
            this.videoSource = "assets/videos/".concat(response.src); //disable for electron build
            console.log("New video source: ", this.videoSource);
            console.log("Last VideoSRC: ", this.lastVideoSource);
            console.log("New video source canPlay: ", this.api.getMediaById("singleVideo").canPlay);
            console.log("Last VideoSRC: ", this.lastVideoSource);
            this.unEndedCurrentResponse = response;
            if (this.videoSource === this.lastVideoSource) {
                this.videoSource = "assets/videos/OL.mp4";
                this.vidReadySubscription = this.api.getMediaById("singleVideo").subscriptions.canPlay.subscribe(() => {
                    this.videoSource = this.lastVideoSource;
                    this.vidReadySubscription.unsubscribe();
                    this.videoReadySubscription();
                });
            }
            else {
                this.videoReadySubscription();
            }
        });
    }
    videoReadySubscription() {
        this.vidReadySubscription = this.api
            .getMediaById("singleVideo")
            .subscriptions.canPlay.subscribe(() => {
            this.vidReadySubscription.unsubscribe();
            this.api.getMediaById("singleVideo").currentTime = 0;
            console.log("(canPay Subscription) New video source canPlay: ", this.api.getMediaById("singleVideo").canPlay);
            this.vidEndSubscription = this.api
                .getMediaById("singleVideo")
                .subscriptions.ended.subscribe(() => {
                this.vidEndSubscription.unsubscribe();
                this.responseOngoing = false;
                this.hasResponded = true;
                this.currentResponse = this.unEndedCurrentResponse;
                this.lastVideoSource = this.videoSource;
            });
            this.api.getMediaById("singleVideo").play();
        });
    }
    ngOnDestroy() {
        const subs = [this.vidEndSubscription, this.vidReadySubscription, this.sceneSubscription, this.responsesSubscription];
        subs.forEach(sub => {
            this.unsubscribeEach(sub);
        });
    }
    unsubscribeEach(subscription) {
        if (subscription) {
            subscription.unsubscribe();
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_overlay_response_buttons_select_response_service__WEBPACK_IMPORTED_MODULE_2__["ChangeResponseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_overlay_scene_buttons_change_scene_service__WEBPACK_IMPORTED_MODULE_3__["ChangeSceneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 5, vars: 7, consts: [[3, "onPlayerReady"], ["type", "video/mp4", "id", "singleVideo", "preload", "true", "autoplay", "", 3, "src", "vgMedia"], ["media", ""], [1, "player-overlay", 3, "hidden"], [3, "currentSceneId", "hasResponded", "currentScene", "currentResponse"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vg-player", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPlayerReady", function MainComponent_Template_vg_player_onPlayerReady_0_listener($event) { return ctx.onPlayerReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-overlay", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.videoSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("vgMedia", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.responseOngoing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentSceneId", ctx.sceneId)("hasResponded", ctx.hasResponded)("currentScene", ctx.currentScene)("currentResponse", ctx.currentResponse);
    } }, directives: [_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_5__["VgPlayerComponent"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_5__["VgMediaDirective"], _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_6__["OverlayComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-main",
                templateUrl: "./main.component.html",
            }]
    }], function () { return [{ type: _overlay_response_buttons_select_response_service__WEBPACK_IMPORTED_MODULE_2__["ChangeResponseService"] }, { type: _overlay_scene_buttons_change_scene_service__WEBPACK_IMPORTED_MODULE_3__["ChangeSceneService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zqjT":
/*!**********************************!*\
  !*** ./src/app/scenes/scene1.ts ***!
  \**********************************/
/*! exports provided: scene1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scene1", function() { return scene1; });
const scene1 = {
    responses: [
        {
            response: "When was your last period?",
            codeMessage: "Although the question is important, the manner in which the question is asked doesn’t allow the patient to understand why the question is being asked.",
            correct: false,
            src: "scene1/r1.mp4",
        },
        {
            response: "You probably don’t know this question, but when was your last period?",
            codeMessage: "This is a non-therapeutic response. This question is judgmental and impacts the nurse’s ability to engage in an honest discussion with the client.",
            correct: false,
            src: "scene1/r2.mp4",
        },
        {
            response: "For this next set of questions, is it okay if I ask you about your menstrual cycle, and other questions related to sexual health? We ask all patients these questions as part of our admission assessment. Knowing this information allows us to care for you the best way we can.",
            codeMessage: "By asking permission to ask sensitive questions, the nurse is developing a rapport and allows the client to make decisions regarding the assessment.",
            correct: true,
            src: "scene1/r3.mp4",
        },
    ],
    situation: "You are caring for a 22 year old female patient admitted for an abscess on their forearm. The patient has been injecting drugs for the past 2 years and admits to using marijuana and heroin, and occasionally cocaine and alcohol. They have been admitted to the hospital for antibiotic treatment and you are getting ready to complete the admission assessment. You have reached the part of the assessment where you are asking about the last menstrual period and if the patient is pregnant.",
    sceneId: 0
};


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map