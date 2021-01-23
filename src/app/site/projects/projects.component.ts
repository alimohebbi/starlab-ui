import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import { UtilsService } from "../../services/utils.service";
import {Projects} from '../../models/projects.models';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
    projects: Projects[];
    currentYear;

    setCurrentYear(newYear) {
        this.currentYear = newYear;
    }

    constructor(private projectsService: ProjectsService, private utils: UtilsService) {
    }

    computeYear(projects) {
        for (var project of projects) {
            var date = new Date(project['date_added']);
            project['year'] = date.getFullYear();
        }

        return projects;
    }

    ngOnInit() {
        this.projectsService.getProjects()
            .subscribe(projects => {
                console.log(projects)
                console.log(projects[0])
                console.log(this.utils);
                
                this.projects = this.computeYear(this.utils.sortByDateDesc(projects));
            });
    }
}
