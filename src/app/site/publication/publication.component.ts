import {Component, OnInit} from '@angular/core';
import doParse from 'bibtex-parser';
import {BibpubService} from '../../services/bibpub.service';
import * as Cite from 'citation-js';
import * as bibCite from 'bibtex-parse-js';
import jsbib from './listofbib2';

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

  constructor(private bibpubServie: BibpubService) {
  }

  ngOnInit() {
    this.loading = true;
    /*
        const temp = jsbib.filter(entry => entry.groups === 'STAR');
        this.entries = temp.sort((obj1, obj2) => {
          if (Number(obj1.year) > Number(obj2.year)) {
            return -1;
          } else if (Number(obj1.year) < Number(obj2.year)) {
            return 1;
          }
          return 0;
        });*/
    this.bibpubServie.getBib().subscribe(response => {
      this.prepareBibData(response);
      this.loading = false;
    });
  }


  setCurrentYear(newYear) {
    this.currentYear = newYear;
  }


  parseBibFromText(bibInput: string) {
    const myRegex = this.cleanData(bibInput);
    // console.log(doParse(myRegex));

    console.log(myRegex);
    const example = new Cite(myRegex, {forceType: '@bibtex/text'});

    this.entries = example.format('bibliography', {
      format: 'bibtex',
      template: 'apa',
      lang: 'en-US'
    });
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
    this.selectedBib = this.toBibtexSingle(paper);
  }


  toBibtexSingle(i) {
    let out = '';
    console.log(i);
    out += '@' + i.ENTRYTYPE;
    out += '{ ';
    out += i.ID;

    for (const jdx of Object.keys(i)) {
      if (jdx !== 'ENTRYTYPE' && jdx !== 'ID') {

        out += ', \n';
        out += jdx + '= {' + i[jdx] + '}';
      }
    }
    out += '\n}\n';
    console.log(out);
    return out;
  }

  private prepareBibData(response) {
    const temp = response.filter(entry => entry.groups === 'STAR');
    this.entries = temp.sort((obj1, obj2) => {
      if (Number(obj1.year) > Number(obj2.year)) {
        return -1;
      } else if (Number(obj1.year) < Number(obj2.year)) {
        return 1;
      }
      return 0;
    });
  }
}
