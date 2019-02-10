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
  onSubmit( from: NgForm) {
    const email = from.value.email;
    const password = from.value.password;
    this.authServe.signupUser(email , password);
  }
}
