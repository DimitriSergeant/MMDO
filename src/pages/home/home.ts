import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface detailsResult {
  title : string;
  author : string;
  date : number;
  image : string;
}

const Result: Array<detailsResult> = [];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  listres: Array<detailsResult> = Result;
  query : string = '';
  show_no_result : boolean = false;
  constructor(public navCtrl: NavController) {

  }

  onInput():void{
    console.log(this.query);
    if(this.query ==''){
      this.show_no_result = true;
      this.listres = [];
    }else{
      this.show_no_result = false;
      this.listres = Result;
    }

  }

}
