import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../core/services/quiz.service';

@Component({
  selector: 'app-update-quizs',
  templateUrl: './update-quizs.component.html',
  styleUrls: ['./update-quizs.component.scss']
})
export class UpdateQuizsComponent implements OnInit {
  quizForm: FormGroup;
  isLoading = false;
  quizId!: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {
    this.quizForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      questions: this.fb.array([])
    });
    const quizID = this.route.snapshot.paramMap.get('id')
    if (quizID) {
      this.quizId = Number.parseInt(quizID);
    } else {
      this.router.navigate(['404'])
    }

  }

  ngOnInit(): void {
    this.loadQuiz();
  }

  loadQuiz(): void {
    this.isLoading = true;
    this.quizService.getQuiz(this.quizId).subscribe({
      next: (quiz) => {
        this.quizForm.patchValue(quiz);
        quiz.questions.forEach((question: any) => {
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

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  createQuestion(): FormGroup {
    return this.fb.group({
      points: [1, [Validators.required, Validators.min(1)]],
      order: [0],
      title: ['', [Validators.required, Validators.minLength(6)]],
      answers: this.fb.array([])
    });
  }

  createAnswer(): FormGroup {
    return this.fb.group({
      text: ['', Validators.required],
      isCorrect: [false]
    });
  }

  addQuestion(): void {
    this.questions.push(this.createQuestion());
  }

  removeQuestion(index: number): void {
    if (this.questions.length > 1) {
      this.questions.removeAt(index);
    }
  }

  getAnswers(questionIndex: number): FormArray {
    return this.questions.at(questionIndex).get('answers') as FormArray;
  }

  addAnswer(questionIndex: number): void {
    this.getAnswers(questionIndex).push(this.createAnswer());
  }

  removeAnswer(questionIndex: number, answerIndex: number): void {
    const answers = this.getAnswers(questionIndex);
    if (answers.length > 2) {
      answers.removeAt(answerIndex);
    }
  }

  onSubmit(): void {
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