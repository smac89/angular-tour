import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroesComponent }  from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {AppComponent} from './app.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {HeroSearchComponent} from './hero-search.component';

// We recommend registering app-wide services in the root AppModule providers.
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent, HeroSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [HeroService]
})

export class AppModule { }
