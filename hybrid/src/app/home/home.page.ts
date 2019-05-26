import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Badge } from '@ionic-native/badge/ngx';
import { Storage } from '@ionic/storage';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: Array<{ name: string, date: Date, checked: boolean }>;

  // Function to add item when returning from add page.
  onComplete =
    (item: { name: string, date: Date, checked: boolean }) => {
      this.items.push(item);
      this.saveItems(this.items);
      this.setBadges();
    }

  constructor(
    private navCtrl: NavController,
    private badge: Badge,
    private storage: Storage,
    private dataService: DataService
  ) {
    this.items = [];

    // Get saved items.
    storage.get('items').then((items) => {
      this.items = items || [];
      console.log(items);
    });

    // Set badges to show number of open tasks.
    this.setBadges();

    // Set on complete function.
    this.dataService.onComplete = this.onComplete;
  }

  saveItems(
    items: Array<{ name: string, date: Date, checked: boolean }>
  ) {
    this.storage.set('items', items);
  }

  setBadges() {
    this.badge.set(
      this.items.filter((item) => !item.checked).length
    );
  }

  updateItems() {
    this.saveItems(this.items);
    console.log(this.items);
    this.setBadges();
  }
}
