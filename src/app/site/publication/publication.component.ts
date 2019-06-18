import {Component, OnInit} from '@angular/core';
import {PublicationService} from '../../services/publication.service';
import * as Cite from 'citation-js';
import {interval, timer} from 'rxjs';
import {filter, takeUntil, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  selectedBib: any;
  selectedEntry: any = '';
  entries;
  currentYear;
  loading: boolean;
  progressStatus = 0;

  constructor(private publicationService: PublicationService) {
  }

  ngOnInit() {
    this.loading = true;
    this.publicationService.getBib().subscribe(response => {
      this.prepareBibData(response);
      this.loading = false;
    });
    this.progress();

  }


  setCurrentYear(newYear) {
    this.currentYear = newYear;
  }

  cleanData(bibInput) {
    let myRegex = bibInput.replace(/^%.*\n?/mg, '');
    // myRegex = myRegex.replace(/^@String.*\n?/mg, '');
    myRegex = myRegex.replace(/^@String{NONE = "".*\n?/mg, '');
    myRegex = myRegex.replace(/^.*groups: NONE.*\n?/mg, '');
    myRegex = myRegex.replace(/^.* keywords = {invariant, dynamic .*\n?/mg, '');
    myRegex = myRegex.replace(/^.*journal = TOC.*\n?/mg, '');
    myRegex = myRegex.replace(/^.*journal = jacm.*\n?/mg, '');
    myRegex = myRegex.replace(/^.*journal = VLDB.*\n?/mg, '');
    myRegex = myRegex.replace(/^.*journal = TSE.*\n?/mg, '');
    myRegex = myRegex.replace(/^.*journal=TSE.*\n?/mg, '');
    myRegex = myRegex.replace(/^.*journal = TOSEM.*\n?/mg, '');
    myRegex = myRegex.replace(/^.*journal=TOSEM.*\n?/mg, '');
    myRegex = myRegex.replace(/^.*booktitle =	 ISCA.*\n?/mg, '');
    myRegex = myRegex.replace(/^  title = {Proceedings of.*\n?/mg, '');
    myRegex = myRegex.replace(/^  month = April.*\n?/mg, '');
    myRegex = myRegex.replace(/^@article{Anand:testingsurvey:JSS:.*}?/mg, '');
    myRegex = myRegex.replace(/^.*#.*\n?/mg, '');
    myRegex = myRegex.replace(/^.*\\l.*\n?/mg, '');
    myRegex = myRegex.replace(/^.*\\i.*\n?/mg, '');
    return myRegex;
  }

  onSelect(paper) {
    if (paper.ID === this.selectedEntry.ID) {
      this.selectedEntry = '';
      return;
    }
    this.selectedEntry = paper;
    this.selectedBib = this.toBibtex(paper);
  }

  toBibtex(i) {
    const out = this.publicationService.jsonToBibtex(i);
    const cite = new Cite(out);
    return cite.get({format: 'real', type: 'html', style: 'bibtex'});
  }

  private prepareBibData(response) {
    const temp = response.filter(entry => (entry.groups === 'STAR' || entry.groups === 'STAR,LTA'));
    this.entries = temp.sort((obj1, obj2) => {
      if (Number(obj1.year) > Number(obj2.year)) {
        return -1;
      } else if (Number(obj1.year) < Number(obj2.year)) {
        return 1;
      }
      return 0;
    });
  }

  private progress() {
    const source = interval(100);
    const example = source.pipe(takeWhile(() => this.progressStatus < 100 ? this.loading : false))
    ;
    example.subscribe(() => this.progressStatus = this.progressStatus + 1);
  }
}
