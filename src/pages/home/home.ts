import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface detailsResult {
  title : string;
  author : string;
  date : number;
  image : string;
}

const Result: Array<detailsResult> = [{
  title: "Seigneur", author: "Jackie", date: 2018, image: '<img src="http://lorempixel.com/400/200" />'
}, {
  title: "Des", author: "Jackie", date: 2018, image: '<img src="http://lorempixel.com/400/200" />'
}, {
  title: "Magneaux", author: "Jackie", date: 2018, image: '<img src="http://lorempixel.com/400/200" />'
}];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  listres = Result;
  name : string = '';
  constructor(public navCtrl: NavController) {

  }

}
