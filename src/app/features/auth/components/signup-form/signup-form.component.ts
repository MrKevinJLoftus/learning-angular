import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initialize form group.
   */
  initForm(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordTwo: ['', Validators.required]
    });
  }

  /**
   * Send username/password to API for signing up.
   */
  submitLogin(): void {
    if (this.signupForm.valid) {
      // call auth service signup
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
