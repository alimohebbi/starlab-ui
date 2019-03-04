import {Component, OnInit} from '@angular/core';
import {Software} from '../../models/software.models';
import {SoftwareService} from '../../services/software.service';

@Component({
  selector: 'app-software-data',
  templateUrl: './software-data.component.html',
  styleUrls: ['./software-data.component.css']
})
export class SoftwareDataComponent implements OnInit {

  SOFTWARE: Software[];

  constructor(private softwareService: SoftwareService) {
  }

  ngOnInit() {
    this.softwareService.getSoftwareList()
      .subscribe(softwareList => this.SOFTWARE = softwareList);
  }

}
