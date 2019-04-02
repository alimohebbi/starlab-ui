import { Component, OnInit } from '@angular/core';
import {News} from '../../../models/news.models';
import {HomeService} from '../../../services/home.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['../home.component.css', './news.component.css']
})
export class NewsComponent implements OnInit {
  NEWS: News[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getNews()
      .subscribe(news => {
        this.NEWS = news;
      });
  }

}
