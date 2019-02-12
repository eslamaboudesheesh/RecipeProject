import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authServe: AuthService) { }

  ngOnInit() {
  }
  onSubmit( form: NgForm) {
    console.log(form.value);
    const email =  form.value.email;
    const password = form.value.pwd;
    this.authServe.signupUser(email , password);
  }
}
