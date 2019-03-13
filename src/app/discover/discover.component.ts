import { Component, OnInit } from '@angular/core';
import { PuppyService } from '../puppy.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  public puppies = {};
  public pupFriendCount = 0;
  public friendMatch: false;

  constructor(private _puppyService: PuppyService) { }

  ngOnInit() {
    this._puppyService.getPuppies()
    .subscribe(data => {
      console.log(data);
      this.puppies = data;
    });
  }

  likeFriend() {
    // this.recipeService.recipeSelected.emit(this.recipe);
    console.log("Like this friend");
    this._puppyService.getPuppies()
    .subscribe(data => {
      console.log(data);
      this.puppies = data;
    });
  }

  dislikeFriend() {
    console.log("DISLike this friend");
    this._puppyService.getPuppies();    this._puppyService.getPuppies()
    .subscribe(data => {
      console.log(data);
      this.puppies = data;
    });
    }
}
