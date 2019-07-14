import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule
} from '@angular/material';
import {FindOfferComponent} from './offers/find-offer/find-offer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {OfferComponent} from './offers/offer/offer.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import localePl from '@angular/common/locales/pl';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePl);

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'find', component: FindOfferComponent},
  {path: 'offers', component: OfferComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FindOfferComponent,
    OfferComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
