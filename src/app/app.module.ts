import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { YoutubePlayerModule } from 'ngx-youtube-player';

import { FunctionsService } from './services/functions.service';
import { GenresService } from './services/genres.service';
import { SongsService } from './services/songs.service';
import { PlaylistsService } from './services/playlists.service';
import { YoutubeService } from './services/youtube.service';
import { PlayerService } from './services/player.service';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { StartComponent } from './components/start/start.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { BrowseComponent } from './components/browse/browse.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { MySongsComponent } from './components/my-songs/my-songs.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartComponent,
    SidebarComponent,
    HomeComponent,
    PlayerComponent,
    BrowseComponent,
    PlaylistComponent,
    MySongsComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    HttpModule,
    YoutubePlayerModule
  ],
  providers: [
    FunctionsService,
    GenresService,
    SongsService,
    PlaylistsService,
    YoutubeService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
