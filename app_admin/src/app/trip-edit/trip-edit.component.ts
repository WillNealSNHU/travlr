/*
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
selector: ‘app-edit-trip’,
standalone: true,
imports: [CommonModule, ReactiveFormsModule], templateUrl: './edit-trip.component.html',
@Component({
    selector: ‘app-edit-trip’,
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './edit-trip.component.html'
  tyleUrl: './edit-trip.component.css'
})
c. Add local variables. You need these variables to be able to manipulate the data.
  public editForm!: FormGroup;
trip!: Trip;
  submitted = false;
message : string = '';
d. Build the constructor. The constructor enables you to build the form and route the
component. The constructor also allows you to pull data from the TripDataService.
constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
   ) {}

export class EditTripComponent implements OnInit {

  ngOnInit() : void{
   
        // Retrieve stashed trip ID
        let tripCode = localStorage.getItem("tripCode");
        if (!tripCode) {
    alert("Something wrong, couldn’t find where I stashed tripCode!");
          this.router.navigate(['']);
          return;
        }
        console.log('EditTripComponent::ngOnInit');
    console.log('tripcode:' + tripCode);
        this.editForm = this.formBuilder.group({
          _id: [],
          code: [tripCode, Validators.required],
          name: [“, Validators.required],
          length: [“, Validators.required],
          start: [“, Validators.required],
    resort: [“, Validators.required],
          perPerson: [“, Validators.required],
          image: [“, Validators.required],
          description: ['', Validators.required]
        })
        this.tripDataService.getTrip(tripCode)
    .subscribe({
            next: (value: any) => {
              this.trip = value;
              // Populate our record into the form
    this.editForm.patchValue(value[0]);
    if(!value)
              {
                this.message = 'No Trip Retrieved!';
              }
    else{
                this.message = 'Trip: ' + tripCode + ' retrieved';
              }
              console.log(this.message);
            },
            error: (error: any) => {
    console.log('Error: ' + error);
            }
          })
      }
    
      public onSubmit()
      {
        this.submitted = true;
        if(this.editForm.valid)
        {
          this.tripDataService.updateTrip(this.editForm.value)
    .subscribe({
            next: (value: any) => {
              console.log(value);
              this.router.navigate(['']);
            },
            error: (error: any) => {
    console.log('Error: ' + error);
            }
          })
      }
  }

// get the form short name to access the form fields
get f() { return this.editForm.controls; }

*/


import { Component } from '@angular/core';
import { TripDataService } from '../services/trip-data.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent {
  editTripFormGroup!: FormGroup;
  submitted = false;
  private tripCode: string | null = null;

  constructor(
    private tripService: TripDataService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {

    this.tripCode = localStorage.getItem('tripCode');
    if (!this.tripCode) {
      console.error("Something has gone wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }
    console.log('TripEditComponent#onInit found tripCode ' + this.tripCode);

    this.editTripFormGroup = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });

    console.log(`TripEditComponent#onInit calling TripDataService#getTrip('${this.tripCode}')`);
    this.tripService.getTrip(this.tripCode).then((data) => {
      console.log('TripEditComponent#onInit data', data);
      this.editTripFormGroup.patchValue(data[0]);
    });
  }

  onSubmit() {
    console.log(`TripEditComponent#onSubmit calling TripDataService#updateTrip('${this.tripCode}')`);
    this.submitted = true;
    if (this.editTripFormGroup.valid) {
      this.tripService.updateTrip(this.editTripFormGroup.value).then((data) => {
        console.log('TripEditComponent#onSubmit data', data);
        this.router.navigate(['']);
      });
    }
  }

  deleteTrip() {
    console.log(`TripEditComponent#deleteTrip calling TripDataService#deleteTrip('${this.tripCode}')`);
    if (this.tripCode != null) {
      this.tripService.deleteTrip(this.tripCode).then((data) => {
        console.log('TripEditComponent#deleteTrip data', data);
        this.router.navigate(['']);
      });
    } else {
      console.error('TripEditComponent#deleteTrip failed, tripCode is null');
      this.router.navigate(['']);
    }
  }


  get f() {
    return this.editTripFormGroup.controls;
  }
}