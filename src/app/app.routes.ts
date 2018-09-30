import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';

import { PlaylistComponent } from './components/playlist/playlist.component';
import { MySongsComponent } from './components/my-songs/my-songs.component';

const APP_ROUTES: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'main', component: MainComponent },
  { path: 'home', component: HomeComponent },
  { path: 'browse', children: [
      { path: '', component: BrowseComponent },
      { path: ':q', component: BrowseComponent }
    ]
  },

  { path: 'playlist', children:
    [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: ':code', component: PlaylistComponent }
    ]
  },

  { path: 'me', children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'songs', component: MySongsComponent },
    ]
  },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
