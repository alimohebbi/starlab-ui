import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {NewsComponent} from './news/news.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ResearchesComponent } from './researches/researches.component';
import { OpeningsComponent } from './openings/openings.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    HighlightComponent,
    ResearchesComponent,
    OpeningsComponent,
    OverviewComponent
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
