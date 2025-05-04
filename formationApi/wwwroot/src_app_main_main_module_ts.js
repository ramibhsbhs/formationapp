"use strict";
(self["webpackChunkformationApp"] = self["webpackChunkformationApp"] || []).push([["src_app_main_main_module_ts"],{

/***/ 1550:
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ 263);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_ui_buttom_buttom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ui/buttom/buttom.component */ 8444);





class HomeComponent {
    constructor() {
        this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
        this.user = null;
        this.actionLink = '/login';
        this.actionText = 'Se connecter';
    }
    ngOnInit() {
        this.auth.currentUser$.subscribe(user => {
            this.user = user;
            console.log(user);
            this.actionLink = user ? user.redirectUrl : '/login';
            this.actionText = user ? 'Accéder au tableau de bord' : 'Se connecter';
        });
    }
    ngOnDestroy() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 129, vars: 5, consts: [[1, "min-h-screen", "bg-gradient-to-b", "from-blue-50", "to-white"], [1, "pt-6", "px-4", "md:pt-12"], [1, "container", "mx-auto", "max-w-7xl"], [1, "flex", "justify-between", "items-center", "mb-8"], [1, "flex", "items-center"], [1, "h-10", "w-10", "bg-primary", "rounded-md", "flex", "items-center", "justify-center", "mr-3"], [1, "fa-solid", "fa-graduation-cap", "text-white", 2, "font-size", "24px"], [1, "text-xl", "font-bold", "text-gray-800", "!mb-0"], [1, "text-xs", "text-gray-600", "!mb-0"], ["variant", "outline", 3, "routerLink"], [1, "flex", "flex-col", "md:flex-row", "items-center", "py-12", "md:py-20"], [1, "md:w-1/2", "mb-8", "md:mb-0"], [1, "text-4xl", "md:text-5xl", "font-bold", "text-gray-800", "mb-4"], [1, "text-xl", "text-gray-600", "mb-8"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "btn", "btn-lg", "w-full", "sm:w-auto", 3, "routerLink"], [1, "btn", "btn-outline", "btn-lg", "w-full", "sm:w-auto", 3, "routerLink"], [1, "md:w-1/2", "flex", "justify-center"], [1, "relative", "w-full", "max-w-md"], [1, "absolute", "-top-4", "-left-4", "w-full", "h-full", "bg-primary/10", "rounded-xl"], [1, "relative", "bg-white", "p-6", "rounded-xl", "shadow-lg", "border", "border-gray-200"], [1, "flex", "items-center", "mb-4"], [1, "fas", "fa-chart-bar", "h-6", "w-6", "text-primary", "mr-2"], [1, "text-lg", "font-semibold"], [1, "grid", "grid-cols-2", "gap-4", "mb-4"], [1, "bg-blue-50", "p-3", "rounded-lg"], [1, "text-sm", "text-gray-600"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "bg-green-50", "p-3", "rounded-lg"], [1, "bg-purple-50", "p-3", "rounded-lg"], [1, "bg-orange-50", "p-3", "rounded-lg"], [1, "py-12", "md:py-20", "bg-white"], [1, "container", "mx-auto", "max-w-7xl", "px-4"], [1, "text-center", "mb-12"], [1, "text-3xl", "font-bold", "text-gray-800", "mb-4"], [1, "text-xl", "text-gray-600"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8"], [1, "card", "border-0", "shadow-md", "hover:shadow-lg", "transition-shadow"], [1, "card-content", "pt-6"], [1, "h-12", "w-12", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-graduation-cap", "text-primary", "text-2xl"], [1, "text-xl", "font-semibold", "mb-2"], [1, "text-gray-600"], [1, "h-12", "w-12", "bg-green-100", "rounded-lg", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-calendar", "text-2xl", "text-green-600"], [1, "h-12", "w-12", "bg-purple-100", "rounded-lg", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-users", "text-2xl", "text-purple-600"], [1, "h-12", "w-12", "bg-orange-100", "rounded-lg", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-chart-bar", "text-2xl", "text-orange-600"], [1, "h-12", "w-12", "bg-red-100", "rounded-lg", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-check-circle", "text-2xl", "text-red-600"], [1, "h-12", "w-12", "bg-teal-100", "rounded-lg", "flex", "items-center", "justify-center", "mb-4"], [1, "fas", "fa-bell", "text-2xl", "text-teal-600"], [1, "py-12", "md:py-20", "bg-gradient-to-r", "from-primary/10", "to-blue-50"], [1, "container", "mx-auto", "max-w-7xl", "px-4", "text-center"], ["size", "lg", 1, "px-8", 3, "routerLink"], [1, "bg-gray-100", "py-8"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-center"], [1, "flex", "items-center", "mb-4", "md:mb-0"], [1, "h-8", "w-8", "bg-primary", "rounded-md", "flex", "items-center", "justify-center", "mr-2"], [1, "fas", "fa-graduation-cap", "text-white", 2, "font-size", "16px"], [1, "text-gray-800", "font-semibold"], [1, "text-gray-600", "text-sm"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "SUMITOMO formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "app-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Pilotez vos formations avec efficacit\u00E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Une plateforme compl\u00E8te pour g\u00E9rer, suivre et optimiser les programmes de formation de votre entreprise. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14)(22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Commencer maintenant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " D\u00E9couvrir les fonctionnalit\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17)(27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 20)(30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Statistiques en temps r\u00E9el");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 24)(35, "div", 25)(36, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Formations actives");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 28)(41, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Employ\u00E9s form\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "186");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 29)(46, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Sessions ce mois");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 30)(51, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Taux de r\u00E9ussite");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "92%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "section", 31)(56, "div", 32)(57, "div", 33)(58, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Fonctionnalit\u00E9s principales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " Notre plateforme offre tous les outils n\u00E9cessaires pour une gestion efficace des formations au sein de votre entreprise. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 36)(63, "div", 37)(64, "div", 38)(65, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Gestion des formations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " Cr\u00E9ez, modifiez et organisez vos programmes de formation avec un suivi d\u00E9taill\u00E9 du contenu et des objectifs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 37)(72, "div", 38)(73, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Planification des sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " Planifiez et g\u00E9rez les sessions de formation avec un syst\u00E8me de calendrier intuitif et des rappels automatiques. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 37)(80, "div", 38)(81, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Suivi des employ\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " Suivez la progression et les comp\u00E9tences acquises par vos employ\u00E9s \u00E0 travers diff\u00E9rents programmes de formation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 37)(88, "div", 38)(89, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Rapports et analyses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " G\u00E9n\u00E9rez des rapports d\u00E9taill\u00E9s sur les performances et l'efficacit\u00E9 de vos programmes de formation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 37)(96, "div", 38)(97, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "\u00C9valuation des comp\u00E9tences");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " \u00C9valuez les comp\u00E9tences acquises avec des tests personnalisables et des certifications int\u00E9gr\u00E9es. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 37)(104, "div", 38)(105, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " Restez inform\u00E9 avec des alertes pour les formations obligatoires et les \u00E9ch\u00E9ances importantes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "section", 53)(112, "div", 54)(113, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " Pr\u00EAt \u00E0 optimiser la gestion de vos formations ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, " Rejoignez les nombreuses entreprises qui am\u00E9liorent la qualit\u00E9 de leurs formations avec FormationPilot. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "app-button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Commencer maintenant");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "footer", 56)(120, "div", 32)(121, "div", 57)(122, "div", 58)(123, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "FormationPilot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " \u00A9 2024 SUMITOMO ELECTRIC BORDNETZE SE. Tous droits r\u00E9serv\u00E9s. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.actionLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.actionText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/login");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_ui_buttom_buttom_component__WEBPACK_IMPORTED_MODULE_1__.ButtomComponent], styles: [".card[_ngcontent-%COMP%] {\n    border-radius: var(--radius);\n    border-width: 1px;\n    background-color: hsl(var(--card));\n    padding: 1rem;\n    color: hsl(var(--card-foreground));\n    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQSw0QkFBQTtJQUFBLGlCQUFBO0lBQUEsa0NBQUE7SUFBQSxhQUFBO0lBQUEsa0NBQUE7SUFBQSwwQ0FBQTtJQUFBLHVEQUFBO0lBQUE7QUFBQSIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIEBhcHBseSByb3VuZGVkLWxnIGJvcmRlciBiZy1jYXJkIHRleHQtY2FyZC1mb3JlZ3JvdW5kIHNoYWRvdy1zbSBwLTRcbn0iXX0= */"] });


/***/ }),

/***/ 9853:
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainRoutingModule": () => (/* binding */ MainRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 1550);
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test/test.component */ 5914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: "", children: [
            { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }
        ]
    },
    {
        path: "", children: [
            { path: "test", component: _test_test_component__WEBPACK_IMPORTED_MODULE_1__.TestComponent }
        ]
    }
];
class MainRoutingModule {
}
MainRoutingModule.ɵfac = function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); };
MainRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5705:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainModule": () => (/* binding */ MainModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 9853);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 1550);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test/test.component */ 5914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class MainModule {
}
MainModule.ɵfac = function MainModule_Factory(t) { return new (t || MainModule)(); };
MainModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        _test_test_component__WEBPACK_IMPORTED_MODULE_3__.TestComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 5914:
/*!*********************************************!*\
  !*** ./src/app/main/test/test.component.ts ***!
  \*********************************************/
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


/***/ })

}]);
//# sourceMappingURL=src_app_main_main_module_ts.js.map