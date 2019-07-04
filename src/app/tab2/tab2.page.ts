import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public recommendedL: Array<any> = [];
  public hasRecommendations: boolean = this.recommendedL.length>0;
  constructor() {}

}
