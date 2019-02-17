import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HomeComponent} from './site/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {PeopleComponent} from './site/people/people.component';
import {ResearchComponent} from './site/research/research.component';
import {SoftwareDataComponent} from './site/software-data/software-data.component';
import {PublicationComponent} from './site/publication/publication.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FilterByTitle} from './Pipes/filterbytitle';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PeopleComponent,
    ResearchComponent,
    SoftwareDataComponent,
    PublicationComponent,
    FilterByTitle,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
