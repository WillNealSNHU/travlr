import { Routes } from '@angular/router';
import { TripAddComponent } from './add-trip/add-trip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'add-trip', component: TripAddComponent},
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'edit-trip', component: TripEditComponent},
    { path: 'login', component: LoginComponent},
    { path: 'list-trips', component: TripListingComponent}
];
