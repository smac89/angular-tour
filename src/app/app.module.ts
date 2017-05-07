import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroesComponent }  from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {AppComponent} from './app.component';
import {HeroService} from './hero.service';
import {RouterModule} from '@angular/router';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        // The router matches this route's path to the URL in the browser address bar
        path: 'heroes',
        // The component that the router should create when navigating to this route
        component: HeroesComponent
      }
    ])
  ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [HeroService]
})

export class AppModule { }
