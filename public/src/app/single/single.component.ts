import { Component, OnInit } from '@angular/core';
import { FoodtruckService } from '../foodtruck.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['../bootstrap.css']
})
export class SingleComponent implements OnInit {
  truck: any;
  newreview = {
    "name" : "",
    "rating" : 5,
    "comment" : ""
  }
  errors = {};

  constructor(private _ftservice: FoodtruckService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.getTruck(params['id']);
    })
  }

  getTruck(id){
    let observable = this._ftservice.getOne(id);
    observable.subscribe( data => {
      this.truck = data['foodtruck']
    })
  }

  newRating(id){
    let observable = this._ftservice.addReview(id, this.newreview);
    observable.subscribe( data => {
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      }
      else {
        this.getTruck(id);
        this.newreview = {
          "name" : "",
          "rating" : 5,
          "comment" : ""
        }
      } 
    })
  }

}