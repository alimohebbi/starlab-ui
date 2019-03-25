import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {root} from 'rxjs/internal-compatibility';
import {HomeService} from '../../services/home.service';
import {News} from '../../models/news.models';
import {Highlight} from '../../models/highlight.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  NEWS: News[];
  HIGHLIGHTS: Highlight[];
  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getNews()
      .subscribe(news => {this.NEWS = news; });
    this.homeService.getHighlights()
      .subscribe(highlights => {this.HIGHLIGHTS = highlights; });
  }

}
