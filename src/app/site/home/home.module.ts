import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {NewsComponent} from './news/news.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ResearchesComponent } from './researches/researches.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';

@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    HighlightComponent,
    ResearchesComponent,
    CollaborationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
