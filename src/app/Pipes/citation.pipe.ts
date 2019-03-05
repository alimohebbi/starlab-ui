import {Pipe, PipeTransform} from '@angular/core';
import {PublicationService} from '../services/publication.service';
import * as Cite from 'citation-js';

@Pipe({
  name: 'citation',
  pure: true,
})
export class CitationPipe implements PipeTransform {

  constructor(private publicationService: PublicationService) {

  }

  transform(value: any): any {
    const out = this.publicationService.jsonToBibtex(value);
    const cite = new Cite(out);
    const result = cite.get({format: 'real', type: 'html', style: 'citation-apa'}).innerHTML;
    return result;
  }

}
