import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      const user = { username, email, password };

      this.authService.register(user).subscribe({
        next: () => {
          this.router.navigate(['/auth/login']);
          this.toastr.success('User registered successfully!', 'Success');
        },
        error: (error) => {
          console.error(error);
          this.toastr.error('Registration failed. Please try again.', 'Error');
        },
      });
    } else {
      this.toastr.warning('Please fill in all fields correctly.', 'Warning');
    }
  }
  
}
