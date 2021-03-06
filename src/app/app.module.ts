import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {PeopleComponent} from './site/people/people.component';
import {ResearchComponent} from './site/research/research.component';
import {SoftwareDataComponent} from './site/software-data/software-data.component';
import {PublicationComponent} from './site/publication/publication.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FilterByFieldPipe} from './Pipes/filterbyfield';
import {SoftwareDetailsComponent} from './site/software-details/software-details.component';
import {CitationPipe} from './Pipes/citation.pipe';
import {HomeModule} from './site/home/home.module';
import { OpencallComponent } from './site/opencall/opencall.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PeopleComponent,
    ResearchComponent,
    SoftwareDataComponent,
    PublicationComponent,
    FilterByFieldPipe,
    SoftwareDetailsComponent,
    CitationPipe,
    OpencallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
