import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './site/home/home.component';
import {PeopleComponent} from './site/people/people.component';
import {ResearchComponent} from './site/research/research.component';
import {SoftwareDataComponent} from './site/software-data/software-data.component';
import {PublicationComponent} from './site/publication/publication.component';
import {SoftwareDetailsComponent} from './site/software-details/software-details.component';
import {OpencallComponent} from './site/opencall/opencall.component';
import {CollaborationComponent} from './site/collaboration/collaboration.component';
import { ProjectsComponent } from './site/projects/projects.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'software-data', component: SoftwareDataComponent},
  {path: 'software-data/:id', component: SoftwareDetailsComponent},
  {path: 'publications', component: PublicationComponent},
  {path: 'opencall', component: OpencallComponent},
  {path: 'projects', component: ProjectsComponent },
  {path: 'collaboration', component: CollaborationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
