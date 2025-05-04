"use strict";
(self["webpackChunkformationApp"] = self["webpackChunkformationApp"] || []).push([["default-src_app_condidat_quiz_quiz-passing_quiz-passing_component_ts"],{

/***/ 1417:
/*!**********************************************************************!*\
  !*** ./src/app/condidat/quiz/quiz-passing/quiz-passing.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizPassingComponent": () => (/* binding */ QuizPassingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/quiz.service */ 6920);
/* harmony import */ var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toaster.service */ 9140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function QuizPassingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Loading your quiz...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QuizPassingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.error, "\n");
} }
function QuizPassingComponent_div_2_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizPassingComponent_div_2_li_14_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const answer_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.selectAnswer(answer_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx_r4.isAnswerSelected(ctx_r4.quiz.questions[ctx_r4.currentQuestionIndex].id, answer_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", answer_r5.text || "No answer text", " ");
} }
function QuizPassingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, QuizPassingComponent_div_2_li_14_Template, 2, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizPassingComponent_div_2_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.nextQuestion()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.quiz.title || "Untitled Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Created on: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 8, ctx_r2.quiz.createdAt, "dd MMM yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", (ctx_r2.currentQuestionIndex + 1) / ctx_r2.quiz.questions.length * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 11, (ctx_r2.currentQuestionIndex + 1) / ctx_r2.quiz.questions.length * 100, "1.0-0"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.quiz.questions[ctx_r2.currentQuestionIndex].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.quiz.questions[ctx_r2.currentQuestionIndex].answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.currentQuestionIndex === ctx_r2.quiz.questions.length - 1 ? "Finish" : "Next", " ");
} }
function QuizPassingComponent_div_3_div_13_li_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " (Correct)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QuizPassingComponent_div_3_div_13_li_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " (Your choice)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QuizPassingComponent_div_3_div_13_li_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " (Your choice)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QuizPassingComponent_div_3_div_13_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QuizPassingComponent_div_3_div_13_li_4_span_2_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QuizPassingComponent_div_3_div_13_li_4_span_3_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QuizPassingComponent_div_3_div_13_li_4_span_4_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r14 = ctx.$implicit;
    const q_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("correct", a_r14.isCorrect)("wrong", ctx_r13.isAnswerSelected(q_r11.id, a_r14.id) && !a_r14.isCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", a_r14.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", a_r14.isCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.isAnswerSelected(q_r11.id, a_r14.id) && !a_r14.isCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.isAnswerSelected(q_r11.id, a_r14.id) && a_r14.isCorrect);
} }
function QuizPassingComponent_div_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QuizPassingComponent_div_3_div_13_li_4_Template, 5, 8, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const q_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", i_r12 + 1, ". ", q_r11.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", q_r11.answers);
} }
const _c0 = function () { return ["../../"]; };
function QuizPassingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Quiz Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " You scored ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 14)(10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, QuizPassingComponent_div_3_div_13_Template, 5, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Back to Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r3.score, "/", ctx_r3.totalPossiblePoints, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 8, ctx_r3.score / ctx_r3.totalPossiblePoints * 100, "1.0-0"), "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r3.score / ctx_r3.totalPossiblePoints * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 11, ctx_r3.score / ctx_r3.totalPossiblePoints * 100, "1.0-0"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.quiz.questions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c0));
} }
class QuizPassingComponent {
    constructor(route, router, quizService, toaster) {
        this.route = route;
        this.router = router;
        this.quizService = quizService;
        this.toaster = toaster;
        this.isLoading = true;
        this.error = null;
        this.currentQuestionIndex = 0;
        this.selectedAnswers = {};
        this.isFinished = false;
        this.score = 0;
    }
    ngOnInit() {
        this.quizId = +this.route.snapshot.paramMap.get('quizId');
        this.sessionId = +this.route.snapshot.paramMap.get('sessionId');
        if (!this.quizId || !this.sessionId) {
            this.error = 'Paramètres invalides';
            return;
        }
        this.loadQuiz(this.quizId);
    }
    loadQuiz(id) {
        this.isLoading = true;
        this.error = null;
        this.quizService.getQuiz(id).subscribe({
            next: quiz => {
                this.quiz = quiz;
                this.isLoading = false;
            },
            error: err => {
                this.error = err?.error?.message || 'Failed to load quiz.';
                this.isLoading = false;
            }
        });
    }
    selectAnswer(answerId) {
        const question = this.quiz.questions[this.currentQuestionIndex];
        const qid = question.id;
        if (!this.selectedAnswers[qid]) {
            this.selectedAnswers[qid] = [];
        }
        if (question.answers.length > 2) {
            const index = this.selectedAnswers[qid].indexOf(answerId);
            if (index === -1) {
                this.selectedAnswers[qid].push(answerId);
            }
            else {
                this.selectedAnswers[qid].splice(index, 1);
            }
        }
        else {
            this.selectedAnswers[qid] = [answerId];
        }
    }
    nextQuestion() {
        const qid = this.quiz.questions[this.currentQuestionIndex].id;
        if (this.selectedAnswers[qid]?.length > 0) {
            if (this.currentQuestionIndex < this.quiz.questions.length - 1) {
                this.currentQuestionIndex++;
            }
            else {
                this.finishQuiz();
            }
        }
        else {
            this.toaster.showInfo('Please select at least one answer.', 'warning');
        }
    }
    finishQuiz() {
        this.isLoading = true;
        // Préparer les réponses au format attendu par l'API
        const formattedAnswers = Object.entries(this.selectedAnswers).map(([questionId, selectedAnswerIds]) => {
            return {
                questionId: parseInt(questionId),
                selectedAnswerId: selectedAnswerIds[0] // Pour simplifier, on prend la première réponse sélectionnée
            };
        });
        // Soumettre les réponses à l'API
        this.quizService.submitQuizAnswer(this.quizId, this.sessionId, formattedAnswers)
            .subscribe({
            next: (result) => {
                this.isLoading = false;
                this.isFinished = true;
                this.score = result.score * this.totalPossiblePoints / 100; // Convertir le pourcentage en points
                // Afficher un message de succès
                const message = result.passed
                    ? 'Félicitations ! Vous avez réussi le test.'
                    : 'Vous n\'avez pas obtenu le score minimum requis.';
                this.toaster.showInfo(message, 'Résultat du test');
            },
            error: (err) => {
                this.isLoading = false;
                this.error = err?.error?.message || 'Une erreur est survenue lors de la soumission du test.';
                this.toaster.showInfo('Erreur lors de la soumission du test', 'Erreur');
            }
        });
    }
    // Helper to check if an answer is selected
    isAnswerSelected(questionId, answerId) {
        return this.selectedAnswers[questionId]?.includes(answerId) || false;
    }
    // Getter for total possible points
    get totalPossiblePoints() {
        return this.quiz.questions.length * 10; // 10 points per question
    }
}
QuizPassingComponent.ɵfac = function QuizPassingComponent_Factory(t) { return new (t || QuizPassingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__.QuizService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__.ToasterService)); };
QuizPassingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QuizPassingComponent, selectors: [["app-quiz-passing"]], decls: 4, vars: 4, consts: [["class", "loading", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "quiz-details bg-gray-100 shadow-inner shadow-gray-200 rounded-2xl p-8 max-w-4xl m-auto mt-6", 4, "ngIf"], [1, "loading"], [1, "error"], [1, "quiz-details", "bg-gray-100", "shadow-inner", "shadow-gray-200", "rounded-2xl", "p-8", "max-w-4xl", "m-auto", "mt-6"], [1, "question"], [1, "!my-5", "w-full", "bg-gray-200", "rounded-full"], [1, "bg-primary", "text-xs", "font-medium", "text-blue-100", "text-center", "p-0.5", "leading-none", "rounded-full", "transition-colors"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-row", "justify-end", "w-full", "mt-8"], [1, "btn-next", "disabled:opacity-80", "bg-primary", "disabled:bg-primary/80", "rounded-lg", 3, "click"], [3, "click"], [1, "text-center", "text-xl", "font-medium", "mb-4"], [1, "!my-5", "w-full", "bg-gray-200", "rounded-full", "result-progress-bar", "mb-8"], [1, "bg-green-500", "text-xs", "font-medium", "text-white", "text-center", "p-0.5", "leading-none", "rounded-full", "transition-colors", "result-progress-bar__fill"], ["class", "question", 4, "ngFor", "ngForOf"], [1, "btn-next", "disabled:opacity-80", "bg-primary", "disabled:bg-primary/80", "rounded-lg", "mt-4", 3, "routerLink"], [1, "!my-5"], [3, "correct", "wrong", 4, "ngFor", "ngForOf"], ["class", "text-green-600 font-semibold", 4, "ngIf"], ["class", "text-red-600 font-semibold", 4, "ngIf"], [1, "text-green-600", "font-semibold"], [1, "text-red-600", "font-semibold"]], template: function QuizPassingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuizPassingComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuizPassingComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QuizPassingComponent_div_2_Template, 18, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QuizPassingComponent_div_3_Template, 16, 15, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.quiz && !ctx.isFinished);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.isFinished);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: [".loading[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #555;\n  text-align: center;\n  margin-top: 20px;\n}\n.error[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: red;\n  text-align: center;\n  margin-top: 20px;\n}\n.quiz-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-bottom: 10px;\n}\n.quiz-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #666;\n  margin-bottom: 20px;\n  font-style: italic;\n}\n.question[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.question[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-bottom: 5px;\n  color: #333;\n}\n.question[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  color: #444;\n}\n.question[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.question[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 12px 16px;\n  margin-bottom: 8px;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  transition: background-color 0.2s, border 0.2s;\n}\n.question[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #eef2f7;\n}\n.question[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: #e0f7fa;\n  border: 2px solid #26c6da;\n}\n.btn-next[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 20px;\n  font-size: 1em;\n  color: #fff;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.btn-next[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n\n.result-progress-bar[_ngcontent-%COMP%] {\n  height: 1rem;\n  background: #e5e7eb;\n  \n  border-radius: 9999px;\n  overflow: hidden;\n  margin: 0 auto;\n  max-width: 600px;\n}\n.result-progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #10b981;\n  \n  transition: width 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXotcGFzc2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFVSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQVBSO0FBVUk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFSUjtBQVlBO0VBQ0ksZ0JBQUE7QUFUSjtBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFUUjtBQVlJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBVlI7QUFhSTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQVhSO0FBY0k7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLDhDQUFBO0FBWlI7QUFjUTtFQUNJLHlCQUFBO0FBWlo7QUFlUTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFiWjtBQWtCQTtFQUNJLGNBQUE7RUFFQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBSUEsZUFBQTtFQUNBLGlDQUFBO0FBbkJKO0FBcUJJO0VBQ0kseUJBQUE7QUFuQlI7QUE0QkEsZ0NBQUE7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBMUJKO0FBNkJBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQTFCSjtBQTZCQSwrRUFBQSIsImZpbGUiOiJxdWl6LXBhc3NpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBxdWl6LXBhc3NpbmcuY29tcG9uZW50LnNjc3MgKi9cblxuLmxvYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6ICM1NTU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5lcnJvciB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucXVpei1kZXRhaWxzIHtcbiAgICAvLyBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIC8vIG1hcmdpbjogNDBweCBhdXRvO1xuICAgIC8vIHBhZGRpbmc6IDMwcHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC8vIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG59XG5cbi5xdWVzdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGJvcmRlciAwLjJzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmNztcbiAgICAgICAgfVxuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjdmYTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNmM2ZGE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idG4tbmV4dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcbiAgICAvLyBib3JkZXI6IG5vbmU7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NjNlYjtcbiAgICB9XG5cbiAgICAvLyAmOmRpc2FibGVkIHtcbiAgICAvLyAgICAgb3BhY2l0eTogMC42O1xuICAgIC8vICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIC8vIH1cbn1cblxuLyogcXVpei1wYXNzaW5nLmNvbXBvbmVudC5zY3NzICovXG5cbi5yZXN1bHQtcHJvZ3Jlc3MtYmFyIHtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgYmFja2dyb3VuZDogI2U1ZTdlYjtcbiAgICAvKiBncmF5LTIwMCAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi5yZXN1bHQtcHJvZ3Jlc3MtYmFyX19maWxsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwYjk4MTtcbiAgICAvKiBlbWVyYWxkLTUwMCAqL1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcbn1cblxuLyogcmV1c2UgZXhpc3RpbmcgLmNvcnJlY3QsIC53cm9uZywgLnF1aXotZGV0YWlscywgLnF1ZXN0aW9uLCAuYnRuLW5leHQsIGV0Yy4gKi8iXX0= */"] });


/***/ }),

/***/ 9140:
/*!**************************************************!*\
  !*** ./src/app/core/services/toaster.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToasterService": () => (/* binding */ ToasterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 4356);


class ToasterService {
    constructor(messageService) {
        this.messageService = messageService;
    }
    showSuccess(title, description) {
        this.messageService.add({ severity: 'success', summary: title, detail: description });
    }
    showError(title, description) {
        this.messageService.add({ severity: 'error', summary: title, detail: description });
    }
    showWarn(title, description) {
        this.messageService.add({ severity: 'warn', summary: title, detail: description });
    }
    showInfo(title, description) {
        this.messageService.add({ severity: 'info', summary: title, detail: description });
    }
    handleHttpError(error) {
        if (typeof error === 'string') {
            this.showError('Error', error);
        }
        else if (error?.message) {
            this.showError('Error', error.message);
        }
        else if (typeof error === 'object') {
            Object.keys(error).forEach(field => {
                const fieldErrors = error[field];
                if (Array.isArray(fieldErrors)) {
                    fieldErrors.forEach((msg) => {
                        this.showError(field, msg);
                    });
                }
            });
        }
        else {
            this.showError('Error', 'An unexpected error occurred.');
        }
    }
}
ToasterService.ɵfac = function ToasterService_Factory(t) { return new (t || ToasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService)); };
ToasterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToasterService, factory: ToasterService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_condidat_quiz_quiz-passing_quiz-passing_component_ts.js.map