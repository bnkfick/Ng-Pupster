import { Component, OnInit } from '@angular/core';
import { PuppyService } from '../puppy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public selectedBreed = '';
  public searchedBreed = '';
  public breedImages:any = {};
  clickInfo = 'default';

  //clickInfo = 'default';
  //paragraphClick = 'default';

  public breeds = [];

  constructor(private _puppyService: PuppyService) { }

  ngOnInit() {
    this._puppyService.getBreeds()
    .subscribe(data => {
      this.breeds = data
    });
  }
  handleSearch(breed) {
    this.searchedBreed = breed;
    this._puppyService.getBreedImages(breed)
    .subscribe(data => {
      console.log(data);
      this.breedImages = data
    });
  }
}
