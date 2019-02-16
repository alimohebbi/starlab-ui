import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {root} from 'rxjs/internal-compatibility';
import {NewsService} from '../../services/news.service';
import {News} from '../../models/news.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  NEWS: News[];
  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe(news => {this.NEWS = news; });
  }

}
