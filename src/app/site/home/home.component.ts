import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {root} from 'rxjs/internal-compatibility';
import {HomeService} from '../../services/home.service';
import {News} from '../../models/news.models';
import {Highlight} from '../../models/highlight.models';
import {Research} from '../../models/research.models';
import {Collaboration} from '../../models/collaboration.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  NEWS: News[];
  HIGHLIGHTS: Highlight[];
  RESEARCHES: Research[];
  COLLABORATIONS: Collaboration[];

  constructor(private router: Router, private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getNews()
      .subscribe(news => {
        this.NEWS = news;
      });
    this.homeService.getHighlights()
      .subscribe(highlights => {
        this.HIGHLIGHTS = highlights;
      });
    this.homeService.getResearches()
      .subscribe(researches => {
        this.RESEARCHES = researches;
      });
    this.homeService.getCollaborations()
      .subscribe(collaborations => {
        this.COLLABORATIONS = collaborations;
      });
  }

}
