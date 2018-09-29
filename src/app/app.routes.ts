import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'main', component: MainComponent },
  { path: 'home', component: HomeComponent },


  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
