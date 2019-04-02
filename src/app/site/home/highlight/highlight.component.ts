import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../../services/home.service';
import {Highlight} from '../../../models/highlight.models';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css', '../home.component.css']
})
export class HighlightComponent implements OnInit {
  HIGHLIGHTS: Highlight[];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getHighlights()
      .subscribe(highlights => {
        this.HIGHLIGHTS = highlights;
      });
  }

}
