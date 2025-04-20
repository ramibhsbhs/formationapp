import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  error = '';
  loginForm!: FormGroup;
  fb = inject(FormBuilder)
  router = inject(Router)
  auth = inject(AuthService)

  ngOnInit(): void {
    this.initForm()
  }


  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  async onSubmit() {
    this.error = '';
    this.isLoading = true;
    this.auth.login(this.loginForm.value).subscribe(
      (result) => {
        console.log(result);
        this.isLoading = false
        this.loginForm.reset()
      },
      (error) => {
        this.error = error.error;
        this.isLoading = false
      }
    )
  }

  setLogin(email: string, password: string) {
    this.loginForm.patchValue({
      email,
      password
    })
  }
}
