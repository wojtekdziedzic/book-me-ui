import {Component, OnInit} from '@angular/core';
import {OfferService} from './offer.service';
import {Offer} from './offer.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  offers: Offer[] = [];

  constructor(
    private offersService: OfferService
  ) {
  }

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    this.offersService.getOffers()
      .subscribe(
        response => {
          this.offers = response;
        }
      );
  }
}
