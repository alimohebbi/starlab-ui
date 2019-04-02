import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../../services/home.service';
import {Collaboration} from '../../../models/collaboration.models';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.css', '../home.component.css']
})
export class CollaborationsComponent implements OnInit {

  COLLABORATIONS: Collaboration[];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getCollaborations()
      .subscribe(collaborations => {
        this.COLLABORATIONS = collaborations;
      });
  }

}
