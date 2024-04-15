import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TripCardComponent } from '../trip-card/trip-card.component';

import { TripDataService } from "../services/trip-data.service";
import { Trip } from "../models/trip";

import { Router } from "@angular/router";

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit {
  trips!: Trip[];
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
  private router: Router) {
    console.log('trup-listing constructor right here');
  }
  public addTrip(): void {
    console.log('TripListingComponent#addTrip routing to TripAddComponent');
    this.router.navigate(['/add-trip']);
  }
  
  private getStuff(): void {
    this.tripDataService.getTrips()
    .subscribe({
   next: (value: any) => {
  this.trips = value;
  if(value.length > 0)
    {
    this.message = 'There are ' + value.length + ' trips available.';
    }
    else{
    this.message = 'There were no trips retrieved from the database';
    }
     console.log(this.message);
     },
     error: (error: any) => {
    console.log('Error: ' + error);
     }
     })
     }
    ngOnInit(): void {
      console.log('ngOnInit');
      this.getStuff();
     }
}

/*import { Component, OnInit } from '@angular/core';
import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Trip } from '../models/trip'

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips(): void {
    console.log('TripListingComponent#getTrips calling TripDataService#getTrips');
    this.message = 'Searching for trips';
    this.tripDataService
      .getTrips()
      .then(foundTrips => {
        this.message = foundTrips.length > 0 ? '' : 'No trips found';
        this.trips = foundTrips;
      });
  }

  public addTrip(): void {
    console.log('TripListingComponent#addTrip routing to TripAddComponent');
    this.router.navigate(['/add-trip']);
  }

}*/