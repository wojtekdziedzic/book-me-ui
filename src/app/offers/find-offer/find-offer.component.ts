import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-find-offer',
  templateUrl: './find-offer.component.html',
  styleUrls: ['./find-offer.component.scss']
})
export class FindOfferComponent implements OnInit {
  private serializedDate: FormControl;
  private date: FormControl;

  constructor() { }

  ngOnInit() {
      this.date = new FormControl(new Date());
      this.serializedDate = new FormControl((new Date()).toISOString());
  }

}
