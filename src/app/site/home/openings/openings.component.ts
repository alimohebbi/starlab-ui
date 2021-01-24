import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../../services/home.service';
import {Openings} from '../../../models/openings.models';

@Component({
  selector: 'app-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.css']
})
export class OpeningsComponent implements OnInit {

  openingComponent: Openings[];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getopening()
      .subscribe(openings => {
        this.openingComponent = openings;
      });
  }

}
