import {ProjectModels} from './project.models';

export class Projects {
  id: number;
  date_added: string;
  title: string;
  projects: ProjectModels[];
}
