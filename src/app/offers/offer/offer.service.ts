import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Offer} from './offer.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public getOffers() {
    return this.httpClient.get<{ [key: number]: Offer }>(this.apiUrl + 'offers')
      .pipe(
        map(responseData => {
          const offersMap = new Map();
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              offersMap.set(responseData[key].id, responseData[key]);
            }
          }
          return offersMap;
        })
      );
  }
}
