"use strict";
(self["webpackChunkformationApp"] = self["webpackChunkformationApp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/main-layout/main-layout.component */ 7718);
/* harmony import */ var _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/auth-layout/auth-layout.component */ 1201);
/* harmony import */ var _layout_error_layout_error_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/error-layout/error-layout.component */ 250);
/* harmony import */ var _layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/admin-layout/admin-layout.component */ 115);
/* harmony import */ var _layout_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/employee-layout/employee-layout.component */ 1754);
/* harmony import */ var _layout_manager_layout_manager_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/manager-layout/manager-layout.component */ 9632);
/* harmony import */ var _layout_team_leader_layout_team_leader_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/team-leader-layout/team-leader-layout.component */ 7002);
/* harmony import */ var _core_guards_role_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/guards/role.guard */ 4565);
/* harmony import */ var _core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/constants/roles.constants */ 8843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












const routes = [
    {
        path: '', component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainLayoutComponent, children: [
            { path: '', redirectTo: '/', pathMatch: 'full' },
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 5705)).then(m => m.MainModule)
            }
        ]
    },
    {
        path: '', component: _layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__.AdminLayoutComponent, children: [
            {
                path: 'admin',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_condidat_quiz_quiz-passing_quiz-passing_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(m => m.AdminModule),
            }
        ],
        canActivate: [_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_7__.RoleGuard],
        data: { roles: [_core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_8__.UserRole.Administrator] },
    },
    {
        path: '', component: _layout_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeLayoutComponent, children: [
            {
                path: 'condidat',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_condidat_quiz_quiz-passing_quiz-passing_component_ts"), __webpack_require__.e("src_app_condidat_condidat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./condidat/condidat.module */ 6940)).then(m => m.CondidatModule)
            }
        ],
        // canActivate: [RoleGuard],
        // data: { roles: [UserRole.Employee] }
    },
    {
        path: '', component: _layout_manager_layout_manager_layout_component__WEBPACK_IMPORTED_MODULE_5__.ManagerLayoutComponent, children: [
            {
                path: 'manager',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_manager_manager_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./manager/manager.module */ 4886)).then(m => m.ManagerModule)
            }
        ],
        // canActivate: [RoleGuard],
        // data: { roles: [UserRole.Manager] }
    },
    {
        path: '', component: _layout_team_leader_layout_team_leader_layout_component__WEBPACK_IMPORTED_MODULE_6__.TeamLeaderLayoutComponent, children: [
            {
                path: 'team-leader',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_supervisor_supervisor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./supervisor/supervisor.module */ 4667)).then(m => m.SupervisorModule)
            }
        ],
        // canActivate: [RoleGuard],
        // data: { roles: [UserRole.TeamLeader] }
    },
    {
        path: '', component: _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent, children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthModule)
            }
        ]
    },
    {
        path: '', component: _layout_error_layout_error_layout_component__WEBPACK_IMPORTED_MODULE_2__.ErrorLayoutComponent, children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_error_error_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./error/error.module */ 6419)).then(m => m.ErrorModule)
            },
            { path: '**', redirectTo: '404', pathMatch: 'full' },
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/auth.service */ 263);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ 9129);




class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'formationApp';
    }
    ngOnInit() {
        this.setcurrentUser();
    }
    setcurrentUser() {
        const item = localStorage.getItem('user');
        if (item != null) {
            this.auth.setCurrentUser(JSON.parse(item));
            // this.infoUser.loadUser()
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast")(1, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, primeng_toast__WEBPACK_IMPORTED_MODULE_3__.Toast], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/interceptors/jwt.interceptor */ 3743);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.module */ 4805);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
            useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__.JwtInterceptor,
            multi: true
        },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_11__.ToastModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_11__.ToastModule] }); })();


/***/ }),

/***/ 8843:
/*!***************************************************!*\
  !*** ./src/app/core/constants/roles.constants.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER_ROLES": () => (/* binding */ USER_ROLES),
/* harmony export */   "UserRole": () => (/* binding */ UserRole)
/* harmony export */ });
var UserRole;
(function (UserRole) {
    UserRole["Administrator"] = "Administrator";
    UserRole["HierarchicalLeader"] = "HierarchicalLeader";
    UserRole["TeamLeader"] = "TeamLeader";
    UserRole["PostLeader"] = "PostLeader";
    UserRole["QualityAgent"] = "QualityAgent";
    UserRole["Manager"] = "Manager";
    UserRole["Employee"] = "Employee";
})(UserRole || (UserRole = {}));
const USER_ROLES = [
    UserRole.Administrator,
    UserRole.HierarchicalLeader,
    UserRole.TeamLeader,
    UserRole.PostLeader,
    UserRole.QualityAgent,
    UserRole.Manager,
    UserRole.Employee
];


/***/ }),

/***/ 4565:
/*!*******************************************!*\
  !*** ./src/app/core/guards/role.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuard": () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 263);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





/**
 * Garde de rôle pour protéger les routes en fonction des rôles utilisateur
 *
 * Ce garde vérifie si l'utilisateur connecté possède au moins un des rôles
 * requis pour accéder à une route spécifique. Si l'utilisateur n'est pas
 * connecté ou ne possède pas les rôles nécessaires, il sera redirigé.
 */
class RoleGuard {
    /**
     * Constructeur du garde de rôle
     *
     * @param authService - Service d'authentification pour accéder à l'utilisateur courant
     * @param router - Service de routage pour les redirections
     */
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * Méthode principale du garde qui détermine si l'accès à la route est autorisé
     *
     * @param route - Instantané de la route activée contenant les données de route
     * @param state - État actuel du routeur
     * @returns Observable<boolean> - Observable qui émet true si l'accès est autorisé, false sinon
     */
    canActivate(route, state) {
        // Récupération des rôles requis depuis les données de la route
        const requiredRoles = route.data['roles'];
        // Observation de l'utilisateur courant via le service d'authentification
        return this.authService.currentUser$.pipe(
        // Prend seulement la première émission puis se désabonne
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
            console.log('RoleGuard: User:', user, 'Required Roles:', requiredRoles); // Log de débogage
            // Vérification si l'utilisateur est connecté
            if (!user) {
                console.log('RoleGuard: No user, redirecting to /login');
                // Redirection vers la page de connexion si aucun utilisateur n'est connecté
                this.router.navigate(['/login']);
                return false;
            }
            // Vérification si l'utilisateur possède au moins un des rôles requis
            const hasRequiredRole = requiredRoles.some(role => user.roles.includes(role));
            // Redirection vers la page 403 (Accès interdit) si l'utilisateur n'a pas les rôles nécessaires
            if (!hasRequiredRole) {
                console.log('RoleGuard: User lacks required role, redirecting to /403');
                this.router.navigate(['/403']);
                return false;
            }
            // Accès autorisé si l'utilisateur a les rôles requis
            console.log('RoleGuard: Access granted');
            return true;
        }));
    }
}
RoleGuard.ɵfac = function RoleGuard_Factory(t) { return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
RoleGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RoleGuard, factory: RoleGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3743:
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class JwtInterceptor {
    intercept(request, next) {
        const user = localStorage.getItem('user');
        if (user) {
            const { token } = JSON.parse(user);
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
        }
        // Pass the request to the next handler
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 9239:
/*!*******************************************!*\
  !*** ./src/app/core/models/quiz.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 263:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.service */ 1645);






class AuthService {
    constructor(http, route, notificationService) {
        this.http = http;
        this.route = route;
        this.notificationService = notificationService;
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
        this.currentUser$ = this.currentUserSource.asObservable();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        const user = localStorage.getItem('user');
        if (user) {
            this.currentUserSource.next(JSON.parse(user));
        }
        else {
            this.currentUserSource.next(null);
        }
    }
    login(model) {
        return this.http.post(this.baseUrl + "/auth/login", { username: model.email, password: model.password }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
            const user = res;
            if (user) {
                this.setCurrentUser(user);
                this.redirectUser(user.redirectUrl);
            }
        }));
    }
    setCurrentUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
        // Initialiser les notifications après la connexion
        this.notificationService.initNotifications(user);
    }
    redirectUser(redirectUrl) {
        this.route.navigateByUrl(redirectUrl);
    }
    logout() {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
        // Réinitialiser les notifications lors de la déconnexion
        this.notificationService.resetNotifications();
        this.route.navigateByUrl('/login');
    }
    redirectToDashboard() {
        this.currentUser$.subscribe((user) => {
            if (user) {
                this.redirectUser(user.redirectUrl);
            }
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5061:
/*!****************************************************!*\
  !*** ./src/app/core/services/formation.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormationService": () => (/* binding */ FormationService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class FormationService {
    constructor(http) {
        this.http = http;
        this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/formation`;
    }
    createFormation(formation) {
        return this.http.post(this.apiUrl, formation);
    }
    getFormations() {
        return this.http.get(this.apiUrl);
    }
    getFormation(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    updateFormation(id, formation) {
        return this.http.put(`${this.apiUrl}/${id}`, formation);
    }
    deleteFormation(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    updateFormationContent(id, formationContent) {
        return this.http.put(`${this.apiUrl}/${id}/content`, formationContent);
    }
    updateFormationCategory(id, category) {
        return this.http.put(`${this.apiUrl}/${id}/category`, category);
    }
    updateFormationGroups(id, groupIds) {
        return this.http.put(`${this.apiUrl}/${id}/groups`, groupIds);
    }
    updateFormationModules(id, modules) {
        return this.http.put(`${this.apiUrl}/${id}/modules`, modules);
    }
}
FormationService.ɵfac = function FormationService_Factory(t) { return new (t || FormationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
FormationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormationService, factory: FormationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7297:
/*!************************************************!*\
  !*** ./src/app/core/services/group.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupService": () => (/* binding */ GroupService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class GroupService {
    constructor(http) {
        this.http = http;
        this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/group`;
    }
    getGroups() {
        return this.http.get(this.apiUrl);
    }
    getGroup(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    createGroup(newGroup) {
        return this.http.post(this.apiUrl, newGroup);
    }
    createUser(model) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/users/create-user`, model);
    }
}
GroupService.ɵfac = function GroupService_Factory(t) { return new (t || GroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
GroupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GroupService, factory: GroupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1645:
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ 7930);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/signalr */ 4449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);





class NotificationService {
    constructor(http) {
        this.http = http;
        this.apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/notification`;
        this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hubsUrl;
        // BehaviorSubject pour stocker toutes les notifications
        this.notificationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.notifications$ = this.notificationsSubject.asObservable();
        this.notificationSound = new Audio('assets/audio/notification-1.wav');
    }
    /**
     * Charge toutes les notifications de l'utilisateur
     * Si l'utilisateur est sur la page de notifications, les marque comme lues
     */
    loadNotifications() {
        this.http.get(`${this.apiUrl}/user`).subscribe({
            next: (notifications) => {
                this.notificationsSubject.next(notifications);
            },
            error: (err) => {
                console.error('Erreur lors du chargement des notifications', err);
            }
        });
    }
    /**
     * Initialise les notifications pour l'utilisateur connecté
     * À appeler après la connexion ou au chargement de l'application
     */
    initNotifications(user) {
        // Réinitialiser d'abord pour éviter les doublons
        this.resetNotifications();
        // Puis charger les notifications
        this.loadNotifications();
        this.createHubConnection(user); //  creattion de pont entre application angular et application dotnet 
    }
    /**
     * Réinitialise les notifications
     * À appeler lors de la déconnexion
     */
    resetNotifications() {
        this.notificationsSubject.next([]);
        this.stopHubConnection();
    }
    /**
     * Crée et démarre la connexion au hub SignalR
     */
    createHubConnection(user) {
        this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__.HubConnectionBuilder()
            .withUrl(this.hubUrl + 'presence', {
            skipNegotiation: false,
            // transport: signalR.HttpTransportType.WebSockets,
            // credentials: "omit",
            accessTokenFactory: () => user.token
        })
            .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Information)
            .withAutomaticReconnect()
            .build();
        this.hubConnection.start().catch(error => console.log(error));
        // ecouter les evenements avec le nom "ReceiveNotification" et faire le logic necessaire
        this.hubConnection.on('ReceiveNotification', (notification) => {
            this.notificationsSubject.next([...this.notificationsSubject.value, notification]); // ajouter la nouvelle notification a la liste des notifications
            this.notificationSound.play().catch(err => console.error('Erreur lors de la lecture du son:', err)); // lecture du son de notification
        });
    }
    /**
     * Arrête la connexion au hub
     */
    stopHubConnection() {
        if (this.hubConnection) {
            this.hubConnection.stop()
                .then(() => {
                console.log('SignalR connection stopped');
            })
                .catch(error => {
                console.error('Error stopping SignalR connection:', error);
            });
        }
    }
    /**
     * Indique que l'utilisateur entre dans la page de notifications
     */
    enterNotificationsPage() {
        // Charger les notifications fraîches
        this.loadNotifications();
    }
    /**
     * Indique que l'utilisateur quitte la page de notifications
     * Marque automatiquement toutes les notifications comme lues
     */
    exitNotificationsPage() {
        // Marquer toutes les notifications comme lues
        this.markAllAsRead().subscribe();
    }
    /**
     * Récupère toutes les notifications de l'utilisateur connecté
     * Utilise le BehaviorSubject pour retourner les notifications en cache
     */
    // getUserNotifications(): Observable<Notification[]> {
    //   // Retourne les notifications en cache
    //   return this.notifications$;
    // }
    /**
     * Marque toutes les notifications comme lues et met à jour le cache
     */
    markAllAsRead() {
        return this.http.put(`${this.apiUrl}/read-all`, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
            // Mettre à jour le cache local
            const notifications = this.notificationsSubject.value;
            const updatedNotifications = notifications.map(n => ({ ...n, received: true }));
            this.notificationsSubject.next(updatedNotifications);
        }));
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6920:
/*!***********************************************!*\
  !*** ./src/app/core/services/quiz.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizService": () => (/* binding */ QuizService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _models_quiz_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quiz.model */ 9239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class QuizService {
    constructor(http) {
        this.http = http;
        this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/quizs`;
    }
    createQuiz(quiz) {
        return this.http.post(this.apiUrl, quiz);
    }
    getQuizzes() {
        return this.http.get(this.apiUrl);
    }
    getQuiz(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    getQuizzesByFormation(formationId) {
        return this.http.get(`${this.apiUrl}/formation/${formationId}`);
    }
    updateQuiz(id, quiz) {
        return this.http.put(`${this.apiUrl}/${id}`, quiz);
    }
    deleteQuiz(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    submitQuizAnswer(quizId, sessionId, answers) {
        return this.http.post(`${this.apiUrl}/${quizId}/submit`, {
            sessionId,
            answers
        });
    }
    /**
     * Récupère les tentatives de quiz pour une formation spécifique
     * @param formationId ID de la formation
     * @returns Observable avec les résultats de la formation
     */
    getQuizAttemptsByFormation(formationId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/quizresults/formation/${formationId}`);
    }
    /**
     * Récupère les tentatives de quiz pour une session spécifique
     * @param sessionId ID de la session
     * @returns Observable avec les tentatives de quiz
     */
    getQuizAttemptsBySession(sessionId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/quizresults/session/${sessionId}`);
    }
    /**
     * Récupère une tentative de quiz spécifique
     * @param attemptId ID de la tentative
     * @returns Observable avec la tentative de quiz
     */
    getQuizAttempt(attemptId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/quizresults/attempt/${attemptId}`);
    }
}
QuizService.ɵfac = function QuizService_Factory(t) { return new (t || QuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
QuizService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: QuizService, factory: QuizService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4344:
/*!****************************************************!*\
  !*** ./src/app/core/services/sesssions.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesssionsService": () => (/* binding */ SesssionsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);





class SesssionsService {
    constructor(http) {
        this.http = http;
        this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/session`;
    }
    // Create a new session
    getAll() {
        return this.http.get(this.apiUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(sessions => sessions.map(session => ({
            ...session,
            startDate: new Date(session.startDate),
            endDate: new Date(session.endDate),
            status: this.getSessionStatus(session)
        }))));
    }
    createSession(model) {
        return this.http.post(this.apiUrl, model).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(session => ({
            ...session,
            startDate: new Date(session.startDate),
            endDate: new Date(session.endDate),
            status: this.getSessionStatus(session)
        })));
    }
    updateSession(model) {
        return this.http.put(`${this.apiUrl}/${model.id}`, model).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(session => ({
            ...session,
            startDate: new Date(session.startDate),
            endDate: new Date(session.endDate),
            status: this.getSessionStatus(session)
        })));
    }
    deleteSession(sessionId) {
        return this.http.delete(`${this.apiUrl}/${sessionId}`);
    }
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
}
SesssionsService.ɵfac = function SesssionsService_Factory(t) { return new (t || SesssionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
SesssionsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SesssionsService, factory: SesssionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 115:
/*!***************************************************************!*\
  !*** ./src/app/layout/admin-layout/admin-layout.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutComponent": () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/app-sidebar/app-sidebar.component */ 1876);



class AdminLayoutComponent {
    constructor() {
        this.sidebarMenuItems = [
            { path: '/admin', name: 'Tableau de bord', icon: 'fas fa-chart-bar' },
            { path: '/admin/formations', name: 'Formations', icon: 'fas fa-graduation-cap' },
            { path: '/admin/employees', name: 'Employés', icon: 'fas fa-users' },
            { path: '/admin/quizs', name: 'Quizs', icon: 'fas fa-question' },
            { path: '/admin/sessions', name: 'Sessions', icon: 'fas fa-calendar' },
            { path: '/admin/settings', name: 'Paramètres', icon: 'fas fa-cog' },
            // { path: "/admin/test", name: "Tests", icon: "fas fa-cog" },
        ];
    }
    ngOnInit() {
    }
    onSidebarToggle(isOpen) {
        console.log('Sidebar toggled:', isOpen);
    }
}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(); };
AdminLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 4, vars: 1, consts: [[1, "min-h-screen", "min-w-full", "flex", "flex-row"], [3, "menuItems", "sidebarToggled"], [1, "flex-1", "max-h-screen", "overflow-y-auto"]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "app-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidebarToggled", function AdminLayoutComponent_Template_app_sidebar_sidebarToggled_1_listener($event) { return ctx.onSidebarToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuItems", ctx.sidebarMenuItems);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1201:
/*!*************************************************************!*\
  !*** ./src/app/layout/auth-layout/auth-layout.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 2, vars: 0, consts: [[1, "min-h-screen", "min-w-full"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1754:
/*!*********************************************************************!*\
  !*** ./src/app/layout/employee-layout/employee-layout.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeLayoutComponent": () => (/* binding */ EmployeeLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/app-sidebar/app-sidebar.component */ 1876);



class EmployeeLayoutComponent {
    constructor() {
        this.sidebarMenuItems = [
            { path: '/condidat', name: 'Tableau de bord', icon: 'fas fa-chart-bar' },
            { path: '/condidat/formations', name: 'Formations', icon: 'fas fa-graduation-cap' },
            { path: '/condidat/certification', name: 'Certifications', icon: 'fas fa-certificate' },
            { path: '/condidat/notifications', name: 'Notifications', icon: 'fas fa-bell' },
            // { path: '/admin/employees', name: 'Employés', icon: 'fas fa-users' },
            // { path: '/admin/quizs', name: 'Quizs', icon: 'fas fa-question' },
            // { path: '/admin/sessions', name: 'Sessions', icon: 'fas fa-calendar' },
            // { path: '/admin/settings', name: 'Paramètres', icon: 'fas fa-cog' },
            // { path: "/admin/test", name: "Tests", icon: "fas fa-cog" },
        ];
    }
    ngOnInit() {
    }
    onSidebarToggle(isOpen) {
        console.log('Sidebar toggled:', isOpen);
    }
}
EmployeeLayoutComponent.ɵfac = function EmployeeLayoutComponent_Factory(t) { return new (t || EmployeeLayoutComponent)(); };
EmployeeLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmployeeLayoutComponent, selectors: [["app-employee-layout"]], decls: 4, vars: 1, consts: [[1, "min-h-screen", "min-w-full", "flex", "flex-row"], [3, "menuItems", "sidebarToggled"], [1, "flex-1", "max-h-screen", "overflow-y-auto"]], template: function EmployeeLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "app-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidebarToggled", function EmployeeLayoutComponent_Template_app_sidebar_sidebarToggled_1_listener($event) { return ctx.onSidebarToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuItems", ctx.sidebarMenuItems);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 250:
/*!***************************************************************!*\
  !*** ./src/app/layout/error-layout/error-layout.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorLayoutComponent": () => (/* binding */ ErrorLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class ErrorLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorLayoutComponent.ɵfac = function ErrorLayoutComponent_Factory(t) { return new (t || ErrorLayoutComponent)(); };
ErrorLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorLayoutComponent, selectors: [["app-error-layout"]], decls: 2, vars: 0, consts: [[1, "h-screen", "min-w-full"]], template: function ErrorLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4805:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-layout/main-layout.component */ 7718);
/* harmony import */ var _error_layout_error_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-layout/error-layout.component */ 250);
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ 1201);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-layout/admin-layout.component */ 115);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-layout/employee-layout.component */ 1754);
/* harmony import */ var _manager_layout_manager_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manager-layout/manager-layout.component */ 9632);
/* harmony import */ var _team_leader_layout_team_leader_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./team-leader-layout/team-leader-layout.component */ 7002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainLayoutComponent,
        _error_layout_error_layout_component__WEBPACK_IMPORTED_MODULE_1__.ErrorLayoutComponent,
        _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent,
        _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__.AdminLayoutComponent,
        _employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_5__.EmployeeLayoutComponent,
        _manager_layout_manager_layout_component__WEBPACK_IMPORTED_MODULE_6__.ManagerLayoutComponent,
        _team_leader_layout_team_leader_layout_component__WEBPACK_IMPORTED_MODULE_7__.TeamLeaderLayoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 7718:
/*!*************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutComponent": () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class MainLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 2, vars: 0, consts: [[1, "min-h-screen", "min-w-full"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9632:
/*!*******************************************************************!*\
  !*** ./src/app/layout/manager-layout/manager-layout.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerLayoutComponent": () => (/* binding */ ManagerLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/app-sidebar/app-sidebar.component */ 1876);



class ManagerLayoutComponent {
    constructor() {
        this.sidebarMenuItems = [
            { path: '/manager', name: 'Tableau de bord', icon: 'fas fa-chart-bar' },
            { path: '/manager/formations', name: 'Formations', icon: 'fas fa-graduation-cap' },
            // { path: '/admin/employees', name: 'Employés', icon: 'fas fa-users' },
            // { path: '/admin/quizs', name: 'Quizs', icon: 'fas fa-question' },
            { path: '/manager/sessions', name: 'Sessions', icon: 'fas fa-calendar' },
            { path: '/manager/settings', name: 'Paramètres', icon: 'fas fa-cog' },
            // { path: "/admin/test", name: "Tests", icon: "fas fa-cog" },
        ];
    }
    ngOnInit() {
    }
    onSidebarToggle(isOpen) {
        console.log('Sidebar toggled:', isOpen);
    }
}
ManagerLayoutComponent.ɵfac = function ManagerLayoutComponent_Factory(t) { return new (t || ManagerLayoutComponent)(); };
ManagerLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManagerLayoutComponent, selectors: [["app-manager-layout"]], decls: 4, vars: 1, consts: [[1, "min-h-screen", "min-w-full", "flex", "flex-row"], [3, "menuItems", "sidebarToggled"], [1, "flex-1", "max-h-screen", "overflow-y-auto"]], template: function ManagerLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "app-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidebarToggled", function ManagerLayoutComponent_Template_app_sidebar_sidebarToggled_1_listener($event) { return ctx.onSidebarToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuItems", ctx.sidebarMenuItems);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2VyLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7002:
/*!***************************************************************************!*\
  !*** ./src/app/layout/team-leader-layout/team-leader-layout.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamLeaderLayoutComponent": () => (/* binding */ TeamLeaderLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/app-sidebar/app-sidebar.component */ 1876);



class TeamLeaderLayoutComponent {
    constructor() {
        this.sidebarMenuItems = [
            { path: '/admin', name: 'Tableau de bord', icon: 'fas fa-chart-bar' },
            { path: '/admin/formations', name: 'Formations', icon: 'fas fa-graduation-cap' },
            { path: '/admin/employees', name: 'Employés', icon: 'fas fa-users' },
            { path: '/admin/quizs', name: 'Quizs', icon: 'fas fa-question' },
            { path: '/admin/sessions', name: 'Sessions', icon: 'fas fa-calendar' },
            { path: '/admin/settings', name: 'Paramètres', icon: 'fas fa-cog' },
            // { path: "/admin/test", name: "Tests", icon: "fas fa-cog" },
        ];
    }
    ngOnInit() {
    }
    onSidebarToggle(isOpen) {
        console.log('Sidebar toggled:', isOpen);
    }
}
TeamLeaderLayoutComponent.ɵfac = function TeamLeaderLayoutComponent_Factory(t) { return new (t || TeamLeaderLayoutComponent)(); };
TeamLeaderLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TeamLeaderLayoutComponent, selectors: [["app-team-leader-layout"]], decls: 4, vars: 1, consts: [[1, "min-h-screen", "min-w-full", "flex", "flex-row"], [3, "menuItems", "sidebarToggled"], [1, "flex-1", "max-h-screen", "overflow-y-auto"]], template: function TeamLeaderLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "app-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidebarToggled", function TeamLeaderLayoutComponent_Template_app_sidebar_sidebarToggled_1_listener($event) { return ctx.onSidebarToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuItems", ctx.sidebarMenuItems);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLWxlYWRlci1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1876:
/*!*************************************************************!*\
  !*** ./src/app/shared/app-sidebar/app-sidebar.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSidebarComponent": () => (/* binding */ AppSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ 263);
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/notification.service */ 1645);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);









function AppSidebarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppSidebarComponent_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.toggleSidebar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AppSidebarComponent_li_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r6.badge > 99 ? "99+" : item_r6.badge, " ");
  }
}

const _c0 = function () {
  return {
    exact: true
  };
};

function AppSidebarComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppSidebarComponent_li_15_span_5_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r6.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r6.badge && item_r6.badge > 0);
  }
}

function AppSidebarComponent_div_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", user_r9.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function AppSidebarComponent_div_16_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const user_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r9.username.slice(0, 2));
  }
}

function AppSidebarComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppSidebarComponent_div_16_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.togglePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppSidebarComponent_div_16_div_3_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppSidebarComponent_div_16_ng_template_4_Template, 2, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 24)(7, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const user_r9 = ctx.ngIf;

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", user_r9.imageUrl)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r9.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r9.email);
  }
}

function AppSidebarComponent_div_18_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppSidebarComponent_div_18_li_4_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const item_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.handlePopupAction(item_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", item_r18.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18.name);
  }
}

function AppSidebarComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppSidebarComponent_div_18_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppSidebarComponent_div_18_li_4_Template, 4, 2, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppSidebarComponent_div_18_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.auth.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.popupMenuItems);
  }
}

class AppSidebarComponent {
  constructor(router) {
    this.router = router;
    this.menuItems = [];
    this.sidebarToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService);
    this.showPopup = false;
    this.isOpen = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.popupMenuItems = [{
      name: 'Settings',
      icon: 'fas fa-cog'
    }, {
      name: 'Get Help',
      icon: 'fas fa-question-circle'
    }, {
      name: 'Search',
      icon: 'fas fa-search'
    }, {
      name: 'Account',
      icon: 'fas fa-user'
    }, {
      name: 'Billing',
      icon: 'fas fa-credit-card'
    }, {
      name: 'Notifications',
      icon: 'fas fa-bell'
    }, {
      name: 'Log out',
      icon: 'fas fa-sign-out-alt',
      action: () => {
        this.auth.logout();
      }
    }]; // Subscribe to route changes to update active state (optional)

    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(() => {
      this.showPopup = false;
    });
  }

  ngOnInit() {
    // S'abonner au nombre de notifications non lues
    this.subscription.add(this.notificationService.notifications$.subscribe(notifications => {
      // Mettre à jour le badge de notifications dans le menu
      const notificationMenuItem = this.menuItems.find(item => item.path.includes('/notifications'));

      if (notificationMenuItem) {
        notificationMenuItem.badge = notifications.filter(n => !n.received).length;
        ;
      }
    }));
  }

  ngOnDestroy() {
    // Se désabonner pour éviter les fuites de mémoire
    this.subscription.unsubscribe();
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.sidebarToggled.emit(this.isOpen); // Emit the new state
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  handlePopupAction(item) {
    if (item.action) {
      item.action();
    }

    this.showPopup = false; // Close popup after action
  }

}

AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) {
  return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};

AppSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppSidebarComponent,
  selectors: [["app-sidebar"]],
  inputs: {
    menuItems: "menuItems"
  },
  outputs: {
    sidebarToggled: "sidebarToggled"
  },
  decls: 19,
  vars: 10,
  consts: [["aria-label", "Toggle menu", 1, "md:hidden", "fixed", "top-4", "left-4", "z-50", "p-2", "rounded-md", "bg-primary", "text-white", 3, "click"], [2, "font-size", "20px", 3, "ngClass"], ["class", "md:hidden fixed inset-0 bg-black bg-opacity-50 z-40", 3, "click", 4, "ngIf"], [1, "p-4", "border-b", "border-sidebar-border"], ["routerLink", "/", 1, "flex", "items-center"], [1, "!h-10", "!w-10", "bg-white", "rounded-md", "flex", "items-center", "justify-center", "mr-3"], [1, "fas", "fa-graduation-cap", "text-sidebar-primary", 2, "font-size", "24px"], [1, "text-xl", "font-bold", "text-white", "!m-0"], [1, "text-xs", "text-white", "text-opacity-80", "!m-0"], [1, "flex-1", "overflow-y-auto", "py-4"], [1, "space-y-1", "px-2"], [4, "ngFor", "ngForOf"], ["class", "p-4 border-t border-sidebar-border cursor-pointer", 3, "click", 4, "ngIf"], ["class", "absolute z-50 bottom-4 right-[-180px] bg-white dark:bg-gray-900 rounded-md shadow-md p-2 w-56 border border-gray-200 dark:border-gray-800", 3, "click", 4, "ngIf"], [1, "md:hidden", "fixed", "inset-0", "bg-black", "bg-opacity-50", "z-40", 3, "click"], ["routerLinkActive", "active", 1, "sidebar-item", "flex", "items-center", "p-2", "rounded-md", "text-white", "hover:bg-white/10", "relative", 3, "routerLink", "routerLinkActiveOptions"], [1, "w-8", "h-8", "text-center", 2, "font-size", "20px", 3, "ngClass"], ["class", "notification-badge bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center", 4, "ngIf"], [1, "notification-badge", "bg-red-500", "text-white", "text-xs", "font-bold", "rounded-full", "h-5", "w-5", "flex", "items-center", "justify-center"], [1, "p-4", "border-t", "border-sidebar-border", "cursor-pointer", 3, "click"], [1, "flex", "items-center"], [1, "h-10", "w-10", "rounded-full", "bg-white", "flex", "items-center", "justify-center", "mr-3"], [4, "ngIf", "ngIfElse"], ["noImage", ""], [1, "text-sm"], [1, "text-white", "font-medium", "!mb-0"], [1, "text-white", "text-opacity-70", "text-xs", "!mb-0"], ["alt", "", 1, "h-10", "w-10", "rounded-full", 3, "src"], [1, "text-sidebar-primary", "font-medium"], [1, "absolute", "z-50", "bottom-4", "right-[-180px]", "bg-white", "dark:bg-gray-900", "rounded-md", "shadow-md", "p-2", "w-56", "border", "border-gray-200", "dark:border-gray-800", 3, "click"], [1, "px-2", "py-1.5", "text-sm", "font-medium", "text-gray-500", "dark:text-gray-400"], [1, "space-y-1", "w-full", "!pl-0"], ["class", "w-full flex px-2 py-1.5 text-sm rounded-sm hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "h-px", "my-1", "bg-gray-200", "dark:bg-gray-800"], [1, "px-2", "py-1.5", "text-sm", "text-red-600", "dark:text-red-400", "hover:bg-gray-100", "dark:hover:bg-gray-800", "rounded-sm", "cursor-pointer", 3, "click"], [1, "fas", "fa-sign-out-alt", "mr-2", "h-4", "w-4"], [1, "w-full", "flex", "px-2", "py-1.5", "text-sm", "rounded-sm", "hover:bg-gray-100", "dark:hover:bg-gray-800", "cursor-pointer", 3, "click"], [1, "mr-2", "h-4", "w-4", "text-gray-500", "dark:text-gray-400", 3, "ngClass"], [1, "text-gray-700", "dark:text-gray-300"]],
  template: function AppSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppSidebarComponent_Template_button_click_0_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppSidebarComponent_div_2_Template, 1, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "aside")(4, "div", 3)(5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Formation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "SUMITOMO Formation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nav", 9)(14, "ul", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AppSidebarComponent_li_15_Template, 6, 6, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AppSidebarComponent_div_16_Template, 11, 4, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AppSidebarComponent_div_18_Template, 10, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.isOpen ? "fas fa-times" : "fas fa-bars");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("h-full z-40 w-64 bg-sidebar transform transition-transform duration-300 ease-in-out\n      ", ctx.isOpen ? "translate-x-0" : "-translate-x-full", " md:translate-x-0 flex flex-col shadow-lg");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 8, ctx.auth.currentUser$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPopup);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: [".sidebar-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  color: white;\n  transition: background-color 0.2s ease;\n}\n.sidebar-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  font-size: 1.25rem;\n}\n.sidebar-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBQ0o7QUFLSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhSO0FBTUk7RUFDSSxvQkFBQTtBQUpSO0FBUUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFMSiIsImZpbGUiOiJhcHAtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG4gICAgLy8gJjpob3ZlciB7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXIpO1xuICAgIC8vIH1cblxuICAgIGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgICB9XG59XG5cbi5ub3RpZmljYXRpb24tYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59Il19 */"]
});

/***/ }),

/***/ 8243:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/create-group-dialog/create-group-dialog.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateGroupDialogComponent": () => (/* binding */ CreateGroupDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_core_services_group_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/group.service */ 7297);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);








function CreateGroupDialogComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateGroupDialogComponent__svg_svg_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "circle", 21)(2, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "border-red-300 focus:ring-red-500 focus:border-red-500": a0 }; };
class CreateGroupDialogComponent {
    constructor(dialogRef, fb, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.data = data;
        this.groupService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_core_services_group_service__WEBPACK_IMPORTED_MODULE_0__.GroupService);
        this.isLoading = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
    }
    onSubmit() {
        console.log(this.form.value, this.form.valid);
        if (this.form.valid) {
            this.isLoading = true;
            this.groupService.createGroup(this.form.value).subscribe({
                next: (group) => {
                    this.dialogRef.close(group);
                },
                error: (error) => {
                    console.error(error);
                },
                complete: () => {
                    this.isLoading = false;
                }
            });
        }
    }
    onCancel() {
        this.dialogRef.close();
    }
}
CreateGroupDialogComponent.ɵfac = function CreateGroupDialogComponent_Factory(t) { return new (t || CreateGroupDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
CreateGroupDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateGroupDialogComponent, selectors: [["app-create-group-dialog"]], decls: 24, vars: 8, consts: [[1, "bg-white", "rounded-lg", "shadow-xl", "max-w-4xl", "w-full", "mx-auto"], [1, "px-8", "py-5", "border-b", "border-gray-200"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-semibold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-500", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-8"], [3, "formGroup", "ngSubmit"], [1, "space-y-8"], [1, "grid", "grid-cols-1", "gap-6"], ["for", "name", 1, "block", "text-base", "font-medium", "text-gray-700", "mb-2"], [1, "mt-1"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter group name", 1, "block", "w-full", "px-4", "py-3", "text-base", "border", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-2", "focus:ring-primary", "focus:border-primary", "text-black", 3, "ngClass"], ["class", "mt-2 text-sm text-red-600", 4, "ngIf"], [1, "mt-8", "flex", "justify-end", "space-x-4"], ["type", "button", 1, "inline-flex", "justify-center", "px-6", "py-3", "text-base", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-md", "shadow-sm", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary", 3, "click"], ["type", "submit", 1, "inline-flex", "justify-center", "px-6", "py-3", "text-base", "font-medium", "text-white", "bg-primary", "border", "border-transparent", "rounded-md", "shadow-sm", "hover:bg-primary-dark", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], ["class", "animate-spin -ml-1 mr-3 h-5 w-5 text-white", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "mt-2", "text-sm", "text-red-600"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function CreateGroupDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Create New Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateGroupDialogComponent_Template_button_click_5_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateGroupDialogComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div")(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Group Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CreateGroupDialogComponent_div_17_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15)(19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateGroupDialogComponent_Template_button_click_19_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CreateGroupDialogComponent__svg_svg_22_Template, 3, 0, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.form.valid || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Creating..." : "Create Group", " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n\ninput[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);\n}\n\n.transform[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.animate-spin[_ngcontent-%COMP%] {\n  animation: spin 1s linear infinite;\n}\n\n.form-checkbox[_ngcontent-%COMP%] {\n  border-color: #d1d5db;\n  border-radius: 0.25rem;\n  transition: all 0.2s ease-in-out;\n}\n\n.form-checkbox[_ngcontent-%COMP%]:checked {\n  background-color: #2563eb;\n  border-color: #2563eb;\n}\n\n.form-checkbox[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n\ninput[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n\ninput[type=text].border-red-500[_ngcontent-%COMP%], textarea.border-red-500[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n\ninput[type=text].border-red-500[_ngcontent-%COMP%]:focus, textarea.border-red-500[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1ncm91cC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTs7RUFFSSxhQUFBO0VBQ0EsNkNBQUE7QUFBSjs7QUFJQTtFQUNJLDhCQUFBO0VBQ0Esd0RBQUE7RUFDQSwwQkFBQTtBQURKOztBQUtBO0VBQ0k7SUFDSSx1QkFBQTtFQUZOO0VBS0U7SUFDSSx5QkFBQTtFQUhOO0FBQ0Y7O0FBTUE7RUFDSSxrQ0FBQTtBQUpKOztBQU9BO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBSko7O0FBTUk7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBSlI7O0FBT0k7RUFDSSxhQUFBO0VBQ0EsNENBQUE7QUFMUjs7QUFTQTs7RUFFSSxnQ0FBQTtBQU5KOztBQVFJOztFQUNJLDRDQUFBO0FBTFI7O0FBUUk7O0VBQ0kscUJBQUE7QUFMUjs7QUFPUTs7RUFDSSw0Q0FBQTtBQUpaIiwiZmlsZSI6ImNyZWF0ZS1ncm91cC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyBGb2N1cyByaW5nIHN0eWxlc1xuaW5wdXQ6Zm9jdXMsXG5idXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjIpO1xufVxuXG4vLyBTd2l0Y2ggYW5pbWF0aW9uXG4udHJhbnNmb3JtIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG59XG5cbi8vIExvYWRpbmcgc3Bpbm5lciBhbmltYXRpb25cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cbi5hbmltYXRlLXNwaW4ge1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5mb3JtLWNoZWNrYm94IHtcbiAgICBib3JkZXItY29sb3I6ICNkMWQ1ZGI7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTYzZWI7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMSk7XG4gICAgfVxufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbnRleHRhcmVhIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzNywgOTksIDIzNSwgMC4xKTtcbiAgICB9XG5cbiAgICAmLmJvcmRlci1yZWQtNTAwIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWY0NDQ0O1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjM5LCA2OCwgNjgsIDAuMSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 8664:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/create-user-dialog/create-user-dialog.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserDialogComponent": () => (/* binding */ CreateUserDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/constants/roles.constants */ 8843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/group.service */ 7297);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);








function CreateUserDialogComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.getErrorMessage("userName"), " ");
} }
function CreateUserDialogComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getErrorMessage("email"), " ");
} }
function CreateUserDialogComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const roleOption_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", roleOption_r5)("id", "role-" + roleOption_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", "role-" + roleOption_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", roleOption_r5, " ");
} }
function CreateUserDialogComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.getErrorMessage("role"), " ");
} }
function CreateUserDialogComponent__svg_svg_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "circle", 36)(2, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "border-red-300 focus:ring-red-500 focus:border-red-500": a0 }; };
class CreateUserDialogComponent {
    constructor(dialogRef, fb, groupService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.groupService = groupService;
        this.data = data;
        this.isLoading = false;
        this.roles = _core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_0__.USER_ROLES;
        this.UserRole = _core_constants_roles_constants__WEBPACK_IMPORTED_MODULE_0__.UserRole;
    }
    ngOnInit() {
        this.form = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            groupId: [this.data.selectedGroup?.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    onSubmit() {
        if (this.form.valid) {
            this.isLoading = true;
            const formValue = this.form.value;
            const newUser = {
                username: formValue.userName,
                email: formValue.email,
                role: formValue.role,
                groupId: this.data.selectedGroup.id
            };
            this.groupService.createUser(newUser).subscribe({
                next: (user) => {
                    this.isLoading = false;
                    this.dialogRef.close(user);
                },
                error: (error) => {
                    this.isLoading = false;
                    console.error('Error creating user:', error);
                }
            });
        }
    }
    onCancel() {
        this.dialogRef.close();
    }
    getErrorMessage(field) {
        const control = this.form.get(field);
        if (!control?.errors)
            return '';
        const errors = control.errors;
        if (errors['required'])
            return 'This field is required';
        if (errors['email'])
            return 'Invalid email address';
        if (errors['minlength'])
            return `Minimum length is ${errors['minlength'].requiredLength} characters`;
        return 'Invalid value';
    }
}
CreateUserDialogComponent.ɵfac = function CreateUserDialogComponent_Factory(t) { return new (t || CreateUserDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_group_service__WEBPACK_IMPORTED_MODULE_1__.GroupService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
CreateUserDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateUserDialogComponent, selectors: [["app-create-user-dialog"]], decls: 46, vars: 15, consts: [[1, "bg-white", "rounded-lg", "shadow-xl", "max-w-4xl", "w-full", "mx-auto"], [1, "px-8", "py-5", "border-b", "border-gray-200"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-semibold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-500", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-8"], [3, "formGroup", "ngSubmit"], [1, "space-y-6"], ["for", "userName", 1, "block", "text-base", "font-medium", "text-gray-700", "mb-2"], [1, "mt-1"], ["type", "text", "id", "userName", "formControlName", "userName", "placeholder", "Enter username", 1, "block", "w-full", "px-4", "py-3", "text-base", "border", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-2", "focus:ring-primary", "focus:border-primary", "text-black", 3, "ngClass"], ["class", "mt-2 text-sm text-red-600", 4, "ngIf"], ["for", "email", 1, "block", "text-base", "font-medium", "text-gray-700", "mb-2"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter email", 1, "block", "w-full", "px-4", "py-3", "text-base", "border", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-2", "focus:ring-primary", "focus:border-primary", "text-black", 3, "ngClass"], [1, "block", "text-base", "font-medium", "text-gray-700", "mb-2"], [1, "mt-1", "space-y-2"], [1, "grid", "grid-cols-2", "gap-4"], ["class", "flex items-center", 4, "ngFor", "ngForOf"], [1, "bg-gray-50", "p-4", "rounded-lg"], [1, "flex", "items-center"], [1, "flex-shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "text-gray-400"], ["fill-rule", "evenodd", "d", "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", "clip-rule", "evenodd"], [1, "ml-3"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-500"], [1, "mt-8", "flex", "justify-end", "space-x-4"], ["type", "button", 1, "inline-flex", "justify-center", "px-6", "py-3", "text-base", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-md", "shadow-sm", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary", 3, "click"], ["type", "submit", 1, "inline-flex", "justify-center", "px-6", "py-3", "text-base", "font-medium", "text-white", "bg-primary", "border", "border-transparent", "rounded-md", "shadow-sm", "hover:bg-primary-dark", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], ["class", "animate-spin -ml-1 mr-3 h-5 w-5 text-white", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "mt-2", "text-sm", "text-red-600"], ["type", "radio", "formControlName", "role", 1, "h-4", "w-4", "text-primary", "border-gray-300", "focus:ring-primary", 3, "value", "id"], [1, "ml-2", "text-gray-700", 3, "for"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function CreateUserDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Create New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateUserDialogComponent_Template_button_click_5_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateUserDialogComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "div")(12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CreateUserDialogComponent_div_16_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CreateUserDialogComponent_div_22_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div")(24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17)(27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CreateUserDialogComponent_div_28_Template, 4, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CreateUserDialogComponent_div_29_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20)(31, "div", 21)(32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 25)(36, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Selected Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 28)(41, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateUserDialogComponent_Template_button_click_41_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, CreateUserDialogComponent__svg_svg_44_Template, 3, 0, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ((tmp_1_0 = ctx.form.get("userName")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("userName")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.form.get("userName")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("userName")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.form.get("role")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.form.get("role")) == null ? null : tmp_6_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.selectedGroup.name || "No group selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.form.valid || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Creating..." : "Create User", " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n\n.form-checkbox[_ngcontent-%COMP%] {\n  height: 1rem;\n  width: 1rem;\n  border-radius: 0.25rem;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n  color: hsl(var(--primary));\n  transition: all 0.2s ease-in-out;\n}\n\n.form-checkbox[_ngcontent-%COMP%]:checked {\n  border-color: hsl(var(--primary));\n  background-color: hsl(var(--primary));\n}\n\n.form-checkbox[_ngcontent-%COMP%]:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-color: hsl(var(--primary));\n  --tw-ring-opacity: 0.5;\n}\n\ninput[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.animate-spin[_ngcontent-%COMP%] {\n  animation: spin 1s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS11c2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUlJO0VBQUEsWUFBQTtFQUFBLFdBQUE7RUFBQSxzQkFBQTtFQUFBLHNCQUFBO0VBQUEsNERBQUE7RUFBQSwwQkFBQTtFQUNBO0FBREE7O0FBSUk7RUFBQSxpQ0FBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSw4QkFBQTtFQUFBLG1CQUFBO0VBQUEsMkdBQUE7RUFBQSx5R0FBQTtFQUFBLDRGQUFBO0VBQUEsb0NBQUE7RUFBQTtBQUFBOztBQUtSOztFQUVJLGFBQUE7RUFDQSxtREFBQTtBQUhKOztBQU9BO0VBQ0k7SUFDSSx1QkFBQTtFQUpOO0VBT0U7SUFDSSx5QkFBQTtFQUxOO0FBQ0Y7O0FBUUE7RUFDSSxrQ0FBQTtBQU5KIiwiZmlsZSI6ImNyZWF0ZS11c2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIENoZWNrYm94IHN0eWxlc1xuLmZvcm0tY2hlY2tib3gge1xuICAgIEBhcHBseSBoLTQgdy00IHRleHQtcHJpbWFyeSBib3JkZXItZ3JheS0zMDAgcm91bmRlZDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICAgIEBhcHBseSBiZy1wcmltYXJ5IGJvcmRlci1wcmltYXJ5O1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgICBAYXBwbHkgb3V0bGluZS1ub25lIHJpbmctMiByaW5nLXByaW1hcnkgcmluZy1vcGFjaXR5LTUwO1xuICAgIH1cbn1cblxuLy8gSW5wdXQgZm9jdXMgc3R5bGVzXG5pbnB1dDpmb2N1cyxcbmJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSh2YXIoLS1wcmltYXJ5LXJnYiksIDAuMik7XG59XG5cbi8vIExvYWRpbmcgc3Bpbm5lciBhbmltYXRpb25cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cbi5hbmltYXRlLXNwaW4ge1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59Il19 */"] });


/***/ }),

/***/ 1905:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/select-group-popup/select-group-popup.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectGroupPopupComponent": () => (/* binding */ SelectGroupPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_group_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/group.service */ 7297);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function SelectGroupPopupComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No groups available. Please create one. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectGroupPopupComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SelectGroupPopupComponent_div_7_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const group_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleSelection(group_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 12)(3, "div")(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r1.multiSelect ? "checkbox" : "radio")("id", "group-" + group_r2.id)("checked", ctx_r1.isSelected(group_r2.id))("name", ctx_r1.multiSelect ? "multi" : "single");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", "group-" + group_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", group_r2.count, " users");
} }
class SelectGroupPopupComponent {
    constructor(groupService, dialogRef, data) {
        this.groupService = groupService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.groups = [];
        this.multiSelect = false;
        this.selectedGroupIds = [];
        this.selectedGroupId = null;
    }
    ngOnInit() {
        this.multiSelect = this.data.multiSelect ?? false;
        if (this.data.groups) {
            this.groups = this.data.groups;
        }
        else {
            this.groupService.getGroups().subscribe((fetched) => {
                this.groups = fetched;
                console.log(this.groups, fetched);
            });
        }
    }
    isSelected(id) {
        return this.multiSelect ? this.selectedGroupIds.includes(id) : this.selectedGroupId === id;
    }
    toggleSelection(id) {
        if (this.multiSelect) {
            this.selectedGroupIds = this.isSelected(id)
                ? this.selectedGroupIds.filter(gid => gid !== id)
                : [...this.selectedGroupIds, id];
        }
        else {
            this.selectedGroupId = id;
        }
    }
    confirm() {
        this.dialogRef.close(this.multiSelect ? this.selectedGroupIds : this.selectedGroupId);
    }
    cancel() {
        this.dialogRef.close(null);
    }
}
SelectGroupPopupComponent.ɵfac = function SelectGroupPopupComponent_Factory(t) { return new (t || SelectGroupPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_group_service__WEBPACK_IMPORTED_MODULE_0__.GroupService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
SelectGroupPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectGroupPopupComponent, selectors: [["app-select-group-popup"]], decls: 13, vars: 4, consts: [[1, "p-6", "bg-white", "rounded-lg", "z-50"], [1, "text-2xl", "text-gray-700", "font-bold", "mb-4"], [1, "text-sm", "text-gray-600", "mb-6"], [1, "grid", "grid-cols-2", "gap-4", "max-h-96", "overflow-y-auto"], ["class", "text-center text-gray-500 col-span-2", 4, "ngIf"], ["class", "flex !w-full items-center space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end", "mt-6", "space-x-4"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-gray-100", "rounded-md", "hover:bg-gray-200", 3, "click"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "text-white", "bg-primary", "hover:bg-primary-dark", "rounded-md", "disabled:opacity-50", 3, "disabled", "click"], [1, "text-center", "text-gray-500", "col-span-2"], [1, "flex", "!w-full", "items-center", "space-x-2"], [1, "group-input", 3, "type", "id", "checked", "name", "change"], [1, "cursor-pointer", "group-label", 3, "for"], [1, "font-semibold", "text-gray-800"], [1, "text-xs", "text-gray-500"]], template: function SelectGroupPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectGroupPopupComponent_div_6_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SelectGroupPopupComponent_div_7_Template, 8, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectGroupPopupComponent_Template_button_click_9_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectGroupPopupComponent_Template_button_click_11_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Confirm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Choose ", ctx.multiSelect ? "groups" : "a group", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groups.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.multiSelect ? ctx.selectedGroupIds.length === 0 : !ctx.selectedGroupId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".group-selection-dialog[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 100%;\n}\n\n.group-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.group-input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.group-input[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%] {\n  border-color: var(--primary-color);\n  background-color: rgba(var(--primary-color-rgb), 0.05);\n}\n\n.group-input[_ngcontent-%COMP%]:checked    + .group-label[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  color: var(--primary-color);\n}\n\n.group-input[_ngcontent-%COMP%]:disabled    + .group-label[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.group-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.group-label[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  background-color: rgba(var(--primary-color-rgb), 0.02);\n}\n\n.group-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.group-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #111827;\n}\n\n.group-description[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 0.25rem;\n}\n\n.group-icon[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  opacity: 0;\n  transform: scale(0.8);\n  transition: all 0.2s ease;\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1ncm91cC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFDSTtFQUNJLGtDQUFBO0VBQ0Esc0RBQUE7QUFDUjs7QUFDUTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQ1o7O0FBR0k7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFJSTtFQUNJLGtDQUFBO0VBQ0Esc0RBQUE7QUFGUjs7QUFNQTtFQUNJLE9BQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFISiIsImZpbGUiOiJzZWxlY3QtZ3JvdXAtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAtc2VsZWN0aW9uLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmdyb3VwLWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZ3JvdXAtaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcblxuICAgICY6Y2hlY2tlZCsuZ3JvdXAtbGFiZWwge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4wNSk7XG5cbiAgICAgICAgLmdyb3VwLWljb24ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkKy5ncm91cC1sYWJlbCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG59XG5cbi5ncm91cC1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTVlN2ViO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4wMik7XG4gICAgfVxufVxuXG4uZ3JvdXAtY29udGVudCB7XG4gICAgZmxleDogMTtcbn1cblxuLmdyb3VwLW5hbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzExMTgyNztcbn1cblxuLmdyb3VwLWRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY29sb3I6ICM2YjcyODA7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cblxuLmdyb3VwLWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufSJdfQ== */"] });


/***/ }),

/***/ 8802:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/select-quiz/select-quiz.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectQuizComponent": () => (/* binding */ SelectQuizComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/quiz.service */ 6920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);






function SelectQuizComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No quizzes available. create a quiz to start. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "opacity-50 cursor-not-allowed": a0 }; };
function SelectQuizComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectQuizComponent_div_7_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.selectedQuizId = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 14)(3, "div", 15)(4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const quiz_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "quiz-" + quiz_r3.id)("value", quiz_r3.id)("ngModel", ctx_r2.selectedQuizId)("disabled", ctx_r2.disabledQuizIds.includes(quiz_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", "quiz-" + quiz_r3.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx_r2.disabledQuizIds.includes(quiz_r3.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](quiz_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", quiz_r3.questions.length, " questions");
} }
function SelectQuizComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectQuizComponent_div_7_div_1_Template, 10, 10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.quizzes);
} }
class SelectQuizComponent {
    constructor(dialogRef, data, quizService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.quizService = quizService;
        this.quizzes = [];
        this.selectedQuizId = null;
        this.disabledQuizIds = [];
        this.disabledQuizIds = data.disabledQuizIds;
        this.context = data.context;
        this.selectedQuizId = data.selectedQuizId || null;
    }
    ngOnInit() {
        this.quizService.getQuizzes().subscribe((quizzes) => {
            this.quizzes = quizzes.filter(quiz => !this.disabledQuizIds.includes(quiz.id));
        });
    }
    confirm() {
        if (this.selectedQuizId) {
            const selectedQuiz = this.quizzes.find(quiz => quiz.id === this.selectedQuizId);
            this.dialogRef.close(selectedQuiz);
        }
    }
    cancel() {
        this.dialogRef.close();
    }
}
SelectQuizComponent.ɵfac = function SelectQuizComponent_Factory(t) { return new (t || SelectQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__.QuizService)); };
SelectQuizComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectQuizComponent, selectors: [["app-select-quiz"]], decls: 13, vars: 4, consts: [[1, "quiz-selection-dialog", "p-6", "bg-white", "rounded-lg", "shadow-lg"], [1, "text-2xl", "text-gray-600", "font-bold", "mb-4"], [1, "text-sm", "text-gray-600", "mb-6"], [1, "quiz-list"], ["class", "text-center text-gray-500", 4, "ngIf"], ["class", "text-center text-gray-500 grid grid-cols-2 gap-4 max-h-96 overflow-y-auto", 4, "ngIf"], [1, "flex", "justify-end", "mt-6", "space-x-4"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-gray-100", "rounded-md", "hover:bg-gray-200", 3, "click"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "text-white", "bg-primary", "hover:bg-primary-dark", "rounded-md", "disabled:opacity-50", 3, "disabled", "click"], [1, "text-center", "text-gray-500"], [1, "text-center", "text-gray-500", "grid", "grid-cols-2", "gap-4", "max-h-96", "overflow-y-auto"], ["class", "quiz-item ", 4, "ngFor", "ngForOf"], [1, "quiz-item"], ["type", "radio", 1, "quiz-radio", 3, "id", "value", "ngModel", "disabled", "ngModelChange"], [1, "quiz-label", 3, "for", "ngClass"], [1, "quiz-content"], [1, "quiz-name"], [1, "quiz-description", "text-xs", "text-gray-500", "mt-1"], [1, "quiz-icon"], [1, "fas", "fa-check"]], template: function SelectQuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectQuizComponent_div_6_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SelectQuizComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectQuizComponent_Template_button_click_9_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectQuizComponent_Template_button_click_11_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Confirm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Choose a quiz for ", ctx.context === "formation" ? "the formation" : "the module", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.quizzes.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.quizzes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.selectedQuizId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: [".quiz-selection-dialog[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 100%;\n}\n\n.quiz-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.quiz-radio[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.quiz-radio[_ngcontent-%COMP%]:checked    + .quiz-label[_ngcontent-%COMP%] {\n  border-color: var(--primary-color);\n  background-color: rgba(var(--primary-color-rgb), 0.05);\n}\n\n.quiz-radio[_ngcontent-%COMP%]:checked    + .quiz-label[_ngcontent-%COMP%]   .quiz-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  color: var(--primary-color);\n}\n\n.quiz-radio[_ngcontent-%COMP%]:disabled    + .quiz-label[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.quiz-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.quiz-label[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  background-color: rgba(var(--primary-color-rgb), 0.02);\n}\n\n.quiz-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.quiz-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #111827;\n}\n\n.quiz-description[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 0.25rem;\n}\n\n.quiz-icon[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  opacity: 0;\n  transform: scale(0.8);\n  transition: all 0.2s ease;\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1xdWl6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUNJO0VBQ0ksa0NBQUE7RUFDQSxzREFBQTtBQUNSOztBQUNRO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFDWjs7QUFHSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQURSOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUlJO0VBQ0ksa0NBQUE7RUFDQSxzREFBQTtBQUZSOztBQU1BO0VBQ0ksT0FBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUhKIiwiZmlsZSI6InNlbGVjdC1xdWl6LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1aXotc2VsZWN0aW9uLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnF1aXotaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5xdWl6LXJhZGlvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG5cbiAgICAmOmNoZWNrZWQrLnF1aXotbGFiZWwge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4wNSk7XG5cbiAgICAgICAgLnF1aXotaWNvbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQrLnF1aXotbGFiZWwge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxufVxuXG4ucXVpei1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTVlN2ViO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4wMik7XG4gICAgfVxufVxuXG4ucXVpei1jb250ZW50IHtcbiAgICBmbGV4OiAxO1xufVxuXG4ucXVpei1uYW1lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMxMTE4Mjc7XG59XG5cbi5xdWl6LWRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY29sb3I6ICM2YjcyODA7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cblxuLnF1aXotaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59Il19 */"] });


/***/ }),

/***/ 5952:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/session-popup/session-popup.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionPopupComponent": () => (/* binding */ SessionPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_services_formation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/formation.service */ 5061);
/* harmony import */ var src_app_core_services_sesssions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/sesssions.service */ 4344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);









function SessionPopupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SessionPopupComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formation_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", formation_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", formation_r7.title, " ");
} }
function SessionPopupComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Formation is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SessionPopupComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Start date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SessionPopupComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " End date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SessionPopupComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Chargement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SessionPopupComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r6.data.session == null ? null : ctx_r6.data.session.id) ? "Mettre \u00E0 jour" : "Cr\u00E9er la session", " ");
} }
class SessionPopupComponent {
    constructor(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.formations = [];
        this.isLoading = false;
        this.formationsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_services_formation_service__WEBPACK_IMPORTED_MODULE_0__.FormationService);
        this.sessionsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_core_services_sesssions_service__WEBPACK_IMPORTED_MODULE_1__.SesssionsService);
        // Initialize form with default values or existing session data if provided
        this.sessionForm = this.fb.group({
            title: [data.session?.title || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            startDate: [data.session?.startDate ? new Date(data.session.startDate).toISOString().split('T')[0] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            endDate: [data.session?.endDate ? new Date(data.session.endDate).toISOString().split('T')[0] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            formationId: [data.formationId?.toString() || data.session?.formationId?.toString() || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        // If formationId is provided, disable the field to prevent changes
        if (data.formationId) {
            this.sessionForm.get('formationId')?.disable();
        }
    }
    ngOnInit() {
        // Only load formations if formationId is not provided
        if (!this.data.formationId) {
            this.formationsService.getFormations()
                .subscribe({
                next: (formations) => {
                    this.formations = formations;
                },
                error: (error) => {
                    console.error('Error loading formations:', error);
                    this.dialogRef.close();
                }
            });
        }
        else {
            // If formationId is provided, just load that specific formation for display
            this.formationsService.getFormation(this.data.formationId)
                .subscribe({
                next: (formation) => {
                    this.formations = [formation];
                },
                error: (error) => {
                    console.error('Error loading formation:', error);
                    this.dialogRef.close();
                }
            });
        }
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onSubmit() {
        if (this.sessionForm.valid) {
            this.isLoading = true;
            // Prepare form data - include the disabled formationId
            const formData = {
                ...this.sessionForm.getRawValue(), // Gets all values including disabled fields
            };
            // If we have a session ID, it's an update operation
            if (this.data.session?.id) {
                formData.id = this.data.session.id;
                this.sessionsService.updateSession(formData).subscribe({
                    next: (session) => {
                        this.dialogRef.close(session);
                        this.isLoading = false;
                    },
                    error: (error) => {
                        console.error('Error updating session:', error);
                        this.isLoading = false;
                        this.dialogRef.close();
                    }
                });
            }
            else {
                // Otherwise it's a create operation
                this.sessionsService.createSession(formData).subscribe({
                    next: (session) => {
                        this.dialogRef.close(session);
                        this.isLoading = false;
                    },
                    error: (error) => {
                        console.error('Error creating session:', error);
                        this.isLoading = false;
                        this.dialogRef.close();
                    }
                });
            }
        }
    }
}
SessionPopupComponent.ɵfac = function SessionPopupComponent_Factory(t) { return new (t || SessionPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
SessionPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SessionPopupComponent, selectors: [["app-session-popup"]], decls: 39, vars: 10, consts: [[1, "fixed", "inset-0", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center", "z-50"], [1, "bg-white", "rounded-lg", "p-6", "w-full", "max-w-md"], [1, "text-xl", "font-semibold", "text-gray-800", "mb-4"], [1, "space-y-4", 3, "formGroup"], [1, "space-y-2"], [1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "formControlName", "title", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-gray-50", "text-gray-900", "placeholder-gray-400"], ["class", "text-red-500 text-sm", 4, "ngIf"], [1, "relative"], ["formControlName", "formationId", "required", "", 1, "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "bg-white", "rounded-md", "shadow-sm", "focus:outline-none", "focus:ring-2", "focus:ring-primary", "focus:border-primary", "text-gray-700", "text-sm", "appearance-none"], ["value", "", "disabled", "", "selected", "", 1, "text-gray-400"], ["class", "text-gray-900", 3, "value", 4, "ngFor", "ngForOf"], [1, "pointer-events-none", "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-3"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", 1, "h-4", "w-4", "text-gray-400"], ["d", "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "date", "formControlName", "startDate", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-gray-50", "text-gray-900"], ["type", "date", "formControlName", "endDate", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-gray-50", "text-gray-900"], [1, "flex", "justify-end", "space-x-3", "mt-6"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-md", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-white", "bg-blue-600", "rounded-md", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", "disabled:bg-blue-500", "disabled:cursor-not-allowed", 3, "disabled", "click"], [4, "ngIf"], [1, "text-red-500", "text-sm"], [1, "text-gray-900", 3, "value"], [1, "fa-solid", "fa-spinner", "animate-spin", "mr-1"]], template: function SessionPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3)(5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SessionPopupComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4)(11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8)(14, "select", 9)(15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Select a formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SessionPopupComponent_option_17_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, SessionPopupComponent_div_21_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15)(23, "div", 4)(24, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SessionPopupComponent_div_27_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 4)(29, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, SessionPopupComponent_div_32_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 18)(34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionPopupComponent_Template_button_click_34_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionPopupComponent_Template_button_click_36_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, SessionPopupComponent_span_37_Template, 3, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, SessionPopupComponent_span_38_Template, 2, 1, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data.session == null ? null : ctx.data.session.id) ? "Modifier la session" : "Cr\u00E9er une nouvelle session", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.sessionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.sessionForm.get("title")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.sessionForm.get("title")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.formations);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.sessionForm.get("formationId")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.sessionForm.get("formationId")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.sessionForm.get("startDate")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.sessionForm.get("startDate")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.sessionForm.get("endDate")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.sessionForm.get("endDate")) == null ? null : tmp_6_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.sessionForm.invalid || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.popup-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  background-color: #f9fafb;\n  border-color: #e5e7eb;\n  color: #111827;\n}\n\ninput[_ngcontent-%COMP%]:hover, select[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  background-color: #f3f4f6;\n}\n\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  background-color: white;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);\n}\n\ninput[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled {\n  background-color: #f3f4f6;\n  color: #9ca3af;\n  cursor: not-allowed;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, select[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n\nselect[_ngcontent-%COMP%] {\n  background-image: none;\n  appearance: none;\n  cursor: pointer;\n}\n\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  background-color: white;\n}\n\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:disabled {\n  color: #9ca3af;\n}\n\ninput[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.7;\n}\n\ninput[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator:hover {\n  opacity: 1;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n  .mat-mdc-dialog-container {\n  --mdc-dialog-container-color: white;\n}\n\n  .mat-mdc-form-field {\n  width: 100%;\n}\n\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n  .mat-mdc-form-field-infix {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n  .mat-mdc-text-field-wrapper {\n  background-color: white !important;\n}\n\n  .mat-mdc-form-field-flex {\n  background-color: white !important;\n}\n\n  .mat-mdc-form-field-outline {\n  color: #e5e7eb !important;\n}\n\n  .mat-mdc-form-field-outline-thick {\n  color: #3b82f6 !important;\n}\n\n  .mat-mdc-form-field:hover .mat-mdc-form-field-outline {\n  color: #d1d5db !important;\n}\n\n  .mat-mdc-form-field.mat-focused .mat-mdc-form-field-outline-thick {\n  color: #3b82f6 !important;\n}\n\n  .mat-mdc-form-field.mat-focused .mat-mdc-form-field-label {\n  color: #3b82f6 !important;\n}\n\n  .mat-mdc-form-field-error {\n  color: #ef4444 !important;\n}\n\n  .mat-mdc-raised-button {\n  --mdc-protected-button-container-color: #3b82f6;\n  --mdc-protected-button-label-text-color: white;\n}\n\n  .mat-mdc-raised-button:hover {\n  --mdc-protected-button-container-color: #2563eb;\n}\n\n  .mat-mdc-raised-button:disabled {\n  --mdc-protected-button-container-color: #93c5fd;\n  --mdc-protected-button-label-text-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUZBQUE7QUFBSjs7QUFJQTs7RUFFSSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBR0k7O0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBQUFSOztBQUdJOztFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtBQUFSOztBQUdJOztFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQVI7O0FBR0k7O0VBQ0ksY0FBQTtBQUFSOztBQUtBO0VBQ0ksc0JBQUE7RUFHQSxnQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFJSTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtBQUZSOztBQUtJO0VBQ0ksY0FBQTtBQUhSOztBQVNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFOUjs7QUFRUTtFQUNJLFVBQUE7QUFOWjs7QUFZQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBYUE7RUFDSSxnQ0FBQTtBQVZKOztBQVlJO0VBQ0ksYUFBQTtFQUNBLDZDQUFBO0FBVlI7O0FBYUk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFYUjs7QUFnQkk7RUFDSSxtQ0FBQTtBQWJSOztBQWdCSTtFQUNJLFdBQUE7QUFkUjs7QUFpQkk7RUFDSSxhQUFBO0FBZlI7O0FBa0JJO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBQWhCUjs7QUFtQkk7RUFDSSxrQ0FBQTtBQWpCUjs7QUFvQkk7RUFDSSxrQ0FBQTtBQWxCUjs7QUFxQkk7RUFDSSx5QkFBQTtBQW5CUjs7QUFzQkk7RUFDSSx5QkFBQTtBQXBCUjs7QUF1Qkk7RUFDSSx5QkFBQTtBQXJCUjs7QUF3Qkk7RUFDSSx5QkFBQTtBQXRCUjs7QUF5Qkk7RUFDSSx5QkFBQTtBQXZCUjs7QUEwQkk7RUFDSSx5QkFBQTtBQXhCUjs7QUEyQkk7RUFDSSwrQ0FBQTtFQUNBLDhDQUFBO0FBekJSOztBQTRCSTtFQUNJLCtDQUFBO0FBMUJSOztBQTZCSTtFQUNJLCtDQUFBO0VBQ0EsOENBQUE7QUEzQlIiLCJmaWxlIjoic2Vzc2lvbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy8gQ3VzdG9tIHN0eWxlcyBmb3IgdGhlIHBvcHVwXG4ucG9wdXAtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG4vLyBDdXN0b20gc3R5bGVzIGZvciBmb3JtIGlucHV0c1xuaW5wdXQsXG5zZWxlY3Qge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViO1xuICAgIGNvbG9yOiAjMTExODI3O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2QxZDVkYjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2I4MmY2O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xuICAgICAgICBjb2xvcjogIzljYTNhZjtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjOWNhM2FmO1xuICAgIH1cbn1cblxuLy8gQ3VzdG9tIHN0eWxlcyBmb3Igc2VsZWN0XG5zZWxlY3Qge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIG9wdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgb3B0aW9uOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICM5Y2EzYWY7XG4gICAgfVxufVxuXG4vLyBDdXN0b20gc3R5bGVzIGZvciBkYXRlIGlucHV0c1xuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgICY6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQ3VzdG9tIHN0eWxlcyBmb3IgZXJyb3IgbWVzc2FnZXNcbi5lcnJvci1tZXNzYWdlIHtcbiAgICBjb2xvcjogI2VmNDQ0NDtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG59XG5cbi8vIEN1c3RvbSBzdHlsZXMgZm9yIGJ1dHRvbnNcbmJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxufVxuXG46Om5nLWRlZXAge1xuICAgIC5tYXQtbWRjLWRpYWxvZy1jb250YWluZXIge1xuICAgICAgICAtLW1kYy1kaWFsb2ctY29udGFpbmVyLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLm1hdC1tZGMtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1hdC1tZGMtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgICBjb2xvcjogI2U1ZTdlYiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAjM2I4MmY2ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1hdC1tZGMtZm9ybS1maWVsZDpob3ZlciAubWF0LW1kYy1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgICBjb2xvcjogI2QxZDVkYiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1tZGMtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICMzYjgyZjYgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtbWRjLWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogIzNiODJmNiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtZXJyb3Ige1xuICAgICAgICBjb2xvcjogI2VmNDQ0NCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYXQtbWRjLXJhaXNlZC1idXR0b24ge1xuICAgICAgICAtLW1kYy1wcm90ZWN0ZWQtYnV0dG9uLWNvbnRhaW5lci1jb2xvcjogIzNiODJmNjtcbiAgICAgICAgLS1tZGMtcHJvdGVjdGVkLWJ1dHRvbi1sYWJlbC10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAubWF0LW1kYy1yYWlzZWQtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgLS1tZGMtcHJvdGVjdGVkLWJ1dHRvbi1jb250YWluZXItY29sb3I6ICMyNTYzZWI7XG4gICAgfVxuXG4gICAgLm1hdC1tZGMtcmFpc2VkLWJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgICAgIC0tbWRjLXByb3RlY3RlZC1idXR0b24tY29udGFpbmVyLWNvbG9yOiAjOTNjNWZkO1xuICAgICAgICAtLW1kYy1wcm90ZWN0ZWQtYnV0dG9uLWxhYmVsLXRleHQtY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuLy8gQWRkIGFueSBjdXN0b20gc3R5bGVzIGhlcmUgaWYgbmVlZGVkICJdfQ== */"] });


/***/ }),

/***/ 3310:
/*!***************************************************************!*\
  !*** ./src/app/shared/quiz-results/quiz-results.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizResultsComponent": () => (/* binding */ QuizResultsComponent)
/* harmony export */ });
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2pdf.js */ 2507);
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/quiz.service */ 6920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);






const _c0 = ["pdfContent"];
function QuizResultsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "G\u00E9n\u00E9ration du PDF en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { "border-primary": a0, "border-red-500": a1 }; };
function QuizResultsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QuizResultsComponent_div_0_div_2_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx_r0.loading, ctx_r0.generatingPdf));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.generatingPdf);
} }
function QuizResultsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "strong", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Erreur!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.error);
} }
const _c2 = function (a0, a1) { return { "text-green-600": a0, "text-red-600": a1 }; };
function QuizResultsComponent_div_2_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 63)(2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td", 63)(14, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const attempt_r13 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attempt_r13.user == null ? null : attempt_r13.user.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attempt_r13.user == null ? null : attempt_r13.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attempt_r13.session == null ? null : attempt_r13.session.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.formatDate(attempt_r13.attemptedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c2, attempt_r13.score >= 70, attempt_r13.score < 70));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 8, attempt_r13.score, "1.0-1"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](14, _c2, attempt_r13.hasPassed, !attempt_r13.hasPassed));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attempt_r13.hasPassed ? "R\u00E9ussi" : "\u00C9chou\u00E9");
} }
function QuizResultsComponent_div_2_div_50_div_3_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 63)(2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 63)(12, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const attempt_r18 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attempt_r18.user == null ? null : attempt_r18.user.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attempt_r18.user == null ? null : attempt_r18.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.formatDate(attempt_r18.attemptedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](10, _c2, attempt_r18.score >= 70, attempt_r18.score < 70));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 7, attempt_r18.score, "1.0-1"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](13, _c2, attempt_r18.hasPassed, !attempt_r18.hasPassed));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attempt_r18.hasPassed ? "R\u00E9ussi" : "\u00C9chou\u00E9");
} }
function QuizResultsComponent_div_2_div_50_div_3_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Aucun r\u00E9sultat pour cette session. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function QuizResultsComponent_div_2_div_50_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 69)(1, "h4", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "table", 25)(4, "thead")(5, "tr", 26)(6, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, QuizResultsComponent_div_2_div_50_div_3_tr_15_Template, 14, 16, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, QuizResultsComponent_div_2_div_50_div_3_tr_16_Template, 3, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const sessionResult_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](sessionResult_r15.sessionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", sessionResult_r15.attempts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sessionResult_r15.attempts.length === 0);
} }
function QuizResultsComponent_div_2_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "R\u00E9sultats par session");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QuizResultsComponent_div_2_div_50_div_3_Template, 17, 3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.formationResults.sessionResults);
} }
function QuizResultsComponent_div_2_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "G\u00E9n\u00E9rer PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QuizResultsComponent_div_2_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "G\u00E9n\u00E9ration en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1) { return { "bg-green-100 text-green-800": a0, "bg-red-100 text-red-800": a1 }; };
function QuizResultsComponent_div_2_tr_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 72)(2, "div", 46)(3, "div", 73)(4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 72)(9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 72)(12, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 72)(15, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td", 72)(19, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const attempt_r19 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attempt_r19.user == null ? null : attempt_r19.user.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attempt_r19.user == null ? null : attempt_r19.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attempt_r19.session == null ? null : attempt_r19.session.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.formatDate(attempt_r19.attemptedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c2, attempt_r19.score >= 70, attempt_r19.score < 70));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 8, attempt_r19.score, "1.0-1"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](14, _c3, attempt_r19.hasPassed, !attempt_r19.hasPassed));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", attempt_r19.hasPassed ? "R\u00E9ussi" : "\u00C9chou\u00E9", " ");
} }
function QuizResultsComponent_div_2_tr_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Aucun r\u00E9sultat trouv\u00E9. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function QuizResultsComponent_div_2_div_118_div_3_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 72)(2, "div", 46)(3, "div", 73)(4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 72)(9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 72)(12, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 72)(16, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const attempt_r24 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", attempt_r24.user == null ? null : attempt_r24.user.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attempt_r24.user == null ? null : attempt_r24.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r22.formatDate(attempt_r24.attemptedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](10, _c2, attempt_r24.score >= 70, attempt_r24.score < 70));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](14, 7, attempt_r24.score, "1.0-1"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](13, _c3, attempt_r24.hasPassed, !attempt_r24.hasPassed));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", attempt_r24.hasPassed ? "R\u00E9ussi" : "\u00C9chou\u00E9", " ");
} }
function QuizResultsComponent_div_2_div_118_div_3_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Aucun r\u00E9sultat pour cette session. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function QuizResultsComponent_div_2_div_118_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81)(1, "h4", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 82)(4, "table", 56)(5, "thead", 57)(6, "tr")(7, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Utilisateur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Statut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tbody", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, QuizResultsComponent_div_2_div_118_div_3_tr_16_Template, 18, 16, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, QuizResultsComponent_div_2_div_118_div_3_tr_17_Template, 3, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const sessionResult_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](sessionResult_r21.sessionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", sessionResult_r21.attempts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sessionResult_r21.attempts.length === 0);
} }
function QuizResultsComponent_div_2_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 79)(1, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "R\u00E9sultats par session");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QuizResultsComponent_div_2_div_118_div_3_Template, 18, 3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r12.formationResults.sessionResults);
} }
const _c4 = function (a0, a1) { return { "fa-sort-up": a0, "fa-sort-down": a1 }; };
function QuizResultsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12, 13)(3, "div", 14)(4, "div", 15)(5, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "R\u00E9sultats de formation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 19)(12, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Statistiques globales");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 20)(15, "div", 21)(16, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Total des tentatives");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 21)(21, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Taux de r\u00E9ussite");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 21)(27, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Score moyen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19)(33, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "R\u00E9sultats globaux");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "table", 25)(36, "thead")(37, "tr", 26)(38, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, QuizResultsComponent_div_2_tr_49_Template, 16, 17, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, QuizResultsComponent_div_2_div_50_Template, 4, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 30)(52, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 32)(55, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizResultsComponent_div_2_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.generatePDF()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, QuizResultsComponent_div_2_span_57_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, QuizResultsComponent_div_2_span_58_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizResultsComponent_div_2_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.printResults()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " Imprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 37)(63, "h1", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "R\u00E9sultats de formation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "h2", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 41)(70, "div", 42)(71, "div", 43)(72, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Rechercher");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function QuizResultsComponent_div_2_Template_input_ngModelChange_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.searchTerm = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 46)(76, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function QuizResultsComponent_div_2_Template_input_ngModelChange_76_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.showOnlyPassed = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Afficher uniquement les r\u00E9ussites");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 49)(80, "div", 50)(81, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Total des tentatives");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 50)(86, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Taux de r\u00E9ussite");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](90, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 50)(92, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Score moyen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](96, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 55)(98, "table", 56)(99, "thead", 57)(100, "tr")(101, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizResultsComponent_div_2_Template_th_click_101_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.sortBy("user")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " Utilisateur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizResultsComponent_div_2_Template_th_click_104_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.sortBy("session")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " Session ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizResultsComponent_div_2_Template_th_click_107_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.sortBy("date")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizResultsComponent_div_2_Template_th_click_110_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.sortBy("score")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " Statut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "tbody", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, QuizResultsComponent_div_2_tr_116_Template, 21, 17, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](117, QuizResultsComponent_div_2_tr_117_Template, 3, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](118, QuizResultsComponent_div_2_div_118_Template, 4, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formationResults.formationTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Date d'impression: ", ctx_r2.formatDate(ctx_r2.today), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formationResults.attempts.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](25, 25, ctx_r2.getSuccessRate(), "1.0-0"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](31, 28, ctx_r2.getAverageScore(), "1.0-1"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.formationResults.attempts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.formationResults.sessionResults && ctx_r2.formationResults.sessionResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("R\u00E9sultats de la formation: ", ctx_r2.formationResults.formationTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.generatingPdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.generatingPdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.generatingPdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formationResults.formationTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Date d'impression: ", ctx_r2.formatDate(ctx_r2.today), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.showOnlyPassed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formationResults.attempts.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](90, 31, ctx_r2.getSuccessRate(), "1.0-0"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](96, 34, ctx_r2.getAverageScore(), "1.0-1"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](37, _c4, ctx_r2.sortField === "user" && ctx_r2.sortDirection === "asc", ctx_r2.sortField === "user" && ctx_r2.sortDirection === "desc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](40, _c4, ctx_r2.sortField === "session" && ctx_r2.sortDirection === "asc", ctx_r2.sortField === "session" && ctx_r2.sortDirection === "desc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](43, _c4, ctx_r2.sortField === "date" && ctx_r2.sortDirection === "asc", ctx_r2.sortField === "date" && ctx_r2.sortDirection === "desc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](46, _c4, ctx_r2.sortField === "score" && ctx_r2.sortDirection === "asc", ctx_r2.sortField === "score" && ctx_r2.sortDirection === "desc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.filteredAttempts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.filteredAttempts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.formationResults.sessionResults && ctx_r2.formationResults.sessionResults.length > 0);
} }
function QuizResultsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84)(1, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Aucun r\u00E9sultat disponible pour cette formation.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class QuizResultsComponent {
    constructor(quizService) {
        this.quizService = quizService;
        this.loading = false;
        this.error = null;
        this.sortField = 'score';
        this.sortDirection = 'desc';
        this.today = new Date();
        this.generatingPdf = false;
        // Filtres
        this.showOnlyPassed = false;
        this.searchTerm = '';
    }
    ngOnInit() {
        if (this.formationId) {
            this.loadResults();
        }
    }
    loadResults() {
        this.loading = true;
        this.quizService.getQuizAttemptsByFormation(this.formationId).subscribe({
            next: (results) => {
                this.formationResults = results;
                this.loading = false;
            },
            error: (err) => {
                console.error('Erreur lors du chargement des résultats:', err);
                this.error = 'Impossible de charger les résultats. Veuillez réessayer plus tard.';
                this.loading = false;
            }
        });
    }
    /**
     * Trie les tentatives de quiz selon le champ spécifié
     * @param field Champ à trier
     */
    sortBy(field) {
        if (this.sortField === field) {
            // Inverser la direction si on clique sur le même champ
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        }
        else {
            this.sortField = field;
            this.sortDirection = 'desc'; // Par défaut, tri descendant
        }
    }
    /**
     * Filtre et trie les tentatives de quiz
     * @returns Tentatives filtrées et triées
     */
    get filteredAttempts() {
        if (!this.formationResults?.attempts)
            return [];
        let filtered = [...this.formationResults.attempts];
        // Filtrer par réussite
        if (this.showOnlyPassed) {
            filtered = filtered.filter(attempt => attempt.hasPassed);
        }
        // Filtrer par terme de recherche
        if (this.searchTerm) {
            const term = this.searchTerm.toLowerCase();
            filtered = filtered.filter(attempt => attempt.user?.userName?.toLowerCase().includes(term) ||
                attempt.user?.email?.toLowerCase().includes(term) ||
                attempt.session?.title?.toLowerCase().includes(term));
        }
        // Trier les résultats
        filtered.sort((a, b) => {
            let comparison = 0;
            switch (this.sortField) {
                case 'score':
                    comparison = a.score - b.score;
                    break;
                case 'date':
                    comparison = new Date(a.attemptedAt).getTime() - new Date(b.attemptedAt).getTime();
                    break;
                case 'user':
                    comparison = (a.user?.userName || '').localeCompare(b.user?.userName || '');
                    break;
                case 'session':
                    comparison = (a.session?.title || '').localeCompare(b.session?.title || '');
                    break;
                default:
                    comparison = a.score - b.score;
            }
            return this.sortDirection === 'asc' ? comparison : -comparison;
        });
        return filtered;
    }
    /**
     * Calcule le taux de réussite des tentatives
     * @returns Pourcentage de réussite
     */
    getSuccessRate() {
        if (!this.formationResults?.attempts || this.formationResults.attempts.length === 0) {
            return 0;
        }
        const passedCount = this.formationResults.attempts.filter(a => a.hasPassed).length;
        return (passedCount / this.formationResults.attempts.length) * 100;
    }
    /**
     * Calcule le score moyen des tentatives
     * @returns Score moyen
     */
    getAverageScore() {
        if (!this.formationResults?.attempts || this.formationResults.attempts.length === 0) {
            return 0;
        }
        const totalScore = this.formationResults.attempts.reduce((sum, a) => sum + a.score, 0);
        return totalScore / this.formationResults.attempts.length;
    }
    /**
     * Vérifie si une réponse a été sélectionnée
     * @param questionId ID de la question
     * @param answerId ID de la réponse
     * @returns Vrai si la réponse a été sélectionnée
     */
    isAnswerSelected(_questionId, _answerId) {
        // Cette méthode est utilisée dans le template pour vérifier si une réponse a été sélectionnée
        // Les paramètres sont préfixés avec _ pour indiquer qu'ils ne sont pas utilisés
        return true;
    }
    /**
     * Génère un PDF des résultats en utilisant html2pdf.js
     */
    generatePDF() {
        this.generatingPdf = true;
        // Attendre que l'interface soit mise à jour pour afficher l'indicateur de chargement
        setTimeout(() => {
            const content = this.pdfContent.nativeElement;
            const filename = `resultats_${this.formationResults.formationTitle.replace(/\s+/g, '_')}.pdf`;
            // Options pour html2pdf
            const options = {
                margin: 10,
                filename: filename,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            // Générer le PDF
            html2pdf_js__WEBPACK_IMPORTED_MODULE_0___default()()
                .from(content)
                .set(options)
                .save()
                .then(() => {
                this.generatingPdf = false;
            });
        }, 100);
    }
    /**
     * Imprime les résultats (méthode d'impression du navigateur)
     */
    printResults() {
        window.print();
    }
    /**
     * Formate une date pour l'affichage
     * @param date Date à formater
     * @returns Date formatée
     */
    formatDate(date) {
        if (!date)
            return '';
        const d = new Date(date);
        return d.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}
QuizResultsComponent.ɵfac = function QuizResultsComponent_Factory(t) { return new (t || QuizResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__.QuizService)); };
QuizResultsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QuizResultsComponent, selectors: [["app-quiz-results"]], viewQuery: function QuizResultsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.pdfContent = _t.first);
    } }, inputs: { formationId: "formationId" }, decls: 4, vars: 4, consts: [["class", "flex justify-center items-center py-10", 4, "ngIf"], ["class", "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4", "role", "alert", 4, "ngIf"], ["class", "print:bg-white", 4, "ngIf"], ["class", "bg-gray-50 p-8 rounded-lg text-center", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "py-10"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-t-2", "border-b-2", 3, "ngClass"], ["class", "ml-4 text-lg font-medium", 4, "ngIf"], [1, "ml-4", "text-lg", "font-medium"], ["role", "alert", 1, "bg-red-100", "border", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "mb-4"], [1, "font-bold"], [1, "block", "sm:inline"], [1, "print:bg-white"], [1, "hidden"], ["pdfContent", ""], [1, "bg-white", "p-8"], [1, "text-center", "mb-8"], [1, "text-3xl", "font-bold", "mb-2"], [1, "text-xl", "font-semibold", "mb-4"], [1, "text-gray-600"], [1, "mb-8"], [1, "grid", "grid-cols-3", "gap-4"], [1, "border", "border-gray-300", "p-4", "rounded-lg"], [1, "font-medium", "text-gray-700", "mb-2"], [1, "text-2xl", "font-bold", "text-blue-600"], [1, "text-2xl", "font-bold", "text-green-600"], [1, "w-full", "border-collapse", "border", "border-gray-300"], [1, "bg-gray-100"], [1, "border", "border-gray-300", "p-2", "text-left"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "flex", "justify-between", "items-center", "mb-6", "print:hidden"], [1, "text-2xl", "font-bold"], [1, "flex", "space-x-2"], [1, "bg-red-500", "hover:bg-red-600", "text-white", "px-4", "py-2", "rounded-lg", "flex", "items-center", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-file-pdf", "mr-2"], [1, "bg-blue-500", "hover:bg-blue-600", "text-white", "px-4", "py-2", "rounded-lg", "flex", "items-center", 3, "click"], [1, "fas", "fa-print", "mr-2"], [1, "hidden", "print:block", "mb-6"], [1, "text-3xl", "font-bold", "text-center", "mb-2"], [1, "text-xl", "font-semibold", "text-center", "mb-4"], [1, "text-center", "text-gray-600"], [1, "bg-gray-50", "p-4", "rounded-lg", "mb-6", "print:hidden"], [1, "flex", "flex-wrap", "gap-4", "items-center"], [1, "flex-1"], ["for", "search", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["type", "text", "id", "search", "placeholder", "Rechercher par nom, email ou session...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "focus:outline-none", "focus:ring-primary", "focus:border-primary", 3, "ngModel", "ngModelChange"], [1, "flex", "items-center"], ["type", "checkbox", "id", "showPassed", 1, "h-4", "w-4", "text-primary", "focus:ring-primary", "border-gray-300", "rounded", 3, "ngModel", "ngModelChange"], ["for", "showPassed", 1, "ml-2", "block", "text-sm", "text-gray-900"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "mb-6"], [1, "bg-white", "p-4", "rounded-lg", "shadow", "border", "border-gray-200"], [1, "text-lg", "font-medium", "text-gray-700", "mb-2"], [1, "text-3xl", "font-bold", "text-primary"], [1, "text-3xl", "font-bold", "text-green-600"], [1, "text-3xl", "font-bold", "text-blue-600"], [1, "overflow-x-auto", "bg-white", "rounded-lg", "shadow"], [1, "min-w-full", "divide-y", "divide-gray-200"], [1, "bg-gray-50"], ["scope", "col", 1, "px-6", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider", "cursor-pointer", 3, "click"], [1, "fas", "fa-sort", "ml-1", 3, "ngClass"], ["scope", "col", 1, "px-6", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "bg-white", "divide-y", "divide-gray-200"], ["class", "mt-8", 4, "ngIf"], [1, "border", "border-gray-300", "p-2"], [1, "font-medium"], [1, "text-sm", "text-gray-500"], [1, "border", "border-gray-300", "p-2", 3, "ngClass"], [3, "ngClass"], ["class", "mb-6", 4, "ngFor", "ngForOf"], [1, "mb-6"], [1, "text-lg", "font-medium", "mb-3"], ["colspan", "4", 1, "border", "border-gray-300", "p-2", "text-center", "text-gray-500"], [1, "px-6", "py-4", "whitespace-nowrap"], [1, "ml-4"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-900"], [1, "text-sm", "font-medium", 3, "ngClass"], [1, "px-2", "py-1", "inline-flex", "text-xs", "leading-5", "font-semibold", "rounded-full", 3, "ngClass"], ["colspan", "5", 1, "px-6", "py-4", "text-center", "text-gray-500"], [1, "mt-8"], ["class", "mb-6 bg-white rounded-lg shadow p-4", 4, "ngFor", "ngForOf"], [1, "mb-6", "bg-white", "rounded-lg", "shadow", "p-4"], [1, "overflow-x-auto"], ["colspan", "4", 1, "px-6", "py-4", "text-center", "text-gray-500"], [1, "bg-gray-50", "p-8", "rounded-lg", "text-center"], [1, "text-gray-500"]], template: function QuizResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuizResultsComponent_div_0_Template, 3, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuizResultsComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QuizResultsComponent_div_2_Template, 119, 49, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QuizResultsComponent_div_3_Template, 3, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading || ctx.generatingPdf);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.formationResults && !ctx.generatingPdf);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && (!ctx.formationResults || ctx.formationResults.attempts.length === 0));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWl6LXJlc3VsdHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ui_input_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/input/input.component */ 872);
/* harmony import */ var _ui_buttom_buttom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/buttom/buttom.component */ 8444);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-sidebar/app-sidebar.component */ 1876);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _training_card_training_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training-card/training-card.component */ 7334);
/* harmony import */ var _components_create_group_dialog_create_group_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create-group-dialog/create-group-dialog.component */ 8243);
/* harmony import */ var _components_create_user_dialog_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-user-dialog/create-user-dialog.component */ 8664);
/* harmony import */ var _components_session_popup_session_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/session-popup/session-popup.component */ 5952);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _components_select_quiz_select_quiz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/select-quiz/select-quiz.component */ 8802);
/* harmony import */ var _components_select_group_popup_select_group_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/select-group-popup/select-group-popup.component */ 1905);
/* harmony import */ var _quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz-results/quiz-results.component */ 3310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);




















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_ui_input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent,
        _ui_buttom_buttom_component__WEBPACK_IMPORTED_MODULE_1__.ButtomComponent,
        _app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.AppSidebarComponent,
        _training_card_training_card_component__WEBPACK_IMPORTED_MODULE_3__.TrainingCardComponent,
        _components_create_group_dialog_create_group_dialog_component__WEBPACK_IMPORTED_MODULE_4__.CreateGroupDialogComponent,
        _components_create_user_dialog_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_5__.CreateUserDialogComponent,
        _components_session_popup_session_popup_component__WEBPACK_IMPORTED_MODULE_6__.SessionPopupComponent,
        _components_select_quiz_select_quiz_component__WEBPACK_IMPORTED_MODULE_7__.SelectQuizComponent,
        _components_select_group_popup_select_group_popup_component__WEBPACK_IMPORTED_MODULE_8__.SelectGroupPopupComponent,
        _quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_9__.QuizResultsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule], exports: [_ui_buttom_buttom_component__WEBPACK_IMPORTED_MODULE_1__.ButtomComponent,
        _app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.AppSidebarComponent,
        _training_card_training_card_component__WEBPACK_IMPORTED_MODULE_3__.TrainingCardComponent,
        _components_create_group_dialog_create_group_dialog_component__WEBPACK_IMPORTED_MODULE_4__.CreateGroupDialogComponent,
        _components_create_user_dialog_create_user_dialog_component__WEBPACK_IMPORTED_MODULE_5__.CreateUserDialogComponent,
        _components_session_popup_session_popup_component__WEBPACK_IMPORTED_MODULE_6__.SessionPopupComponent,
        _quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_9__.QuizResultsComponent] }); })();


/***/ }),

/***/ 7334:
/*!*****************************************************************!*\
  !*** ./src/app/shared/training-card/training-card.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingCardComponent": () => (/* binding */ TrainingCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




function TrainingCardComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrainingCardComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.edit.emit(ctx_r2.training.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 23)(3, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function TrainingCardComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrainingCardComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.delete.emit(ctx_r4.training.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
const _c0 = function (a1) { return [".", a1]; };
class TrainingCardComponent {
    constructor() {
        this.canEdit = false;
        this.canDelete = false;
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.addSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.usersCount = 0;
    }
    ngOnInit() {
        this.training.groups.forEach(group => {
            this.usersCount += group.users?.length || 0;
        });
    }
    getCategoryColor(category) {
        switch (category) {
            case 'Technical Training':
                return 'bg-blue-100 text-blue-800';
            case 'Soft Skills':
                return 'bg-red-100 text-red-800';
            case 'Leadership':
                return 'bg-green-100 text-green-800';
            case 'Project Management':
                return 'bg-purple-100 text-purple-800';
            case 'Compliance':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    }
    getCategoryLabel(category) {
        switch (category) {
            case 'Technical Training':
                return 'Technique';
            case 'Soft Skills':
                return 'Sécurité';
            case 'Leadership':
                return 'Qualité';
            case 'Project Management':
                return 'Project Management';
            case 'Compliance':
                return 'Compliance';
            default:
                return category;
        }
    }
}
TrainingCardComponent.ɵfac = function TrainingCardComponent_Factory(t) { return new (t || TrainingCardComponent)(); };
TrainingCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrainingCardComponent, selectors: [["app-training-card"]], inputs: { training: "training", canEdit: "canEdit", canDelete: "canDelete" }, outputs: { edit: "edit", delete: "delete", addSession: "addSession" }, decls: 32, vars: 13, consts: [[1, "bg-white", "rounded-lg", "shadow-md", "overflow-hidden", "border", "border-gray-200", "hover:shadow-lg", "transition-shadow"], [1, "p-4"], [1, "flex", "justify-between", "items-start", "mb-3"], [1, "font-semibold", "text-gray-800", "text-lg"], [1, "px-2", "py-1", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "text-gray-600", "text-sm", "mb-4", "line-clamp-2", "line-coverage", "min-h-[3.5rem]"], [1, "grid", "grid-cols-2", "gap-2", "mb-3"], [1, "flex", "items-center", "text-gray-600", "text-sm"], [1, "fa-solid", "fa-clock", "w-4", "h-4", "mr-2", "text-gray-400"], [1, "fa-solid", "fa-calendar", "text-gray-300", "mr-2"], [1, "fa-solid", "fa-users", "mr-2", "text-gray-400"], [1, "fa-solid", "fa-book", "text-gray-400", "w-4", "h-4", "mr-2"], [1, "px-4", "py-3", "bg-gray-50", "border-t", "border-gray-200", "flex", "justify-between"], [1, "text-primary", "text-sm", "font-medium", "flex", "items-center", "hover:text-primary-dark", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", "mr-1"], ["fill-rule", "evenodd", "d", "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z", "clip-rule", "evenodd"], [1, "flex", "space-x-2"], ["class", "text-gray-600 hover:text-gray-900", 3, "click", 4, "ngIf"], ["class", "text-gray-600 hover:text-red-600", 3, "click", 4, "ngIf"], [1, "text-gray-400", "hover:text-gray-900", 3, "routerLink"], [1, "fa-solid", "fa-eye", "text-gray-500", "hover:text-blue-600"], [1, "text-gray-600", "hover:text-gray-900", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4"], ["d", "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"], ["fill-rule", "evenodd", "d", "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z", "clip-rule", "evenodd"], [1, "text-gray-600", "hover:text-red-600", 3, "click"], ["fill-rule", "evenodd", "d", "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z", "clip-rule", "evenodd"]], template: function TrainingCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12)(23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrainingCardComponent_Template_button_click_23_listener() { return ctx.addSession.emit(ctx.training.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Session ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TrainingCardComponent_button_28_Template, 4, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TrainingCardComponent_button_29_Template, 3, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.training.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getCategoryColor(ctx.training.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getCategoryLabel(ctx.training.category), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.training.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.training.groups.length, " groupes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.training.sessions.length, " sessions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.usersCount, " participants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.training.modules.length, " modules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.training.id));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8444:
/*!******************************************************!*\
  !*** ./src/app/shared/ui/buttom/buttom.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtomComponent": () => (/* binding */ ButtomComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const _c0 = ["*"];
class ButtomComponent {
    constructor() {
        this.variant = 'default';
        this.size = 'default';
        this.routerLink = null;
        this.disabled = false;
    }
    get buttonClasses() {
        const baseClasses = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';
        const variantClasses = {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline',
        };
        const sizeClasses = {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10',
        };
        return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]}`;
    }
}
ButtomComponent.ɵfac = function ButtomComponent_Factory(t) { return new (t || ButtomComponent)(); };
ButtomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtomComponent, selectors: [["app-button"]], inputs: { variant: "variant", size: "size", routerLink: "routerLink", disabled: "disabled" }, ngContentSelectors: _c0, decls: 2, vars: 3, consts: [[1, "inline-flex", "items-center", "justify-center", "gap-2", "whitespace-nowrap", "rounded-md", "text-sm", "font-medium", "ring-offset-background", "transition-colors", "focus-visible:outline-none", "focus-visible:ring-2", "focus-visible:ring-ring", "focus-visible:ring-offset-2", "disabled:pointer-events-none", "disabled:opacity-50", 3, "ngClass", "routerLink", "disabled"]], template: function ButtomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.buttonClasses)("routerLink", ctx.routerLink)("disabled", ctx.disabled);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b20uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 872:
/*!****************************************************!*\
  !*** ./src/app/shared/ui/input/input.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class InputComponent {
    constructor() {
        this.type = 'text';
        this.placeholder = '';
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["Input"]], inputs: { type: "type", placeholder: "placeholder", formControlName: "formControlName" }, decls: 1, vars: 3, consts: [[1, "flex", "h-10", "w-full", "rounded-md", "border", "border-gray-300", "bg-white", "px-3", "py-2", "text-sm", "ring-offset-white", "file:border-0", "file:bg-transparent", "file:text-sm", "file:font-medium", "placeholder:text-gray-500", "focus-visible:outline-none", "focus-visible:ring-2", "focus-visible:ring-gray-950", "focus-visible:ring-offset-2", "disabled:cursor-not-allowed", "disabled:opacity-50", 3, "type", "placeholder"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("formControlName", ctx.formControlName);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], encapsulation: 2 });


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
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // baseUrl: "https://formationapi-production.up.railway.app/api"
    baseUrl: "https://localhost:7173/api",
    hubsUrl: 'https://localhost:7173/hubs/',
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
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