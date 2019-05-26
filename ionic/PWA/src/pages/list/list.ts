import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Badge } from '@ionic-native/badge';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{name: string, date: Date, checked: Boolean}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private badge: Badge) {
    this.items = [];
    storage.get('items').then((vals) => {
      this.items = vals || [];
    });
    this.setBadges()
  }
  
  itemTapped(event, item) {
    const that = this; // pra não perder a referência dentro do callback
    const onComplete = function(item: {name: string, date: Date, checked: Boolean}) {
      console.log(that.items)
      that.items.push(item)
      that.saveItems(that.items)
      that.setBadges()
    }
  
    this.navCtrl.push(ItemDetailsPage, {
      onComplete: onComplete
    });
  }

  saveItems(items: Array<{name: string, date: Date, checked: Boolean}>) {
    this.storage.set('items', items);
  }

  setBadges() {
    this.badge.set(this.items.filter((item) => { return !item.checked }).length)
  }


  
}
