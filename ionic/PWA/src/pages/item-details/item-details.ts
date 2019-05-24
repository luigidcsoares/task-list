import { Component } from '@angular/core';

import { NavController, NavParams, Label, TextInput, DateTime, NavPop } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  item: {name: string, date: Date, checked: Boolean}
  onComplete: Function
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = {name: "", date: new Date(), checked: false }
    this.onComplete = navParams.get('onComplete')
  }

  submit() {
    this.onComplete(this.item)
    this.navCtrl.pop()
  }
}
