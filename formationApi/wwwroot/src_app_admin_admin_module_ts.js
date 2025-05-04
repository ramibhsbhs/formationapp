"use strict";
(self["webpackChunkformationApp"] = self["webpackChunkformationApp"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 3176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5568);
/* harmony import */ var _formation_training_training_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formation/training/training.component */ 422);
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees/employees.component */ 6112);
/* harmony import */ var _session_session_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session/session.component */ 3493);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.component */ 9574);
/* harmony import */ var _quiz_quizs_quizs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz/quizs/quizs.component */ 136);
/* harmony import */ var _quiz_create_quizs_create_quizs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz/create-quizs/create-quizs.component */ 3966);
/* harmony import */ var _quiz_quiz_details_quiz_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiz/quiz-details/quiz-details.component */ 4095);
/* harmony import */ var _quiz_update_quizs_update_quizs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz/update-quizs/update-quizs.component */ 7064);
/* harmony import */ var _formation_update_formation_update_formation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formation/update-formation/update-formation.component */ 9302);
/* harmony import */ var _condidat_quiz_quiz_passing_quiz_passing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../condidat/quiz/quiz-passing/quiz-passing.component */ 1417);
/* harmony import */ var _formation_formation_detail_formation_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formation/formation-detail/formation-detail.component */ 9320);
/* harmony import */ var _formation_create_formation_create_formation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./formation/create-formation/create-formation.component */ 7338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
















const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: "formations", component: _formation_training_training_component__WEBPACK_IMPORTED_MODULE_1__.TrainingComponent },
    { path: "formations/create", component: _formation_create_formation_create_formation_component__WEBPACK_IMPORTED_MODULE_12__.CreateFormationComponent },
    { path: "formations/:id", component: _formation_formation_detail_formation_detail_component__WEBPACK_IMPORTED_MODULE_11__.FormationDetailComponent },
    { path: "formations/edit/:id", component: _formation_update_formation_update_formation_component__WEBPACK_IMPORTED_MODULE_9__.UpdateFormationComponent },
    { path: "employees", component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_2__.EmployeesComponent },
    { path: "sessions", component: _session_session_component__WEBPACK_IMPORTED_MODULE_3__.SessionComponent },
    { path: "settings", component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__.SettingsComponent },
    { path: "quizs", component: _quiz_quizs_quizs_component__WEBPACK_IMPORTED_MODULE_5__.QuizsComponent },
    { path: "quizs/create", component: _quiz_create_quizs_create_quizs_component__WEBPACK_IMPORTED_MODULE_6__.CreateQuizsComponent },
    { path: "quizs/:id", component: _quiz_quiz_details_quiz_details_component__WEBPACK_IMPORTED_MODULE_7__.QuizDetailsComponent },
    { path: "quizs/edit/:id", component: _quiz_update_quizs_update_quizs_component__WEBPACK_IMPORTED_MODULE_8__.UpdateQuizsComponent },
    { path: "quizs/test/:id", component: _condidat_quiz_quiz_passing_quiz_passing_component__WEBPACK_IMPORTED_MODULE_10__.QuizPassingComponent },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3176);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5568);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _formation_training_training_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formation/training/training.component */ 422);
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/employees.component */ 6112);
/* harmony import */ var _session_session_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session/session.component */ 3493);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ 9574);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test/test.component */ 1782);
/* harmony import */ var _quiz_quizs_quizs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz/quizs/quizs.component */ 136);
/* harmony import */ var _quiz_create_quizs_create_quizs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz/create-quizs/create-quizs.component */ 3966);
/* harmony import */ var _quiz_quiz_details_quiz_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz/quiz-details/quiz-details.component */ 4095);
/* harmony import */ var _quiz_update_quizs_update_quizs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quiz/update-quizs/update-quizs.component */ 7064);
/* harmony import */ var _formation_create_formation_create_formation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./formation/create-formation/create-formation.component */ 7338);
/* harmony import */ var _formation_update_formation_update_formation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formation/update-formation/update-formation.component */ 9302);
/* harmony import */ var _formation_formation_detail_formation_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formation/formation-detail/formation-detail.component */ 9320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);



















class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        _formation_training_training_component__WEBPACK_IMPORTED_MODULE_2__.TrainingComponent,
        _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__.EmployeesComponent,
        _session_session_component__WEBPACK_IMPORTED_MODULE_4__.SessionComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__.SettingsComponent,
        _test_test_component__WEBPACK_IMPORTED_MODULE_7__.TestComponent,
        _formation_create_formation_create_formation_component__WEBPACK_IMPORTED_MODULE_12__.CreateFormationComponent,
        _quiz_quizs_quizs_component__WEBPACK_IMPORTED_MODULE_8__.QuizsComponent,
        _quiz_create_quizs_create_quizs_component__WEBPACK_IMPORTED_MODULE_9__.CreateQuizsComponent,
        _quiz_quiz_details_quiz_details_component__WEBPACK_IMPORTED_MODULE_10__.QuizDetailsComponent,
        _quiz_update_quizs_update_quizs_component__WEBPACK_IMPORTED_MODULE_11__.UpdateQuizsComponent,
        _formation_update_formation_update_formation_component__WEBPACK_IMPORTED_MODULE_13__.UpdateFormationComponent,
        _formation_formation_detail_formation_detail_component__WEBPACK_IMPORTED_MODULE_14__.FormationDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule] }); })();


/***/ }),

/***/ 6112:
/*!********************************************************!*\
  !*** ./src/app/admin/employees/employees.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeesComponent": () => (/* binding */ EmployeesComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_create_group_dialog_create_group_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/create-group-dialog/create-group-dialog.component */ 8243);
/* harmony import */ var src_app_shared_components_create_user_dialog_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/create-user-dialog/create-user-dialog.component */ 8664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/group.service */ 7297);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






function EmployeesComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmployeesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "strong", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Error!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployeesComponent_div_14_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.fetchGroups()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.error);
} }
function EmployeesComponent_div_15_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployeesComponent_div_15_div_5_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const group_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.selectGroup(group_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 27)(2, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bg-blue-50", (ctx_r5.selectedGroup == null ? null : ctx_r5.selectedGroup.id) === group_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", group_r7.users.length, " users ");
} }
const _c0 = function (a0, a1, a2, a3, a4, a5) { return { "bg-purple-100 text-purple-800": a0, "bg-blue-100 text-blue-800": a1, "bg-green-100 text-green-800": a2, "bg-yellow-100 text-yellow-800": a3, "bg-red-100 text-red-800": a4, "bg-gray-100 text-gray-800": a5 }; };
const _c1 = function (a0, a1, a2, a3, a4, a5) { return { "bg-purple-500": a0, "bg-blue-500": a1, "bg-green-500": a2, "bg-yellow-500": a3, "bg-red-500": a4, "bg-gray-500": a5 }; };
function EmployeesComponent_div_15_div_6_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 43)(1, "td", 44)(2, "div", 45)(3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 47)(6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 44)(9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 44)(12, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const user_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", user_r12.userName.charAt(0).toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r12.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r12.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction6"](6, _c0, (user_r12.roles == null ? null : user_r12.roles[0]) === "Administrator", (user_r12.roles == null ? null : user_r12.roles[0]) === "Manager", (user_r12.roles == null ? null : user_r12.roles[0]) === "TeamLeader", (user_r12.roles == null ? null : user_r12.roles[0]) === "PostLeader", (user_r12.roles == null ? null : user_r12.roles[0]) === "QualityAgent", (user_r12.roles == null ? null : user_r12.roles[0]) === "Employee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction6"](13, _c1, (user_r12.roles == null ? null : user_r12.roles[0]) === "Administrator", (user_r12.roles == null ? null : user_r12.roles[0]) === "Manager", (user_r12.roles == null ? null : user_r12.roles[0]) === "TeamLeader", (user_r12.roles == null ? null : user_r12.roles[0]) === "PostLeader", (user_r12.roles == null ? null : user_r12.roles[0]) === "QualityAgent", (user_r12.roles == null ? null : user_r12.roles[0]) === "Employee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", user_r12.roles == null ? null : user_r12.roles[0], " ");
} }
function EmployeesComponent_div_15_div_6_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 52)(2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "svg", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "No users in this group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
function EmployeesComponent_div_15_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 27)(3, "div")(4, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 32)(7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 35)(12, "div", 36)(13, "table", 37)(14, "thead", 38)(15, "tr")(16, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, EmployeesComponent_div_15_div_6_tr_23_Template, 15, 20, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, EmployeesComponent_div_15_div_6_tr_24_Template, 7, 0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.selectedGroup.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.selectedGroup.count, " Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.selectedGroup.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.selectedGroup.users.length === 0);
} }
function EmployeesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, EmployeesComponent_div_15_div_5_Template, 6, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EmployeesComponent_div_15_div_6_Template, 25, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selectedGroup);
} }
class EmployeesComponent {
    constructor(groupService, dialog) {
        this.groupService = groupService;
        this.dialog = dialog;
        this.groups = [];
        this.selectedGroup = null;
        this.showCreateUserModal = false;
        this.loading = true;
        this.error = null;
    }
    ngOnInit() {
        this.fetchGroups();
    }
    fetchGroups() {
        this.loading = true;
        this.error = null;
        this.groupService.getGroups().subscribe({
            next: (groups) => {
                this.groups = groups;
                if (groups.length > 0) {
                    this.selectedGroup = groups[0];
                }
                this.loading = false;
            },
            error: (err) => {
                this.error = 'Failed to load groups. Please try again later.';
                this.loading = false;
                console.error('Error fetching groups:', err);
            }
        });
    }
    selectGroup(group) {
        this.selectedGroup = group;
    }
    openCreateUserModal() {
        const dialogRef = this.dialog.open(src_app_shared_components_create_user_dialog_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CreateUserDialogComponent, {
            data: { selectedGroup: this.selectedGroup },
            width: '1000px'
        });
        dialogRef.afterClosed().subscribe((user) => {
            if (user) {
                console.log(user);
                this.groups.find(g => g.id === this.selectedGroup?.id)?.users.push(user);
            }
        });
    }
    openCreateGroupModal() {
        const dialogRef = this.dialog.open(src_app_shared_components_create_group_dialog_create_group_dialog_component__WEBPACK_IMPORTED_MODULE_0__.CreateGroupDialogComponent);
        dialogRef.afterClosed().subscribe((group) => {
            if (group) {
                this.groups.push(group);
                this.selectedGroup = group;
            }
        });
    }
    createUser() {
    }
}
EmployeesComponent.ɵfac = function EmployeesComponent_Factory(t) { return new (t || EmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_group_service__WEBPACK_IMPORTED_MODULE_2__.GroupService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
EmployeesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EmployeesComponent, selectors: [["app-employees"]], decls: 16, vars: 3, consts: [[1, "container", "mx-auto", "p-2"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "flex", "gap-4"], [1, "px-4", "py-2", "bg-blue-600", "text-white", "rounded-lg", "hover:bg-blue-700", "transition-colors", "flex", "items-center", "gap-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["d", "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"], [1, "px-4", "py-2", "bg-green-600", "text-white", "rounded-lg", "hover:bg-green-700", "transition-colors", "flex", "items-center", "gap-2", 3, "click"], ["fill-rule", "evenodd", "d", "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z", "clip-rule", "evenodd"], ["class", "flex justify-center items-center h-64", 4, "ngIf"], ["class", "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative", "role", "alert", 4, "ngIf"], ["class", "grid grid-cols-1 lg:grid-cols-4 gap-6", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "h-64"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-blue-600"], ["role", "alert", 1, "bg-red-50", "border", "border-red-200", "text-red-700", "px-4", "py-3", "rounded", "relative"], [1, "font-bold"], [1, "block", "sm:inline"], [1, "absolute", "top-0", "bottom-0", "right-0", "px-4", "py-3", 3, "click"], ["role", "button", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", 1, "fill-current", "h-6", "w-6", "text-red-500"], ["d", "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"], [1, "grid", "grid-cols-1", "lg:grid-cols-4", "gap-6"], [1, "lg:col-span-1", "bg-white", "rounded-lg", "shadow", "p-4"], [1, "text-lg", "font-semibold", "mb-4", "text-gray-700"], [1, "space-y-2"], ["class", "p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors border border-gray-100", 3, "bg-blue-50", "click", 4, "ngFor", "ngForOf"], ["class", "lg:col-span-3 bg-white rounded-lg shadow", 4, "ngIf"], [1, "p-3", "rounded-lg", "cursor-pointer", "hover:bg-gray-50", "transition-colors", "border", "border-gray-100", 3, "click"], [1, "flex", "justify-between", "items-center"], [1, "font-medium", "text-gray-800"], [1, "px-2", "py-1", "text-xs", "font-semibold", "rounded-full", "bg-blue-100", "text-blue-800"], [1, "lg:col-span-3", "bg-white", "rounded-lg", "shadow"], [1, "p-6", "border-b", "border-gray-200"], [1, "flex", "items-center", "gap-2"], [1, "px-3", "py-1", "text-sm", "font-semibold", "rounded-full", "bg-green-100", "text-green-800"], [1, "px-3", "py-1", "text-sm", "font-semibold", "rounded-full", "bg-blue-100", "text-blue-800"], [1, "p-6"], [1, "overflow-x-auto"], [1, "min-w-full", "divide-y", "divide-gray-200"], [1, "bg-gray-50"], [1, "px-6", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "bg-white", "divide-y", "divide-gray-200"], ["class", "hover:bg-gray-50", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "hover:bg-gray-50"], [1, "px-6", "py-4", "whitespace-nowrap"], [1, "flex", "items-center"], [1, "h-10", "w-10", "rounded-full", "bg-gray-200", "flex", "items-center", "justify-center", "text-gray-600", "font-semibold"], [1, "ml-4"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-900"], [1, "px-3", "py-1.5", "inline-flex", "items-center", "text-xs", "leading-4", "font-medium", "rounded-full", 3, "ngClass"], [1, "w-2", "h-2", "mr-1.5", "rounded-full", 3, "ngClass"], ["colspan", "3", 1, "px-6", "py-4", "text-center", "text-gray-500"], [1, "flex", "flex-col", "items-center", "justify-center", "py-8"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-12", "w-12", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], [1, "mt-2", "text-sm", "font-medium", "text-gray-500"]], template: function EmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Groups Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployeesComponent_Template_button_click_5_listener() { return ctx.openCreateUserModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Create User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployeesComponent_Template_button_click_9_listener() { return ctx.openCreateGroupModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Create Group ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EmployeesComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, EmployeesComponent_div_14_Template, 8, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EmployeesComponent_div_15_Template, 7, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".animate-fade-in[_ngcontent-%COMP%] {\n  animation: fadeIn 0.5s ease-in;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.primary[_ngcontent-%COMP%] {\n  background-color: #4a90e2;\n  \n}\n.primary-dark[_ngcontent-%COMP%] {\n  background-color: #357abd;\n  \n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: var(--radius);\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n  padding: 0.75rem;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: transparent;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-color: hsl(var(--primary));\n}\ntable[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\ntable[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n  --tw-divide-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-divide-opacity, 1));\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\nth[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\ntr[_ngcontent-%COMP%]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\ntd[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.875rem;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n.header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.groups-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 20px;\n}\n.groups-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.group-card[_ngcontent-%COMP%] {\n  padding: 15px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.group-card[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}\n.group-card.selected[_ngcontent-%COMP%] {\n  background-color: #e2e8f0;\n  border-color: #94a3b8;\n}\n.group-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.group-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 14px;\n  color: #64748b;\n}\n.group-details[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.group-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.users-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.user-card[_ngcontent-%COMP%] {\n  padding: 15px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.user-card[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.user-card[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  font-size: 14px;\n  color: #64748b;\n}\n.roles[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  margin-top: 10px;\n}\n.role-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background-color: #e2e8f0;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #475569;\n}\n.no-users[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #64748b;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 100%;\n  max-width: 500px;\n}\n.modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #e2e8f0;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #94a3b8;\n}\n.form-group[_ngcontent-%COMP%]   select[multiple][_ngcontent-%COMP%] {\n  height: 100px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #e2e8f0;\n  color: #475569;\n  border: none;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #cbd5e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBQTtBQUVBO0VBQ0ksOEJBQUE7QUFBSjtBQUdBO0VBQ0k7SUFDSSxVQUFBO0VBQU47RUFHRTtJQUNJLFVBQUE7RUFETjtBQUNGO0FBSUE7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FBRko7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7QUFGSjtBQU1JO0VBQUEsV0FBQTtFQUFBLDRCQUFBO0VBQUEsaUJBQUE7RUFBQSxzQkFBQTtFQUFBLDREQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEseUJBQUE7RUFBQSwyR0FBQTtFQUFBLHlHQUFBO0VBQUEsNEZBQUE7RUFBQTtBQUFBO0FBSUE7RUFBQTtBQUFBO0FBQUE7RUFBQSx3QkFBQTtFQUFBLGtFQUFBO0VBQUEsMkRBQUE7RUFBQSxzQkFBQTtFQUFBO0FBQUE7QUFLQTs7RUFBQSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsaUJBQUE7RUFBQTtBQUFBO0FBSUE7RUFBQSxrQkFBQTtFQUFBLDREQUFBO0VBQUEsZ0JBQUE7RUFBQSxrQkFBQTtFQUFBLGdCQUFBO0VBQUEseUJBQUE7RUFBQSxzQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUlBO0VBQUEsa0JBQUE7RUFBQTtBQUFBO0FBSUE7RUFBQSxtQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBR0o7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRko7QUFLQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBRlI7QUFLSTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBSFI7QUFPQTtFQUNJLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QUFKSjtBQU9BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUpKO0FBT0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUpKO0FBTUk7RUFDSSx5QkFBQTtBQUpSO0FBT0k7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBTFI7QUFRSTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFOUjtBQVNJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUFI7QUFXQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBUko7QUFVSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUlI7QUFZQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFUSjtBQVlBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFUSjtBQVlRO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVZaO0FBYVE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFYWjtBQWdCQTtFQUNJLGFBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFiSjtBQWdCQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBYko7QUFnQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBYko7QUFnQkE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBYko7QUFnQkE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWJKO0FBZUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWJSO0FBaUJBO0VBQ0ksbUJBQUE7QUFkSjtBQWdCSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZFI7QUFpQkk7O0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWZSO0FBaUJROztFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQWRaO0FBa0JJO0VBQ0ksYUFBQTtBQWhCUjtBQW9CQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWpCSjtBQW9CQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFqQko7QUFtQkk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBakJSO0FBbUJRO0VBQ0kseUJBQUE7QUFqQlo7QUFxQkk7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBbkJSO0FBcUJRO0VBQ0kseUJBQUE7QUFuQloiLCJmaWxlIjoiZW1wbG95ZWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ3VzdG9tIHN0eWxlcyBjYW4gYmUgYWRkZWQgaGVyZSBpZiBuZWVkZWQgKi9cblxuLmFuaW1hdGUtZmFkZS1pbiB7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLnByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTkwZTI7XG4gICAgLyogRXhhbXBsZSBwcmltYXJ5IGNvbG9yICovXG59XG5cbi5wcmltYXJ5LWRhcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTdhYmQ7XG4gICAgLyogRGFya2VyIHNoYWRlIGZvciBob3ZlciAqL1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gICAgQGFwcGx5IHctZnVsbCBwLTMgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXByaW1hcnkgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50O1xufVxuXG50YWJsZSB7XG4gICAgQGFwcGx5IG1pbi13LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwO1xufVxuXG50aCxcbnRkIHtcbiAgICBAYXBwbHkgcHgtNiBweS00O1xufVxuXG50aCB7XG4gICAgQGFwcGx5IGJnLWdyYXktNTAgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXI7XG59XG5cbnRyIHtcbiAgICBAYXBwbHkgaG92ZXI6YmctZ3JheS01MDtcbn1cblxudGQge1xuICAgIEBhcHBseSB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS05MDA7XG59XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG59XG5cbi5ncm91cHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmdyb3Vwcy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uZ3JvdXAtY2FyZCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICAgIH1cblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xuICAgICAgICBib3JkZXItY29sb3I6ICM5NGEzYjg7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMCAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIH1cbn1cblxuLmdyb3VwLWRldGFpbHMge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbi51c2Vycy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4udXNlci1jYXJkIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICAgLnVzZXItaW5mbyB7XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJvbGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5yb2xlLWJhZGdlIHtcbiAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzQ3NTU2OTtcbn1cblxuLm5vLXVzZXJzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjb2xvcjogIzY0NzQ4Yjtcbn1cblxuLm1vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIGlucHV0LFxuICAgIHNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzk0YTNiODtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdFttdWx0aXBsZV0ge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbn1cblxuLm1vZGFsLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJ0biB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU2M2ViO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xuICAgICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 7338:
/*!********************************************************************************!*\
  !*** ./src/app/admin/formation/create-formation/create-formation.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateFormationComponent": () => (/* binding */ CreateFormationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_constants_formation_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/constants/formation.constants */ 7798);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/constants/roles.constants */ 8843);
/* harmony import */ var _shared_components_select_quiz_select_quiz_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/select-quiz/select-quiz.component */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_formation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/formation.service */ 5061);
/* harmony import */ var _core_services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/group.service */ 7297);
/* harmony import */ var _core_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/quiz.service */ 6920);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toaster.service */ 9140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);














function CreateFormationComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 36)(3, "div", 37)(4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", "category-" + category_r5)("value", category_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", "category-" + category_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](category_r5);
} }
function CreateFormationComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CreateFormationComponent_div_35_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const role_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.toggleRole(role_r6)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 43)(3, "div", 44)(4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const role_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", "role-" + role_r6)("checked", (tmp_1_0 = ctx_r1.formationForm.get("roles")) == null ? null : tmp_1_0.value.includes(role_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", "role-" + role_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](role_r6);
} }
function CreateFormationComponent_div_51_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](group_r9.description);
} }
function CreateFormationComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 47)(1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CreateFormationComponent_div_51_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const group_r9 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.toggleGroup(group_r9.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 49)(3, "div", 50)(4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CreateFormationComponent_div_51_span_6_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const group_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", "group-" + group_r9.id)("checked", (tmp_1_0 = ctx_r2.formationForm.get("groupIds")) == null ? null : tmp_1_0.value.includes(group_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", "group-" + group_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](group_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", group_r9.description);
} }
function CreateFormationComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 19)(3, "div", 57)(4, "div")(5, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div")(9, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "textarea", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div")(13, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 20)(16, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateFormationComponent_div_60_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const i_r15 = restoredCtx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.openQuizSelectionDialog("module", i_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 59)(20, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateFormationComponent_div_60_Template_button_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const i_r15 = restoredCtx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.moveModule(i_r15, i_r15 - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateFormationComponent_div_60_Template_button_click_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const i_r15 = restoredCtx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.moveModule(i_r15, i_r15 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateFormationComponent_div_60_Template_button_click_26_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const i_r15 = restoredCtx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.removeModule(i_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const module_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.getQuizTitle((tmp_1_0 = module_r14.get("quizId")) == null ? null : tmp_1_0.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", i_r15 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", i_r15 === ctx_r3.modules.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Position: ", (tmp_4_0 = module_r14.get("position")) == null ? null : tmp_4_0.value, " ");
} }
function CreateFormationComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 68)(1, "div", 15)(2, "div")(3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div")(7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div")(11, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 71)(15, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateFormationComponent_div_69_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const i_r22 = restoredCtx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.removeSession(i_r22)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r22);
} }
class CreateFormationComponent {
    constructor(fb, formationService, groupService, quizService, router, dialog, toaster) {
        this.fb = fb;
        this.formationService = formationService;
        this.groupService = groupService;
        this.quizService = quizService;
        this.router = router;
        this.dialog = dialog;
        this.toaster = toaster;
        this.groups = [];
        this.quizzes = [];
        this.categories = _core_constants_formation_constants__WEBPACK_IMPORTED_MODULE_0__.FORMATION_CATEGORIES;
        this.availableRoles = [
            _core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__.UserRole.Administrator,
            _core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__.UserRole.HierarchicalLeader,
            _core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__.UserRole.TeamLeader,
            _core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__.UserRole.PostLeader,
            _core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__.UserRole.QualityAgent,
            _core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__.UserRole.Manager
        ];
        this.formationForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10)]],
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(20)]],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            groupIds: [[]],
            roles: [[]],
            finalQuizId: [null],
            sessions: this.fb.array([]),
            modules: this.fb.array([])
        });
    }
    ngOnInit() {
        this.groupService.getGroups().subscribe({
            next: (groups) => {
                this.groups = groups;
            },
            error: (error) => {
                console.error('Error loading groups:', error);
            }
        });
        this.quizService.getQuizzes().subscribe({
            next: (quizzes) => {
                this.quizzes = quizzes;
            },
            error: (error) => {
                console.error('Error loading quizzes:', error);
            }
        });
    }
    get modules() {
        return this.formationForm.get('modules');
    }
    get sessions() {
        return this.formationForm.get('sessions');
    }
    createModuleFormGroup() {
        return this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10)]],
            position: [this.modules.length + 1, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            quizId: [null]
        });
    }
    addModule() {
        this.modules.push(this.createModuleFormGroup());
        this.updateModulePositions();
    }
    removeModule(index) {
        this.modules.removeAt(index);
        this.updateModulePositions();
    }
    updateModulePositions() {
        this.modules.controls.forEach((control, index) => {
            control.patchValue({ position: index + 1 });
        });
    }
    moveModule(fromIndex, toIndex) {
        const module = this.modules.at(fromIndex);
        this.modules.removeAt(fromIndex);
        this.modules.insert(toIndex, module);
        this.updateModulePositions();
    }
    createSessionFormGroup() {
        return this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3)]],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
        });
    }
    addSession() {
        this.sessions.push(this.createSessionFormGroup());
    }
    removeSession(index) {
        this.sessions.removeAt(index);
    }
    toggleGroup(groupId) {
        const groupIds = this.formationForm.get('groupIds')?.value;
        if (groupIds.includes(groupId)) {
            this.formationForm.patchValue({ groupIds: groupIds.filter(id => id !== groupId) });
        }
        else {
            this.formationForm.patchValue({ groupIds: [...groupIds, groupId] });
        }
    }
    toggleRole(role) {
        const roleNames = this.formationForm.get('roles')?.value;
        if (roleNames.includes(role)) {
            this.formationForm.patchValue({ roles: roleNames.filter(r => r !== role) });
        }
        else {
            this.formationForm.patchValue({ roles: [...roleNames, role] });
        }
    }
    openQuizSelectionDialog(context, moduleIndex) {
        const disabledQuizIds = [];
        // Disable quizzes assigned to other modules
        this.modules.controls.forEach((control, index) => {
            const quizId = control.get('quizId')?.value;
            if (quizId && (context !== 'module' || index !== moduleIndex)) {
                disabledQuizIds.push(quizId);
            }
        });
        // Disable final quiz if selecting for a module
        if (context === 'module' && this.formationForm.get('finalQuizId')?.value) {
            disabledQuizIds.push(this.formationForm.get('finalQuizId')?.value);
        }
        const dialogRef = this.dialog.open(_shared_components_select_quiz_select_quiz_component__WEBPACK_IMPORTED_MODULE_2__.SelectQuizComponent, {
            width: '500px',
            data: {
                disabledQuizIds,
                context,
                selectedQuizId: context === 'formation' ? this.formationForm.get('finalQuizId')?.value : (moduleIndex !== undefined ? this.modules.at(moduleIndex).get('quizId')?.value : null)
            }
        });
        dialogRef.afterClosed().subscribe(quiz => {
            if (quiz) {
                if (context === 'formation') {
                    this.formationForm.patchValue({ finalQuizId: quiz.id });
                }
                else if (moduleIndex !== undefined) {
                    this.modules.at(moduleIndex).patchValue({ quizId: quiz.id });
                }
            }
        });
    }
    getQuizTitle(quizId) {
        return quizId ? this.quizzes.find(q => q.id === quizId)?.title || 'Select a quiz' : 'Select a quiz';
    }
    onSubmit() {
        if (this.formationForm.valid) {
            console.log(this.formationForm.value);
            this.formationService.createFormation(this.formationForm.value).subscribe({
                next: () => {
                    this.router.navigate(['/admin/formations']);
                },
                error: (error) => {
                    console.error('Error creating formation:', error);
                    this.toaster.handleHttpError(error.error);
                }
            });
        }
        else {
            this.formationForm.markAllAsTouched();
            this.toaster.showError('Invalid Form', 'Please fill in all required fields correctly.');
        }
    }
    dropModule(event) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.moveItemInArray)(this.modules.controls, event.previousIndex, event.currentIndex);
        this.updateModulePositions();
    }
}
CreateFormationComponent.ɵfac = function CreateFormationComponent_Factory(t) { return new (t || CreateFormationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_formation_service__WEBPACK_IMPORTED_MODULE_3__.FormationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_group_service__WEBPACK_IMPORTED_MODULE_4__.GroupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_5__.QuizService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_6__.ToasterService)); };
CreateFormationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CreateFormationComponent, selectors: [["app-create-formation"]], decls: 73, vars: 7, consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "max-w-4xl"], [1, "rounded-2xl", "overflow-hidden"], [1, "px-8", "py-6"], [1, "text-3xl", "font-bold"], [1, "mt-1", "text-sm", "text-gray-600"], [1, "p-8"], [1, "space-y-8", 3, "formGroup", "ngSubmit"], [1, "bg-white", "shadow", "rounded-lg", "p-6"], [1, "text-2xl", "font-bold", "mb-6"], [1, "grid", "grid-cols-1", "gap-6"], [1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "formControlName", "title", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary"], ["formControlName", "description", "rows", "3", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary"], ["formControlName", "content", "rows", "5", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], ["class", "category-item", 4, "ngFor", "ngForOf"], ["class", "role-item", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], [1, "mt-1"], ["type", "button", 1, "inline-flex", "items-center", "px-4", "py-2", "border", "border-gray-300", "rounded-md", "text-sm", "font-medium", "text-gray-700", "bg-white", "hover:bg-gray-50", 3, "click"], [1, "fas", "fa-chevron-down", "ml-2"], ["class", "group-item", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold"], ["type", "button", 1, "inline-flex", "items-center", "px-4", "py-2", "border", "border-transparent", "text-sm", "font-medium", "rounded-md", "text-white", "bg-primary", "hover:bg-primary-dark", 3, "click"], [1, "fas", "fa-plus", "mr-2"], ["formArrayName", "modules", 1, "space-y-4"], ["class", "module-item", "cdkDrag", "", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "sessions", 1, "space-y-4"], ["class", "session-item", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "px-6", "py-3", "border", "border-transparent", "text-base", "font-medium", "rounded-md", "text-white", "bg-primary", "hover:bg-primary-dark", "disabled:opacity-50"], [1, "category-item"], ["type", "radio", "formControlName", "category", 1, "category-radio", 3, "id", "value"], [1, "category-label", 3, "for"], [1, "category-content"], [1, "category-name"], [1, "category-icon"], [1, "fas", "fa-check"], [1, "role-item"], ["type", "checkbox", 1, "role-checkbox", 3, "id", "checked", "change"], [1, "role-label", 3, "for"], [1, "role-content"], [1, "role-name"], [1, "role-icon"], [1, "group-item"], ["type", "checkbox", 1, "group-checkbox", 3, "id", "checked", "change"], [1, "group-label", 3, "for"], [1, "group-content"], [1, "group-name"], ["class", "group-description", 4, "ngIf"], [1, "group-icon"], [1, "group-description"], ["cdkDrag", "", 1, "module-item", 3, "formGroupName"], [1, "flex", "items-start", "space-x-4"], [1, "grid", "grid-cols-1", "gap-4"], ["formControlName", "description", "rows", "2", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary"], [1, "flex", "flex-col", "space-y-2"], ["cdkDragHandle", "", 1, "drag-handle"], [1, "fas", "fa-grip-vertical"], ["type", "button", 1, "p-2", "text-gray-500", "hover:text-gray-700", "disabled:opacity-50", 3, "disabled", "click"], [1, "fas", "fa-arrow-up"], [1, "fas", "fa-arrow-down"], ["type", "button", 1, "p-2", "text-red-500", "hover:text-red-700", 3, "click"], [1, "fas", "fa-trash"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "session-item", 3, "formGroupName"], ["type", "date", "formControlName", "startDate", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary"], ["type", "date", "formControlName", "endDate", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary"], [1, "mt-2", "flex", "justify-end"], ["type", "button", 1, "text-red-500", "hover:text-red-700", 3, "click"]], template: function CreateFormationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Create New Formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Fill in the details below to create a new training formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6)(9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CreateFormationComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8)(11, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Basic Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10)(14, "div")(15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div")(19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div")(23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 8)(27, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, CreateFormationComponent_div_30_Template, 8, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 8)(32, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, CreateFormationComponent_div_35_Template, 8, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 8)(37, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Final Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 18)(40, "div", 19)(41, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Select Final Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 20)(44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateFormationComponent_Template_button_click_44_listener() { return ctx.openQuizSelectionDialog("formation"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 8)(48, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Target Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, CreateFormationComponent_div_51_Template, 9, 5, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 8)(53, "div", 24)(54, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateFormationComponent_Template_button_click_56_listener() { return ctx.addModule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, " Add Module ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, CreateFormationComponent_div_60_Template, 30, 5, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 8)(62, "div", 24)(63, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateFormationComponent_Template_button_click_65_listener() { return ctx.addSession(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](66, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, " Add Session ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, CreateFormationComponent_div_69_Template, 17, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 32)(71, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, " Create Formation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.availableRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.getQuizTitle((tmp_3_0 = ctx.formationForm.get("finalQuizId")) == null ? null : tmp_3_0.value), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.modules.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.sessions.controls);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName], styles: [".group-item[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.group-checkbox[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n  cursor: pointer;\n}\n\n.group-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%] {\n  border-color: var(--primary-color);\n  background-color: rgba(var(--primary-color-rgb), 0.05);\n}\n\n.group-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  color: var(--primary-color);\n}\n\n.group-label[_ngcontent-%COMP%], .category-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 0.5rem;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.group-label[_ngcontent-%COMP%]:hover, .category-label[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  background-color: rgba(var(--primary-color-rgb), 0.02);\n}\n\n.group-content[_ngcontent-%COMP%], .category-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.group-name[_ngcontent-%COMP%], .category-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #111827;\n}\n\n.group-description[_ngcontent-%COMP%], .category-description[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 0.25rem;\n}\n\n.group-icon[_ngcontent-%COMP%], .category-icon[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  opacity: 0;\n  transform: scale(0.8);\n  transition: all 0.2s ease;\n  color: var(--primary-color);\n}\n\n[_ngcontent-%COMP%]:root {\n  --primary-color: #3b82f6;\n  --primary-color-rgb: 59, 130, 246;\n}\n\n@keyframes shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n\n.shimmer[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n\n.shimmer-bg[_ngcontent-%COMP%] {\n  animation: shimmer 2s infinite linear;\n  background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);\n  background-size: 1000px 100%;\n  position: relative;\n}\n\n.module-item[_ngcontent-%COMP%] {\n  border-radius: var(--radius);\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  animation-duration: 200ms;\n}\n\n.module-item[_ngcontent-%COMP%]:hover {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.module-item[_ngcontent-%COMP%] {\n  cursor: move;\n  position: relative;\n}\n\n.module-item.dragging[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  background-color: #f3f4f6;\n}\n\n.module-item[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  color: #9ca3af;\n  cursor: move;\n}\n\n.module-item[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n}\n\n.module-item[_ngcontent-%COMP%]   .flex-col[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n\n.module-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: calc(var(--radius) - 2px);\n  padding: 0.5rem;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  animation-duration: 200ms;\n}\n\n.module-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n\n.module-item[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.group-item[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.group-checkbox[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.group-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%] {\n  border-color: hsl(var(--primary));\n  background-color: hsl(var(--primary) / 0.05);\n}\n\n.group-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  color: hsl(var(--primary));\n  opacity: 1;\n}\n\n.group-label[_ngcontent-%COMP%], .category-label[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--radius);\n  border-width: 2px;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n  padding: 1rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  animation-duration: 200ms;\n}\n\n.group-label[_ngcontent-%COMP%]:hover, .category-label[_ngcontent-%COMP%]:hover {\n  border-color: hsl(var(--primary));\n  background-color: hsl(var(--primary) / 0.05);\n}\n\n.group-content[_ngcontent-%COMP%], .category-content[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n}\n\n.group-name[_ngcontent-%COMP%], .category-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n\n.group-description[_ngcontent-%COMP%], .category-description[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  display: block;\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n\n.group-icon[_ngcontent-%COMP%], .category-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  --tw-scale-x: .9;\n  --tw-scale-y: .9;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  color: hsl(var(--primary));\n  opacity: 0;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  animation-duration: 200ms;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  display: block;\n  width: 100%;\n  border-radius: calc(var(--radius) - 2px);\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border-color: hsl(var(--primary));\n  --tw-ring-color: hsl(var(--primary));\n}\n\ninput[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  display: block;\n  width: 100%;\n  border-radius: var(--radius);\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border-color: hsl(var(--primary));\n  --tw-ring-color: hsl(var(--primary));\n}\n\ninput[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background-color: #f9fafb;\n  transition: all 0.2s ease;\n}\n\ninput[type=text][_ngcontent-%COMP%]:hover, textarea[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  background-color: #ffffff;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n}\n\n.category-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.category-radio[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.category-radio[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n  background-color: #f3f4f6;\n}\n\n.category-radio[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.category-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.category-label[_ngcontent-%COMP%]:hover {\n  border-color: #4f46e5;\n  background-color: #f3f4f6;\n}\n\n.category-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.category-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0);\n  transition: all 0.2s ease;\n  color: #4f46e5;\n}\n\n.roles-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n\n.role-item[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n\n.role-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.375rem;\n}\n\n.role-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}\n\n.role-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.role-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n  color: #4f46e5;\n}\n\n.role-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.375rem;\n  transition: all 0.2s ease-in-out;\n}\n\n.role-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBRUksa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBOztFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVJOzs7RUFFSSxrQ0FBQTtFQUNBLHNEQUFBO0FBQ1I7O0FBQ1E7Ozs7Ozs7RUFFSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQU1aOztBQURBOztFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkk7O0VBQ0ksa0NBQUE7RUFDQSxzREFBQTtBQUtSOztBQURBOztFQUVJLE9BQUE7QUFJSjs7QUFEQTs7RUFFSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFEQTs7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFEQTs7RUFFSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFJSjs7QUFBQTtFQUNJLHdCQUFBO0VBQ0EsaUNBQUE7QUFHSjs7QUFDQTtFQUNJO0lBQ0ksOEJBQUE7RUFFTjtFQUNFO0lBQ0ksNkJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0kscUNBQUE7RUFDQSwyRUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFLSTtFQUFBLDRCQUFBO0VBQUEsaUJBQUE7RUFBQSxzQkFBQTtFQUFBLDREQUFBO0VBQUEsa0JBQUE7RUFBQSw0REFBQTtFQUFBLGFBQUE7RUFBQSwwQ0FBQTtFQUFBLHVEQUFBO0VBQUEsdUdBQUE7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsNkVBQUE7RUFBQSxpR0FBQTtFQUFBO0FBQUE7O0FBREo7RUFFSSxZQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQURSOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBRlI7O0FBSVE7RUFDSSxjQUFBO0FBRlo7O0FBUUk7RUFBQSx1QkFBQTtFQUFBLDhEQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLHdDQUFBO0VBQUEsZUFBQTtFQUFBLCtGQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBTUE7O0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUtBOztFQUFBLGtCQUFBO0VBQUEsV0FBQTtFQUFBLFVBQUE7RUFBQSxlQUFBO0VBQUE7QUFBQTs7QUFJSTs7O0VBQUEsaUNBQUE7RUFBQTtBQUFBOztBQUlJOzs7Ozs7O0VBQUEsZUFBQTtFQUFBLGVBQUE7RUFBQSwrTEFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFPUjs7RUFBQSxhQUFBO0VBQUEsZUFBQTtFQUFBLG1CQUFBO0VBQUEsNEJBQUE7RUFBQSxpQkFBQTtFQUFBLHNCQUFBO0VBQUEsNERBQUE7RUFBQSxhQUFBO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFHSTs7RUFBQSxpQ0FBQTtFQUFBO0FBQUE7O0FBTUo7O0VBQUE7QUFBQTs7QUFLQTs7RUFBQSxjQUFBO0VBQUEsbUJBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFLQTs7RUFBQSxtQkFBQTtFQUFBLGNBQUE7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFLQTs7RUFBQSxtQkFBQTtFQUFBLGdCQUFBO0VBQUEsZ0JBQUE7RUFBQSwrTEFBQTtFQUFBLDBCQUFBO0VBQUEsVUFBQTtFQUFBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7O0FBTUE7O0VBQUEsbUJBQUE7RUFBQSxjQUFBO0VBQUEsV0FBQTtFQUFBLHdDQUFBO0VBQUEsc0JBQUE7RUFBQSw0REFBQTtFQUFBLDBDQUFBO0VBQUEsdURBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBLGlDQUFBO0VBQUE7QUFBQTs7QUFNQTs7RUFBQSxtQkFBQTtFQUFBLGNBQUE7RUFBQSxXQUFBO0VBQUEsNEJBQUE7RUFBQSxzQkFBQTtFQUFBLDREQUFBO0VBQUEsMENBQUE7RUFBQSx1REFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUEsaUNBQUE7RUFBQTtBQUFBOztBQUZKOztFQUdJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQUtJOztFQUNJLHlCQUFBO0FBRlI7O0FBS0k7O0VBQ0kseUJBQUE7RUFDQSw0Q0FBQTtBQUZSOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFSSjs7QUFVSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUFSUjs7QUFVUTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQVJaOztBQWFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVZKOztBQVlJO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBQVZSOztBQWNBO0VBQ0ksT0FBQTtBQVhKOztBQWNBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBWEo7O0FBY0E7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFjQTtFQUNJLGFBQUE7RUFDQSw0REFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQVhKOztBQWNBO0VBQ0ksa0JBQUE7RUFJQSxnQ0FBQTtBQWRKOztBQWVJO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBYlI7O0FBZUk7RUFFSSx5QkFBQTtBQWRSOztBQWlCSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQWZSOztBQWlCUTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQWZaOztBQW1CSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQWpCUjs7QUFtQlE7RUFDSSx5QkFBQTtBQWpCWiIsImZpbGUiOiJjcmVhdGUtZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29tbW9uIHN0eWxlcyBmb3IgYm90aCBncm91cHMgYW5kIGNhdGVnb3JpZXNcbi5ncm91cC1pdGVtLFxuLmNhdGVnb3J5LWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZ3JvdXAtY2hlY2tib3gsXG4uY2F0ZWdvcnktY2hlY2tib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmNoZWNrZWQrLmdyb3VwLWxhYmVsLFxuICAgICY6Y2hlY2tlZCsuY2F0ZWdvcnktbGFiZWwge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4wNSk7XG5cbiAgICAgICAgLmdyb3VwLWljb24sXG4gICAgICAgIC5jYXRlZ29yeS1pY29uIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZ3JvdXAtbGFiZWwsXG4uY2F0ZWdvcnktbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNWU3ZWI7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjAyKTtcbiAgICB9XG59XG5cbi5ncm91cC1jb250ZW50LFxuLmNhdGVnb3J5LWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG59XG5cbi5ncm91cC1uYW1lLFxuLmNhdGVnb3J5LW5hbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzExMTgyNztcbn1cblxuLmdyb3VwLWRlc2NyaXB0aW9uLFxuLmNhdGVnb3J5LWRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY29sb3I6ICM2YjcyODA7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cblxuLmdyb3VwLWljb24sXG4uY2F0ZWdvcnktaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi8vIEFkZCB0aGVzZSBDU1MgdmFyaWFibGVzIHRvIHlvdXIgcm9vdCBzdHlsZXMgaWYgbm90IGFscmVhZHkgcHJlc2VudFxuOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogIzNiODJmNjtcbiAgICAtLXByaW1hcnktY29sb3ItcmdiOiA1OSwgMTMwLCAyNDY7XG59XG5cbi8vIFNoaW1tZXIgQW5pbWF0aW9uXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMDBweCAwO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAwcHggMDtcbiAgICB9XG59XG5cbi5zaGltbWVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNoaW1tZXItYmcge1xuICAgIGFuaW1hdGlvbjogc2hpbW1lciAycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjZmN2Y4IDglLCAjZWRlZWYxIDE4JSwgI2Y2ZjdmOCAzMyUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vLyBNb2R1bGUgUG9zaXRpb25pbmdcbi5tb2R1bGUtaXRlbSB7XG4gICAgQGFwcGx5IGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBwLTQgc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDA7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICYuZHJhZ2dpbmcge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG4gICAgfVxuXG4gICAgLmRyYWctaGFuZGxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDAuNXJlbTtcbiAgICAgICAgcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgY29sb3I6ICM5Y2EzYWY7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNGY0NmU1O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubW9kdWxlLWl0ZW0gLmZsZXgtY29sIHtcbiAgICBAYXBwbHkgc3BhY2UteS0yO1xufVxuXG4ubW9kdWxlLWl0ZW0gYnV0dG9uIHtcbiAgICBAYXBwbHkgcC0yIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwO1xufVxuXG4ubW9kdWxlLWl0ZW0gYnV0dG9uOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgICBAYXBwbHkgYmctZ3JheS0xMDA7XG59XG5cbi5tb2R1bGUtaXRlbSBidXR0b25bZGlzYWJsZWRdIHtcbiAgICBAYXBwbHkgb3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWQ7XG59XG5cbi8vIEdyb3VwIGFuZCBDYXRlZ29yeSBJdGVtc1xuLmdyb3VwLWl0ZW0sXG4uY2F0ZWdvcnktaXRlbSB7XG4gICAgQGFwcGx5IHJlbGF0aXZlIG1iLTQ7XG59XG5cbi5ncm91cC1jaGVja2JveCxcbi5jYXRlZ29yeS1jaGVja2JveCB7XG4gICAgQGFwcGx5IGFic29sdXRlIG9wYWNpdHktMCBoLTAgdy0wIGN1cnNvci1wb2ludGVyO1xuXG4gICAgJjpjaGVja2VkKy5ncm91cC1sYWJlbCxcbiAgICAmOmNoZWNrZWQrLmNhdGVnb3J5LWxhYmVsIHtcbiAgICAgICAgQGFwcGx5IGJvcmRlci1wcmltYXJ5IGJnLXByaW1hcnkvNTtcblxuICAgICAgICAuZ3JvdXAtaWNvbixcbiAgICAgICAgLmNhdGVnb3J5LWljb24ge1xuICAgICAgICAgICAgQGFwcGx5IG9wYWNpdHktMTAwIHNjYWxlLTEwMCB0ZXh0LXByaW1hcnk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ncm91cC1sYWJlbCxcbi5jYXRlZ29yeS1sYWJlbCB7XG4gICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIHAtNCBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgY3Vyc29yLXBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgQGFwcGx5IGJvcmRlci1wcmltYXJ5IGJnLXByaW1hcnkvNTtcbiAgICB9XG59XG5cbi5ncm91cC1jb250ZW50LFxuLmNhdGVnb3J5LWNvbnRlbnQge1xuICAgIEBhcHBseSBmbGV4LTE7XG59XG5cbi5ncm91cC1uYW1lLFxuLmNhdGVnb3J5LW5hbWUge1xuICAgIEBhcHBseSBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDA7XG59XG5cbi5ncm91cC1kZXNjcmlwdGlvbixcbi5jYXRlZ29yeS1kZXNjcmlwdGlvbiB7XG4gICAgQGFwcGx5IGJsb2NrIHRleHQteHMgdGV4dC1ncmF5LTUwMCBtdC0xO1xufVxuXG4uZ3JvdXAtaWNvbixcbi5jYXRlZ29yeS1pY29uIHtcbiAgICBAYXBwbHkgbWwtMiBvcGFjaXR5LTAgc2NhbGUtOTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHRleHQtcHJpbWFyeTtcbn1cblxuLy8gRm9ybSBDb250cm9sc1xuaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgQGFwcGx5IG10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItcHJpbWFyeSBmb2N1czpyaW5nLXByaW1hcnk7XG59XG5cbi8vIEVuaGFuY2VkIHRleHQgaW5wdXQgc3R5bGVzXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbnRleHRhcmVhIHtcbiAgICBAYXBwbHkgbXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItZ3JheS0yMDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1wcmltYXJ5IGZvY3VzOnJpbmctcHJpbWFyeTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjEpO1xuICAgIH1cbn1cblxuLy8gLy8gU3VibWl0IEJ1dHRvblxuLy8gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuLy8gICAgIEBhcHBseSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNiBweS0zIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IGhvdmVyOmJnLXByaW1hcnktZGFyayBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1wcmltYXJ5IGRpc2FibGVkOm9wYWNpdHktNTA7XG4vLyB9XG5cbi5jYXRlZ29yeS1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmNhdGVnb3J5LXJhZGlvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG5cbiAgICAmOmNoZWNrZWQrLmNhdGVnb3J5LWxhYmVsIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNGY0NmU1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xuXG4gICAgICAgIC5jYXRlZ29yeS1pY29uIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2F0ZWdvcnktbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTVlN2ViO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICM0ZjQ2ZTU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG4gICAgfVxufVxuXG4uY2F0ZWdvcnktY29udGVudCB7XG4gICAgZmxleDogMTtcbn1cblxuLmNhdGVnb3J5LW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzNzQxNTE7XG59XG5cbi5jYXRlZ29yeS1pY29uIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICBjb2xvcjogIzRmNDZlNTtcbn1cblxuLnJvbGVzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLnJvbGUtaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGxhYmVse1xuICAgICAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLy8gYm9yZGVyLWNvbG9yOiAjNGY0NmU1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAwO1xuXG4gICAgICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzRmNDZlNTtcbiAgICAgICAgICAgIGNvbG9yOiAjNGY0NmU1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 9320:
/*!********************************************************************************!*\
  !*** ./src/app/admin/formation/formation-detail/formation-detail.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormationDetailComponent": () => (/* binding */ FormationDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_formation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/formation.service */ 5061);
/* harmony import */ var src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/quiz.service */ 6920);
/* harmony import */ var src_app_core_services_attachment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/attachment.service */ 7480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/quiz-results/quiz-results.component */ 3310);







function FormationDetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FormationDetailComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Erreur!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.error);
} }
function FormationDetailComponent_div_9_div_15_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31)(1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Quiz final");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 33)(4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.getQuizTitle(ctx_r8.formation.finalQuizId));
} }
function FormationDetailComponent_div_9_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Informations de base");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 25)(4, "div")(5, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Titre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div")(15, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Contenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, FormationDetailComponent_div_9_div_15_div_19_Template, 8, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.formation.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.formation.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.formation.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.formation.finalQuizId);
} }
const _c0 = function (a0, a1, a2) { return { "bg-green-100 text-green-800": a0, "bg-yellow-100 text-yellow-800": a1, "bg-gray-100 text-gray-800": a2 }; };
function FormationDetailComponent_div_9_div_16_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 45)(5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 45)(9, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 45)(13, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const session_r11 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](session_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 5, session_r11.startDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 7, session_r11.endDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](9, _c0, ctx_r9.getStatus(session_r11) === "En cours", ctx_r9.getStatus(session_r11) === "Pas encore", ctx_r9.getStatus(session_r11) === "Termin\u00E9e"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r9.getStatus(session_r11), " ");
} }
function FormationDetailComponent_div_9_div_16_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Aucune session disponible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function FormationDetailComponent_div_9_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 37)(2, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 39)(5, "table", 40)(6, "thead", 41)(7, "tr")(8, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Titre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Date de d\u00E9but");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Date de fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tbody", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, FormationDetailComponent_div_9_div_16_tr_17_Template, 15, 13, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, FormationDetailComponent_div_9_div_16_tr_18_Template, 3, 0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.formation.sessions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.formation.sessions.length === 0);
} }
function FormationDetailComponent_div_9_div_17_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", group_r14.description, " ");
} }
function FormationDetailComponent_div_9_div_17_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 53)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FormationDetailComponent_div_9_div_17_div_10_div_3_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](group_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", group_r14.description);
} }
function FormationDetailComponent_div_9_div_17_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aucun groupe associ\u00E9 \u00E0 cette formation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FormationDetailComponent_div_9_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 50)(1, "div", 51)(2, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Groupes cibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, FormationDetailComponent_div_9_div_17_div_10_Template, 4, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, FormationDetailComponent_div_9_div_17_div_11_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.formation.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.formation.groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.formation.groups.length === 0);
} }
function FormationDetailComponent_div_9_div_18_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const module_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r20.getQuizTitle(module_r19.quizId));
} }
function FormationDetailComponent_div_9_div_18_div_5_div_8_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const attachment_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", attachment_r25.lien, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r24.getFileIcon(attachment_r25.type), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r24.getFileName(attachment_r25.lien) || "Fichier " + attachment_r25.type);
} }
function FormationDetailComponent_div_9_div_18_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 73)(1, "h4", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Pi\u00E8ces jointes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FormationDetailComponent_div_9_div_18_div_5_div_8_a_4_Template, 4, 3, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const module_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", module_r19.attachments);
} }
function FormationDetailComponent_div_9_div_18_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aucune pi\u00E8ce jointe pour ce module ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FormationDetailComponent_div_9_div_18_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "div", 65)(3, "h3", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FormationDetailComponent_div_9_div_18_div_5_div_7_Template, 4, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, FormationDetailComponent_div_9_div_18_div_5_div_8_Template, 5, 1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FormationDetailComponent_div_9_div_18_div_5_div_9_Template, 2, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const module_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](module_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](module_r19.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", module_r19.quizId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", module_r19.attachments && module_r19.attachments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !module_r19.attachments || module_r19.attachments.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Position: ", module_r19.position, " ");
} }
function FormationDetailComponent_div_9_div_18_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aucun module disponible pour cette formation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FormationDetailComponent_div_9_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 37)(2, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Modules");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FormationDetailComponent_div_9_div_18_div_5_Template, 12, 6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FormationDetailComponent_div_9_div_18_div_6_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.formation.modules);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.formation.modules.length === 0);
} }
function FormationDetailComponent_div_9_div_19_app_quiz_results_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-quiz-results", 83);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formationId", ctx_r27.formation.id);
} }
function FormationDetailComponent_div_9_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FormationDetailComponent_div_9_div_19_app_quiz_results_1_Template, 1, 1, "app-quiz-results", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.formation);
} }
const _c1 = function (a0, a1) { return { "border-primary text-primary": a0, "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": a1 }; };
function FormationDetailComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "nav", 19)(4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FormationDetailComponent_div_9_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.setActiveTab("info")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Informations de base ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FormationDetailComponent_div_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.setActiveTab("sessions")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Sessions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FormationDetailComponent_div_9_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.setActiveTab("groups")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Groupes et Cat\u00E9gorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FormationDetailComponent_div_9_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.setActiveTab("modules")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Modules ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FormationDetailComponent_div_9_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.setActiveTab("results")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " R\u00E9sultats de formation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, FormationDetailComponent_div_9_div_15_Template, 20, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, FormationDetailComponent_div_9_div_16_Template, 19, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, FormationDetailComponent_div_9_div_17_Template, 12, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, FormationDetailComponent_div_9_div_18_Template, 7, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, FormationDetailComponent_div_9_div_19_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](10, _c1, ctx_r2.activeTab === "info", ctx_r2.activeTab !== "info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](13, _c1, ctx_r2.activeTab === "sessions", ctx_r2.activeTab !== "sessions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](16, _c1, ctx_r2.activeTab === "groups", ctx_r2.activeTab !== "groups"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](19, _c1, ctx_r2.activeTab === "modules", ctx_r2.activeTab !== "modules"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](22, _c1, ctx_r2.activeTab === "results", ctx_r2.activeTab !== "results"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.activeTab === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.activeTab === "sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.activeTab === "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.activeTab === "modules");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.activeTab === "results");
} }
const _c2 = function (a1) { return ["/admin/formations/update", a1]; };
class FormationDetailComponent {
    constructor(formationService, quizService, attachmentService, route, router) {
        this.formationService = formationService;
        this.quizService = quizService;
        this.attachmentService = attachmentService;
        this.route = route;
        this.router = router;
        this.formation = null;
        this.loading = false;
        this.error = null;
        this.activeTab = 'info';
        this.quizzes = [];
        this.subscriptions = [];
    }
    ngOnInit() {
        // Get query parameters
        const queryParamsSub = this.route.queryParams.subscribe(queryParams => {
            // Get active tab from URL or use default
            if (queryParams['tab']) {
                this.activeTab = queryParams['tab'];
            }
        });
        this.subscriptions.push(queryParamsSub);
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.loadFormation(id);
        this.loadQuizzes();
    }
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    loadFormation(id) {
        this.loading = true;
        this.formationService.getFormation(id).subscribe({
            next: (formation) => {
                this.formation = formation;
                this.loading = false;
                console.log(this.formation.sessions.map((session) => session.status));
            },
            error: (error) => {
                this.error = error;
                this.loading = false;
            }
        });
    }
    // Méthodes déléguées au service d'attachement
    getFileIcon(type) {
        return this.attachmentService.getFileIcon(type);
    }
    getFileIconColor(type) {
        return this.attachmentService.getFileIconColor(type);
    }
    getFileName(url) {
        return this.attachmentService.getFileName(url);
    }
    formatFileSize(bytes) {
        return this.attachmentService.formatFileSize(bytes);
    }
    getStatus(session) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const start = new Date(session.startDate);
        const end = new Date(session.endDate);
        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);
        if (today < start) {
            return 'Pas encore'; // Not yet started
        }
        else if (today > end) {
            return 'Terminée'; // Finished
        }
        else {
            return 'En cours'; // Ongoing
        }
    }
    /**
     * Set the active tab and update URL parameters
     * @param tabName Name of the tab to activate
     */
    setActiveTab(tabName) {
        this.activeTab = tabName;
        this.updateUrlParams();
    }
    /**
     * Update URL parameters without reloading the page
     */
    updateUrlParams() {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {
                tab: this.activeTab
            },
            queryParamsHandling: 'merge',
            replaceUrl: true // Replace the URL instead of adding a new history entry
        });
    }
    /**
     * Load all available quizzes
     */
    loadQuizzes() {
        this.quizService.getQuizzes().subscribe({
            next: (quizzes) => {
                this.quizzes = quizzes;
            },
            error: (error) => {
                console.error('Error loading quizzes:', error);
                this.error = 'Impossible de charger les quiz.';
            }
        });
    }
    /**
     * Get the title of a quiz by its ID
     * @param quizId ID of the quiz
     * @returns Title of the quiz or a default message
     */
    getQuizTitle(quizId) {
        if (!quizId)
            return 'Aucun quiz sélectionné';
        const quiz = this.quizzes.find(q => q.id === quizId);
        return quiz ? quiz.title : 'Quiz inconnu';
    }
}
FormationDetailComponent.ɵfac = function FormationDetailComponent_Factory(t) { return new (t || FormationDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_formation_service__WEBPACK_IMPORTED_MODULE_0__.FormationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__.QuizService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_attachment_service__WEBPACK_IMPORTED_MODULE_2__.AttachmentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
FormationDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FormationDetailComponent, selectors: [["app-formation-detail"]], decls: 12, vars: 6, consts: [[1, "max-w-6xl", "mx-auto"], [1, "mt-10"], [1, "px-8", "py-4"], [1, "text-3xl", "font-bold", "text-gray-800"], [1, "mt-1", "text-sm", "text-gray-600"], ["class", "flex justify-center items-center py-20", 4, "ngIf"], ["class", "p-4 max-w-4xl mx-auto", 4, "ngIf"], ["class", "p-8", 4, "ngIf"], [1, "fixed", "bottom-8", "right-8", "bg-primary", "text-white", "rounded-full", "p-4", "shadow-lg", "hover:bg-primary-dark", "transition-colors", 3, "routerLink"], [1, "fas", "fa-edit", "text-xl"], [1, "flex", "justify-center", "items-center", "py-20"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-t-2", "border-b-2", "border-primary"], [1, "p-4", "max-w-4xl", "mx-auto"], ["role", "alert", 1, "bg-red-100", "border", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative"], [1, "font-bold"], [1, "block", "sm:inline"], [1, "p-8"], [1, "bg-white", "shadow-md", "rounded-lg", "overflow-hidden"], [1, "border-b", "border-gray-200"], [1, "flex", "-mb-px"], [1, "py-4", "px-6", "font-medium", "text-sm", "border-b-2", "focus:outline-none", 3, "ngClass", "click"], [1, "p-6"], [4, "ngIf"], ["class", "space-y-8", 4, "ngIf"], [1, "text-2xl", "font-bold", "mb-6"], [1, "grid", "grid-cols-1", "gap-6"], [1, "block", "text-sm", "font-medium", "text-gray-700"], [1, "mt-1", "p-2", "bg-gray-50", "rounded-md", "border", "border-gray-200"], [1, "mt-1", "p-2", "bg-gray-50", "rounded-md", "border", "border-gray-200", "min-h-[80px]"], [1, "mt-1", "p-2", "bg-gray-50", "rounded-md", "border", "border-gray-200", "min-h-[120px]"], ["class", "mt-6 p-4 bg-gray-50 rounded-lg", 4, "ngIf"], [1, "mt-6", "p-4", "bg-gray-50", "rounded-lg"], [1, "block", "text-lg", "font-medium", "text-gray-700", "mb-2"], [1, "flex", "items-center", "justify-between", "bg-white", "p-3", "rounded", "border", "border-gray-200"], [1, "flex", "items-center"], [1, "fas", "fa-award", "text-primary", "mr-2"], [1, "text-sm", "font-medium"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold"], [1, "overflow-x-auto"], [1, "min-w-full", "divide-y", "divide-gray-200"], [1, "bg-gray-50"], ["scope", "col", 1, "px-6", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "bg-white", "divide-y", "divide-gray-200"], [4, "ngFor", "ngForOf"], [1, "px-6", "py-4", "whitespace-nowrap"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-500"], [1, "px-2", "inline-flex", "text-xs", "leading-5", "font-semibold", "rounded-full", 3, "ngClass"], ["colspan", "4", 1, "px-6", "py-4", "text-center", "text-sm", "text-gray-500"], [1, "space-y-8"], [1, "mb-8"], [1, "text-xl", "font-bold", "mb-4"], [1, "p-3", "bg-gray-50", "rounded-md", "border", "border-gray-200"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], ["class", "p-3 bg-gray-50 rounded-md border border-gray-200", 4, "ngFor", "ngForOf"], ["class", "col-span-3 text-center text-gray-500 p-4", 4, "ngIf"], [1, "font-medium"], ["class", "text-sm text-gray-500", 4, "ngIf"], [1, "col-span-3", "text-center", "text-gray-500", "p-4"], [1, "space-y-6"], ["class", "bg-gray-50 p-4 rounded-lg border border-gray-200", 4, "ngFor", "ngForOf"], ["class", "text-center py-8 text-gray-500", 4, "ngIf"], [1, "bg-gray-50", "p-4", "rounded-lg", "border", "border-gray-200"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "flex-1"], [1, "text-lg", "font-semibold"], [1, "text-gray-600", "mt-1"], ["class", "mt-3 p-2 bg-white rounded border border-gray-200 inline-flex items-center", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], ["class", "mt-4 text-sm text-gray-500", 4, "ngIf"], [1, "mt-3", "p-2", "bg-white", "rounded", "border", "border-gray-200", "inline-flex", "items-center"], [1, "fas", "fa-question-circle", "text-primary", "mr-2"], [1, "mt-4"], [1, "text-md", "font-medium", "mb-2"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-2"], ["target", "_blank", "class", "flex items-center p-2 bg-white rounded border border-gray-200 hover:border-primary", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "flex", "items-center", "p-2", "bg-white", "rounded", "border", "border-gray-200", "hover:border-primary", 3, "href"], ["alt", "File Icon", 1, "w-6", "h-6", "mr-2", 3, "src"], [1, "text-sm"], [1, "mt-4", "text-sm", "text-gray-500"], [1, "text-center", "py-8", "text-gray-500"], [3, "formationId", 4, "ngIf"], [3, "formationId"]], template: function FormationDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "D\u00E9tails de la formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Consultez les informations de la formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FormationDetailComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, FormationDetailComponent_div_8_Template, 6, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FormationDetailComponent_div_9_Template, 20, 25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formation && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c2, ctx.formation == null ? null : ctx.formation.id));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _shared_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_3__.QuizResultsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: [".nosession-group[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.nosession-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: -100px;\n  transform: translateY(-50%);\n  transition: right 0.5s ease-in-out;\n}\n.nosession-group[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1hdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0FBQ1I7QUFHUTtFQUNJLFdBQUE7QUFEWiIsImZpbGUiOiJmb3JtYXRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vc2Vzc2lvbi1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBidXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogLTEwMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7IC8vIFNtb290aCBtb3ZlbWVudFxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 422:
/*!****************************************************************!*\
  !*** ./src/app/admin/formation/training/training.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingComponent": () => (/* binding */ TrainingComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_formation_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/formation.constants */ 7798);
/* harmony import */ var src_app_shared_components_session_popup_session_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/session-popup/session-popup.component */ 5952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_formation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/formation.service */ 5061);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toaster.service */ 9140);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_training_card_training_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/training-card/training-card.component */ 7334);










function TrainingComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 11);
} }
function TrainingComponent__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "circle", 13)(2, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TrainingComponent_div_14_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", category_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](category_r6);
} }
function TrainingComponent_div_14_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31)(1, "app-training-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("edit", function TrainingComponent_div_14_div_16_Template_app_training_card_edit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.handleEditTraining($event)); })("delete", function TrainingComponent_div_14_div_16_Template_app_training_card_delete_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const training_r7 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.deleteFormation(training_r7.id)); })("addSession", function TrainingComponent_div_14_div_16_Template_app_training_card_addSession_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.handleAddSession($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const training_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("training", training_r7)("canEdit", true)("canDelete", true);
} }
function TrainingComponent_div_14_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Aucune formation ne correspond \u00E0 votre recherche.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TrainingComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TrainingComponent_div_14_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.searchTerm = $event); })("input", function TrainingComponent_div_14_Template_input_input_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.onSearch($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 22)(8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TrainingComponent_div_14_Template_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.filterCategory = $event); })("change", function TrainingComponent_div_14_Template_select_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.onFilterCategory($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Toutes les cat\u00E9gories");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TrainingComponent_div_14_option_14_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, TrainingComponent_div_14_div_16_Template, 2, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, TrainingComponent_div_14_div_17_Template, 3, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.filterCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.filteredTrainings);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.filteredTrainings.length === 0 && !ctx_r2.isLoading);
} }
class TrainingComponent {
    constructor(formationService, dialog, toaster, router) {
        this.formationService = formationService;
        this.dialog = dialog;
        this.toaster = toaster;
        this.router = router;
        this.categories = src_app_core_constants_formation_constants__WEBPACK_IMPORTED_MODULE_0__.FORMATION_CATEGORIES;
        this.trainings = [];
        this.searchTerm = '';
        this.isFormOpen = false;
        this.currentTraining = null;
        this.filterCategory = '';
        this.isLoading = false;
    }
    get filteredTrainings() {
        return this.trainings.filter(training => training.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
            (this.filterCategory === '' || training.category === this.filterCategory));
    }
    onSearch(event) {
        this.searchTerm = event.target.value;
    }
    onFilterCategory(event) {
        this.filterCategory = event.target.value;
    }
    handleEditTraining(id) {
        this.router.navigate(['/admin/formations/edit', id]);
    }
    handleDeleteTraining(id) {
        // if (window.confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
        //   this.trainings = this.trainings.filter(t => t.id !== id);
        // }
    }
    handleAddSession(id) {
        const dialogRef = this.dialog.open(src_app_shared_components_session_popup_session_popup_component__WEBPACK_IMPORTED_MODULE_1__.SessionPopupComponent, {
            data: { formationId: id }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.fetchFormations();
            }
        });
    }
    ngOnInit() {
        this.fetchFormations();
    }
    fetchFormations() {
        this.isLoading = true;
        this.formationService.getFormations().subscribe(formations => {
            this.trainings = formations;
            this.isLoading = false;
        }, error => {
            this.isLoading = false;
            console.error('Erreur lors de la récupération des formations', error);
        });
    }
    deleteFormation(id) {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
            this.formationService.deleteFormation(id).subscribe(() => {
                this.fetchFormations();
                this.toaster.showSuccess('Formation supprimée', 'La formation a été supprimée avec succès.');
            }, error => {
                console.error('Erreur lors de la suppression de la formation', error);
                this.toaster.showError('Erreur', 'Une erreur est survenue lors de la suppression de la formation.');
            });
        }
    }
}
TrainingComponent.ɵfac = function TrainingComponent_Factory(t) { return new (t || TrainingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_formation_service__WEBPACK_IMPORTED_MODULE_2__.FormationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
TrainingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TrainingComponent, selectors: [["app-training"]], decls: 15, vars: 5, consts: [[1, "animate-fade-in", "container", "mx-auto", "p-6"], [1, "flex", "justify-between", "items-center", "mb-8"], [1, "text-3xl", "font-bold", "text-gray-800"], [1, "flex", "gap-3"], [1, "px-4", "py-2", "bg-gray-100", "text-gray-700", "rounded-lg", "shadow-sm", "text-sm", "font-medium", "hover:bg-gray-200", "transition-colors", "flex", "items-center", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled", "click"], ["class", "fa-solid fa-rotate-right mr-2", 4, "ngIf"], ["class", "animate-spin h-4 w-4 mr-2", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["routerLink", "/admin/formations/create", 1, "px-4", "py-2", "bg-primary", "text-white", "rounded-lg", "shadow-sm", "text-sm", "font-medium", "hover:bg-primary-dark", "flex", "items-center", "space-x-2", "transition-colors"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-5", "h-5"], ["fill-rule", "evenodd", "d", "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z", "clip-rule", "evenodd"], ["class", "space-y-6", 4, "ngIf"], [1, "fa-solid", "fa-rotate-right", "mr-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4", "mr-2"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "space-y-3", "md:space-y-0", "md:space-x-4"], [1, "relative", "flex-grow"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-5", "h-5", "text-gray-400"], ["fill-rule", "evenodd", "d", "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", "clip-rule", "evenodd"], ["type", "text", "placeholder", "Rechercher une formation...", 1, "pl-10", "w-full", "p-3", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", 3, "ngModel", "ngModelChange", "input"], [1, "relative"], ["fill-rule", "evenodd", "d", "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3.586L3.293 6.707A1 1 0 013 6V3z", "clip-rule", "evenodd"], [1, "h-full", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "appearance-none", "bg-gray-50", "text-gray-900", "pr-10", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "col-span-1", 4, "ngFor", "ngForOf"], ["class", "text-center py-10", 4, "ngIf"], [3, "value"], [1, "col-span-1"], [3, "training", "canEdit", "canDelete", "edit", "delete", "addSession"], [1, "text-center", "py-10"], [1, "text-gray-500", "text-lg"]], template: function TrainingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Gestion des formations");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrainingComponent_Template_button_click_5_listener() { return ctx.fetchFormations(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TrainingComponent_i_6_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TrainingComponent__svg_svg_7_Template, 3, 0, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Nouvelle formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TrainingComponent_div_14_Template, 18, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Actualisation..." : "Actualiser", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isFormOpen);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _shared_training_card_training_card_component__WEBPACK_IMPORTED_MODULE_4__.TrainingCardComponent], styles: [".animate-fade-in[_ngcontent-%COMP%] {\n  animation: fadeIn 0.5s ease-in;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.primary[_ngcontent-%COMP%] {\n  background-color: #4a90e2;\n  \n}\n\n.primary-dark[_ngcontent-%COMP%] {\n  background-color: #357abd;\n  \n}\n\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: var(--radius);\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n  padding: 0.75rem;\n}\n\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: transparent;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-color: hsl(var(--primary));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksVUFBQTtFQUNOO0VBRUU7SUFDSSxVQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFLSTtFQUFBLFdBQUE7RUFBQSw0QkFBQTtFQUFBLGlCQUFBO0VBQUEsc0JBQUE7RUFBQSw0REFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSx5QkFBQTtFQUFBLDJHQUFBO0VBQUEseUdBQUE7RUFBQSw0RkFBQTtFQUFBO0FBQUEiLCJmaWxlIjoidHJhaW5pbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5pbWF0ZS1mYWRlLWluIHtcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW47XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4ucHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhOTBlMjtcbiAgICAvKiBFeGFtcGxlIHByaW1hcnkgY29sb3IgKi9cbn1cblxuLnByaW1hcnktZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1N2FiZDtcbiAgICAvKiBEYXJrZXIgc2hhZGUgZm9yIGhvdmVyICovXG59XG5cbi5mb3JtLWlucHV0IHtcbiAgICBAYXBwbHkgdy1mdWxsIHAtMyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHJpbWFyeSBmb2N1czpib3JkZXItdHJhbnNwYXJlbnQ7XG59Il19 */"] });


/***/ }),

/***/ 9302:
/*!********************************************************************************!*\
  !*** ./src/app/admin/formation/update-formation/update-formation.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateFormationComponent": () => (/* binding */ UpdateFormationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_constants_formation_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/formation.constants */ 7798);
/* harmony import */ var src_app_core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/roles.constants */ 8843);
/* harmony import */ var src_app_core_services_sesssions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/sesssions.service */ 4344);
/* harmony import */ var src_app_shared_components_select_group_popup_select_group_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/select-group-popup/select-group-popup.component */ 1905);
/* harmony import */ var src_app_shared_components_select_quiz_select_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/select-quiz/select-quiz.component */ 8802);
/* harmony import */ var src_app_shared_components_session_popup_session_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/session-popup/session-popup.component */ 5952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_formation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/formation.service */ 5061);
/* harmony import */ var src_app_core_services_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/group.service */ 7297);
/* harmony import */ var src_app_core_services_attachment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/attachment.service */ 7480);
/* harmony import */ var src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/quiz.service */ 6920);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/toaster.service */ 9140);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);


















function UpdateFormationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 7)(1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function UpdateFormationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 7)(1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Formation non trouv\u00E9e.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function UpdateFormationComponent_div_9_div_15_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Le titre est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UpdateFormationComponent_div_9_div_15_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Le titre doit contenir au moins 3 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UpdateFormationComponent_div_9_div_15_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UpdateFormationComponent_div_9_div_15_div_9_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, UpdateFormationComponent_div_9_div_15_div_9_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r8.formationForm.get("title")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r8.formationForm.get("title")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]);
} }
function UpdateFormationComponent_div_9_div_15_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "La description est requise.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UpdateFormationComponent_div_9_div_15_div_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "La description doit contenir au moins 10 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UpdateFormationComponent_div_9_div_15_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UpdateFormationComponent_div_9_div_15_div_14_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, UpdateFormationComponent_div_9_div_15_div_14_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r9.formationForm.get("description")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r9.formationForm.get("description")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]);
} }
function UpdateFormationComponent_div_9_div_15_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Le contenu est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UpdateFormationComponent_div_9_div_15_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UpdateFormationComponent_div_9_div_15_div_19_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r10.formationForm.get("content")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
} }
function UpdateFormationComponent_div_9_div_15_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_15_div_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r19.openFinalQuizSelectionDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " S\u00E9lectionner un quiz final ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function UpdateFormationComponent_div_9_div_15_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 40)(6, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_15_div_27_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r21.openFinalQuizSelectionDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_15_div_27_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r23.removeFinalQuiz()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r12.getQuizTitle((tmp_0_0 = ctx_r12.formationForm.get("finalQuizId")) == null ? null : tmp_0_0.value));
} }
function UpdateFormationComponent_div_9_div_15_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 45)(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_15_div_28_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r24.cancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Mettre \u00E0 jour ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r13.formationForm.invalid || ctx_r13.isLoading);
} }
function UpdateFormationComponent_div_9_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function UpdateFormationComponent_div_9_div_15_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r26.updateContent()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Informations de base");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 19)(5, "div")(6, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Titre");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, UpdateFormationComponent_div_9_div_15_div_9_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div")(11, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, UpdateFormationComponent_div_9_div_15_div_14_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div")(16, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Contenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, UpdateFormationComponent_div_9_div_15_div_19_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 25)(21, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "Quiz final");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, " Le quiz final est pr\u00E9sent\u00E9 \u00E0 la fin de la formation et d\u00E9termine si l'utilisateur a r\u00E9ussi la formation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, UpdateFormationComponent_div_9_div_15_div_26_Template, 4, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, UpdateFormationComponent_div_9_div_15_div_27_Template, 10, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, UpdateFormationComponent_div_9_div_15_div_28_Template, 5, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r3.formationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r3.formationForm.get("title")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r3.formationForm.get("title")) == null ? null : tmp_1_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r3.formationForm.get("description")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r3.formationForm.get("description")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r3.formationForm.get("content")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r3.formationForm.get("content")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !((tmp_4_0 = ctx_r3.formationForm.get("finalQuizId")) == null ? null : tmp_4_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r3.formationForm.get("finalQuizId")) == null ? null : tmp_5_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.formationForm.dirty);
} }
function UpdateFormationComponent_div_9_div_16_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "bg-green-100 text-green-800": a0, "bg-yellow-100 text-yellow-800": a1, "bg-gray-100 text-gray-800": a2 }; };
function UpdateFormationComponent_div_9_div_16_div_8_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 62)(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td", 62)(5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td", 62)(9, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "td", 62)(13, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "td", 66)(16, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_16_div_8_tr_15_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r34); const session_r32 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r33.editSession(session_r32)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_16_div_8_tr_15_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r34); const session_r32 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r35.deleteSession(session_r32)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const session_r32 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](session_r32.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 5, session_r32.startDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 7, session_r32.endDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](9, _c0, ctx_r30.getSessionStatus(session_r32) === "En cours", ctx_r30.getSessionStatus(session_r32) === "Pas encore", ctx_r30.getSessionStatus(session_r32) === "Termin\u00E9e"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r30.getSessionStatus(session_r32), " ");
} }
function UpdateFormationComponent_div_9_div_16_div_8_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Aucune session disponible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function UpdateFormationComponent_div_9_div_16_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 56)(1, "table", 57)(2, "thead", 58)(3, "tr")(4, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Titre");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Date de d\u00E9but");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " Date de fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, " Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "tbody", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, UpdateFormationComponent_div_9_div_16_div_8_tr_15_Template, 20, 13, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, UpdateFormationComponent_div_9_div_16_div_8_tr_16_Template, 3, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r29.formation.sessions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r29.formation.sessions.length === 0);
} }
function UpdateFormationComponent_div_9_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 48)(2, "h2", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_16_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r36.openSessionDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " Ajouter une session ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, UpdateFormationComponent_div_9_div_16_div_7_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, UpdateFormationComponent_div_9_div_16_div_8_Template, 17, 2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.isLoadingSessions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r4.isLoadingSessions);
} }
function UpdateFormationComponent_div_9_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "label", 81)(3, "div", 82)(4, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const category_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", "category-" + category_r42)("value", category_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", "category-" + category_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](category_r42);
} }
function UpdateFormationComponent_div_9_div_17_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 86)(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_17_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r43.resetCategory()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Mettre \u00E0 jour ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r39.categoryForm.invalid);
} }
function UpdateFormationComponent_div_9_div_17_div_13_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](group_r45.description);
} }
function UpdateFormationComponent_div_9_div_17_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 87)(1, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function UpdateFormationComponent_div_9_div_17_div_13_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49); const group_r45 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r48.toggleGroup(group_r45.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "label", 89)(3, "div", 90)(4, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, UpdateFormationComponent_div_9_div_17_div_13_span_6_Template, 2, 1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const group_r45 = ctx.$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", "group-" + group_r45.id)("checked", ctx_r40.groupIdsArray.value.includes(group_r45.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", "group-" + group_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](group_r45.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", group_r45.description);
} }
function UpdateFormationComponent_div_9_div_17_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 86)(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_17_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r50.resetGroupsForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Mettre \u00E0 jour ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r41.groupForm.invalid);
} }
function UpdateFormationComponent_div_9_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 72)(1, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function UpdateFormationComponent_div_9_div_17_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r52.updateCategory()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 73)(3, "h3", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, UpdateFormationComponent_div_9_div_17_div_6_Template, 8, 4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, UpdateFormationComponent_div_9_div_17_div_7_Template, 5, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function UpdateFormationComponent_div_9_div_17_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r54.updateGroups()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div")(10, "h3", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Groupes cibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, UpdateFormationComponent_div_9_div_17_div_13_Template, 9, 5, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, UpdateFormationComponent_div_9_div_17_div_14_Template, 5, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r5.categoryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r5.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.categoryForm.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r5.groupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r5.groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.groupIdsArray.dirty);
} }
function UpdateFormationComponent_div_9_div_18_div_9_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_18_div_9_div_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r69); const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r67.openQuizSelectionDialog(i_r59)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " S\u00E9lectionner un quiz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function UpdateFormationComponent_div_9_div_18_div_9_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 122)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 40)(6, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_18_div_9_div_17_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r72); const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r70.openQuizSelectionDialog(i_r59)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_18_div_9_div_17_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r72); const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r73.removeQuiz(i_r59)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const module_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r61.getQuizTitle((tmp_0_0 = module_r58.get("quizId")) == null ? null : tmp_0_0.value));
} }
function UpdateFormationComponent_div_9_div_18_div_9_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 126)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_18_div_9_div_21_div_1_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r81); const attachment_r77 = restoredCtx.$implicit; const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).index; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r79.deleteAttachment(i_r59, attachment_r77.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const attachment_r77 = ctx.$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r76.getFileIcon(attachment_r77.type), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("href", attachment_r77.lien, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r76.getFileName(attachment_r77.lien) || "Fichier " + attachment_r77.type, " ");
} }
function UpdateFormationComponent_div_9_div_18_div_9_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UpdateFormationComponent_div_9_div_18_div_9_div_21_div_1_Template, 7, 3, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r62.getModuleAttachments(i_r59));
} }
function UpdateFormationComponent_div_9_div_18_div_9_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 129)(1, "div", 33)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_18_div_9_div_28_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r85); const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r83.uploadFile(i_r59)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " T\u00E9l\u00E9charger ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r64.selectedFiles[i_r59].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r64.formatFileSize(ctx_r64.selectedFiles[i_r59].size));
} }
function UpdateFormationComponent_div_9_div_18_div_9_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 134)(1, "p", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Formats accept\u00E9s: PDF, Word, Excel, PowerPoint, images et vid\u00E9os ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function UpdateFormationComponent_div_9_div_18_div_9_div_30_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "T\u00E9l\u00E9chargement en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UpdateFormationComponent_div_9_div_18_div_9_div_30_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " T\u00E9l\u00E9chargement r\u00E9ussi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UpdateFormationComponent_div_9_div_18_div_9_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 134)(1, "div", 135)(2, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 138)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, UpdateFormationComponent_div_9_div_18_div_9_div_30_span_7_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, UpdateFormationComponent_div_9_div_18_div_9_div_30_span_8_Template, 3, 0, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("width", ctx_r66.uploadProgress[i_r59], "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r66.uploadProgress[i_r59], "% termin\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r66.uploadProgress[i_r59] < 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r66.uploadProgress[i_r59] === 100);
} }
function UpdateFormationComponent_div_9_div_18_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 100)(1, "div", 101)(2, "div", 33)(3, "div", 102)(4, "div")(5, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Titre");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div")(9, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "textarea", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div")(13, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Quiz associ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, UpdateFormationComponent_div_9_div_18_div_9_div_16_Template, 4, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, UpdateFormationComponent_div_9_div_18_div_9_div_17_Template, 10, 1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div")(19, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Pi\u00E8ces jointes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, UpdateFormationComponent_div_9_div_18_div_9_div_21_Template, 2, 1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 107)(23, "input", 108, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function UpdateFormationComponent_div_9_div_18_div_9_Template_input_change_23_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r91); const i_r59 = restoredCtx.index; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r90.onFileSelected($event, i_r59)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_18_div_9_Template_label_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r91); const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](24); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r63.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, " Ajouter un fichier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, UpdateFormationComponent_div_9_div_18_div_9_div_28_Template, 11, 2, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, UpdateFormationComponent_div_9_div_18_div_9_div_29_Template, 3, 0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, UpdateFormationComponent_div_9_div_18_div_9_div_30_Template, 9, 5, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 114)(32, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_18_div_9_Template_button_click_34_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r91); const i_r59 = restoredCtx.index; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r93.moveModule(i_r59, i_r59 - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](35, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_18_div_9_Template_button_click_36_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r91); const i_r59 = restoredCtx.index; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r94.moveModule(i_r59, i_r59 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_18_div_9_Template_button_click_38_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r91); const i_r59 = restoredCtx.index; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r95.removeModule(i_r59)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](39, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const module_r58 = ctx.$implicit;
    const i_r59 = ctx.index;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    let tmp_1_0;
    let tmp_2_0;
    let tmp_10_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !((tmp_1_0 = module_r58.get("quizId")) == null ? null : tmp_1_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_2_0 = module_r58.get("quizId")) == null ? null : tmp_2_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r55.getModuleAttachments(i_r59).length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("for", "file-upload-", i_r59, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r55.selectedFiles[i_r59]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r55.selectedFiles[i_r59] && !ctx_r55.isUploading[i_r59]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r55.isUploading[i_r59]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", i_r59 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", i_r59 === ctx_r55.modules.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Position: ", (tmp_10_0 = module_r58.get("position")) == null ? null : tmp_10_0.value, " ");
} }
function UpdateFormationComponent_div_9_div_18_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Aucun module disponible. Cliquez sur \"Ajouter un module\" pour commencer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UpdateFormationComponent_div_9_div_18_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 143)(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_18_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r96.loadData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_18_div_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r97); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r98.updateModules()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Enregistrer les modules ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function UpdateFormationComponent_div_9_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "form", 95)(2, "div", 48)(3, "h2", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Modules");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_div_18_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r99.addModule()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Ajouter un module ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, UpdateFormationComponent_div_9_div_18_div_9_Template, 42, 11, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, UpdateFormationComponent_div_9_div_18_div_10_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, UpdateFormationComponent_div_9_div_18_div_11_Template, 5, 0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r6.modulesForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.modules.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.modules.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.modules.dirty);
} }
function UpdateFormationComponent_div_9_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "R\u00E9sultats de formation");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 145)(4, "p", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Les r\u00E9sultats de formation seront affich\u00E9s ici.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} }
const _c1 = function (a0, a1) { return { "border-primary text-primary": a0, "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": a1 }; };
function UpdateFormationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "nav", 12)(4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r101.setActiveTab("info")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Informations de base ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r102); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r103.setActiveTab("sessions")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Sessions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r102); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r104.setActiveTab("groups")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " Groupes et Cat\u00E9gorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r102); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r105.setActiveTab("modules")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " Modules ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UpdateFormationComponent_div_9_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r102); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r106.setActiveTab("results")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, " R\u00E9sultats de formation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, UpdateFormationComponent_div_9_div_15_Template, 29, 7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, UpdateFormationComponent_div_9_div_16_Template, 9, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, UpdateFormationComponent_div_9_div_17_Template, 15, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, UpdateFormationComponent_div_9_div_18_Template, 12, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, UpdateFormationComponent_div_9_div_19_Template, 6, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](10, _c1, ctx_r2.activeTab === "info", ctx_r2.activeTab !== "info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](13, _c1, ctx_r2.activeTab === "sessions", ctx_r2.activeTab !== "sessions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](16, _c1, ctx_r2.activeTab === "groups", ctx_r2.activeTab !== "groups"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](19, _c1, ctx_r2.activeTab === "modules", ctx_r2.activeTab !== "modules"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](22, _c1, ctx_r2.activeTab === "results", ctx_r2.activeTab !== "results"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.activeTab === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.activeTab === "sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.activeTab === "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.activeTab === "modules");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.activeTab === "results");
} }
class UpdateFormationComponent {
    constructor(fb, formationService, groupService, attachmentService, sessionsService, quizService, route, router, toaster, dialog) {
        this.fb = fb;
        this.formationService = formationService;
        this.groupService = groupService;
        this.attachmentService = attachmentService;
        this.sessionsService = sessionsService;
        this.quizService = quizService;
        this.route = route;
        this.router = router;
        this.toaster = toaster;
        this.dialog = dialog;
        this.categories = src_app_core_constants_formation_constants__WEBPACK_IMPORTED_MODULE_0__.FORMATION_CATEGORIES;
        this.availableRoles = [
            src_app_core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__.UserRole.Administrator,
            src_app_core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__.UserRole.HierarchicalLeader,
            src_app_core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__.UserRole.TeamLeader,
            src_app_core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__.UserRole.PostLeader,
            src_app_core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__.UserRole.QualityAgent,
            src_app_core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_1__.UserRole.Manager
        ];
        this.formation = null;
        this.groups = [];
        this.quizzes = [];
        this.isLoading = true;
        this.activeTab = 'info';
        this.selectedFiles = {};
        this.uploadProgress = {};
        this.isUploading = {};
        this.scrollPosition = 0;
        this.isLoadingSessions = false;
        this.subscriptions = [];
        this.formationId = +this.route.snapshot.paramMap.get('id');
        this.formationForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(3)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(10)]],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            finalQuizId: [null]
        });
        this.categoryForm = this.fb.group({
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]
        });
        this.groupForm = this.fb.group({
            groupIds: this.fb.array([])
        });
        this.modulesForm = this.fb.group({
            modules: this.fb.array([])
        });
    }
    get groupIdsArray() {
        return this.groupForm.get('groupIds');
    }
    get groupsChanged() {
        const currentIds = this.groupIdsArray.value;
        const originalIds = this.formation?.groups.map(g => g.id) || [];
        return currentIds.length !== originalIds.length ||
            currentIds.some((id) => !originalIds.includes(id));
    }
    ngOnInit() {
        // Get query parameters
        const queryParamsSub = this.route.queryParams.subscribe(queryParams => {
            // Get active tab from URL or use default
            if (queryParams['tab']) {
                this.activeTab = queryParams['tab'];
            }
            // Get scroll position from URL or use default
            if (queryParams['scroll']) {
                this.scrollPosition = +queryParams['scroll'];
                // Apply scroll position after a short delay to ensure the DOM is ready
                setTimeout(() => {
                    window.scrollTo(0, this.scrollPosition);
                }, 100);
            }
        });
        this.subscriptions.push(queryParamsSub);
        this.loadData();
        this.loadGroups();
        this.loadQuizzes();
        // Listen for scroll events to update scroll position
        window.addEventListener('scroll', this.onScroll.bind(this));
    }
    /**
     * Load all available quizzes
     */
    loadQuizzes() {
        this.quizService.getQuizzes().subscribe({
            next: (quizzes) => {
                this.quizzes = quizzes;
            },
            error: (error) => {
                console.error('Error loading quizzes:', error);
                this.toaster.showError('Erreur', 'Impossible de charger les quiz.');
            }
        });
    }
    /**
     * Handle scroll events
     */
    onScroll() {
        // Debounce scroll events to avoid too many updates
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
            this.scrollPosition = window.scrollY;
            this.updateUrlParams();
        }, 100);
    }
    /**
     * Update URL parameters without reloading the page
     */
    updateUrlParams() {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {
                tab: this.activeTab,
                scroll: Math.round(this.scrollPosition)
            },
            queryParamsHandling: 'merge',
            replaceUrl: true // Replace the URL instead of adding a new history entry
        });
    }
    /**
     * Change active tab and update URL
     * @param tabName Name of the tab to activate
     */
    setActiveTab(tabName) {
        this.activeTab = tabName;
        this.updateUrlParams();
    }
    /**
     * Clean up event listeners and subscriptions
     */
    ngOnDestroy() {
        // Remove scroll event listener
        window.removeEventListener('scroll', this.onScroll.bind(this));
        // Unsubscribe from all subscriptions
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    /**
     * Open dialog to create a new session
     */
    openSessionDialog() {
        const dialogRef = this.dialog.open(src_app_shared_components_session_popup_session_popup_component__WEBPACK_IMPORTED_MODULE_5__.SessionPopupComponent, {
            width: '500px',
            data: { formationId: this.formationId }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                // If we got a result, refresh the formation data to show the new session
                this.loadData();
                this.toaster.showSuccess('Succès', 'Session créée avec succès');
            }
        });
    }
    /**
     * Open dialog to edit an existing session
     * @param session The session to edit
     */
    editSession(session) {
        const dialogRef = this.dialog.open(src_app_shared_components_session_popup_session_popup_component__WEBPACK_IMPORTED_MODULE_5__.SessionPopupComponent, {
            width: '500px',
            data: {
                formationId: this.formationId,
                session: session
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                // If we got a result, refresh the formation data to show the updated session
                this.loadData();
                this.toaster.showSuccess('Succès', 'Session mise à jour avec succès');
            }
        });
    }
    /**
     * Delete a session
     * @param session The session to delete
     */
    deleteSession(session) {
        if (confirm(`Êtes-vous sûr de vouloir supprimer la session "${session.title}" ? Cette action est irréversible.`)) {
            this.isLoadingSessions = true;
            this.sessionsService.deleteSession(session.id).subscribe({
                next: () => {
                    this.toaster.showSuccess('Succès', 'Session supprimée avec succès');
                    this.loadData();
                },
                error: (error) => {
                    console.error('Error deleting session:', error);
                    this.toaster.handleHttpError(error);
                    this.isLoadingSessions = false;
                }
            });
        }
    }
    /**
     * Get the status of a session
     * @param session The session to check
     * @returns The status of the session (En cours, Terminée, Pas encore)
     */
    getSessionStatus(session) {
        const now = new Date();
        const startDate = new Date(session.startDate);
        const endDate = new Date(session.endDate);
        if (now > endDate) {
            return 'Terminée';
        }
        else if (now < startDate) {
            return 'Pas encore';
        }
        else {
            return 'En cours';
        }
    }
    loadData() {
        this.isLoading = true;
        this.isLoadingSessions = true;
        this.formationService.getFormation(this.formationId).subscribe({
            next: (formation) => {
                this.formation = formation;
                this.populateForm(formation);
                this.categoryForm.patchValue({
                    category: formation.category
                });
                this.groupIdsArray.clear();
                formation.groups.forEach(group => {
                    this.groupIdsArray.push(this.fb.control(group.id));
                });
                // Clear modules array before adding new modules
                this.modules.clear();
                formation.modules.forEach(module => {
                    this.pushModule(module);
                });
                this.isLoading = false;
                this.isLoadingSessions = false;
            },
            error: (error) => {
                console.error('Error loading formation:', error);
                this.toaster.showError('Erreur', 'Impossible de charger la formation.');
                this.isLoading = false;
                this.isLoadingSessions = false;
            }
        });
    }
    loadGroups() {
        this.groupService.getGroups().subscribe({
            next: (groups) => {
                this.groups = groups;
            },
            error: (error) => {
                console.error('Error loading groups:', error);
                this.toaster.showError('Erreur', 'Impossible de charger les groupes.');
            }
        });
    }
    populateForm(formation) {
        this.formationForm.patchValue({
            title: formation.title,
            description: formation.description,
            content: formation.content,
            finalQuizId: formation.finalQuizId
        });
        this.formationForm.markAsPristine();
    }
    toggleGroup(groupId) {
        const index = this.groupIdsArray.controls.findIndex(ctrl => ctrl.value === groupId);
        if (index !== -1) {
            this.groupIdsArray.removeAt(index);
        }
        else {
            this.groupIdsArray.push(this.fb.control(groupId));
        }
        this.groupIdsArray.markAsDirty();
    }
    resetGroupsForm() {
        this.groupIdsArray.clear();
        this.formation?.groups.forEach(group => {
            this.groupIdsArray.push(this.fb.control(group.id));
        });
        this.groupIdsArray.markAsPristine();
    }
    resetCategory() {
        this.categoryForm.patchValue({
            category: this.formation?.category
        });
    }
    cancel() {
        this.router.navigate(['/admin/formations']);
    }
    openGroupSelectionDialog() {
        const dialogRef = this.dialog.open(src_app_shared_components_select_group_popup_select_group_popup_component__WEBPACK_IMPORTED_MODULE_3__.SelectGroupPopupComponent, {
            width: '500px',
            data: {
                groups: this.groups,
                multiSelect: true
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log(result);
                // Apply selected groups from dialog (optional)
            }
        });
    }
    updateContent() {
        // Get the raw form value including disabled fields
        const formData = {
            ...this.formationForm.getRawValue()
        };
        this.formationService.updateFormationContent(this.formationId, formData).subscribe({
            next: () => {
                this.toaster.showSuccess('Succès', 'Contenu de la formation mis à jour avec succès');
                this.loadData(); // Refresh the data
            },
            error: (error) => {
                this.toaster.handleHttpError(error);
            }
        });
    }
    updateCategory() {
        this.formationService.updateFormationCategory(this.formationId, this.categoryForm.value).subscribe({
            next: () => {
                this.toaster.showSuccess('Success', 'Formation category updated successfully');
                this.loadData(); // Refresh the data
            },
            error: (error) => {
                this.toaster.handleHttpError(error);
            }
        });
    }
    updateGroups() {
        this.formationService.updateFormationGroups(this.formationId, this.groupForm.value).subscribe({
            next: () => {
                this.toaster.showSuccess('Success', 'Formation groups updated successfully');
                this.loadData(); // Refresh the data
            },
            error: (error) => {
                this.toaster.handleHttpError(error);
            }
        });
    }
    get modules() {
        return this.modulesForm.get('modules');
    }
    createModuleFormGroup() {
        return this.fb.group({
            id: [null],
            formationId: [this.formationId],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(3)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(10)]],
            position: [this.modules.length + 1, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            quizId: [null]
        });
    }
    addModule() {
        this.modules.push(this.createModuleFormGroup());
        this.updateModulePositions();
    }
    removeModule(index) {
        this.modules.removeAt(index);
        this.updateModulePositions();
    }
    updateModulePositions() {
        this.modules.controls.forEach((control, index) => {
            control.patchValue({ position: index + 1 });
        });
    }
    moveModule(fromIndex, toIndex) {
        const module = this.modules.at(fromIndex);
        this.modules.removeAt(fromIndex);
        this.modules.insert(toIndex, module);
        this.updateModulePositions();
    }
    pushModule(module) {
        this.modules.push(this.fb.group({
            id: [module.id],
            formationId: [module.formationId],
            title: [module.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(3)]],
            description: [module.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(10)]],
            position: [module.position, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            quizId: [module.quizId]
        }));
    }
    updateModules() {
        if (this.modulesForm.valid) {
            this.formationService.updateFormationModules(this.formationId, this.modulesForm.value).subscribe({
                next: () => {
                    this.toaster.showSuccess('Succès', 'Modules mis à jour avec succès');
                    this.loadData(); // Refresh the data
                },
                error: (error) => {
                    this.toaster.handleHttpError(error);
                }
            });
        }
        else {
            this.modulesForm.markAllAsTouched();
            this.toaster.showError('Erreur', 'Veuillez remplir tous les champs requis.');
        }
    }
    /**
     * Get attachments for a specific module
     * @param moduleIndex Index of the module in the form array
     * @returns Array of attachments for the module
     */
    getModuleAttachments(moduleIndex) {
        if (!this.formation || !this.formation.modules)
            return [];
        const moduleId = this.modules.at(moduleIndex).get('id')?.value;
        if (!moduleId)
            return [];
        const module = this.formation.modules.find(m => m.id === moduleId);
        return module?.attachments || [];
    }
    /**
     * Get file icon based on file type
     * @param fileType The type of the file
     * @returns Path to the icon image
     */
    getFileIcon(fileType) {
        return this.attachmentService.getFileIcon(fileType);
    }
    /**
     * Extract filename from URL
     * @param url The URL of the file
     * @returns The filename
     */
    getFileName(url) {
        return this.attachmentService.getFileName(url);
    }
    /**
     * Handle file selection
     * @param event The file input change event
     * @param moduleIndex Index of the module in the form array
     */
    onFileSelected(event, moduleIndex) {
        const input = event.target;
        if (input.files && input.files.length > 0) {
            this.selectedFiles[moduleIndex] = input.files[0];
        }
    }
    /**
     * Format file size in bytes to human-readable format
     * @param bytes File size in bytes
     * @returns Formatted file size (e.g., "2.5 MB")
     */
    formatFileSize(bytes) {
        return this.attachmentService.formatFileSize(bytes);
    }
    /**
     * Upload selected file for a module
     * @param moduleIndex Index of the module in the form array
     */
    uploadFile(moduleIndex) {
        const file = this.selectedFiles[moduleIndex];
        if (!file)
            return;
        const moduleId = this.modules.at(moduleIndex).get('id')?.value;
        if (!moduleId) {
            this.toaster.showError('Erreur', 'Veuillez d\'abord enregistrer le module avant d\'ajouter des pièces jointes.');
            return;
        }
        // Set uploading state
        this.isUploading[moduleIndex] = true;
        // Initialize progress
        this.uploadProgress[moduleIndex] = 0;
        // Upload file
        this.attachmentService.uploadAttachment(moduleId, file).subscribe({
            next: () => {
                // Update progress to 100%
                this.uploadProgress[moduleIndex] = 100;
                // Show success message
                this.toaster.showSuccess('Succès', 'Fichier téléchargé avec succès');
                // Reload data to refresh attachments
                this.loadData();
                // Reset states after a delay
                setTimeout(() => {
                    delete this.selectedFiles[moduleIndex];
                    delete this.uploadProgress[moduleIndex];
                    delete this.isUploading[moduleIndex];
                }, 2000);
            },
            error: (error) => {
                // Reset states
                delete this.uploadProgress[moduleIndex];
                delete this.isUploading[moduleIndex];
                // Show error message
                this.toaster.handleHttpError(error);
            }
        });
    }
    /**
     * Delete an attachment
     * @param moduleIndex Index of the module in the form array (not used but kept for consistency)
     * @param attachmentId ID of the attachment to delete
     */
    deleteAttachment(_moduleIndex, attachmentId) {
        if (!attachmentId)
            return;
        if (confirm('Êtes-vous sûr de vouloir supprimer cette pièce jointe ? Cette action est irréversible.')) {
            this.attachmentService.deleteAttachment(attachmentId).subscribe({
                next: () => {
                    this.toaster.showSuccess('Succès', 'Pièce jointe supprimée avec succès');
                    this.loadData();
                },
                error: (error) => {
                    this.toaster.handleHttpError(error);
                }
            });
        }
    }
    /**
     * Open dialog to select a quiz for a module
     * @param moduleIndex Index of the module in the form array
     */
    openQuizSelectionDialog(moduleIndex) {
        // Get all quiz IDs that are already assigned to other modules
        const disabledQuizIds = [];
        // Disable quizzes assigned to other modules
        this.modules.controls.forEach((control, index) => {
            const quizId = control.get('quizId')?.value;
            if (quizId && index !== moduleIndex) {
                disabledQuizIds.push(quizId);
            }
        });
        // Get the currently selected quiz ID for this module
        const selectedQuizId = this.modules.at(moduleIndex).get('quizId')?.value;
        // Open the dialog
        const dialogRef = this.dialog.open(src_app_shared_components_select_quiz_select_quiz_component__WEBPACK_IMPORTED_MODULE_4__.SelectQuizComponent, {
            width: '500px',
            data: {
                disabledQuizIds,
                context: 'module',
                selectedQuizId
            }
        });
        // Handle the result
        dialogRef.afterClosed().subscribe(quiz => {
            if (quiz) {
                // Update the module's quizId
                this.modules.at(moduleIndex).patchValue({ quizId: quiz.id });
                this.modules.markAsDirty();
            }
        });
    }
    /**
     * Remove the quiz from a module
     * @param moduleIndex Index of the module in the form array
     */
    removeQuiz(moduleIndex) {
        this.modules.at(moduleIndex).patchValue({ quizId: null });
        this.modules.markAsDirty();
    }
    /**
     * Get the title of a quiz by its ID
     * @param quizId ID of the quiz
     * @returns Title of the quiz or a default message
     */
    getQuizTitle(quizId) {
        if (!quizId)
            return 'Aucun quiz sélectionné';
        const quiz = this.quizzes.find(q => q.id === quizId);
        return quiz ? quiz.title : 'Quiz inconnu';
    }
    /**
     * Open dialog to select a final quiz for the formation
     */
    openFinalQuizSelectionDialog() {
        // Get all quiz IDs that are already assigned to modules
        const disabledQuizIds = [];
        // Disable quizzes assigned to modules
        this.modules.controls.forEach(control => {
            const quizId = control.get('quizId')?.value;
            if (quizId) {
                disabledQuizIds.push(quizId);
            }
        });
        // Get the currently selected final quiz ID
        const selectedQuizId = this.formationForm.get('finalQuizId')?.value;
        // Open the dialog
        const dialogRef = this.dialog.open(src_app_shared_components_select_quiz_select_quiz_component__WEBPACK_IMPORTED_MODULE_4__.SelectQuizComponent, {
            width: '500px',
            data: {
                disabledQuizIds,
                context: 'formation',
                selectedQuizId
            }
        });
        // Handle the result
        dialogRef.afterClosed().subscribe(quiz => {
            if (quiz) {
                // Update the formation's finalQuizId
                this.formationForm.patchValue({ finalQuizId: quiz.id });
                this.formationForm.markAsDirty();
            }
        });
    }
    /**
     * Remove the final quiz from the formation
     */
    removeFinalQuiz() {
        this.formationForm.patchValue({ finalQuizId: null });
        this.formationForm.markAsDirty();
    }
}
UpdateFormationComponent.ɵfac = function UpdateFormationComponent_Factory(t) { return new (t || UpdateFormationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_formation_service__WEBPACK_IMPORTED_MODULE_6__.FormationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_group_service__WEBPACK_IMPORTED_MODULE_7__.GroupService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_attachment_service__WEBPACK_IMPORTED_MODULE_8__.AttachmentService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_sesssions_service__WEBPACK_IMPORTED_MODULE_2__.SesssionsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_9__.QuizService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_10__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog)); };
UpdateFormationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: UpdateFormationComponent, selectors: [["app-update-formation"]], decls: 10, vars: 3, consts: [[1, "max-w-6xl", "mx-auto"], [1, "mt-10"], [1, "px-8", "py-4"], [1, "text-3xl", "font-bold", "text-gray-800"], [1, "mt-1", "text-sm", "text-gray-600"], ["class", "text-center py-4", 4, "ngIf"], ["class", "p-8", 4, "ngIf"], [1, "text-center", "py-4"], [1, "text-gray-600"], [1, "p-8"], [1, "bg-white", "shadow-md", "rounded-lg", "overflow-hidden"], [1, "border-b", "border-gray-200"], [1, "flex", "-mb-px"], [1, "py-4", "px-6", "font-medium", "text-sm", "border-b-2", "focus:outline-none", 3, "ngClass", "click"], [1, "p-6"], [4, "ngIf"], ["class", "space-y-8", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "text-2xl", "font-bold", "mb-6"], [1, "grid", "grid-cols-1", "gap-6"], [1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "formControlName", "title", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary"], ["class", "text-red-500 text-sm mt-1", 4, "ngIf"], ["formControlName", "description", "rows", "3", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary"], ["formControlName", "content", "rows", "5", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary"], [1, "mt-6", "p-4", "bg-gray-50", "rounded-lg"], [1, "block", "text-lg", "font-medium", "text-gray-700", "mb-2"], [1, "text-sm", "text-gray-500", "mb-3"], [1, "flex", "items-center", "space-x-2"], ["class", "flex-1", 4, "ngIf"], ["class", "flex-1 flex items-center justify-between bg-white p-3 rounded border border-gray-200", 4, "ngIf"], ["class", "flex justify-end space-x-4 mt-8 animate-accordion-down", 4, "ngIf"], [1, "text-red-500", "text-sm", "mt-1"], [1, "flex-1"], ["type", "button", 1, "inline-flex", "items-center", "px-3", "py-2", "border", "border-gray-300", "shadow-sm", "text-sm", "leading-4", "font-medium", "rounded-md", "text-gray-700", "bg-white", "hover:bg-gray-50", "focus:outline-none", 3, "click"], [1, "fas", "fa-plus-circle", "mr-2", "text-primary"], [1, "flex-1", "flex", "items-center", "justify-between", "bg-white", "p-3", "rounded", "border", "border-gray-200"], [1, "flex", "items-center"], [1, "fas", "fa-award", "text-primary", "mr-2"], [1, "text-sm", "font-medium"], [1, "flex", "space-x-2"], ["type", "button", 1, "text-primary", "hover:text-primary-dark", 3, "click"], [1, "fas", "fa-exchange-alt"], ["type", "button", 1, "text-red-500", "hover:text-red-700", 3, "click"], [1, "fas", "fa-times"], [1, "flex", "justify-end", "space-x-4", "mt-8", "animate-accordion-down"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-gray-100", "rounded-lg", "hover:bg-gray-200", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-sm", "font-medium", "text-white", "bg-primary", "rounded-lg", "hover:bg-primary-dark", "disabled:opacity-50", 3, "disabled"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold"], ["type", "button", 1, "inline-flex", "items-center", "px-4", "py-2", "border", "border-transparent", "text-sm", "font-medium", "rounded-md", "text-white", "bg-primary", "hover:bg-primary-dark", 3, "click"], [1, "fas", "fa-plus", "mr-2"], ["class", "flex justify-center py-8", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "flex", "justify-center", "py-8"], [1, "animate-spin", "rounded-full", "h-8", "w-8", "border-t-2", "border-b-2", "border-primary"], [1, "overflow-x-auto"], [1, "min-w-full", "divide-y", "divide-gray-200"], [1, "bg-gray-50"], ["scope", "col", 1, "px-6", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "bg-white", "divide-y", "divide-gray-200"], [4, "ngFor", "ngForOf"], [1, "px-6", "py-4", "whitespace-nowrap"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-500"], [1, "px-2", "inline-flex", "text-xs", "leading-5", "font-semibold", "rounded-full", 3, "ngClass"], [1, "px-6", "py-4", "whitespace-nowrap", "text-sm", "font-medium"], [1, "text-primary", "hover:text-primary-dark", "mr-3", 3, "click"], [1, "fas", "fa-edit"], [1, "text-red-600", "hover:text-red-900", 3, "click"], [1, "fas", "fa-trash"], ["colspan", "5", 1, "px-6", "py-4", "text-center", "text-sm", "text-gray-500"], [1, "space-y-8"], [1, "mb-8"], [1, "text-xl", "font-bold", "mb-4"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], ["class", "category-item", 4, "ngFor", "ngForOf"], ["class", "flex justify-end space-x-4 mt-4 animate-accordion-down", 4, "ngIf"], ["class", "group-item", 4, "ngFor", "ngForOf"], [1, "category-item"], ["type", "radio", "formControlName", "category", 1, "category-radio", 3, "id", "value"], [1, "category-label", 3, "for"], [1, "category-content"], [1, "category-name"], [1, "category-icon"], [1, "fas", "fa-check"], [1, "flex", "justify-end", "space-x-4", "mt-4", "animate-accordion-down"], [1, "group-item"], ["type", "checkbox", 1, "group-checkbox", 3, "id", "checked", "change"], [1, "group-label", 3, "for"], [1, "group-content"], [1, "group-name"], ["class", "group-description", 4, "ngIf"], [1, "group-icon"], [1, "group-description"], [3, "formGroup"], ["formArrayName", "modules", 1, "space-y-4"], ["class", "module-item bg-gray-50 p-4 rounded-lg", "cdkDrag", "", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "text-center py-8 text-gray-500", 4, "ngIf"], ["class", "flex justify-end space-x-4 mt-6", 4, "ngIf"], ["cdkDrag", "", 1, "module-item", "bg-gray-50", "p-4", "rounded-lg", 3, "formGroupName"], [1, "flex", "items-start", "space-x-4"], [1, "grid", "grid-cols-1", "gap-4"], ["formControlName", "description", "rows", "2", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["class", "flex-1 flex items-center justify-between bg-gray-50 p-2 rounded", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "mt-3"], ["type", "file", "accept", ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif,.mp4,.avi,.mov", 1, "!hidden", 3, "change"], ["fileInput", ""], [1, "cursor-pointer", "inline-flex", "items-center", "px-3", "py-2", "border", "border-gray-300", "shadow-sm", "text-sm", "leading-4", "font-medium", "rounded-md", "text-gray-700", "bg-white", "hover:bg-gray-50", "focus:outline-none", 3, "for", "click"], [1, "fas", "fa-paperclip", "mr-2"], ["class", "flex items-center mt-2 bg-gray-50 p-2 rounded", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [1, "flex", "flex-col", "space-y-2"], ["cdkDragHandle", "", 1, "drag-handle", "cursor-move"], [1, "fas", "fa-grip-vertical", "text-gray-400"], ["type", "button", 1, "p-2", "text-gray-500", "hover:text-gray-700", "disabled:opacity-50", 3, "disabled", "click"], [1, "fas", "fa-arrow-up"], [1, "fas", "fa-arrow-down"], ["type", "button", 1, "p-2", "text-red-500", "hover:text-red-700", 3, "click"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "flex-1", "flex", "items-center", "justify-between", "bg-gray-50", "p-2", "rounded"], [1, "fas", "fa-question-circle", "text-primary", "mr-2"], [1, "mb-3"], ["class", "flex items-center justify-between p-2 bg-gray-50 rounded mb-2", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "p-2", "bg-gray-50", "rounded", "mb-2"], ["alt", "File Icon", 1, "w-6", "h-6", "mr-2", 3, "src"], ["target", "_blank", 1, "text-primary", "hover:underline", 3, "href"], [1, "flex", "items-center", "mt-2", "bg-gray-50", "p-2", "rounded"], [1, "fas", "fa-file", "mr-2", "text-primary"], [1, "text-xs", "text-gray-500"], ["type", "button", 1, "inline-flex", "items-center", "px-3", "py-1", "border", "border-transparent", "text-sm", "leading-4", "font-medium", "rounded-md", "text-white", "bg-primary", "hover:!bg-primary/80", "focus:outline-none", 3, "click"], [1, "fas", "fa-upload", "mr-1"], [1, "mt-2"], [1, "flex", "items-center", "mb-1"], [1, "w-full", "bg-gray-200", "rounded-full", "h-2"], [1, "bg-primary", "h-2", "rounded-full", "transition-all", "duration-300"], [1, "flex", "justify-between", "items-center", "text-xs", "text-gray-500"], ["class", "text-green-600", 4, "ngIf"], [1, "text-green-600"], [1, "fas", "fa-check-circle", "mr-1"], [1, "text-center", "py-8", "text-gray-500"], [1, "flex", "justify-end", "space-x-4", "mt-6"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "text-white", "bg-primary", "rounded-lg", "hover:bg-primary-dark", 3, "click"], [1, "bg-gray-50", "p-8", "rounded-lg", "text-center"], [1, "text-gray-500"]], template: function UpdateFormationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Modifier la formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Mettez \u00E0 jour les informations de la formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, UpdateFormationComponent_div_7_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, UpdateFormationComponent_div_8_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, UpdateFormationComponent_div_9_Template, 20, 25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.formation && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formation && !ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe], styles: [".group-item[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.group-checkbox[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n  cursor: pointer;\n}\n\n.group-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%] {\n  border-color: var(--primary-color);\n  background-color: rgba(var(--primary-color-rgb), 0.05);\n}\n\n.group-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  color: var(--primary-color);\n}\n\n.group-label[_ngcontent-%COMP%], .category-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 0.5rem;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.group-label[_ngcontent-%COMP%]:hover, .category-label[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  background-color: rgba(var(--primary-color-rgb), 0.02);\n}\n\n.group-content[_ngcontent-%COMP%], .category-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.group-name[_ngcontent-%COMP%], .category-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #111827;\n}\n\n.group-description[_ngcontent-%COMP%], .category-description[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 0.25rem;\n}\n\n.group-icon[_ngcontent-%COMP%], .category-icon[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  opacity: 0;\n  transform: scale(0.8);\n  transition: all 0.2s ease;\n  color: var(--primary-color);\n}\n\n[_ngcontent-%COMP%]:root {\n  --primary-color: #3b82f6;\n  --primary-color-rgb: 59, 130, 246;\n}\n\n@keyframes shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n\n.shimmer[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n\n.shimmer-bg[_ngcontent-%COMP%] {\n  animation: shimmer 2s infinite linear;\n  background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);\n  background-size: 1000px 100%;\n  position: relative;\n}\n\n.module-item[_ngcontent-%COMP%] {\n  border-radius: var(--radius);\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  animation-duration: 200ms;\n}\n\n.module-item[_ngcontent-%COMP%]:hover {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.module-item[_ngcontent-%COMP%] {\n  cursor: move;\n  position: relative;\n}\n\n.module-item.dragging[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  background-color: #f3f4f6;\n}\n\n.module-item[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  color: #9ca3af;\n  cursor: move;\n}\n\n.module-item[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n}\n\n.module-item[_ngcontent-%COMP%]   .flex-col[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n\n.module-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: calc(var(--radius) - 2px);\n  padding: 0.5rem;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  animation-duration: 200ms;\n}\n\n.module-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n\n.module-item[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.group-item[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.group-checkbox[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.group-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%] {\n  border-color: hsl(var(--primary));\n  background-color: hsl(var(--primary) / 0.05);\n}\n\n.group-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .group-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%], .category-checkbox[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  color: hsl(var(--primary));\n  opacity: 1;\n}\n\n.group-label[_ngcontent-%COMP%], .category-label[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--radius);\n  border-width: 2px;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n  padding: 1rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  animation-duration: 200ms;\n}\n\n.group-label[_ngcontent-%COMP%]:hover, .category-label[_ngcontent-%COMP%]:hover {\n  border-color: hsl(var(--primary));\n  background-color: hsl(var(--primary) / 0.05);\n}\n\n.group-content[_ngcontent-%COMP%], .category-content[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n}\n\n.group-name[_ngcontent-%COMP%], .category-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n\n.group-description[_ngcontent-%COMP%], .category-description[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  display: block;\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n\n.group-icon[_ngcontent-%COMP%], .category-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  --tw-scale-x: .9;\n  --tw-scale-y: .9;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  color: hsl(var(--primary));\n  opacity: 0;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  animation-duration: 200ms;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  display: block;\n  width: 100%;\n  border-radius: calc(var(--radius) - 2px);\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border-color: hsl(var(--primary));\n  --tw-ring-color: hsl(var(--primary));\n}\n\ninput[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  display: block;\n  width: 100%;\n  border-radius: var(--radius);\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border-color: hsl(var(--primary));\n  --tw-ring-color: hsl(var(--primary));\n}\n\ninput[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background-color: #f9fafb;\n  transition: all 0.2s ease;\n}\n\ninput[type=text][_ngcontent-%COMP%]:hover, textarea[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  background-color: #ffffff;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n}\n\n.category-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.category-radio[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.category-radio[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n  background-color: #f3f4f6;\n}\n\n.category-radio[_ngcontent-%COMP%]:checked    + .category-label[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.category-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.category-label[_ngcontent-%COMP%]:hover {\n  border-color: #4f46e5;\n  background-color: #f3f4f6;\n}\n\n.category-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.category-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0);\n  transition: all 0.2s ease;\n  color: #4f46e5;\n}\n\n.roles-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n\n.role-item[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n\n.role-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.375rem;\n}\n\n.role-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}\n\n.role-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.role-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n  color: #4f46e5;\n}\n\n.role-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.375rem;\n  transition: all 0.2s ease-in-out;\n}\n\n.role-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBRUksa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBOztFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVJOzs7RUFFSSxrQ0FBQTtFQUNBLHNEQUFBO0FBQ1I7O0FBQ1E7Ozs7Ozs7RUFFSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQU1aOztBQURBOztFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkk7O0VBQ0ksa0NBQUE7RUFDQSxzREFBQTtBQUtSOztBQURBOztFQUVJLE9BQUE7QUFJSjs7QUFEQTs7RUFFSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFEQTs7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFEQTs7RUFFSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFJSjs7QUFBQTtFQUNJLHdCQUFBO0VBQ0EsaUNBQUE7QUFHSjs7QUFDQTtFQUNJO0lBQ0ksOEJBQUE7RUFFTjtFQUNFO0lBQ0ksNkJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0kscUNBQUE7RUFDQSwyRUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFLSTtFQUFBLDRCQUFBO0VBQUEsaUJBQUE7RUFBQSxzQkFBQTtFQUFBLDREQUFBO0VBQUEsa0JBQUE7RUFBQSw0REFBQTtFQUFBLGFBQUE7RUFBQSwwQ0FBQTtFQUFBLHVEQUFBO0VBQUEsdUdBQUE7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsNkVBQUE7RUFBQSxpR0FBQTtFQUFBO0FBQUE7O0FBREo7RUFFSSxZQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQURSOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBRlI7O0FBSVE7RUFDSSxjQUFBO0FBRlo7O0FBUUk7RUFBQSx1QkFBQTtFQUFBLDhEQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLHdDQUFBO0VBQUEsZUFBQTtFQUFBLCtGQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBTUE7O0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUtBOztFQUFBLGtCQUFBO0VBQUEsV0FBQTtFQUFBLFVBQUE7RUFBQSxlQUFBO0VBQUE7QUFBQTs7QUFJSTs7O0VBQUEsaUNBQUE7RUFBQTtBQUFBOztBQUlJOzs7Ozs7O0VBQUEsZUFBQTtFQUFBLGVBQUE7RUFBQSwrTEFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFPUjs7RUFBQSxhQUFBO0VBQUEsZUFBQTtFQUFBLG1CQUFBO0VBQUEsNEJBQUE7RUFBQSxpQkFBQTtFQUFBLHNCQUFBO0VBQUEsNERBQUE7RUFBQSxhQUFBO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFHSTs7RUFBQSxpQ0FBQTtFQUFBO0FBQUE7O0FBTUo7O0VBQUE7QUFBQTs7QUFLQTs7RUFBQSxjQUFBO0VBQUEsbUJBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFLQTs7RUFBQSxtQkFBQTtFQUFBLGNBQUE7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFLQTs7RUFBQSxtQkFBQTtFQUFBLGdCQUFBO0VBQUEsZ0JBQUE7RUFBQSwrTEFBQTtFQUFBLDBCQUFBO0VBQUEsVUFBQTtFQUFBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7O0FBTUE7O0VBQUEsbUJBQUE7RUFBQSxjQUFBO0VBQUEsV0FBQTtFQUFBLHdDQUFBO0VBQUEsc0JBQUE7RUFBQSw0REFBQTtFQUFBLDBDQUFBO0VBQUEsdURBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBLGlDQUFBO0VBQUE7QUFBQTs7QUFNQTs7RUFBQSxtQkFBQTtFQUFBLGNBQUE7RUFBQSxXQUFBO0VBQUEsNEJBQUE7RUFBQSxzQkFBQTtFQUFBLDREQUFBO0VBQUEsMENBQUE7RUFBQSx1REFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUEsaUNBQUE7RUFBQTtBQUFBOztBQUZKOztFQUdJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQUtJOztFQUNJLHlCQUFBO0FBRlI7O0FBS0k7O0VBQ0kseUJBQUE7RUFDQSw0Q0FBQTtBQUZSOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFSSjs7QUFVSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUFSUjs7QUFVUTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQVJaOztBQWFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVZKOztBQVlJO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBQVZSOztBQWNBO0VBQ0ksT0FBQTtBQVhKOztBQWNBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBWEo7O0FBY0E7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFjQTtFQUNJLGFBQUE7RUFDQSw0REFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQVhKOztBQWNBO0VBQ0ksa0JBQUE7RUFJQSxnQ0FBQTtBQWRKOztBQWdCSTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQWRSOztBQWlCSTtFQUVJLHlCQUFBO0FBaEJSOztBQW1CSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQWpCUjs7QUFtQlE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFqQlo7O0FBcUJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBbkJSOztBQXFCUTtFQUNJLHlCQUFBO0FBbkJaIiwiZmlsZSI6InVwZGF0ZS1mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21tb24gc3R5bGVzIGZvciBib3RoIGdyb3VwcyBhbmQgY2F0ZWdvcmllc1xuLmdyb3VwLWl0ZW0sXG4uY2F0ZWdvcnktaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5ncm91cC1jaGVja2JveCxcbi5jYXRlZ29yeS1jaGVja2JveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6Y2hlY2tlZCsuZ3JvdXAtbGFiZWwsXG4gICAgJjpjaGVja2VkKy5jYXRlZ29yeS1sYWJlbCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjA1KTtcblxuICAgICAgICAuZ3JvdXAtaWNvbixcbiAgICAgICAgLmNhdGVnb3J5LWljb24ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ncm91cC1sYWJlbCxcbi5jYXRlZ29yeS1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U1ZTdlYjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuMDIpO1xuICAgIH1cbn1cblxuLmdyb3VwLWNvbnRlbnQsXG4uY2F0ZWdvcnktY29udGVudCB7XG4gICAgZmxleDogMTtcbn1cblxuLmdyb3VwLW5hbWUsXG4uY2F0ZWdvcnktbmFtZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMTExODI3O1xufVxuXG4uZ3JvdXAtZGVzY3JpcHRpb24sXG4uY2F0ZWdvcnktZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBjb2xvcjogIzZiNzI4MDtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuXG4uZ3JvdXAtaWNvbixcbi5jYXRlZ29yeS1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLy8gQWRkIHRoZXNlIENTUyB2YXJpYWJsZXMgdG8geW91ciByb290IHN0eWxlcyBpZiBub3QgYWxyZWFkeSBwcmVzZW50XG46cm9vdCB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjM2I4MmY2O1xuICAgIC0tcHJpbWFyeS1jb2xvci1yZ2I6IDU5LCAxMzAsIDI0Njtcbn1cblxuLy8gU2hpbW1lciBBbmltYXRpb25cbkBrZXlmcmFtZXMgc2hpbW1lciB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwMHB4IDA7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMDBweCAwO1xuICAgIH1cbn1cblxuLnNoaW1tZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2hpbW1lci1iZyB7XG4gICAgYW5pbWF0aW9uOiBzaGltbWVyIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNmY3ZjggOCUsICNlZGVlZjEgMTglLCAjZjZmN2Y4IDMzJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHggMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8vIE1vZHVsZSBQb3NpdGlvbmluZ1xuLm1vZHVsZS1pdGVtIHtcbiAgICBAYXBwbHkgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHAtNCBzaGFkb3ctc20gaG92ZXI6c2hhZG93LW1kIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJi5kcmFnZ2luZyB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcbiAgICB9XG5cbiAgICAuZHJhZy1oYW5kbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMC41cmVtO1xuICAgICAgICByaWdodDogMC41cmVtO1xuICAgICAgICBjb2xvcjogIzljYTNhZjtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICM0ZjQ2ZTU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tb2R1bGUtaXRlbSAuZmxleC1jb2wge1xuICAgIEBhcHBseSBzcGFjZS15LTI7XG59XG5cbi5tb2R1bGUtaXRlbSBidXR0b24ge1xuICAgIEBhcHBseSBwLTIgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDA7XG59XG5cbi5tb2R1bGUtaXRlbSBidXR0b246bm90KDpkaXNhYmxlZCk6aG92ZXIge1xuICAgIEBhcHBseSBiZy1ncmF5LTEwMDtcbn1cblxuLm1vZHVsZS1pdGVtIGJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIEBhcHBseSBvcGFjaXR5LTUwIGN1cnNvci1ub3QtYWxsb3dlZDtcbn1cblxuLy8gR3JvdXAgYW5kIENhdGVnb3J5IEl0ZW1zXG4uZ3JvdXAtaXRlbSxcbi5jYXRlZ29yeS1pdGVtIHtcbiAgICBAYXBwbHkgcmVsYXRpdmUgbWItNDtcbn1cblxuLmdyb3VwLWNoZWNrYm94LFxuLmNhdGVnb3J5LWNoZWNrYm94IHtcbiAgICBAYXBwbHkgYWJzb2x1dGUgb3BhY2l0eS0wIGgtMCB3LTAgY3Vyc29yLXBvaW50ZXI7XG5cbiAgICAmOmNoZWNrZWQrLmdyb3VwLWxhYmVsLFxuICAgICY6Y2hlY2tlZCsuY2F0ZWdvcnktbGFiZWwge1xuICAgICAgICBAYXBwbHkgYm9yZGVyLXByaW1hcnkgYmctcHJpbWFyeS81O1xuXG4gICAgICAgIC5ncm91cC1pY29uLFxuICAgICAgICAuY2F0ZWdvcnktaWNvbiB7XG4gICAgICAgICAgICBAYXBwbHkgb3BhY2l0eS0xMDAgc2NhbGUtMTAwIHRleHQtcHJpbWFyeTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmdyb3VwLWxhYmVsLFxuLmNhdGVnb3J5LWxhYmVsIHtcbiAgICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXIgcC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBjdXJzb3ItcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBAYXBwbHkgYm9yZGVyLXByaW1hcnkgYmctcHJpbWFyeS81O1xuICAgIH1cbn1cblxuLmdyb3VwLWNvbnRlbnQsXG4uY2F0ZWdvcnktY29udGVudCB7XG4gICAgQGFwcGx5IGZsZXgtMTtcbn1cblxuLmdyb3VwLW5hbWUsXG4uY2F0ZWdvcnktbmFtZSB7XG4gICAgQGFwcGx5IGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMDtcbn1cblxuLmdyb3VwLWRlc2NyaXB0aW9uLFxuLmNhdGVnb3J5LWRlc2NyaXB0aW9uIHtcbiAgICBAYXBwbHkgYmxvY2sgdGV4dC14cyB0ZXh0LWdyYXktNTAwIG10LTE7XG59XG5cbi5ncm91cC1pY29uLFxuLmNhdGVnb3J5LWljb24ge1xuICAgIEBhcHBseSBtbC0yIG9wYWNpdHktMCBzY2FsZS05MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgdGV4dC1wcmltYXJ5O1xufVxuXG4vLyBGb3JtIENvbnRyb2xzXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgICBAYXBwbHkgbXQtMSBibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1wcmltYXJ5IGZvY3VzOnJpbmctcHJpbWFyeTtcbn1cblxuLy8gRW5oYW5jZWQgdGV4dCBpbnB1dCBzdHlsZXNcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxudGV4dGFyZWEge1xuICAgIEBhcHBseSBtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci1ncmF5LTIwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLXByaW1hcnkgZm9jdXM6cmluZy1wcmltYXJ5O1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNzksIDcwLCAyMjksIDAuMSk7XG4gICAgfVxufVxuXG4vLyAvLyBTdWJtaXQgQnV0dG9uXG4vLyBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4vLyAgICAgQGFwcGx5IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC02IHB5LTMgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS1kYXJrIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLXByaW1hcnkgZGlzYWJsZWQ6b3BhY2l0eS01MDtcbi8vIH1cblxuLmNhdGVnb3J5LWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY2F0ZWdvcnktcmFkaW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcblxuICAgICY6Y2hlY2tlZCsuY2F0ZWdvcnktbGFiZWwge1xuICAgICAgICBib3JkZXItY29sb3I6ICM0ZjQ2ZTU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG5cbiAgICAgICAgLmNhdGVnb3J5LWljb24ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXRlZ29yeS1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNWU3ZWI7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzRmNDZlNTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcbiAgICB9XG59XG5cbi5jYXRlZ29yeS1jb250ZW50IHtcbiAgICBmbGV4OiAxO1xufVxuXG4uY2F0ZWdvcnktbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzM3NDE1MTtcbn1cblxuLmNhdGVnb3J5LWljb24ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIGNvbG9yOiAjNGY0NmU1O1xufVxuXG4ucm9sZXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4ucm9sZS1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC8vIGJvcmRlci1jb2xvcjogIzRmNDZlNTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMDtcblxuICAgICAgICAmOmNoZWNrZWQrbGFiZWwge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNGY0NmU1O1xuICAgICAgICAgICAgY29sb3I6ICM0ZjQ2ZTU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 5568:
/*!**********************************************!*\
  !*** ./src/app/admin/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3966:
/*!*******************************************************************!*\
  !*** ./src/app/admin/quiz/create-quizs/create-quizs.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateQuizsComponent": () => (/* binding */ CreateQuizsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/quiz.service */ 6920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function CreateQuizsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Le titre doit contenir au moins 3 caract\u00E8res ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateQuizsComponent_div_15_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateQuizsComponent_div_15_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const questionIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.removeQuestion(questionIndex_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateQuizsComponent_div_15_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Le titre ne peut pas \u00EAtre vide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateQuizsComponent_div_15_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Le nombre de points doit \u00EAtre sup\u00E9rieur \u00E0 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateQuizsComponent_div_15_div_24_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La r\u00E9ponse ne peut pas \u00EAtre vide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateQuizsComponent_div_15_div_24_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateQuizsComponent_div_15_div_24_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const answerIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const questionIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.removeAnswer(questionIndex_r4, answerIndex_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateQuizsComponent_div_15_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CreateQuizsComponent_div_15_div_24_div_3_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CreateQuizsComponent_div_15_div_24_button_6_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answerIndex_r13 = ctx.index;
    const questionIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", answerIndex_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "R\u00E9ponse " + (answerIndex_r13 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r8.getAnswers(questionIndex_r4).at(answerIndex_r13).get("text")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r8.getAnswers(questionIndex_r4).at(answerIndex_r13).get("text")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.getAnswers(questionIndex_r4).length > 2);
} }
function CreateQuizsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CreateQuizsComponent_div_15_button_4_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21)(6, "div", 22)(7, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Titre de la question");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CreateQuizsComponent_div_15_div_10_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 25)(12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CreateQuizsComponent_div_15_div_15_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6)(17, "div", 7)(18, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "R\u00E9ponses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateQuizsComponent_div_15_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const questionIndex_r4 = restoredCtx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.addAnswer(questionIndex_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Ajouter une r\u00E9ponse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CreateQuizsComponent_div_15_div_24_Template, 7, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const questionIndex_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", questionIndex_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Question ", questionIndex_r4 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.questions.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.questions.at(questionIndex_r4).get("title")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.questions.at(questionIndex_r4).get("title")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.questions.at(questionIndex_r4).get("points")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.questions.at(questionIndex_r4).get("points")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.getAnswers(questionIndex_r4).controls);
} }
function CreateQuizsComponent_i_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 36);
} }
class CreateQuizsComponent {
    constructor(fb, router, quizService) {
        this.fb = fb;
        this.router = router;
        this.quizService = quizService;
        this.isLoading = false;
        this.quizForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]],
            questions: this.fb.array([
                this.createQuestion()
            ])
        });
    }
    ngOnInit() { }
    get questions() {
        return this.quizForm.get('questions');
    }
    createQuestion() {
        return this.fb.group({
            points: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
            order: [0],
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
            answers: this.fb.array([
                this.createAnswer(),
                this.createAnswer()
            ])
        });
    }
    createAnswer() {
        return this.fb.group({
            text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            isCorrect: [false]
        });
    }
    addQuestion() {
        this.questions.push(this.createQuestion());
    }
    removeQuestion(index) {
        if (this.questions.length > 1) {
            this.questions.removeAt(index);
        }
    }
    getAnswers(questionIndex) {
        return this.questions.at(questionIndex).get('answers');
    }
    addAnswer(questionIndex) {
        this.getAnswers(questionIndex).push(this.createAnswer());
    }
    removeAnswer(questionIndex, answerIndex) {
        const answers = this.getAnswers(questionIndex);
        if (answers.length > 2) {
            answers.removeAt(answerIndex);
        }
    }
    onSubmit() {
        if (this.quizForm.valid) {
            this.isLoading = true;
            this.quizService.createQuiz(this.quizForm.value).subscribe({
                next: (response) => {
                    console.log('Quiz created successfully:', response);
                    this.isLoading = false;
                    this.router.navigate(['/admin/quizs']);
                },
                error: (error) => {
                    console.error('Error creating quiz:', error);
                    this.isLoading = false;
                }
            });
        }
        else {
        }
        console.log(this.quizForm.value);
    }
}
CreateQuizsComponent.ɵfac = function CreateQuizsComponent_Factory(t) { return new (t || CreateQuizsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__.QuizService)); };
CreateQuizsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateQuizsComponent, selectors: [["app-create-quizs"]], decls: 20, vars: 6, consts: [[1, "max-w-4xl", "p-6"], [1, "space-y-6", 3, "formGroup", "ngSubmit"], [1, "space-y-2"], [1, "block", "font-medium", "text-gray-700"], ["type", "text", "formControlName", "title", "placeholder", "Entrez le titre du quiz", 1, "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-blue-500", "focus:ring-blue-500", "sm:text-sm"], ["class", "text-red-500 text-sm", 4, "ngIf"], [1, "space-y-4"], [1, "flex", "items-center", "justify-between"], [1, "text-lg", "font-medium"], ["type", "button", 1, "inline-flex", "items-center", "px-3", "py-1", "border", "border-gray-300", "shadow-sm", "text-sm", "leading-4", "font-medium", "rounded-md", "text-gray-700", "bg-white", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", 3, "click"], [1, "fas", "fa-plus-circle", "mr-2"], ["formArrayName", "questions", 1, "space-y-4"], ["class", "p-4 border rounded-md space-y-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "px-4", "py-2.5", "text-sm", "font-medium", "rounded-md", "shadow-sm", "text-white", "bg-primary", "hover:bg-blue-600", "disabled:bg-primary/50", "disabled:cursor-not-allowed", 3, "disabled"], ["class", "fa-solid fa-rotate mr-2 animate-spin", 4, "ngIf"], [1, "text-red-500", "text-sm"], [1, "p-4", "border", "rounded-md", "space-y-4", 3, "formGroupName"], [1, "flex", "justify-between", "items-center"], [1, "font-medium"], ["type", "button", "class", "text-red-500 hover:text-red-700", 3, "click", 4, "ngIf"], [1, "flex", "gap-4"], [1, "space-y-2", "w-3/4"], [1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "formControlName", "title", "placeholder", "Entrez le titre de la question", 1, "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-blue-500", "focus:ring-blue-500", "sm:text-sm"], [1, "space-y-2", "w-1/4"], ["type", "number", "formControlName", "points", "min", "1", 1, "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-blue-500", "focus:ring-blue-500", "sm:text-sm"], ["formArrayName", "answers", 1, "space-y-2"], ["class", "flex items-start space-x-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "text-red-500", "hover:text-red-700", 3, "click"], [1, "fas", "fa-trash"], [1, "flex", "items-start", "space-x-4", 3, "formGroupName"], [1, "flex-1"], ["type", "text", "formControlName", "text", 1, "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-blue-500", "focus:ring-blue-500", "sm:text-sm", 3, "placeholder"], [1, "flex", "items-center", "h-5"], ["type", "checkbox", "formControlName", "isCorrect", 1, "h-4", "w-4", "text-blue-600", "focus:ring-blue-500", "border-gray-300", "rounded"], [1, "fa-solid", "fa-rotate", "mr-2", "animate-spin"]], template: function CreateQuizsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateQuizsComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Titre du quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CreateQuizsComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateQuizsComponent_Template_button_click_11_listener() { return ctx.addQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Ajouter une question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CreateQuizsComponent_div_15_Template, 25, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13)(17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CreateQuizsComponent_i_18_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.quizForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.quizForm.get("title")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.quizForm.get("title")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questions.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.quizForm.invalid || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Cr\u00E9ation..." : "Cr\u00E9er le quiz", " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.25rem;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n}\n\nbutton[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n\n.space-y-6[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.space-y-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.space-y-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.375rem;\n  width: 100%;\n}\n\n.text-red-500[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.375rem;\n  padding: 1rem;\n}\n\n.fas[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1xdWl6cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBQTtBQUNBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFQSw0QkFBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBRUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFFQSxtQ0FBQTtBQUNBO0VBQ0ksZ0NBQUE7QUFDSjtBQUVBO0VBQ0ksMkJBQUE7QUFDSjtBQUVBLG1DQUFBO0FBQ0E7O0VBRUksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7QUFDSjtBQUVBLDRDQUFBO0FBQ0E7RUFDSSxrQkFBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtBQUNKO0FBRUEsMEJBQUE7QUFDQTs7RUFFSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFDSjtBQUVBLDZCQUFBO0FBQ0E7RUFDSSxjQUFBO0FBQ0o7QUFFQSw0QkFBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFDSjtBQUVBLG9CQUFBO0FBQ0E7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiY3JlYXRlLXF1aXpzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ3VzdG9tIHN0eWxlcyB0aGF0IGNhbid0IGJlIGFjaGlldmVkIHdpdGggVGFpbHdpbmQgKi9cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiBDdXN0b20gY2hlY2tib3ggc3R5bGluZyAqL1xuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xuICAgIGJvcmRlci1jb2xvcjogIzNiODJmNjtcbn1cblxuLyogQ3VzdG9tIHRyYW5zaXRpb25zIGZvciBidXR0b25zICovXG5idXR0b24ge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLyogQ3VzdG9tIGZvY3VzIHN0YXRlcyBmb3IgaW5wdXRzICovXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2I4MmY2O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKTtcbn1cblxuLyogRW5zdXJlIHByb3BlciBzcGFjaW5nIGZvciBmb3JtIGVsZW1lbnRzICovXG4uc3BhY2UteS02PiorKiB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uc3BhY2UteS00PiorKiB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnNwYWNlLXktMj4qKyoge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLyogU3R5bGUgZm9yIGZvcm0gaW5wdXRzICovXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBTdHlsZSBmb3IgZXJyb3IgbWVzc2FnZXMgKi9cbi50ZXh0LXJlZC01MDAge1xuICAgIGNvbG9yOiAjZWY0NDQ0O1xufVxuXG4vKiBTdHlsZSBmb3IgZm9ybSBzZWN0aW9ucyAqL1xuLmJvcmRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4vKiBTdHlsZSBmb3IgaWNvbnMgKi9cbi5mYXMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 4095:
/*!*******************************************************************!*\
  !*** ./src/app/admin/quiz/quiz-details/quiz-details.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizDetailsComponent": () => (/* binding */ QuizDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/quiz.service */ 6920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function QuizDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading your quiz...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function QuizDetailsComponent_div_2_div_6_div_6_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuizDetailsComponent_div_2_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, QuizDetailsComponent_div_2_div_6_div_6_span_4_Template, 4, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const answer_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-green-100", answer_r6.isCorrect)("border-green-400", answer_r6.isCorrect)("bg-gray-100", !answer_r6.isCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](answer_r6.text || "No answer text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", answer_r6.isCorrect);
} }
function QuizDetailsComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "h2", 11)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, QuizDetailsComponent_div_2_div_6_div_6_Template, 5, 8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const question_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", question_r3.answers);
} }
function QuizDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, QuizDetailsComponent_div_2_div_6_Template, 7, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.quiz.title || "Untitled Quiz", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Created on: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 3, ctx_r1.quiz.createdAt, "dd MMM yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.quiz.questions);
} }
class QuizDetailsComponent {
    constructor(route, quizService) {
        this.route = route;
        this.quizService = quizService;
        this.quiz = null;
        this.isLoading = true;
    }
    ngOnInit() {
        const quizId = Number(this.route.snapshot.paramMap.get('id'));
        this.quizService.getQuiz(quizId).subscribe({
            next: (quiz) => {
                this.quiz = quiz;
                this.isLoading = false;
            },
            error: (error) => {
                console.error('Error fetching quiz:', error);
                this.isLoading = false;
            }
        });
    }
}
QuizDetailsComponent.ɵfac = function QuizDetailsComponent_Factory(t) { return new (t || QuizDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__.QuizService)); };
QuizDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuizDetailsComponent, selectors: [["app-quiz-details"]], decls: 3, vars: 2, consts: [[1, "max-w-4xl"], ["class", "text-center py-12 bg-white rounded-2xl shadow-2xl", 4, "ngIf"], ["class", " rounded-2xl  p-8 transform transition-all duration-300", 4, "ngIf"], [1, "text-center", "py-12", "bg-white", "rounded-2xl", "shadow-2xl"], [1, "animate-spin", "rounded-full", "h-16", "w-16", "border-t-4", "border-b-4", "border-indigo-600", "mx-auto"], [1, "mt-6", "text-gray-700", "text-lg", "font-medium"], [1, "rounded-2xl", "p-8", "transform", "transition-all", "duration-300"], [1, "text-4xl", "font-extrabold", "text-gray-900", "mb-4", "tracking-tight"], [1, "text-gray-500", "mb-8", "italic"], ["class", "mb-6 p-6 bg-gray-50 rounded-xl shadow-inner hover:shadow-md transition-shadow duration-300 border", 4, "ngFor", "ngForOf"], [1, "mb-6", "p-6", "bg-gray-50", "rounded-xl", "shadow-inner", "hover:shadow-md", "transition-shadow", "duration-300", "border"], [1, "text-2xl", "font-semibold", "text-gray-800", "mb-4", "flex", "items-center"], [1, "inline-block", "w-8", "h-8", "bg-primary", "text-white", "rounded-full", "flex", "items-center", "justify-center", "mr-3"], [1, "space-y-4"], ["class", "p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors duration-200", 3, "bg-green-100", "border-green-400", "bg-gray-100", 4, "ngFor", "ngForOf"], [1, "p-4", "rounded-lg", "border", "border-gray-200", "hover:border-indigo-300", "transition-colors", "duration-200"], [1, "flex", "items-center", "justify-between"], [1, "text-gray-700"], ["class", "text-green-600 font-medium flex items-center", 4, "ngIf"], [1, "text-green-600", "font-medium", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-5", "h-5", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"]], template: function QuizDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuizDetailsComponent_div_1_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuizDetailsComponent_div_2_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.quiz && !ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".loading[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #555;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.quiz-details[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.quiz-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-bottom: 10px;\n}\n\n.quiz-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #666;\n}\n\n.question[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.question[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-bottom: 5px;\n}\n\n.question[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n.question[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 10px;\n  margin-bottom: 5px;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: red;\n  text-align: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXotZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InF1aXotZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICM1NTU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnF1aXotZGV0YWlscyB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5xdWl6LWRldGFpbHMgaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnF1aXotZGV0YWlscyBwIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ucXVlc3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucXVlc3Rpb24gaDMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5xdWVzdGlvbiB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLnF1ZXN0aW9uIGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4uZXJyb3Ige1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59ICJdfQ== */"] });


/***/ }),

/***/ 136:
/*!*****************************************************!*\
  !*** ./src/app/admin/quiz/quizs/quizs.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizsComponent": () => (/* binding */ QuizsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/quiz.service */ 6920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function QuizsComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 22);
} }
function QuizsComponent__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "circle", 24)(2, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/admin/quizs", a1]; };
const _c1 = function (a1) { return ["/admin/quizs/edit", a1]; };
const _c2 = function (a1) { return ["/admin/quizs/comments", a1]; };
function QuizsComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 26)(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 28)(4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 28)(7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 32)(13, "div", 33)(14, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizsComponent_tr_33_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const quiz_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.deleteQuiz(quiz_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const quiz_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", quiz_r4.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](quiz_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", quiz_r4.questions.length, " questions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 7, quiz_r4.createdAt, "dd MMM yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, quiz_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, quiz_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c2, quiz_r4.id));
} }
function QuizsComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 41)(2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Aucun quiz trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
const _c3 = function () { return ["create"]; };
// interface Answer {
//   id: number;
//   text: string;
//   isCorrect: boolean;
//   questionId: number;
//   createdAt: Date;
//   updatedAt: Date | null;
//   deletedAt: Date | null;
//   enable: boolean;
// }
// interface Question {
//   id: number;
//   quizId: number;
//   points: number;
//   order: number;
//   createdAt: Date;
//   updatedAt: Date | null;
//   deletedAt: Date | null;
//   enable: boolean;
//   answers: Answer[];
// }
// interface Quiz {
//   id: number;
//   title: string;
//   createdAt: Date;
//   updatedAt: Date | null;
//   deletedAt: Date | null;
//   enable: boolean;
//   questions: Question[];
// }
class QuizsComponent {
    constructor(quizService) {
        this.quizService = quizService;
        this.quizzes = [];
        this.isLoading = false;
        this.searchTerm = '';
    }
    ngOnInit() {
        this.fetchQuizzs();
    }
    get filteredQuizzes() {
        return this.quizzes.filter(quiz => quiz.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    fetchQuizzs() {
        this.isLoading = true;
        this.quizService.getQuizzes().subscribe({
            next: (quizzs) => {
                this.searchTerm = '';
                this.isLoading = false;
                this.quizzes = quizzs;
            }
        });
    }
    openCreateQuizDialog() {
        // TODO: Implement dialog opening
    }
    editQuiz(quiz) {
        // TODO: Implement edit functionality
    }
    deleteQuiz(quiz) {
        // TODO: Implement delete functionality
    }
}
QuizsComponent.ɵfac = function QuizsComponent_Factory(t) { return new (t || QuizsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__.QuizService)); };
QuizsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuizsComponent, selectors: [["app-quizs"]], decls: 35, vars: 9, consts: [[1, "container", "mx-auto", "p-6"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "flex", "gap-3"], [1, "px-4", "py-2", "bg-gray-100", "text-gray-700", "rounded-lg", "shadow-sm", "text-sm", "font-medium", "hover:bg-gray-200", "transition-colors", "flex", "items-center", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled", "click"], ["class", "fa-solid fa-rotate-right mr-2", 4, "ngIf"], ["class", "animate-spin h-4 w-4 mr-2", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "px-4", "py-2", "bg-primary", "text-white", "rounded-lg", "hover:bg-blue-600", "transition-colors", "flex", "items-center", "gap-2", 3, "routerLink"], [1, "fas", "fa-plus"], [1, "mb-6"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], [1, "fas", "fa-search", "text-gray-400"], ["type", "text", "placeholder", "Rechercher un quiz...", 1, "block", "w-full", "pl-10", "pr-3", "py-2", "border", "border-gray-300", "rounded-md", "leading-5", "bg-white", "placeholder-gray-500", "focus:outline-none", "focus:placeholder-gray-400", "focus:ring-1", "focus:ring-blue-500", "focus:border-blue-500", "sm:text-sm", 3, "ngModel", "ngModelChange"], [1, "bg-white", "shadow", "rounded-lg", "overflow-hidden"], [1, "overflow-x-auto"], [1, "min-w-full", "divide-y", "divide-gray-200"], [1, "bg-gray-50"], ["scope", "col", 1, "px-6", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "bg-white", "divide-y", "divide-gray-200"], ["class", "hover:bg-gray-50", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "fa-solid", "fa-rotate-right", "mr-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4", "mr-2"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "hover:bg-gray-50"], [1, "px-6", "py-4", "whitespace-nowrap", "text-sm", "text-gray-900"], [1, "px-6", "py-4", "whitespace-nowrap"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "px-2", "inline-flex", "text-xs", "leading-5", "font-semibold", "rounded-full", "bg-blue-100", "text-blue-800"], [1, "px-6", "py-4", "whitespace-nowrap", "text-sm", "text-gray-500"], [1, "px-6", "py-4", "whitespace-nowrap", "text-sm", "font-medium"], [1, "flex", "items-center", "space-x-3"], [1, "text-blue-600", "hover:text-blue-900", 3, "routerLink"], [1, "fa-solid", "fa-eye"], [1, "fas", "fa-edit"], [1, "text-gray-500", "hover:text-gray-600", 3, "routerLink"], [1, "fas", "fa-comment-dots"], [1, "text-red-600", "hover:text-red-900", 3, "click"], [1, "fas", "fa-trash"], ["colspan", "5", 1, "px-6", "py-4", "text-center", "text-gray-500"], [1, "flex", "flex-col", "items-center", "justify-center", "py-8"], [1, "fas", "fa-file-alt", "text-gray-400", "text-4xl", "mb-2"], [1, "mt-2", "text-sm", "font-medium", "text-gray-500"]], template: function QuizsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Gestion des Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizsComponent_Template_button_click_5_listener() { return ctx.fetchQuizzs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, QuizsComponent_i_6_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, QuizsComponent__svg_svg_7_Template, 3, 0, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Cr\u00E9er un quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QuizsComponent_Template_input_ngModelChange_16_listener($event) { return ctx.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "table", 16)(20, "thead", 17)(21, "tr")(22, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Titre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Questions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Date de cr\u00E9ation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tbody", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, QuizsComponent_tr_33_Template, 22, 16, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, QuizsComponent_tr_34_Template, 6, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Actualisation..." : "Actualiser", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredQuizzes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredQuizzes.length === 0 && !ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWl6cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7064:
/*!*******************************************************************!*\
  !*** ./src/app/admin/quiz/update-quizs/update-quizs.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateQuizsComponent": () => (/* binding */ UpdateQuizsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/quiz.service */ 6920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function UpdateQuizsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Le titre doit contenir au moins 3 caract\u00E8res ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateQuizsComponent_div_15_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateQuizsComponent_div_15_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const questionIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.removeQuestion(questionIndex_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateQuizsComponent_div_15_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Le titre ne peut pas \u00EAtre vide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateQuizsComponent_div_15_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Le nombre de points doit \u00EAtre sup\u00E9rieur \u00E0 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateQuizsComponent_div_15_div_24_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La r\u00E9ponse ne peut pas \u00EAtre vide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateQuizsComponent_div_15_div_24_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateQuizsComponent_div_15_div_24_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const answerIndex_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const questionIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.removeAnswer(questionIndex_r4, answerIndex_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateQuizsComponent_div_15_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UpdateQuizsComponent_div_15_div_24_div_3_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UpdateQuizsComponent_div_15_div_24_button_6_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answerIndex_r13 = ctx.index;
    const questionIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", answerIndex_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "R\u00E9ponse " + (answerIndex_r13 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r8.getAnswers(questionIndex_r4).at(answerIndex_r13).get("text")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r8.getAnswers(questionIndex_r4).at(answerIndex_r13).get("text")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.getAnswers(questionIndex_r4).length > 2);
} }
function UpdateQuizsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UpdateQuizsComponent_div_15_button_4_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21)(6, "div", 22)(7, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Titre de la question");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UpdateQuizsComponent_div_15_div_10_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 25)(12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UpdateQuizsComponent_div_15_div_15_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6)(17, "div", 7)(18, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "R\u00E9ponses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateQuizsComponent_div_15_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const questionIndex_r4 = restoredCtx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.addAnswer(questionIndex_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Ajouter une r\u00E9ponse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UpdateQuizsComponent_div_15_div_24_Template, 7, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const questionIndex_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", questionIndex_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Question ", questionIndex_r4 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.questions.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.questions.at(questionIndex_r4).get("title")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.questions.at(questionIndex_r4).get("title")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.questions.at(questionIndex_r4).get("points")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.questions.at(questionIndex_r4).get("points")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.getAnswers(questionIndex_r4).controls);
} }
function UpdateQuizsComponent_i_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 36);
} }
class UpdateQuizsComponent {
    constructor(fb, router, route, quizService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.quizService = quizService;
        this.isLoading = false;
        this.quizForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]],
            questions: this.fb.array([])
        });
        const quizID = this.route.snapshot.paramMap.get('id');
        if (quizID) {
            this.quizId = Number.parseInt(quizID);
        }
        else {
            this.router.navigate(['404']);
        }
    }
    ngOnInit() {
        this.loadQuiz();
    }
    loadQuiz() {
        this.isLoading = true;
        this.quizService.getQuiz(this.quizId).subscribe({
            next: (quiz) => {
                this.quizForm.patchValue(quiz);
                quiz.questions.forEach((question) => {
                    const questionGroup = this.createQuestion();
                    questionGroup.patchValue(question);
                    this.questions.push(questionGroup);
                });
                this.isLoading = false;
            },
            error: (error) => {
                console.error('Error loading quiz:', error);
                this.isLoading = false;
            }
        });
    }
    get questions() {
        return this.quizForm.get('questions');
    }
    createQuestion() {
        return this.fb.group({
            points: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
            order: [0],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
            answers: this.fb.array([])
        });
    }
    createAnswer() {
        return this.fb.group({
            text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            isCorrect: [false]
        });
    }
    addQuestion() {
        this.questions.push(this.createQuestion());
    }
    removeQuestion(index) {
        if (this.questions.length > 1) {
            this.questions.removeAt(index);
        }
    }
    getAnswers(questionIndex) {
        return this.questions.at(questionIndex).get('answers');
    }
    addAnswer(questionIndex) {
        this.getAnswers(questionIndex).push(this.createAnswer());
    }
    removeAnswer(questionIndex, answerIndex) {
        const answers = this.getAnswers(questionIndex);
        if (answers.length > 2) {
            answers.removeAt(answerIndex);
        }
    }
    onSubmit() {
        if (this.quizForm.valid) {
            this.isLoading = true;
            this.quizService.updateQuiz(this.quizId, this.quizForm.value).subscribe({
                next: (response) => {
                    console.log('Quiz updated successfully:', response);
                    this.isLoading = false;
                    this.router.navigate(['/admin/quizs']);
                },
                error: (error) => {
                    console.error('Error updating quiz:', error);
                    this.isLoading = false;
                }
            });
        }
    }
}
UpdateQuizsComponent.ɵfac = function UpdateQuizsComponent_Factory(t) { return new (t || UpdateQuizsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__.QuizService)); };
UpdateQuizsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateQuizsComponent, selectors: [["app-update-quizs"]], decls: 20, vars: 6, consts: [[1, "max-w-4xl", "p-6"], [1, "space-y-6", 3, "formGroup", "ngSubmit"], [1, "space-y-2"], [1, "block", "font-medium", "text-gray-700"], ["type", "text", "formControlName", "title", "placeholder", "Entrez le titre du quiz", 1, "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-blue-500", "focus:ring-blue-500", "sm:text-sm"], ["class", "text-red-500 text-sm", 4, "ngIf"], [1, "space-y-4"], [1, "flex", "items-center", "justify-between"], [1, "text-lg", "font-medium"], ["type", "button", 1, "inline-flex", "items-center", "px-3", "py-1", "border", "border-gray-300", "shadow-sm", "text-sm", "leading-4", "font-medium", "rounded-md", "text-gray-700", "bg-white", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", 3, "click"], [1, "fas", "fa-plus-circle", "mr-2"], ["formArrayName", "questions", 1, "space-y-4"], ["class", "p-4 border rounded-md space-y-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "px-4", "py-2.5", "text-sm", "font-medium", "rounded-md", "shadow-sm", "text-white", "bg-primary", "hover:bg-blue-600", "disabled:bg-primary/50", "disabled:cursor-not-allowed", 3, "disabled"], ["class", "fa-solid fa-rotate mr-2 animate-spin", 4, "ngIf"], [1, "text-red-500", "text-sm"], [1, "p-4", "border", "rounded-md", "space-y-4", 3, "formGroupName"], [1, "flex", "justify-between", "items-center"], [1, "font-medium"], ["type", "button", "class", "text-red-500 hover:text-red-700", 3, "click", 4, "ngIf"], [1, "flex", "gap-4"], [1, "space-y-2", "w-3/4"], [1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "formControlName", "title", "placeholder", "Entrez le titre de la question", 1, "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-blue-500", "focus:ring-blue-500", "sm:text-sm"], [1, "space-y-2", "w-1/4"], ["type", "number", "formControlName", "points", "min", "1", 1, "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-blue-500", "focus:ring-blue-500", "sm:text-sm"], ["formArrayName", "answers", 1, "space-y-2"], ["class", "flex items-start space-x-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "text-red-500", "hover:text-red-700", 3, "click"], [1, "fas", "fa-trash"], [1, "flex", "items-start", "space-x-4", 3, "formGroupName"], [1, "flex-1"], ["type", "text", "formControlName", "text", 1, "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-blue-500", "focus:ring-blue-500", "sm:text-sm", 3, "placeholder"], [1, "flex", "items-center", "h-5"], ["type", "checkbox", "formControlName", "isCorrect", 1, "h-4", "w-4", "text-blue-600", "focus:ring-blue-500", "border-gray-300", "rounded"], [1, "fa-solid", "fa-rotate", "mr-2", "animate-spin"]], template: function UpdateQuizsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UpdateQuizsComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Titre du quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UpdateQuizsComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateQuizsComponent_Template_button_click_11_listener() { return ctx.addQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Ajouter une question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UpdateQuizsComponent_div_15_Template, 25, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13)(17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UpdateQuizsComponent_i_18_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.quizForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.quizForm.get("title")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.quizForm.get("title")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questions.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.quizForm.invalid || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Mise \u00E0 jour..." : "Mettre \u00E0 jour le quiz", " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.25rem;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n}\n\nbutton[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n\n.space-y-6[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.space-y-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.space-y-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.375rem;\n  width: 100%;\n}\n\n.text-red-500[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.375rem;\n  padding: 1rem;\n}\n\n.fas[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1xdWl6cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBQTtBQUNBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFQSw0QkFBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBRUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFFQSxtQ0FBQTtBQUNBO0VBQ0ksZ0NBQUE7QUFDSjtBQUVBO0VBQ0ksMkJBQUE7QUFDSjtBQUVBLG1DQUFBO0FBQ0E7O0VBRUksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7QUFDSjtBQUVBLDRDQUFBO0FBQ0E7RUFDSSxrQkFBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtBQUNKO0FBRUEsMEJBQUE7QUFDQTs7RUFFSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFDSjtBQUVBLDZCQUFBO0FBQ0E7RUFDSSxjQUFBO0FBQ0o7QUFFQSw0QkFBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFDSjtBQUVBLG9CQUFBO0FBQ0E7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoidXBkYXRlLXF1aXpzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ3VzdG9tIHN0eWxlcyB0aGF0IGNhbid0IGJlIGFjaGlldmVkIHdpdGggVGFpbHdpbmQgKi9cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiBDdXN0b20gY2hlY2tib3ggc3R5bGluZyAqL1xuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xuICAgIGJvcmRlci1jb2xvcjogIzNiODJmNjtcbn1cblxuLyogQ3VzdG9tIHRyYW5zaXRpb25zIGZvciBidXR0b25zICovXG5idXR0b24ge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLyogQ3VzdG9tIGZvY3VzIHN0YXRlcyBmb3IgaW5wdXRzICovXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2I4MmY2O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKTtcbn1cblxuLyogRW5zdXJlIHByb3BlciBzcGFjaW5nIGZvciBmb3JtIGVsZW1lbnRzICovXG4uc3BhY2UteS02PiorKiB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uc3BhY2UteS00PiorKiB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnNwYWNlLXktMj4qKyoge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLyogU3R5bGUgZm9yIGZvcm0gaW5wdXRzICovXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBTdHlsZSBmb3IgZXJyb3IgbWVzc2FnZXMgKi9cbi50ZXh0LXJlZC01MDAge1xuICAgIGNvbG9yOiAjZWY0NDQ0O1xufVxuXG4vKiBTdHlsZSBmb3IgZm9ybSBzZWN0aW9ucyAqL1xuLmJvcmRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4vKiBTdHlsZSBmb3IgaWNvbnMgKi9cbi5mYXMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 3493:
/*!****************************************************!*\
  !*** ./src/app/admin/session/session.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionComponent": () => (/* binding */ SessionComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_session_popup_session_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/session-popup/session-popup.component */ 5952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_services_sesssions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/sesssions.service */ 4344);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






function SessionComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 13);
} }
function SessionComponent__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "circle", 15)(2, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SessionComponent_tr_28_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SessionComponent_tr_28_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u27F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SessionComponent_tr_28_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u23F0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "text-green-500": a0, "text-yellow-500": a1, "text-gray-500": a2 }; };
function SessionComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 17)(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 19)(12, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SessionComponent_tr_28_span_13_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SessionComponent_tr_28_span_14_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SessionComponent_tr_28_span_15_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const session_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](session_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](session_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](session_r3.formation.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formatDate(session_r3.startDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formatDate(session_r3.endDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](10, _c0, session_r3.status === "Termin\u00E9e", session_r3.status === "En cours", session_r3.status === "Pas encore"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", session_r3.status === "Termin\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", session_r3.status === "En cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", session_r3.status === "Pas encore");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", session_r3.status, " ");
} }
class SessionComponent {
    constructor(fb, sessionService, dialog) {
        this.fb = fb;
        this.sessionService = sessionService;
        this.dialog = dialog;
        this._sessions = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.loadSessions();
    }
    get sessions() {
        return this._sessions
            .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    }
    loadSessions() {
        this.isLoading = true;
        this.sessionService.getAll().subscribe({
            next: (sessions) => {
                this._sessions = sessions;
                this.isLoading = false;
            },
            error: (error) => {
                console.error('Error loading sessions:', error);
                this.isLoading = false;
            }
        });
    }
    reloadSessions() {
        this.loadSessions();
    }
    formatDate(date) {
        return new Intl.DateTimeFormat('fr', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }).format(date);
    }
    openCreateSessionDialog() {
        const dialogRef = this.dialog.open(src_app_shared_components_session_popup_session_popup_component__WEBPACK_IMPORTED_MODULE_0__.SessionPopupComponent, {
            width: '500px',
            data: {}
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.sessions.push(result);
            }
        });
    }
}
SessionComponent.ɵfac = function SessionComponent_Factory(t) { return new (t || SessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_sesssions_service__WEBPACK_IMPORTED_MODULE_1__.SesssionsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
SessionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SessionComponent, selectors: [["app-session"]], decls: 29, vars: 5, consts: [[1, "animate-fade-in", "container", "mx-auto", "p-6"], [1, "mb-8", "flex", "justify-between", "items-center"], [1, "text-3xl", "font-bold", "text-gray-800", "!mb-0"], [1, "flex", "gap-3"], [1, "px-4", "py-2", "bg-gray-100", "text-gray-700", "rounded-lg", "shadow-sm", "text-sm", "font-medium", "hover:bg-gray-200", "transition-colors", "flex", "items-center", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled", "click"], ["class", "fa-solid fa-rotate-right mr-2", 4, "ngIf"], ["class", "animate-spin h-4 w-4 mr-2", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "px-4", "py-2", "bg-primary", "text-white", "rounded-lg", "shadow-sm", "text-sm", "font-medium", "hover:bg-primary/90", "transition-colors", 3, "click"], [1, "rounded-lg", "border", "shadow-md"], [1, "w-full"], [1, "bg-gray-100"], [1, "py-4", "px-6", "text-left", "text-sm", "font-medium", "text-gray-700"], ["class", "border-t", 4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-rotate-right", "mr-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4", "mr-2"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "border-t"], [1, "py-4", "px-6", "font-medium"], [1, "py-4", "px-6"], [1, "flex", "items-center", 3, "ngClass"], ["class", "mr-2", 4, "ngIf"], [1, "mr-2"]], template: function SessionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Sessions de formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionComponent_Template_button_click_5_listener() { return ctx.reloadSessions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SessionComponent_i_6_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SessionComponent__svg_svg_7_Template, 3, 0, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionComponent_Template_button_click_9_listener() { return ctx.openCreateSessionDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Ajouter une session ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "table", 9)(13, "thead")(14, "tr", 10)(15, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Nom de la session");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Date de d\u00E9but");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Date de fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Statut");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, SessionComponent_tr_28_Template, 17, 14, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Actualisation..." : "Actualiser", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sessions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".animate-fade-in[_ngcontent-%COMP%] {\n  animation: fadeIn 0.5s ease-in;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.primary[_ngcontent-%COMP%] {\n  background-color: #4a90e2;\n  \n}\n\n.primary-dark[_ngcontent-%COMP%] {\n  background-color: #357abd;\n  \n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\nth[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity, 1));\n}\n\ntr[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n}\n\ntd[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxVQUFBO0VBQ047RUFFRTtJQUNJLFVBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtBQURKOztBQUtJO0VBQUEsV0FBQTtFQUFBO0FBQUE7O0FBS0E7O0VBQUEsaUJBQUE7RUFBQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGtCQUFBO0VBQUEsNERBQUE7RUFBQSxnQkFBQTtFQUFBLG1CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUEiLCJmaWxlIjoic2Vzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmltYXRlLWZhZGUtaW4ge1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1pbjtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE5MGUyO1xuICAgIC8qIEV4YW1wbGUgcHJpbWFyeSBjb2xvciAqL1xufVxuXG4ucHJpbWFyeS1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3YWJkO1xuICAgIC8qIERhcmtlciBzaGFkZSBmb3IgaG92ZXIgKi9cbn1cblxudGFibGUge1xuICAgIEBhcHBseSB3LWZ1bGwgYm9yZGVyLWNvbGxhcHNlO1xufVxuXG50aCxcbnRkIHtcbiAgICBAYXBwbHkgcHktNCBweC02O1xufVxuXG50aCB7XG4gICAgQGFwcGx5IGJnLWdyYXktMTAwIHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDA7XG59XG5cbnRyIHtcbiAgICBAYXBwbHkgYm9yZGVyLXQ7XG59XG5cbnRkIHtcbiAgICBAYXBwbHkgdGV4dC1zbSB0ZXh0LWdyYXktOTAwO1xufSJdfQ== */"] });


/***/ }),

/***/ 9574:
/*!******************************************************!*\
  !*** ./src/app/admin/settings/settings.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SettingsComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.settingsForm = this.fb.group({
            companyName: ['SUMITOMO ELECTRIC BORDNETZE SE', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            logo: [null],
            emailNotifications: [true],
            reminderDays: [7, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.max(30)]],
            defaultSessionCapacity: [15, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(1)]],
            mandatoryTrainingReminders: [true],
            reportEmail: ['admin@example.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            language: ['fr', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]
        });
    }
    onSubmit() {
        if (this.settingsForm.valid) {
            console.log('Settings saved:', this.settingsForm.value);
            alert('Paramètres enregistrés avec succès!');
            // Here you would typically send the data to a backend service
        }
        else {
            alert('Veuillez corriger les erreurs dans le formulaire.');
        }
    }
    onCancel() {
        this.settingsForm.reset({
            companyName: 'SUMITOMO ELECTRIC BORDNETZE SE',
            logo: null,
            emailNotifications: true,
            reminderDays: 7,
            defaultSessionCapacity: 15,
            mandatoryTrainingReminders: true,
            reportEmail: 'admin@example.com',
            language: 'fr'
        });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 72, vars: 2, consts: [[1, "animate-fade-in", "container", "mx-auto", "p-6"], [1, "flex", "justify-between", "items-center", "mb-8"], [1, "text-3xl", "font-bold", "text-gray-800"], [1, "bg-white", "rounded-xl", "shadow-lg", "overflow-hidden"], [1, "px-8", "py-6", "border-b", "border-gray-200"], [1, "text-xl", "font-semibold", "text-gray-800"], [1, "p-8", 3, "formGroup", "ngSubmit"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-8"], [1, "text-lg", "font-medium", "text-gray-700", "mb-6"], [1, "space-y-6"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["type", "text", "formControlName", "companyName", "placeholder", "Entrez le nom de l'entreprise", 1, "w-full", "p-3", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent"], [1, "flex", "items-center", "space-x-4"], [1, "h-20", "w-20", "rounded-lg", "bg-gray-200", "flex", "items-center", "justify-center"], [1, "text-gray-400"], ["type", "button", 1, "px-4", "py-2", "bg-white", "border", "border-gray-300", "rounded-lg", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "transition-colors"], [1, "text-lg", "font-medium", "text-gray-700", "mt-8", "mb-6"], ["formControlName", "language", 1, "w-full", "p-3", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent"], ["value", "fr"], ["value", "en"], ["value", "de"], [1, "flex", "items-center"], ["type", "checkbox", "id", "emailNotifications", "formControlName", "emailNotifications", 1, "h-5", "w-5", "text-primary", "border-gray-300", "rounded", "focus:ring-primary"], ["for", "emailNotifications", 1, "ml-3", "text-sm", "text-gray-700"], ["type", "checkbox", "id", "mandatoryTrainingReminders", "formControlName", "mandatoryTrainingReminders", 1, "h-5", "w-5", "text-primary", "border-gray-300", "rounded", "focus:ring-primary"], ["for", "mandatoryTrainingReminders", 1, "ml-3", "text-sm", "text-gray-700"], ["type", "number", "formControlName", "reminderDays", "min", "1", "max", "30", 1, "w-full", "p-3", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent"], ["type", "email", "formControlName", "reportEmail", "placeholder", "Entrez l'email pour les rapports", 1, "w-full", "p-3", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent"], ["type", "number", "formControlName", "defaultSessionCapacity", "min", "1", 1, "w-full", "p-3", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent"], [1, "mt-10", "pt-6", "border-t", "border-gray-200", "flex", "justify-end", "space-x-4"], ["type", "button", 1, "px-4", "py-2", "bg-white", "border", "border-gray-300", "rounded-lg", "shadow-sm", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "flex", "items-center", "space-x-2", "transition-colors", 3, "click"], [1, "inline-block"], ["type", "submit", 1, "px-4", "py-2", "bg-primary", "text-white", "rounded-lg", "shadow-sm", "text-sm", "font-medium", "hover:bg-primary-dark", "flex", "items-center", "space-x-2", "transition-colors", 3, "disabled"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Param\u00E8tres");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Configuration g\u00E9n\u00E9rale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "div")(11, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Informations de l'entreprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "div")(15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Nom de l'entreprise ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div")(19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Logo de l'entreprise ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Parcourir... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Pr\u00E9f\u00E9rences de langue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div")(30, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Langue par d\u00E9faut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "select", 17)(33, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Fran\u00E7ais");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Deutsch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div")(40, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Notifications et rappels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 9)(43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Activer les notifications par email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Rappels pour les formations obligatoires ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div")(52, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Jours avant la formation pour envoyer un rappel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div")(56, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Email pour les rapports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Param\u00E8tres par d\u00E9faut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div")(62, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Capacit\u00E9 par d\u00E9faut des sessions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 29)(66, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_66_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 32)(70, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Enregistrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.settingsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.settingsForm.invalid);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName], styles: [".form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: var(--radius);\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n  padding: 0.75rem;\n}\n\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: transparent;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-color: hsl(var(--primary));\n}\n\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: fadeIn 0.5s ease-in;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.primary[_ngcontent-%COMP%] {\n  background-color: #4a90e2;\n  \n}\n\n.primary-dark[_ngcontent-%COMP%] {\n  background-color: #357abd;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQUEsV0FBQTtFQUFBLDRCQUFBO0VBQUEsaUJBQUE7RUFBQSxzQkFBQTtFQUFBLDREQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLHlCQUFBO0VBQUEsMkdBQUE7RUFBQSx5R0FBQTtFQUFBLDRGQUFBO0VBQUE7QUFBQTs7QUFHSjtFQUNJLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFVBQUE7RUFDTjtFQUVFO0lBQ0ksVUFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0FBREoiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1pbnB1dCB7XG4gICAgQGFwcGx5IHctZnVsbCBwLTMgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXByaW1hcnkgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50O1xufVxuXG4uYW5pbWF0ZS1mYWRlLWluIHtcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW47XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4ucHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhOTBlMjtcbiAgICAvKiBFeGFtcGxlIHByaW1hcnkgY29sb3IgKi9cbn1cblxuLnByaW1hcnktZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1N2FiZDtcbiAgICAvKiBEYXJrZXIgc2hhZGUgZm9yIGhvdmVyICovXG59Il19 */"] });


/***/ }),

/***/ 1782:
/*!**********************************************!*\
  !*** ./src/app/admin/test/test.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
TestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 2, vars: 0, template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7480:
/*!*****************************************************!*\
  !*** ./src/app/core/services/attachment.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentService": () => (/* binding */ AttachmentService),
/* harmony export */   "FileType": () => (/* binding */ FileType)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



/**
 * Supported file types for attachments
 */
var FileType;
(function (FileType) {
    FileType["PDF"] = "pdf";
    FileType["DOC"] = "doc";
    FileType["DOCX"] = "docx";
    FileType["XLS"] = "xls";
    FileType["XLSX"] = "xlsx";
    FileType["PPT"] = "ppt";
    FileType["PPTX"] = "pptx";
    FileType["JPG"] = "jpg";
    FileType["JPEG"] = "jpeg";
    FileType["PNG"] = "png";
    FileType["GIF"] = "gif";
    FileType["MP4"] = "mp4";
    FileType["AVI"] = "avi";
    FileType["MOV"] = "mov";
    FileType["ZIP"] = "zip";
    FileType["RAR"] = "rar";
    FileType["SEVENZ"] = "7z";
    FileType["UNKNOWN"] = "unknown";
})(FileType || (FileType = {}));
class AttachmentService {
    constructor(http) {
        this.http = http;
        this.apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/attachment`;
    }
    /**
     * Upload a file as an attachment to a module
     * @param moduleId The ID of the module to attach the file to
     * @param file The file to upload
     * @returns Observable with the created attachment
     */
    uploadAttachment(moduleId, file) {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(`${this.apiUrl}/module/${moduleId}`, formData);
    }
    /**
     * Delete an attachment
     * @param attachmentId The ID of the attachment to delete
     * @returns Observable with void result
     */
    deleteAttachment(attachmentId) {
        return this.http.delete(`${this.apiUrl}/${attachmentId}`);
    }
    /**
     * Get file icon based on file type
     * @param fileType The type of the file
     * @returns Path to the icon image
     */
    getFileIcon(fileType) {
        if (!fileType)
            return 'assets/icons/file.svg';
        switch (fileType.toLowerCase()) {
            // Document types
            case FileType.PDF:
                return 'assets/icons/pdf.svg';
            // Microsoft Office - Word
            case FileType.DOC:
            case FileType.DOCX:
                return 'assets/icons/doc.svg';
            // Microsoft Office - Excel
            case FileType.XLS:
            case FileType.XLSX:
                return 'assets/icons/xls.svg';
            // Microsoft Office - PowerPoint
            case FileType.PPT:
            case FileType.PPTX:
                return 'assets/icons/ppt.svg';
            // Image types
            case FileType.JPG:
            case FileType.JPEG:
            case FileType.PNG:
            case FileType.GIF:
                return 'assets/icons/image.svg';
            // Video types
            case FileType.MP4:
            case FileType.AVI:
            case FileType.MOV:
                return 'assets/icons/video.svg';
            // Archive types
            case FileType.ZIP:
            case FileType.RAR:
            case FileType.SEVENZ:
                return 'assets/icons/zip.svg';
            // Default for unknown types
            default:
                return 'assets/icons/file.svg';
        }
    }
    /**
     * Get file icon color based on file type
     * @param fileType The type of the file
     * @returns Tailwind CSS color class
     */
    getFileIconColor(fileType) {
        if (!fileType)
            return 'text-gray-500';
        switch (fileType.toLowerCase()) {
            // Document types
            case FileType.PDF:
                return 'text-red-500';
            // Microsoft Office - Word
            case FileType.DOC:
            case FileType.DOCX:
                return 'text-blue-700';
            // Microsoft Office - Excel
            case FileType.XLS:
            case FileType.XLSX:
                return 'text-green-600';
            // Microsoft Office - PowerPoint
            case FileType.PPT:
            case FileType.PPTX:
                return 'text-orange-500';
            // Image types
            case FileType.JPG:
            case FileType.JPEG:
            case FileType.PNG:
            case FileType.GIF:
                return 'text-purple-500';
            // Video types
            case FileType.MP4:
            case FileType.AVI:
            case FileType.MOV:
                return 'text-pink-500';
            // Archive types
            case FileType.ZIP:
            case FileType.RAR:
            case FileType.SEVENZ:
                return 'text-yellow-500';
            // Default for unknown types
            default:
                return 'text-gray-500';
        }
    }
    /**
     * Extract filename from URL
     * @param url The URL of the file
     * @returns The filename
     */
    getFileName(url) {
        if (!url)
            return '';
        // Remove query parameters if any
        const urlWithoutParams = url.split('?')[0];
        // Get the last part of the URL (the filename)
        const parts = urlWithoutParams.split('/');
        const filename = parts[parts.length - 1];
        // Decode URI components to handle special characters
        return decodeURIComponent(filename);
    }
    /**
     * Get file type from filename
     * @param filename The name of the file
     * @returns The file type
     */
    getFileType(filename) {
        if (!filename)
            return FileType.UNKNOWN;
        const extension = filename.split('.').pop()?.toLowerCase() || '';
        // Check if the extension matches any of the known file types
        for (const type in FileType) {
            if (FileType[type] === extension) {
                return extension;
            }
        }
        return FileType.UNKNOWN;
    }
    /**
     * Get a human-readable file size
     * @param bytes File size in bytes
     * @returns Formatted file size (e.g., "1.5 MB")
     */
    formatFileSize(bytes) {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    }
}
AttachmentService.ɵfac = function AttachmentService_Factory(t) { return new (t || AttachmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AttachmentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AttachmentService, factory: AttachmentService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map