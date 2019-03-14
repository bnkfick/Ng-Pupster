import { Component, OnInit } from '@angular/core';
import { PuppyService } from '../puppy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedBreed = '';
  searchedBreed = '';
  breedImages = [];
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


  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }

}
