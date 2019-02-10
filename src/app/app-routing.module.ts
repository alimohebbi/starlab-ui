import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './site/home/home.component';
import {PeopleComponent} from './site/people/people.component';
import {ResearchComponent} from './site/research/research.component';
import {SoftwareDataComponent} from './site/software-data/software-data.component';
import {PublicationComponent} from './site/publication/publication.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'software-data', component: SoftwareDataComponent },
  { path: 'publications', component: PublicationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
