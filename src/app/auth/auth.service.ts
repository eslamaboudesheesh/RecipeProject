import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private router: Router) { }
  signupUser(email: string | null , password: string | null ) {

     firebase.auth().createUserWithEmailAndPassword(email, password).then( res => console.log(res))
       .catch(
        error => console.log(error) );


     }
     singinUser(email: string | null , password: string | null ) {
       firebase.auth().signInWithEmailAndPassword(email , password)
       .then( res => {
         this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
        .then (
          (token: string) => {
            this.token = token;
          }
        );
        }  )
       .catch(
          error => console.log(error) );
     }

     getToken() {
       firebase.auth().currentUser.getIdToken().then (
        (token: string) => {
          this.token = token;
        }
      );
      return this.token;
     }

     isAuth() {
       return this.token != null;

     }
     logOut() {
      this.router.navigate(['/signin']);
       firebase.auth().signOut();
       this.token = null ;
     }
}

