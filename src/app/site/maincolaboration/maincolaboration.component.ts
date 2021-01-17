import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Collaboration} from '../../models/collaboration.models';


@Component({
  selector: 'app-maincolaboration',
  templateUrl: './maincolaboration.component.html',
  styleUrls: ['./maincolaboration.component.css']
})


export class MaincolaborationComponent implements OnInit {
  mainCOLLABORATIONS: Collaboration[];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getCollaborations()
    .subscribe(collaborations => {
      this.mainCOLLABORATIONS = collaborations;
    });
  }

}
