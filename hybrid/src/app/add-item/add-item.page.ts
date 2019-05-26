import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  item: { name: string, date: Date, checked: boolean };

  // On complete function passed through service.
  onComplete: any;

  constructor(
    private router: Router,
    private dataService: DataService
  ) {
    this.item = {name: '', date: new Date(), checked: false };
    this.onComplete = dataService.onComplete;
  }

  ngOnInit() { }

  submit() {
    this.onComplete(this.item);
    this.router.navigate(['/home/']);
  }
}
