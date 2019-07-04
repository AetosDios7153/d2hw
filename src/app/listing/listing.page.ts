import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  public items: Array<any>= [];
  private email: String;
  isClicked: Boolean;
  
  constructor() { 
    
  }

  ngOnInit() {
  }
  showInputText(){

  }

}
