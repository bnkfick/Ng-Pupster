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
  public friendMatch: boolean = false;
  public matchMessage: String = '';


  constructor(private _puppyService: PuppyService) { }

  ngOnInit() {
    this._puppyService.getPuppies()
    .subscribe(data => {
      this.puppies = data;
    });
  }

  likeFriend() {
    console.log("Like this friend");
    let randomNum: Number = Math.floor(Math.random() * 3) + 1;
    console.log(`randomNum: ${randomNum}`);
    this.matchMessage = "Not a Match! Another Dog will be your friend!";
    //if the random number is equal to 3.  Just picked 3, could be 1,2,4 or 5 instead
    if (3 === randomNum) { //returns true or false
      // console.log("Yay");
      this.friendMatch = true;
      this.pupFriendCount = this.pupFriendCount + 1;
      this.matchMessage = "Yay! That Pup is my new friend!";

    } 
    this._puppyService.getPuppies()
    .subscribe(data => {
      console.log(data);
      this.puppies = data;
      this.friendMatch = false;
    });
  }

  dislikeFriend() {
    console.log("DISLike this friend");
    this.matchMessage = "";
    this._puppyService.getPuppies();    this._puppyService.getPuppies()
    .subscribe(data => {
      console.log(data);
      this.puppies = data;
      this.friendMatch = false;
    });
    }
}
