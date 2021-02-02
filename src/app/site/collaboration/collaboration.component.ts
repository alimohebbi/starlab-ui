import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Collaboration} from '../../models/collaboration.models';


@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.css']
})


export class CollaborationComponent implements OnInit {
  mainCOLLABORATIONS: Collaboration[];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getCollaborations()
    .subscribe(collaborations => {
      this.mainCOLLABORATIONS = collaborations;
    });
  }

}
