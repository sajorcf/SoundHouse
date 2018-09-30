import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../services/playlists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  name = '';
  description = '';
  q = '';

  constructor(public playlist:PlaylistsService, public router:Router ) { }

  ngOnInit() {
  }

  createPlaylist(){
    var url = this.name.replace(' ','-').replace(/[^a-zA-Z0-9]/g,'-');
    this.playlist.create(this.name, url.toLowerCase(), this.description);
    this.name = '';
    this.description = '';
  }

}
