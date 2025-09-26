import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  errorMessage: string | null = null;
  loading = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

  }

  async onSubmit() {
    this.errorMessage = null;
    
    if (this.form.invalid) {
      this.errorMessage = 'Проверьте правильность заполнения формы';
      return;
    }

    this.loading = true;

    const { email, password } = this.form.value;

    try {
      await this.authService.login(email!, password!);
      this.router.navigate(['/user/personal-account']);
    } catch (err: any) {
      console.error('Ошибка входа', err);
      this.errorMessage = 'Неверный email или пароль';
    } finally {
      this.loading = false;
    }
  }
}
