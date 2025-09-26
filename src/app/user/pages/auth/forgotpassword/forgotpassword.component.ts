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
  loading = false;

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

  code: number | null = null;
  isEmailValid: boolean = true
  isError: boolean = false
  isCodeValid: boolean = true

  constructor(private router: Router, private authService: AuthService) { }

  async sendCode() {
    if (this.emailForm.valid) {
      this.loading = true

      try{
        this.code = await this.authService.forgotPassword(this.emailForm.value.email!)
        this.step = 'code';
      }
      catch(ex){
        console.log(ex)
        this.isError = true
      }
      finally{
        this.loading = false
      }
    }
  }

  confirmCode() {
    if (this.codeForm.valid) {
      this.loading = true
      if (this.code === Number(this.codeForm.value.code)) {
        this.step = 'password'
        this.isCodeValid = true
      }
      else {
        this.isCodeValid = false
      }
      this.loading = false
    }
  }

  async setNewPassword() {
    if (this.newPassForm.valid) {
      this.loading = true

      await this.authService.AddOrUpdateTrainee(this.emailForm.value.email!, this.newPassForm.value.password!, '')
      try {
        await this.authService.login(this.emailForm.value.email!, this.newPassForm.value.password!);
        this.router.navigate(['/user/personal-account']);
      } catch (err: any) {
        console.error('Ошибка входа', err);
        alert("ошибка входа")
      }
      finally{
        this.loading = false
      }
    }
  }
}
