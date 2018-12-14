import { Component, OnInit } from '@angular/core';
import { FoodtruckService } from '../foodtruck.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['../bootstrap.css']
})
export class NewComponent implements OnInit {
  truck = {
    "name": '',
    "style": '',
    'description': ''
  }
  errors = {};
  constructor(private _ftService: FoodtruckService, private _router: Router) { }

  ngOnInit() {
  }
  create(){
    let observable = this._ftService.createTruck(this.truck);
    observable.subscribe(data => {
      console.log(data);
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      } 
      else {
        this._router.navigate(['/']);
      }
    });
  }

}