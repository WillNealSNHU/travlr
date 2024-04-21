import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripAddComponent } from './add-trip/add-trip.component';
import { TripDataService } from './services/trip-data.service';
import { TripEditComponent } from './trip-edit/trip-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    TripCardComponent,
    TripAddComponent,
    TripEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    TripDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }