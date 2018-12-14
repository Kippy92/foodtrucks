import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodtruckService {

  constructor(private _http: HttpClient) { }

  getTrucks(){
    return this._http.get('/foodtruck');
  }
  createTruck(foodTruck){
    return this._http.post('/foodtruck', foodTruck);
  }
  getOne(id){
    return this._http.get(`/foodtruck/${id}`);
  }

  addReview(id, review){
    return this._http.post(`/foodtruck/${id}/review`, review);
  }

  updateOne(id, truck){
    return this._http.put(`/foodtruck/${id}`, truck);
  }

  deleteOne(id){
    return this._http.delete(`/foodtruck/${id}`);
  }
}
