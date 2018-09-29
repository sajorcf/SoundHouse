import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { FunctionsService } from './services/functions.service';
import { GenresService } from './services/genres.service';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { StartComponent } from './components/start/start.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartComponent,
    SidebarComponent,
    HomeComponent,
    PlayerComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule
  ],
  providers: [
    FunctionsService,
    GenresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
