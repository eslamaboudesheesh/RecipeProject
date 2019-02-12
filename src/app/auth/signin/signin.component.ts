import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authServe: AuthService ) { }

  ngOnInit() {
  }

  onSign( form: NgForm) {
    const email = form.value.email;
    const password = form.value.pwd;
    this.authServe.singinUser(email , password);
  }

}
