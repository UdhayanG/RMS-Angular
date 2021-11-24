import { Component, OnInit } from '@angular/core';
import { NEWFORM } from '../newform';



@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  powers = ['Admin', 'Super Admin',
  'Normal User', 'App Admin'];

model = new NEWFORM(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

newHero() {
this.model = new NEWFORM(42, '', '');
}

skyDog(): NEWFORM {
let myHero =  new NEWFORM(42, 'SkyDog',
                 'Fetch any object at any distance',
                 'Leslie Rollover');
console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
return myHero;
}

//////// NOT SHOWN IN DOCS ////////

// Reveal in html:
//   Name via form.controls = {{showFormControls(heroForm)}}
showFormControls(form: any) {
return form && form.controls['name'] &&
form.controls['name'].value; // Dr. IQ
}

/////////////////////////////

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/