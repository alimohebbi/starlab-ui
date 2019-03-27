import {Researcher} from './researcher.models';

export class Collaboration {
  id: string;
  link: string;
  start_date: string;
  university: string;
  researchers: Researcher;
}
