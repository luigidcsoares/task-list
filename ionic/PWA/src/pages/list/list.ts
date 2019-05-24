import { Component } from '@angular/core';

import { NavController, NavParams, FabButton, ItemSliding } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{name: string, date: Date, checked: Boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
  }


  itemTapped(event, item) {
    const items = this.items
    const func = function(item: {name: string, date: Date, checked: Boolean}) {
      items.push(item)
    }
  
    this.navCtrl.push(ItemDetailsPage, {
      onComplete: func
    });
  }
}
