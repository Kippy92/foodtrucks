import { Component, OnInit } from '@angular/core';
import { FoodtruckService } from '../foodtruck.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../bootstrap.css']
})
export class ListComponent implements OnInit {
trucks = [];
  constructor(private _ftservice: FoodtruckService) { }

  ngOnInit() {
    this.getAllTrucks();
  }

  getAllTrucks(){
    let observable = this._ftservice.getTrucks();
    observable.subscribe( data => {
      this.trucks = data['foodtrucks'];
      console.log(data);
    });
  }

}
