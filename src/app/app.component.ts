import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'Rescipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBW-WALHiks1MqnRLN6JQtjtnZOO_9maHo',
      authDomain: 'ng-recipe-book-46131.firebaseapp.com',
    });
  }
  onNavigate(feature: string) {
 this.loadedFeature = feature;
  }
}
