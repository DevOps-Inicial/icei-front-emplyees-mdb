import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      console.log("Calling to login service");
      this.router.navigateByUrl('/home');
      this.loginForm.reset();
    }
    else {
      this.loginForm.markAllAsTouched();
      alert("Oops, something went wrong! ");
    }
  }
}
