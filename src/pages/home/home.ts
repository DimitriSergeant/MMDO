import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface Result {
  title : string;
  author : string;
  date : number;
  image : string;
}

const list: Array<Result> = [{
  title: "Seigneur", author: "Jackie", date: 2018, image: '<img src="http://lorempixel.com/400/200" />'
}];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
