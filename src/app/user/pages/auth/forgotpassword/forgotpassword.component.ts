import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../../../core/validators/password-match.validator';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  step: 'email' | 'code' | 'password' = 'email'; // текущий шаг формы

  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  codeForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  newPassForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConiform: new FormControl('', [Validators.required, Validators.minLength(8)])
  }, { validators: passwordMatchValidator })

  constructor(private router: Router, private authService: AuthService) { }

  sendCode() {
    if (this.emailForm.valid) {
      console.log('Send code to:', this.emailForm.value.email);
      this.step = 'code';
    }
  }

  confirmCode() {
    if (this.codeForm.valid) {
      console.log('Code confirmed:', this.codeForm.value.code);
      this.step = 'password'
    }
  }

  setNewPassword() {
    if (this.newPassForm.valid) {
      try {
        this.authService.login(this.emailForm.value.email!, this.newPassForm.value.password!);
        this.router.navigate(['/user/personal-account']);
      } catch (err: any) {
        console.error('Ошибка входа', err);
        alert("ошибка входа")
      }
    }
  }
}
