import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'app';
  loadedFeature = 'recipe';
  onNavigate(feature: string) {

    this.loadedFeature = feature;

  }

  ngOnInit(): void {
    const config = {
      apiKey: 'AIzaSyCTP81MtzBhrAf1DvN1-G3q2ZXnA2KtYD0',
      authDomain: 'recipebook-eb578.firebaseapp.com'
    };
    firebase.initializeApp(config);
  }
}
