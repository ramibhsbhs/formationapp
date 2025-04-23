import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../../../core/services/quiz.service';

@Component({
  selector: 'app-create-quizs',
  templateUrl: './create-quizs.component.html',
  styleUrls: ['./create-quizs.component.scss']
})
export class CreateQuizsComponent implements OnInit {
  quizForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private quizService: QuizService
  ) {
    this.quizForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      questions: this.fb.array([
        this.createQuestion()
      ])
    });
  }

  ngOnInit(): void { }

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  createQuestion(): FormGroup {
    return this.fb.group({
      points: [1, [Validators.required, Validators.min(1)]],
      order: [0],
      title: ["", [Validators.required, Validators.minLength(6)]],
      answers: this.fb.array([
        this.createAnswer(),
        this.createAnswer()
      ])
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
      this.quizService.createQuiz(this.quizForm.value).subscribe({
        next: (response) => {
          console.log('Quiz created successfully:', response);
          this.isLoading = false;
          this.router.navigate(['/admin/quizs'])
        },
        error: (error) => {
          console.error('Error creating quiz:', error);
          this.isLoading = false;
        }
      });
    } else {
    }


    console.log(
      this.quizForm.value
    )
  }

}
