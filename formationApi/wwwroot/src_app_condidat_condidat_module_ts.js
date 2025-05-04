"use strict";
(self["webpackChunkformationApp"] = self["webpackChunkformationApp"] || []).push([["src_app_condidat_condidat_module_ts"],{

/***/ 3322:
/*!*************************************************************************************************!*\
  !*** ./src/app/condidat/certification/certification-deatils/certification-deatils.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificationDeatilsComponent": () => (/* binding */ CertificationDeatilsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_services_certification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/certification.service */ 1112);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function CertificationDeatilsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CertificationDeatilsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
} }
function CertificationDeatilsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15)(5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "CERTIFICATE OF COMPLETION");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "This is to certify that");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 14)(13, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "has successfully completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "with a score of");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 26)(24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 28)(27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 30)(30, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 31)(35, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Authorized Signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 33)(38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 34)(41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.certification.user.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.certification.session.formation.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.certification.session.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.getScoreClass(ctx_r2.certification.score));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.certification.score, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.certification.score >= 70 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.getPassStatus(ctx_r2.certification.score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" From ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 12, ctx_r2.certification.session.startDate, "mediumDate"), " to ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](33, 15, ctx_r2.certification.session.endDate, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.certification.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Certificate ID: ", ctx_r2.certification.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Issued on: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](45, 18, ctx_r2.certification.createdAt, "medium"), "");
} }
class CertificationDeatilsComponent {
    constructor(route, router, certificationService) {
        this.route = route;
        this.router = router;
        this.certificationService = certificationService;
        this.certification = null;
        this.isLoading = false;
        this.error = null;
    }
    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.loadCertification(id);
    }
    loadCertification(id) {
        this.isLoading = true;
        this.error = null;
        this.certificationService.getCertificationById(id).subscribe({
            next: (data) => {
                this.certification = data;
                this.isLoading = false;
            },
            error: (err) => {
                this.error = 'Failed to load certification. Please try again later.';
                this.isLoading = false;
                console.error('Error loading certification:', err);
            }
        });
    }
    goBack() {
        this.router.navigate(['/condidat/certifications']);
    }
    getPassStatus(score) {
        return score >= 70 ? 'Passed' : 'Failed';
    }
    getScoreClass(score) {
        if (score >= 90)
            return 'text-green-700 bg-green-100';
        if (score >= 70)
            return 'text-green-600 bg-green-50';
        if (score >= 50)
            return 'text-yellow-600 bg-yellow-50';
        return 'text-red-600 bg-red-50';
    }
    printCertificate() {
        window.print();
    }
}
CertificationDeatilsComponent.ɵfac = function CertificationDeatilsComponent_Factory(t) { return new (t || CertificationDeatilsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_certification_service__WEBPACK_IMPORTED_MODULE_0__.CertificationService)); };
CertificationDeatilsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CertificationDeatilsComponent, selectors: [["app-certification-deatils"]], decls: 9, vars: 3, consts: [[1, "p-6"], ["class", "flex justify-center items-center py-10", 4, "ngIf"], ["class", "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6", 4, "ngIf"], ["class", "print:shadow-none", 4, "ngIf"], [1, "fixed", "bottom-4", "right-4", "print:hidden"], [1, "bg-blue-500", "hover:bg-blue-600", "text-white", "px-4", "py-2", "rounded-md", "flex", "items-center", "shadow-lg", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"], [1, "flex", "justify-center", "items-center", "py-10"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-t-2", "border-b-2", "border-blue-500"], [1, "bg-red-100", "border", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "mb-6"], [1, "print:shadow-none"], [1, "bg-white", "rounded-lg", "shadow-lg", "overflow-hidden", "mb-6", "max-w-4xl", "mx-auto", "print:shadow-none", "print:mx-0", "certificate-wrapper"], [1, "p-8", "print:p-1", "certificate-container", "border-8", "border-double", "border-gray-200", "m-4", "print:m-0", "print:border-0"], [1, "text-center", "mb-8"], [1, "flex", "justify-center", "mb-4"], [1, "w-24", "h-24", "rounded-full", "bg-yellow-100", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-12", "w-12", "text-yellow-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "text-3xl", "font-bold", "text-gray-800", "mb-2"], [1, "text-gray-600"], [1, "text-2xl", "font-bold", "text-yellow-600", "mb-2"], [1, "text-gray-600", "mb-4"], [1, "text-xl", "font-bold", "text-gray-800", "mb-1"], [1, "text-gray-700"], [1, "text-gray-600", "mt-3"], [1, "flex", "justify-center", "my-3"], [1, "text-xl", "font-bold", "py-1", "px-4", "rounded-full", 3, "ngClass"], [1, "flex", "justify-center"], [1, "px-3", "py-1", "rounded-full", "text-sm", "font-semibold", 3, "ngClass"], [1, "text-center", "mb-4"], [1, "mt-8", "border-t", "pt-4", "border-gray-200", "inline-block"], [1, "font-bold"], [1, "mt-6", "text-center", "text-gray-500", "text-sm"], [1, "mt-4", "text-center", "text-gray-400", "text-xs"]], template: function CertificationDeatilsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CertificationDeatilsComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CertificationDeatilsComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CertificationDeatilsComponent_div_3_Template, 46, 21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CertificationDeatilsComponent_Template_button_click_5_listener() { return ctx.printCertificate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Print Certificate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.certification);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".certificate-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  aspect-ratio: 297/210;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.certificate-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n@media print {\n  @page {\n    size: A4 landscape;\n    margin: 0;\n  }\n  body[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n  .certificate-wrapper[_ngcontent-%COMP%], .certificate-wrapper[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n  .certificate-wrapper[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 297mm;\n    height: 210mm;\n    margin: 0;\n    padding: 0;\n    box-shadow: none;\n  }\n  .certificate-container[_ngcontent-%COMP%] {\n    border: none;\n    margin: 0;\n    padding: 1mm;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlcnRpZmljYXRpb24tZGVhdGlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFJQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0VBRE47RUFJRTtJQUNJLGtCQUFBO0VBRk47RUFLRTs7SUFFSSxtQkFBQTtFQUhOO0VBTUU7SUFDSSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VBSk47RUFPRTtJQUNJLFlBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtFQUxOO0FBQ0YiLCJmaWxlIjoiY2VydGlmaWNhdGlvbi1kZWF0aWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQTQgbGFuZHNjYXBlIGFzcGVjdCByYXRpbyAoMjk3bW0gw5cgMjEwbW0sIGFwcHJveGltYXRlbHkgMS40MTQ6MSlcbi5jZXJ0aWZpY2F0ZS13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8vIEFkanVzdCBmb3Igc2NyZWVuIGRpc3BsYXkgKHdpZGVyIGZvciBsYW5kc2NhcGUpXG4gICAgYXNwZWN0LXJhdGlvOiAyOTcgLyAyMTA7IC8vIEE0IGxhbmRzY2FwZSByYXRpb1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jZXJ0aWZpY2F0ZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vLyBFbnN1cmUgb25seSB0aGUgY2VydGlmaWNhdGUgaXMgcHJpbnRlZCBpbiBsYW5kc2NhcGVcbkBtZWRpYSBwcmludCB7XG4gICAgQHBhZ2Uge1xuICAgICAgICBzaXplOiBBNCBsYW5kc2NhcGU7IC8vIEZvcmNlIEE0IGxhbmRzY2FwZVxuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgYm9keSAqIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgIC5jZXJ0aWZpY2F0ZS13cmFwcGVyLFxuICAgIC5jZXJ0aWZpY2F0ZS13cmFwcGVyICoge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cblxuICAgIC5jZXJ0aWZpY2F0ZS13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAyOTdtbTsgLy8gQTQgbGFuZHNjYXBlIHdpZHRoXG4gICAgICAgIGhlaWdodDogMjEwbW07IC8vIEE0IGxhbmRzY2FwZSBoZWlnaHRcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgIC5jZXJ0aWZpY2F0ZS1jb250YWluZXIge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMW1tOyAvLyBNaW5pbWFsIHBhZGRpbmcgZm9yIHByaW50XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 5955:
/*!*******************************************************************************************!*\
  !*** ./src/app/condidat/certification/certification-list/certification-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificationListComponent": () => (/* binding */ CertificationListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_certification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/certification.service */ 1112);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function CertificationListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CertificationListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
} }
function CertificationListComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You don't have any certifications yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
const _c0 = function (a1) { return [".", a1]; };
function CertificationListComponent_div_5_div_2_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 18)(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 19)(10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 19)(13, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 22)(16, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "path", 25)(19, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const cert_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cert_r6.session.formation.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cert_r6.session.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 9, cert_r6.session.startDate, "shortDate"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 12, cert_r6.session.endDate, "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r5.getScoreClass(cert_r6.score));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cert_r6.score, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", cert_r6.score >= 70 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.getPassStatus(cert_r6.score), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, cert_r6.id));
} }
function CertificationListComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "table", 13)(2, "thead", 14)(3, "tr")(4, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Formation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CertificationListComponent_div_5_div_2_tr_17_Template, 20, 17, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.certifications);
} }
function CertificationListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CertificationListComponent_div_5_div_1_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CertificationListComponent_div_5_div_2_Template, 18, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.certifications.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.certifications.length > 0);
} }
class CertificationListComponent {
    constructor(certificationService) {
        this.certificationService = certificationService;
        this.certifications = [];
        this.isLoading = false;
        this.error = null;
    }
    ngOnInit() {
        this.loadCertifications();
    }
    loadCertifications() {
        this.isLoading = true;
        this.error = null;
        this.certificationService.getUserCertifications().subscribe({
            next: (data) => {
                this.certifications = data;
                this.isLoading = false;
            },
            error: (err) => {
                this.error = 'Failed to load certifications. Please try again later.';
                this.isLoading = false;
                console.error('Error loading certifications:', err);
            }
        });
    }
    getPassStatus(score) {
        return score >= 70 ? 'Passed' : 'Failed';
    }
    getScoreClass(score) {
        if (score >= 90)
            return 'text-green-700 bg-green-100';
        if (score >= 70)
            return 'text-green-600 bg-green-50';
        if (score >= 50)
            return 'text-yellow-600 bg-yellow-50';
        return 'text-red-600 bg-red-50';
    }
}
CertificationListComponent.ɵfac = function CertificationListComponent_Factory(t) { return new (t || CertificationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_certification_service__WEBPACK_IMPORTED_MODULE_0__.CertificationService)); };
CertificationListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CertificationListComponent, selectors: [["app-certification-list"]], decls: 6, vars: 3, consts: [[1, "p-6"], [1, "text-2xl", "font-bold", "mb-6", "text-gray-800"], ["class", "flex justify-center items-center py-10", 4, "ngIf"], ["class", "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6", 4, "ngIf"], [4, "ngIf"], [1, "flex", "justify-center", "items-center", "py-10"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-t-2", "border-b-2", "border-blue-500"], [1, "bg-red-100", "border", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "mb-6"], ["class", "text-center py-8", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "text-center", "py-8"], [1, "text-gray-600"], [1, "overflow-x-auto"], [1, "min-w-full", "bg-white", "border", "border-gray-200", "shadow-md", "rounded-lg", "overflow-hidden"], [1, "bg-gray-50"], [1, "px-6", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "divide-y", "divide-gray-200"], ["class", "hover:bg-gray-50", 4, "ngFor", "ngForOf"], [1, "hover:bg-gray-50"], [1, "px-6", "py-4"], [1, "px-2", "py-1", "rounded-full", "text-sm", "font-semibold", 3, "ngClass"], [1, "px-2", "py-1", "rounded-full", "text-sm", 3, "ngClass"], [1, "px-6", "py-4", "whitespace-nowrap"], [1, "text-blue-500", "hover:text-blue-700", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"]], template: function CertificationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CertificationListComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CertificationListComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CertificationListComponent_div_5_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1534:
/*!*****************************************************!*\
  !*** ./src/app/condidat/comdidat-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CondidatRoutingModule": () => (/* binding */ CondidatRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 8092);
/* harmony import */ var _formation_formations_formations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formation/formations/formations.component */ 2922);
/* harmony import */ var _formation_formation_details_formation_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formation/formation-details/formation-details.component */ 8833);
/* harmony import */ var _quiz_quiz_passing_quiz_passing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz/quiz-passing/quiz-passing.component */ 1417);
/* harmony import */ var _certification_certification_deatils_certification_deatils_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./certification/certification-deatils/certification-deatils.component */ 3322);
/* harmony import */ var _certification_certification_list_certification_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./certification/certification-list/certification-list.component */ 5955);
/* harmony import */ var _quiz_quiz_validation_quiz_validation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz/quiz-validation/quiz-validation.component */ 9547);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications/notifications.component */ 650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: "formations", component: _formation_formations_formations_component__WEBPACK_IMPORTED_MODULE_1__.FormationsComponent },
    { path: "formations/:id", component: _formation_formation_details_formation_details_component__WEBPACK_IMPORTED_MODULE_2__.FormationDetailsComponent },
    { path: "formations/:formationId/finaltest/:quizId", component: _quiz_quiz_passing_quiz_passing_component__WEBPACK_IMPORTED_MODULE_3__.QuizPassingComponent },
    { path: "validate-quiz/:sessionId", component: _quiz_quiz_validation_quiz_validation_component__WEBPACK_IMPORTED_MODULE_6__.QuizValidationComponent },
    { path: "quiz/:quizId/:sessionId", component: _quiz_quiz_passing_quiz_passing_component__WEBPACK_IMPORTED_MODULE_3__.QuizPassingComponent },
    { path: "certification", component: _certification_certification_list_certification_list_component__WEBPACK_IMPORTED_MODULE_5__.CertificationListComponent },
    { path: "certification/:id", component: _certification_certification_deatils_certification_deatils_component__WEBPACK_IMPORTED_MODULE_4__.CertificationDeatilsComponent },
    { path: "notifications", component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__.NotificationsComponent },
];
class CondidatRoutingModule {
}
CondidatRoutingModule.ɵfac = function CondidatRoutingModule_Factory(t) { return new (t || CondidatRoutingModule)(); };
CondidatRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CondidatRoutingModule });
CondidatRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CondidatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 4959:
/*!**************************************************************************************************!*\
  !*** ./src/app/condidat/components/condidat-formation-card/condidat-formation-card.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CondidatFormationCardComponent": () => (/* binding */ CondidatFormationCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function (a1) { return ["./", a1]; };
class CondidatFormationCardComponent {
    constructor() {
        this.viewDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
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
CondidatFormationCardComponent.ɵfac = function CondidatFormationCardComponent_Factory(t) { return new (t || CondidatFormationCardComponent)(); };
CondidatFormationCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CondidatFormationCardComponent, selectors: [["app-condidat-formation-card"]], inputs: { formation: "formation" }, outputs: { viewDetails: "viewDetails" }, decls: 19, vars: 9, consts: [[1, "bg-white", "rounded-lg", "shadow-md", "overflow-hidden", "border", "border-gray-200", "hover:shadow-lg", "transition-shadow"], [1, "p-4"], [1, "flex", "justify-between", "items-start", "mb-3"], [1, "font-semibold", "text-gray-800", "text-lg"], [1, "px-2", "py-1", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "text-gray-600", "text-sm", "mb-4", "line-clamp-2", "min-h-[3.5rem]"], [1, "grid", "grid-cols-2", "gap-2", "mb-3"], [1, "flex", "items-center", "text-gray-600", "text-sm"], [1, "fa-solid", "fa-calendar", "text-gray-400", "w-4", "h-4", "mr-2"], [1, "fa-solid", "fa-book", "text-gray-400", "w-4", "h-4", "mr-2"], [1, "px-4", "py-3", "bg-gray-50", "border-t", "border-gray-200", "flex", "justify-end"], [1, "text-gray-500", "hover:text-blue-600", 3, "routerLink"], [1, "fa-solid", "fa-eye", "text-gray-500", "hover:text-primary"]], template: function CondidatFormationCardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10)(17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formation.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getCategoryColor(ctx.formation.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getCategoryLabel(ctx.formation.category), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formation.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formation.sessions.length, " sessions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formation.modules.length, " modules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.formation.id));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25kaWRhdC1mb3JtYXRpb24tY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6940:
/*!*********************************************!*\
  !*** ./src/app/condidat/condidat.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CondidatModule": () => (/* binding */ CondidatModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _comdidat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comdidat-routing.module */ 1534);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 8092);
/* harmony import */ var _components_condidat_formation_card_condidat_formation_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/condidat-formation-card/condidat-formation-card.component */ 4959);
/* harmony import */ var _formation_formations_formations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formation/formations/formations.component */ 2922);
/* harmony import */ var _quiz_quiz_passing_quiz_passing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz/quiz-passing/quiz-passing.component */ 1417);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _formation_formation_details_formation_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formation/formation-details/formation-details.component */ 8833);
/* harmony import */ var _certification_certification_list_certification_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./certification/certification-list/certification-list.component */ 5955);
/* harmony import */ var _certification_certification_deatils_certification_deatils_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./certification/certification-deatils/certification-deatils.component */ 3322);
/* harmony import */ var _quiz_quiz_validation_quiz_validation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz/quiz-validation/quiz-validation.component */ 9547);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifications/notifications.component */ 650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);













class CondidatModule {
}
CondidatModule.ɵfac = function CondidatModule_Factory(t) { return new (t || CondidatModule)(); };
CondidatModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CondidatModule });
CondidatModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _comdidat_routing_module__WEBPACK_IMPORTED_MODULE_0__.CondidatRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CondidatModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        _components_condidat_formation_card_condidat_formation_card_component__WEBPACK_IMPORTED_MODULE_2__.CondidatFormationCardComponent,
        _formation_formations_formations_component__WEBPACK_IMPORTED_MODULE_3__.FormationsComponent,
        _quiz_quiz_passing_quiz_passing_component__WEBPACK_IMPORTED_MODULE_4__.QuizPassingComponent,
        _formation_formation_details_formation_details_component__WEBPACK_IMPORTED_MODULE_5__.FormationDetailsComponent,
        _certification_certification_list_certification_list_component__WEBPACK_IMPORTED_MODULE_6__.CertificationListComponent,
        _certification_certification_deatils_certification_deatils_component__WEBPACK_IMPORTED_MODULE_7__.CertificationDeatilsComponent,
        _quiz_quiz_validation_quiz_validation_component__WEBPACK_IMPORTED_MODULE_8__.QuizValidationComponent,
        _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__.NotificationsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _comdidat_routing_module__WEBPACK_IMPORTED_MODULE_0__.CondidatRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule] }); })();


/***/ }),

/***/ 1851:
/*!***************************************************!*\
  !*** ./src/app/condidat/core/condidat.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CondidatService": () => (/* binding */ CondidatService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class CondidatService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    getFormations() {
        return this.http.get(`${this.baseUrl}/formation/condidat`);
    }
    getFormation(id) {
        return this.http.get(`${this.baseUrl}/formation/condidat/${id}`);
    }
    /**
     * Vérifie si l'utilisateur peut passer un quiz pour une session donnée
     * @param sessionId ID de la session
     * @returns Observable avec les informations d'éligibilité
     */
    checkQuizEligibility(sessionId) {
        return this.http.get(`${this.baseUrl}/quizs/validate/${sessionId}`);
    }
}
CondidatService.ɵfac = function CondidatService_Factory(t) { return new (t || CondidatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CondidatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CondidatService, factory: CondidatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8833:
/*!*************************************************************************************!*\
  !*** ./src/app/condidat/formation/formation-details/formation-details.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormationDetailsComponent": () => (/* binding */ FormationDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_condidat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/condidat.service */ 1851);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = function (a0, a1) { return { "bg-gradient-to-tr from-green-600 to-green-400 shadow-green-100": a0, "bg-gradient-to-r from-red-400 to-pink-500": a1 }; };
function FormationDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r0.countdownState === "upcoming", ctx_r0.countdownState === "ongoing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.countdownState === "upcoming" ? "Commence dans " + ctx_r0.countdownText : "Termine dans " + ctx_r0.countdownText, " ");
} }
function FormationDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormationDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Erreur!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.error);
} }
function FormationDetailsComponent_div_4_div_23_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const session_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("F\u00E9licitations ! Vous avez r\u00E9ussi avec un score de ", session_r8.score, "%");
} }
function FormationDetailsComponent_div_4_div_23_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const session_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Vous n'avez pas r\u00E9ussi le test. Score : ", session_r8.score, "%");
} }
function FormationDetailsComponent_div_4_div_23_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormationDetailsComponent_div_4_div_23_div_12_div_1_Template, 4, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormationDetailsComponent_div_4_div_23_div_12_div_2_Template, 4, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", session_r8.score >= 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", session_r8.score < 70);
} }
const _c1 = function (a1) { return ["/condidat/validate-quiz", a1]; };
function FormationDetailsComponent_div_4_div_23_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 50)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Passer le test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const session_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, session_r8.sessionId));
} }
function FormationDetailsComponent_div_4_div_23_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const session_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.getSessionStatusMessage(session_r8));
} }
function FormationDetailsComponent_div_4_div_23_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " R\u00E9ussi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormationDetailsComponent_div_4_div_23_div_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Non r\u00E9ussi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormationDetailsComponent_div_4_div_23_div_15_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Termin\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormationDetailsComponent_div_4_div_23_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormationDetailsComponent_div_4_div_23_div_15_span_1_Template, 3, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormationDetailsComponent_div_4_div_23_div_15_span_2_Template, 3, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FormationDetailsComponent_div_4_div_23_div_15_span_3_Template, 2, 0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", session_r8.score >= 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", session_r8.hasAttempted && session_r8.score < 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !session_r8.hasAttempted);
} }
function FormationDetailsComponent_div_4_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div")(3, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18)(6, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FormationDetailsComponent_div_4_div_23_div_12_Template, 3, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FormationDetailsComponent_div_4_div_23_a_13_Template, 5, 3, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FormationDetailsComponent_div_4_div_23_div_14_Template, 4, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FormationDetailsComponent_div_4_div_23_div_15_Template, 4, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const session_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](session_r8.sessionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 9, session_r8.startDate), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 11, session_r8.endDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r4.getSessionStatusClass(session_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (", ctx_r4.getSessionStatusMessage(session_r8), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", session_r8.hasAttempted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.canTakeQuiz(session_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", session_r8.canRepass && !ctx_r4.canTakeQuiz(session_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !session_r8.canRepass);
} }
function FormationDetailsComponent_div_4_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64)(1, "a", 65)(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Aucune Session ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Aucune session disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} }
function FormationDetailsComponent_div_4_div_26_div_18_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 80)(1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cliquer pour voir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const attachment_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", attachment_r28.lien, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r27.getFileIcon(attachment_r28.type), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Fichier ", attachment_r28.type, " ");
} }
function FormationDetailsComponent_div_4_div_26_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormationDetailsComponent_div_4_div_26_div_18_a_1_Template, 8, 3, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", module_r24.attachments);
} }
function FormationDetailsComponent_div_4_div_26_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78)(1, "a", 83)(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Aucun Fichier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Aucun fichier attach\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} }
function FormationDetailsComponent_div_4_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "div", 70)(2, "div", 18)(3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Titre : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18)(10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 75)(16, "h3", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Ressources");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FormationDetailsComponent_div_4_div_26_div_18_Template, 2, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, FormationDetailsComponent_div_4_div_26_div_19_Template, 9, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const module_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](module_r24.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Module ", module_r24.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](module_r24.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", module_r24.attachments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", module_r24.attachments.length === 0);
} }
function FormationDetailsComponent_div_4_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Modules de Formation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 64)(4, "a", 84)(5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Aucun Module ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Aucun module attach\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} }
function FormationDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Titre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 22)(11, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div")(16, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Contenu: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16)(20, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sessions de Formation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, FormationDetailsComponent_div_4_div_23_Template, 16, 13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, FormationDetailsComponent_div_4_div_24_Template, 9, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, FormationDetailsComponent_div_4_div_26_Template, 20, 5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, FormationDetailsComponent_div_4_div_27_Template, 12, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.formation.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.formation.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.formation.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r3.formation.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.formation.sessions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formation.sessions.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.formation.modules);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formation.modules.length === 0);
} }
class FormationDetailsComponent {
    constructor(condidatService, route, router) {
        this.condidatService = condidatService;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.error = null;
        this.formation = null;
        // session timeout
        // Countdown properties
        this.countdownText = '';
        this.countdownState = 'upcoming';
    }
    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.loadFormation(id);
    }
    loadFormation(id) {
        this.condidatService.getFormation(id).subscribe({
            next: (formation) => {
                this.formation = formation;
                this.loading = false;
                console.log(this.formation);
                this.initCountdown();
            },
            error: (err) => {
                this.error = err?.message || 'Failed to load formation.';
                this.loading = false;
            }
        });
    }
    getFileIcon(type) {
        switch (type.toLowerCase()) {
            case 'pdf':
                return '/assets/icons/pdf.svg';
            case 'image':
                return 'fas fa-image';
            case 'video':
                return 'fas fa-video';
            case 'document':
                return 'fas fa-file-word';
            default:
                return 'fas fa-file';
        }
    }
    getFileIconColor(type) {
        switch (type.toLowerCase()) {
            case 'pdf':
                return 'text-red-500';
            case 'image':
                return 'text-blue-500';
            case 'video':
                return 'text-green-500';
            case 'document':
                return 'text-yellow-500';
            default:
                return 'text-gray-500';
        }
    }
    ngOnDestroy() {
        this.timerSub?.unsubscribe();
    }
    formatDuration(ms) {
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);
        const parts = [];
        if (days)
            parts.push(`${days}d`);
        if (hours)
            parts.push(`${hours}h`);
        if (minutes)
            parts.push(`${minutes}m`);
        parts.push(`${seconds}s`);
        return parts.join(' ');
    }
    initCountdown() {
        if (!this.formation?.sessions?.length)
            return;
        const session = this.formation.sessions[this.formation.sessions.length - 1];
        this.timerSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(1000).subscribe(() => {
            const now = new Date();
            const start = new Date(session.startDate);
            const end = new Date(session.endDate);
            let diffMs;
            if (now < start) {
                this.countdownState = 'upcoming';
                diffMs = start.getTime() - now.getTime();
            }
            else if (now >= start && now <= end) {
                this.countdownState = 'ongoing';
                diffMs = end.getTime() - now.getTime();
            }
            else {
                this.countdownState = 'finished';
                this.countdownText = '';
                this.timerSub?.unsubscribe();
                return;
            }
            this.countdownText = this.formatDuration(diffMs);
        });
    }
    /**
     * Vérifie si l'utilisateur peut passer le quiz pour une session donnée
     * en fonction des dates et de l'état de la session
     * @param session La session à vérifier
     * @returns true si l'utilisateur peut passer le quiz, false sinon
     */
    canTakeQuiz(session) {
        // Vérifier si l'utilisateur a le droit de repasser le quiz (selon les règles métier)
        if (!session.canRepass) {
            return false;
        }
        // Vérifier si la date actuelle est dans la période de la session
        const now = new Date();
        const start = new Date(session.startDate);
        const end = new Date(session.endDate);
        // L'utilisateur peut passer le quiz si la date actuelle est entre la date de début et la date de fin
        return now >= start && now <= end;
    }
    /**
     * Obtient le message d'état de la session en fonction des dates
     * @param session La session à vérifier
     * @returns Un message décrivant l'état de la session
     */
    getSessionStatusMessage(session) {
        const now = new Date();
        const start = new Date(session.startDate);
        const end = new Date(session.endDate);
        if (now < start) {
            return "La session n'a pas encore commencé";
        }
        else if (now > end) {
            return "La session est terminée";
        }
        else {
            return "La session est en cours";
        }
    }
    /**
     * Détermine la classe CSS à appliquer en fonction de l'état de la session
     * @param session La session à vérifier
     * @returns Une classe CSS pour le style du message d'état
     */
    getSessionStatusClass(session) {
        const now = new Date();
        const start = new Date(session.startDate);
        const end = new Date(session.endDate);
        if (now < start) {
            return "text-blue-600";
        }
        else if (now > end) {
            return "text-red-600";
        }
        else {
            return "text-green-600";
        }
    }
}
FormationDetailsComponent.ɵfac = function FormationDetailsComponent_Factory(t) { return new (t || FormationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_condidat_service__WEBPACK_IMPORTED_MODULE_0__.CondidatService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
FormationDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormationDetailsComponent, selectors: [["app-formation-details"]], decls: 5, vars: 4, consts: [[1, "min-h-screen", "bg-gray-50", "p-8", "relative"], ["class", "fixed top-6 right-6 text-white p-4 rounded-full shadow-md flex items-center space-x-3 animate-fade-in duration-700", 3, "ngClass", 4, "ngIf"], ["class", "flex justify-center items-center h-screen", 4, "ngIf"], ["class", "p-4 max-w-4xl mx-auto", 4, "ngIf"], ["class", "max-w-4xl  space-y-8", 4, "ngIf"], [1, "fixed", "top-6", "right-6", "text-white", "p-4", "rounded-full", "shadow-md", "flex", "items-center", "space-x-3", "animate-fade-in", "duration-700", 3, "ngClass"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-6", "h-6", "animate-pulse"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "font-medium"], [1, "flex", "justify-center", "items-center", "h-screen"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-t-2", "border-b-2", "border-blue-500"], [1, "p-4", "max-w-4xl", "mx-auto"], ["role", "alert", 1, "bg-red-100", "border", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative"], [1, "font-bold"], [1, "block", "sm:inline"], [1, "max-w-4xl", "space-y-8"], [1, "bg-white", "rounded-lg", "shadow-md", "p-6"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "flex", "items-center", "gap-2"], [1, "text-gray-500", "font-medium", "text-lg"], [1, "text-xl", "font-extrabold", "text-gray-700", "inline", "uppercase"], [1, "px-4", "py-1", "bg-blue-100", "text-blue-800", "rounded-full", "text-sm"], [1, "mb-4"], [1, "text-gray-500", "font-medium", "text-md"], [1, "text-gray-600", "text-base", "inline"], [1, "prose", "max-w-none", "inline", "text-gray-600", "text-base", 3, "innerHTML"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-4"], [1, "space-y-3"], ["class", "p-3 border rounded-lg hover:bg-gray-50", 4, "ngFor", "ngForOf"], ["class", "flex", 4, "ngIf"], [1, "space-y-6"], ["class", "bg-white rounded-lg shadow-md p-6", 4, "ngFor", "ngForOf"], ["class", "bg-white rounded-lg shadow-md p-6", 4, "ngIf"], [1, "p-3", "border", "rounded-lg", "hover:bg-gray-50"], [1, "flex", "justify-between", "items-center"], [1, "font-semibold", "text-lg", "text-gray-900"], [1, "text-sm", "text-gray-600"], [1, "text-xs", "font-medium", 3, "ngClass"], ["class", "mt-2", 4, "ngIf"], ["class", "px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-medium flex items-center transition-colors cursor-pointer gap-2", 3, "routerLink", 4, "ngIf"], ["class", "px-4 py-2 bg-gray-200 text-gray-700 rounded-xl text-sm font-medium flex items-center", 4, "ngIf"], ["class", "flex flex-col items-end", 4, "ngIf"], [1, "mt-2"], ["class", "flex items-center text-green-600", 4, "ngIf"], ["class", "flex items-center text-red-600", 4, "ngIf"], [1, "flex", "items-center", "text-green-600"], [1, "fas", "fa-check-circle", "mr-2"], [1, "font-medium"], [1, "flex", "items-center", "text-red-600"], [1, "fas", "fa-times-circle", "mr-2"], [1, "px-4", "py-2", "bg-green-500", "hover:bg-green-600", "text-white", "rounded-xl", "text-sm", "font-medium", "flex", "items-center", "transition-colors", "cursor-pointer", "gap-2", 3, "routerLink"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14 5l7 7m0 0l-7 7m7-7H3"], [1, "px-4", "py-2", "bg-gray-200", "text-gray-700", "rounded-xl", "text-sm", "font-medium", "flex", "items-center"], [1, "fas", "fa-clock", "mr-2"], [1, "flex", "flex-col", "items-end"], ["class", "px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center", 4, "ngIf"], ["class", "px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm flex items-center", 4, "ngIf"], ["class", "px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm", 4, "ngIf"], [1, "px-3", "py-1", "bg-green-100", "text-green-800", "rounded-full", "text-sm", "flex", "items-center"], [1, "fas", "fa-trophy", "mr-1"], [1, "px-3", "py-1", "bg-red-100", "text-red-800", "rounded-full", "text-sm", "flex", "items-center"], [1, "fas", "fa-exclamation-circle", "mr-1"], [1, "px-3", "py-1", "bg-gray-100", "text-gray-800", "rounded-full", "text-sm"], [1, "flex"], [1, "nosession-group", "w-full", "relative", "group", "border", "rounded-lg", "p-4", "bg-red-200/20", "transition-colors"], [1, "flex", "items-center", "space-x-3"], ["src", "/assets/icons/nofile.svg", "alt", "File Icon", 1, "w-14"], [1, "font-medium", "text-gray-700", "truncate", "!mb-0"], [1, "text-sm", "text-gray-500", "truncate", "!mb-0"], [1, "flex", "justify-between", "mb-4"], [1, "text-2xl", "font-bold", "text-gray-600", "!mb-0"], [1, "text-gray-500", "font-bold", "text-xs"], [1, "text-gray-500", "text-lg", "font-medium", "!mb-0"], [1, "w-full", "h-[1px]", "bg-gray-200", "rounded-full", "my-4"], [1, "mt-4"], [1, "font-semibold", "text-lg", "text-gray-900", "mb-3"], ["class", "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "gap-4"], ["target", "_blank", "class", "group border rounded-lg p-4 bg-secondary hover:border-blue-500 transition-colors", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "group", "border", "rounded-lg", "p-4", "bg-secondary", "hover:border-blue-500", "transition-colors", 3, "href"], ["alt", "File Icon", 1, "w-14", 3, "src"], [1, "font-medium", "text-gray-700", "group-hover:text-blue-600", "truncate", "!mb-0"], [1, "group", "border", "rounded-lg", "p-4", "bg-red-200/20", "hover:border-blue-500", "transition-colors", "cursor-none"], [1, "w-full", "relative", "group", "border", "rounded-lg", "p-4", "bg-red-200/20", "transition-colors"]], template: function FormationDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormationDetailsComponent_div_1_Template, 5, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormationDetailsComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FormationDetailsComponent_div_3_Template, 6, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FormationDetailsComponent_div_4_Template, 28, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.countdownState !== "finished" && !ctx.loading && ctx.formation && ctx.countdownText !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formation && !ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2922:
/*!***********************************************************************!*\
  !*** ./src/app/condidat/formation/formations/formations.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormationsComponent": () => (/* binding */ FormationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_condidat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/condidat.service */ 1851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_condidat_formation_card_condidat_formation_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/condidat-formation-card/condidat-formation-card.component */ 4959);




function FormationsComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 11);
} }
function FormationsComponent__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "circle", 13)(2, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormationsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "app-condidat-formation-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("viewDetails", function FormationsComponent_div_11_Template_app_condidat_formation_card_viewDetails_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onViewDetails($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const formation_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formation", formation_r4);
} }
function FormationsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Aucune formation ne correspond \u00E0 votre recherche.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class FormationsComponent {
    constructor(condidatFormationService) {
        this.condidatFormationService = condidatFormationService;
        this.formations = [];
        this.isLoading = false;
    }
    onViewDetails(formationId) {
        console.log('View details for formation ID:', formationId);
        // Navigate or perform action
    }
    ngOnInit() {
        this.fetchFormations();
    }
    fetchFormations() {
        this.isLoading = true;
        this.condidatFormationService.getFormations().subscribe({
            next: (response) => {
                this.formations = response;
                this.isLoading = false;
                console.log(this.formations);
            },
            error: (error) => {
                console.error('Error fetching formations:', error);
                this.isLoading = false;
            }
        });
    }
}
FormationsComponent.ɵfac = function FormationsComponent_Factory(t) { return new (t || FormationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_condidat_service__WEBPACK_IMPORTED_MODULE_0__.CondidatService)); };
FormationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormationsComponent, selectors: [["app-formations"]], decls: 13, vars: 6, consts: [[1, "animate-fade-in", "container", "mx-auto", "p-6"], [1, "flex", "justify-between", "items-center", "mb-8"], [1, "text-3xl", "font-bold", "text-gray-800"], [1, "flex", "gap-3"], [1, "px-4", "py-2", "bg-gray-100", "text-gray-700", "rounded-lg", "shadow-sm", "text-sm", "font-medium", "hover:bg-gray-200", "transition-colors", "flex", "items-center", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled", "click"], ["class", "fa-solid fa-rotate-right mr-2", 4, "ngIf"], ["class", "animate-spin h-4 w-4 mr-2", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "space-y-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "col-span-1", 4, "ngFor", "ngForOf"], ["class", "text-center py-10", 4, "ngIf"], [1, "fa-solid", "fa-rotate-right", "mr-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4", "mr-2"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "col-span-1"], [3, "formation", "viewDetails"], [1, "text-center", "py-10"], [1, "text-gray-500", "text-lg"]], template: function FormationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Gestion des formations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormationsComponent_Template_button_click_5_listener() { return ctx.fetchFormations(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, FormationsComponent_i_6_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FormationsComponent__svg_svg_7_Template, 3, 0, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, FormationsComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FormationsComponent_div_12_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Actualisation..." : "Actualiser", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.formations);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formations.length === 0 && !ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _components_condidat_formation_card_condidat_formation_card_component__WEBPACK_IMPORTED_MODULE_1__.CondidatFormationCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8092:
/*!*************************************************!*\
  !*** ./src/app/condidat/home/home.component.ts ***!
  \*************************************************/
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

/***/ 650:
/*!*******************************************************************!*\
  !*** ./src/app/condidat/notifications/notifications.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var src_app_core_models_notification_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/notification.model */ 4991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/notification.service */ 1645);
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toaster.service */ 9140);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);







function NotificationsComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationsComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.markAllAsRead()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Tout marquer comme lu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NotificationsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NotificationsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Erreur!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.error);
} }
function NotificationsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Aucune notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Vous n'avez pas encore re\u00E7u de notifications.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
function NotificationsComponent_div_9_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 34);
} }
function NotificationsComponent_div_9_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Voir plus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NotificationsComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationsComponent_div_9_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const notification_r8 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.handleNotificationClick(notification_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 26)(5, "div", 27)(6, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NotificationsComponent_div_9_div_1_div_8_Template, 1, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 31)(12, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, NotificationsComponent_div_9_div_1_div_14_Template, 3, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const notification_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r7.getNotificationTypeClass(notification_r8.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r7.getNotificationIconClass(notification_r8.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notification_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !notification_r8.received);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notification_r8.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.getTimeAgo(notification_r8.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", notification_r8.actionUrl);
} }
function NotificationsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NotificationsComponent_div_9_div_1_Template, 15, 7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.notifications);
} }
class NotificationsComponent {
    constructor(notificationService, toaster, router) {
        this.notificationService = notificationService;
        this.toaster = toaster;
        this.router = router;
        this.notifications = [];
        this.isLoading = true;
        this.error = null;
        this.notificationType = src_app_core_models_notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationType;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    }
    ngOnInit() {
        // Indiquer au service que l'utilisateur est sur la page de notifications
        this.notificationService.enterNotificationsPage();
        // S'abonner aux notifications
        this.subscription.add(this.notificationService.notifications$.subscribe({
            next: (notifications) => {
                this.notifications = notifications;
                this.isLoading = false;
            },
            error: (err) => {
                this.error = err?.error?.message || 'Erreur lors du chargement des notifications';
                this.isLoading = false;
                this.toaster.showError('Erreur', 'Impossible de charger les notifications');
            }
        }));
    }
    ngOnDestroy() {
        // Indiquer au service que l'utilisateur quitte la page de notifications
        this.notificationService.exitNotificationsPage();
        // Se désabonner pour éviter les fuites de mémoire
        this.subscription.unsubscribe();
    }
    // marque toutes les notifications comme lues
    markAllAsRead() {
        this.notificationService.markAllAsRead()
            .subscribe({
            next: () => {
                this.notifications.forEach(notification => {
                    notification.received = true;
                });
                this.toaster.showInfo('Toutes les notifications ont été marquées comme lues', 'Succès');
            },
            error: (err) => {
                this.toaster.showError('Erreur', 'Impossible de marquer toutes les notifications comme lues');
            }
        });
    }
    // si la notification a une actionUrl on le navigue vers cette url
    handleNotificationClick(notification) {
        if (notification.actionUrl) {
            this.router.navigateByUrl(notification.actionUrl);
        }
    }
    // get le coulour de notification 
    getNotificationTypeClass(type) {
        switch (type) {
            case src_app_core_models_notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationType.Success:
                return 'bg-green-50 border-green-500';
            case src_app_core_models_notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationType.Warning:
                return 'bg-yellow-50 border-yellow-500';
            case src_app_core_models_notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationType.Danger:
                return 'bg-red-50 border-red-500';
            case src_app_core_models_notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationType.Info:
            default:
                return 'bg-blue-50 border-blue-500';
        }
    }
    // get l'icon de notification selon to type du notification 
    getNotificationIconClass(type) {
        switch (type) {
            case src_app_core_models_notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationType.Success:
                return 'text-green-500 fas fa-check-circle';
            case src_app_core_models_notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationType.Warning:
                return 'text-yellow-500 fas fa-exclamation-triangle';
            case src_app_core_models_notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationType.Danger:
                return 'text-red-500 fas fa-times-circle';
            case src_app_core_models_notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationType.Info:
            default:
                return 'text-blue-500 fas fa-info-circle';
        }
    }
    // juste pour formater la date exemple 'Il y a quelques secondes'  ou "Il y a minutes"
    getTimeAgo(date) {
        const now = new Date();
        const notificationDate = new Date(date);
        const diffInSeconds = Math.floor((now.getTime() - notificationDate.getTime()) / 1000);
        if (diffInSeconds < 60) {
            return 'Il y a quelques secondes';
        }
        else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
        }
        else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
        }
        else {
            const days = Math.floor(diffInSeconds / 86400);
            return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
        }
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
NotificationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 10, vars: 5, consts: [[1, "min-h-screen", "bg-gray-50", "p-8"], [1, "max-w-4xl", "mx-auto"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-3xl", "font-bold", "text-gray-800"], ["class", "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors", 3, "click", 4, "ngIf"], ["class", "flex justify-center items-center h-64", 4, "ngIf"], ["class", "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative", "role", "alert", 4, "ngIf"], ["class", "bg-white rounded-lg shadow-md p-8 text-center", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "px-4", "py-2", "bg-blue-600", "text-white", "rounded-lg", "hover:bg-blue-700", "transition-colors", 3, "click"], [1, "flex", "justify-center", "items-center", "h-64"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-t-2", "border-b-2", "border-blue-500"], ["role", "alert", 1, "bg-red-100", "border", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative"], [1, "font-bold"], [1, "block", "sm:inline"], [1, "bg-white", "rounded-lg", "shadow-md", "p-8", "text-center"], [1, "flex", "flex-col", "items-center"], [1, "fas", "fa-bell-slash", "text-gray-400", "mb-4", 2, "font-size", "4rem"], [1, "text-xl", "font-semibold", "text-gray-700", "mb-2"], [1, "text-gray-500"], [1, "space-y-4"], ["class", "rounded-lg shadow-md p-5 transition-all hover:shadow-lg border-l-4 cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "rounded-lg", "shadow-md", "p-5", "transition-all", "hover:shadow-lg", "border-l-4", "cursor-pointer", 3, "ngClass", "click"], [1, "flex"], [1, "flex-shrink-0", "mr-4"], [2, "font-size", "1.5rem", 3, "ngClass"], [1, "flex-1"], [1, "flex", "items-center", "mb-1"], [1, "font-semibold", "text-lg", "text-gray-800", "!mb-0", "flex-1"], ["class", "ml-2 h-2 w-2 bg-blue-500 rounded-full", 4, "ngIf"], [1, "text-gray-600", "mb-2"], [1, "flex", "justify-between", "items-center"], [1, "text-sm", "text-gray-500"], ["class", "text-sm text-blue-600", 4, "ngIf"], [1, "ml-2", "h-2", "w-2", "bg-blue-500", "rounded-full"], [1, "text-sm", "text-blue-600"], [1, "fas", "fa-arrow-right", "mr-1"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Mes Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NotificationsComponent_button_5_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NotificationsComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NotificationsComponent_div_7_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NotificationsComponent_div_8_Template, 7, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, NotificationsComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.notifications.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.notifications.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.notifications.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9547:
/*!****************************************************************************!*\
  !*** ./src/app/condidat/quiz/quiz-validation/quiz-validation.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizValidationComponent": () => (/* binding */ QuizValidationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_condidat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/condidat.service */ 1851);
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toaster.service */ 9140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);






function QuizValidationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QuizValidationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "strong", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Erreur!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10)(7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizValidationComponent_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.goBack()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Retour aux formations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.error);
} }
function QuizValidationComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 23)(7, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Vous \u00EAtes \u00E9ligible pour passer ce test. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Vous \u00EAtes sur le point de commencer le test pour cette session de formation. Veuillez vous assurer que vous \u00EAtes pr\u00EAt et que vous disposez du temps n\u00E9cessaire pour terminer le test. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 26)(12, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Informations importantes :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul", 28)(15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Assurez-vous d'avoir une connexion internet stable");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Ne rafra\u00EEchissez pas la page pendant le test");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "R\u00E9pondez \u00E0 toutes les questions avant de soumettre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Une fois le test commenc\u00E9, vous devez le terminer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 29)(24, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizValidationComponent_div_3_div_6_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.goBack()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizValidationComponent_div_3_div_6_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.startQuiz()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Commencer le test ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
function QuizValidationComponent_div_3_div_7_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(R\u00E9ussi)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QuizValidationComponent_div_3_div_7_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(\u00C9chou\u00E9)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "text-green-600": a0, "text-red-600": a1 }; };
function QuizValidationComponent_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 34)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 23)(7, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Vous avez d\u00E9j\u00E0 pass\u00E9 ce test et ne pouvez pas le repasser pour le moment. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 38)(10, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "R\u00E9sultat de votre derni\u00E8re tentative :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 40)(13, "div")(14, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Date de passage :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div")(19, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Score obtenu :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, QuizValidationComponent_div_3_div_7_span_23_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, QuizValidationComponent_div_3_div_7_span_24_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Vous devez attendre la prochaine session pour pouvoir repasser ce test. Veuillez contacter votre formateur pour plus d'informations. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 29)(28, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizValidationComponent_div_3_div_7_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.goBack()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Retour aux formations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.formatDate(ctx_r6.previousAttempt.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, ctx_r6.previousAttempt.score >= 70, ctx_r6.previousAttempt.score < 70));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.previousAttempt.score, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.previousAttempt.score >= 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.previousAttempt.score < 70);
} }
function QuizValidationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Validation du Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, QuizValidationComponent_div_3_div_6_Template, 30, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, QuizValidationComponent_div_3_div_7_Template, 30, 8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r2.formationTitle, " - ", ctx_r2.sessionTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.canTakeQuiz);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.canTakeQuiz && ctx_r2.previousAttempt);
} }
class QuizValidationComponent {
    constructor(route, router, condidatService, toaster) {
        this.route = route;
        this.router = router;
        this.condidatService = condidatService;
        this.toaster = toaster;
        this.isLoading = true;
        this.error = null;
        this.canTakeQuiz = false;
        this.previousAttempt = null;
        this.formationTitle = '';
        this.sessionTitle = '';
    }
    ngOnInit() {
        this.sessionId = Number(this.route.snapshot.paramMap.get('sessionId'));
        if (!this.sessionId) {
            this.error = 'ID de session invalide';
            this.isLoading = false;
            return;
        }
        this.checkQuizEligibility();
    }
    checkQuizEligibility() {
        this.isLoading = true;
        this.error = null;
        this.condidatService.checkQuizEligibility(this.sessionId)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            this.error = err?.error?.message || 'Erreur lors de la vérification de l\'éligibilité au quiz';
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => {
            this.isLoading = false;
        }))
            .subscribe(response => {
            if (!response)
                return;
            this.canTakeQuiz = response.canTakeQuiz;
            this.quizId = response.quizId;
            this.previousAttempt = response.previousAttempt;
            this.formationTitle = response.formationTitle || '';
            this.sessionTitle = response.sessionTitle || '';
        });
    }
    startQuiz() {
        if (!this.canTakeQuiz) {
            this.toaster.showInfo('Vous ne pouvez pas passer ce test pour le moment.', 'Information');
            return;
        }
        this.router.navigate(['/condidat/quiz', this.quizId, this.sessionId]);
    }
    goBack() {
        this.router.navigate(['/condidat/formations']);
    }
    formatDate(dateString) {
        if (!dateString)
            return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}
QuizValidationComponent.ɵfac = function QuizValidationComponent_Factory(t) { return new (t || QuizValidationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_condidat_service__WEBPACK_IMPORTED_MODULE_0__.CondidatService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__.ToasterService)); };
QuizValidationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QuizValidationComponent, selectors: [["app-quiz-validation"]], decls: 4, vars: 3, consts: [[1, "min-h-screen", "bg-gray-50", "p-8"], ["class", "flex justify-center items-center h-64", 4, "ngIf"], ["class", "p-4 max-w-4xl mx-auto", 4, "ngIf"], ["class", "max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "h-64"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-t-2", "border-b-2", "border-blue-500"], [1, "p-4", "max-w-4xl", "mx-auto"], ["role", "alert", 1, "bg-red-100", "border", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative"], [1, "font-bold"], [1, "block", "sm:inline"], [1, "mt-4", "flex", "justify-center"], [1, "px-4", "py-2", "bg-gray-200", "text-gray-700", "rounded", "hover:bg-gray-300", 3, "click"], [1, "max-w-4xl", "mx-auto", "bg-white", "rounded-lg", "shadow-md", "overflow-hidden"], [1, "bg-gradient-to-r", "from-blue-500", "to-indigo-600", "px-6", "py-4"], [1, "text-2xl", "font-bold", "text-white"], [1, "text-blue-100"], ["class", "p-6", 4, "ngIf"], [1, "p-6"], [1, "bg-green-50", "border-l-4", "border-green-500", "p-4", "mb-6"], [1, "flex"], [1, "flex-shrink-0"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "h-5", "w-5", "text-green-500"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule", "evenodd"], [1, "ml-3"], [1, "text-sm", "text-green-700"], [1, "text-gray-600", "mb-6"], [1, "bg-gray-50", "p-4", "rounded-lg", "mb-6"], [1, "font-medium", "text-gray-900", "mb-2"], [1, "list-disc", "pl-5", "text-gray-600", "space-y-1"], [1, "flex", "justify-end"], [1, "px-4", "py-2", "bg-gray-200", "text-gray-700", "rounded", "mr-3", "hover:bg-gray-300", 3, "click"], [1, "px-6", "py-2", "bg-green-600", "text-white", "rounded", "hover:bg-green-700", "flex", "items-center", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14 5l7 7m0 0l-7 7m7-7H3"], [1, "bg-yellow-50", "border-l-4", "border-yellow-500", "p-4", "mb-6"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "h-5", "w-5", "text-yellow-500"], ["fill-rule", "evenodd", "d", "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "text-sm", "text-yellow-700"], [1, "bg-white", "border", "border-gray-200", "rounded-lg", "p-5", "mb-6"], [1, "font-medium", "text-gray-900", "mb-4"], [1, "grid", "grid-cols-2", "gap-4", "text-sm"], [1, "text-gray-500"], [1, "font-medium"], [1, "font-medium", 3, "ngClass"], [4, "ngIf"], [1, "px-4", "py-2", "bg-blue-600", "text-white", "rounded", "hover:bg-blue-700", 3, "click"]], template: function QuizValidationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuizValidationComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QuizValidationComponent_div_2_Template, 9, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QuizValidationComponent_div_3_Template, 8, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWl6LXZhbGlkYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4991:
/*!***************************************************!*\
  !*** ./src/app/core/models/notification.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationType": () => (/* binding */ NotificationType)
/* harmony export */ });
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Info"] = 0] = "Info";
    NotificationType[NotificationType["Success"] = 1] = "Success";
    NotificationType[NotificationType["Warning"] = 2] = "Warning";
    NotificationType[NotificationType["Danger"] = 3] = "Danger";
})(NotificationType || (NotificationType = {}));


/***/ }),

/***/ 1112:
/*!********************************************************!*\
  !*** ./src/app/core/services/certification.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificationService": () => (/* binding */ CertificationService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class CertificationService {
    constructor(http) {
        this.http = http;
        this.apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/certification`;
    }
    getCertifications() {
        return this.http.get(this.apiUrl);
    }
    getUserCertifications() {
        return this.http.get(this.apiUrl + '/user');
    }
    getCertificationById(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
}
CertificationService.ɵfac = function CertificationService_Factory(t) { return new (t || CertificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CertificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CertificationService, factory: CertificationService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_condidat_condidat_module_ts.js.map