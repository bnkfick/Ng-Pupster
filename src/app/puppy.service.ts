import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDog } from './dog';
import { IBreed } from './breed';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PuppyService {

  public _randomDogUrl: string = "https://dog.ceo/api/breeds/image/random";
  public _breedsUrl: string = "https://dog.ceo/api/breeds/list";

  constructor(private http: HttpClient ) { }

  getPuppies(): Observable<IDog[]> {
    return this.http.get<IDog[]>(this._randomDogUrl);
  }

  getBreeds(): Observable<IBreed[]> {
    return this.http.get<IBreed[]>(this._breedsUrl);
  }
}
