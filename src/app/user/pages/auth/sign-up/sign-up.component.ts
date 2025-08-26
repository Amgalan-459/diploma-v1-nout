import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../../../core/validators/password-match.validator';
import { AuthService } from '../../../../core/services/auth.service';
import { TraineeData } from '../../../../core/interfaces/trainee-data';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConiform: new FormControl('', [Validators.required])
  }, { validators: passwordMatchValidator });

  constructor(private router: Router, private authService: AuthService) {}

  async onSubmit() {
    if (this.form.valid) {
      console.log('Registration submitted!', this.form.value);
      let trainee: TraineeData = await this.authService.AddOrUpdateTrainee(this.form.value.email!,
        this.form.value.password!, this.form.value.name!)
      this.router.navigate(['/auth/login']);
    } else {
      console.log('Form is invalid.');
    }
  }
}
