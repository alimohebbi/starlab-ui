import {Component, OnInit} from '@angular/core';
import {Software} from '../../models/software.models';
import {SoftwareService} from '../../services/software.service';
import {ActivatedRoute} from '@angular/router';
import {People} from '../../models/people.models';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-software-details',
  templateUrl: './software-details.component.html',
  styleUrls: ['./software-details.component.css']
})
export class SoftwareDetailsComponent implements OnInit {

  soft: Software;
  PEOPLE: People[];
  detail: any;

  constructor(private route: ActivatedRoute,
              private softwareService: SoftwareService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getSoftware();
  }

  private getSoftware() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.softwareService.getSoftware(id).subscribe(software => {
      this.soft = software[0];
      this.getDetail();
    });
    this.softwareService.getAuthors(id).subscribe(people => this.PEOPLE = people);

  }

  private getDetail() {
    this.softwareService.getHtmlDetail(this.soft.detail).subscribe(detail => {
      this.detail = this.sanitizer.bypassSecurityTrustHtml(detail);
      // this.detail = detail;

    });
  }
}
