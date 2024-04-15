import { Routes } from '@angular/router';
import { TripAddComponent } from './add-trip/add-trip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';

export const routes: Routes = [
    { path: 'add-trip', component: TripAddComponent},
    { path: '', component: TripListingComponent, pathMatch: 'full'}
];
