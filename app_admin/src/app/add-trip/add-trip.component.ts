import { Component, OnInit } from '@angular/core';
import { TripDataService } from '../services/trip-data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-add',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css'],
})
export class TripAddComponent implements OnInit {
  addTripFormGroup!: FormGroup;
  submitted = false;

  constructor(
    private tripService: TripDataService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.addTripFormGroup = this.formBuilder.group({
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
  }

  onSubmit() {
    console.log('AddTripComponent#onSubmit calling TripDataService#Trip');
    this.submitted = true;
    if (this.addTripFormGroup.valid) {
      this.tripService.addTrip(this.addTripFormGroup.value).then((data) => {
        console.log('AddTripComponent#onSubmit data', data);
        this.router.navigate(['']);
      });
    }
  }

  // Get the form short name to access the form fields
  get f() {
    return this.addTripFormGroup.controls;
  }
}

/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
@Component({
selector: ‘app-add-trip’,
standalone: true,
imports: [CommonModule],
templateUrl: './add-trip.component.html',
styleUrl: './add-trip.component.css'
})
export class AddTripComponent implements OnInit {
addForm!: FormGroup;
submitted = false;
constructor(
private formBuilder: FormBuilder,
private router: Router,
private tripService: TripDataService
) { }
ngOnInit() {
  this.addForm = this.formBuilder.group({
_id: [],
code: [“, Validators.required],
name: [“, Validators.required],
length: [“, Validators.required],
start: [“, Validators.required],
resort: [“, Validators.required],
perPerson: [“, Validators.required],
image: [“, Validators.required],
description: [“, Validators.required],
})
}
public onSubmit() {
this.submitted = true;
if(this.addForm.valid){
this.tripService.addTrip(this.addForm.value)
.subscribe( {
next: (data: any) => {
  console.log(data);
  this.router.navigate(['']);
  },
  error: (error: any) => {
  console.log('Error: ' + error);
  }});
  }
  }
  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }
  }


Again highly disappointed. the code given to us has errors
 in it really wish someone would update those docs, 
 I know this modules is 79 pages, 
but seriously it's a disservice to students */