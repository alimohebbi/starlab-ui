import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../../services/home.service';
import {Research} from '../../../models/research.models';

@Component({
  selector: 'app-researches',
  templateUrl: './researches.component.html',
  styleUrls: ['./researches.component.css', '../home.component.css']
})
export class ResearchesComponent implements OnInit {
  RESEARCHES: Research[];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getResearches()
      .subscribe(researches => {
        this.RESEARCHES = researches;
      });
  }

}
