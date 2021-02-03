import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {People} from '../../models/people.models';
import {PeopleService} from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  PEOPLE: People[];
  TITLES = {
    researcher: '',
    community: 'Star Community',
  };


  TITLESKEYS: any;


  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.TITLESKEYS = Object.keys(this.TITLES);
    this.peopleService.getPeople()
      .subscribe(people => {
        this.PEOPLE = people;
      });
  }


}
