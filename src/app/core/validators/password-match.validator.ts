import { ValidationErrors, AbstractControl } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('passwordConiform')?.value;

  if (password && confirm && password !== confirm) {
    return { passwordMismatch: true };
  }
  return null;
}