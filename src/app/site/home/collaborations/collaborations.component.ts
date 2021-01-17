import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../../services/home.service';
import {Collaboration} from '../../../models/collaboration.models';
import {openings} from '../../../models/opening.models';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.css', '../home.component.css']
})
export class openingComponent implements OnInit {

  openingComponent: openings[];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getopening()
      .subscribe(openings => {
        this.openingComponent = openings;
      });
  }

}
