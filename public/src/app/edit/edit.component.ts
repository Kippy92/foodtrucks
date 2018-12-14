import { Component, OnInit } from '@angular/core';
import { FoodtruckService } from '../foodtruck.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../bootstrap.css']
})
export class EditComponent implements OnInit {
  truck = {};
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

  update(id){
    let observable = this._ftservice.updateOne(id, this.truck);
    observable.subscribe( data => {
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      }else{
        this._router.navigate(['/']);
      }
    })

  }

  delete(id){
    let observable = this._ftservice.deleteOne(id);
    observable.subscribe( data => {
        this._router.navigate(['/']);
    })
  }

}