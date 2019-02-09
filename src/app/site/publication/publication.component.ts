import { Component, OnInit } from '@angular/core';
import {parseBibFile, normalizeFieldValue} from 'bibtex';


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  const entry='';

  constructor() { }
  ngOnInit() {
    const bibFile = parseBibFile(`
          @InProceedings{realscience,
            author    = {Marteen Fredrik Adriaan ding de la Trumppert and مهدي N\\"allen and henQuq, jr, Mathize},
            title     = {You Won't Believe This Proof That {P} \\gtreqqless {NP} Using Super-{T}uring Computation Near Big Black Holes},
            booktitle = {Book of Qeq},
            month     = {September},
            year      = {2001},
            address   = {Dordrecht},
            publisher = {Willems Uitgeverij},
            url       = {https://github.com/digitalheir/},
            pages     = {6--9}
          }
`);

  entry  = bibFile
      .getEntry('TITLE');
    console.log(entry);
  }

}
