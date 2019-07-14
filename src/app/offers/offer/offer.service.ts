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

  constructor(private httpClient: HttpClient) {
  }

  private static _getDate(timestamp: null | number): null | Date {
    return timestamp ? new Date(timestamp) : null;
  }

  public getOffers() {
    return this.httpClient.get<{ [key: number]: Offer }>(this.apiUrl + 'offers/active')
      .pipe(
        map(responseData => {
          const offersArray: Offer[] = [];
          // const offersSet = new WeakSet();
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              // console.log(responseData[key]);
              // offersSet.add(responseData[key]);
              offersArray.push({
                ...responseData[key],
                priceLong: +responseData[key].priceLong,
                priceShort: +responseData[key].priceShort,
                dateCreated: OfferService._getDate(+responseData[key].dateCreated),
                dateUpdated: OfferService._getDate(+responseData[key].dateUpdated)
              });
            }
          }
          // console.log(JSON.stringify(offersArray, undefined, 2));
          console.log(offersArray);
          return [...offersArray];
        })
      );
  }
}
