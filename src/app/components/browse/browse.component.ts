import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { FunctionsService } from '../../services/functions.service';
import { PlaylistsService } from '../../services/playlists.service';
import { YoutubeService } from '../../services/youtube.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  isSearch = false;
  querySearch = '';
  videoList = [];

  constructor( public song:SongsService, public router:Router, public func:FunctionsService,
    public playlist:PlaylistsService, private route:ActivatedRoute, private youtube:YoutubeService,
    public player:PlayerService ) {

      this.route.params.subscribe(params=>{
        if(params['q']){
          this.isSearch = true;
          this.querySearch = params['q'];
          this.search(params['q']);
        }
      })

    }

  ngOnInit() {

  }

  search(q){
    this.func.showLoading();
    this.youtube.search(q).subscribe(data=>{
      this.videoList = data.items;
      console.log(data);
    }, err=>{
      console.log(err);
    }, ()=>{
      this.func.hideLoading();
    });
  }

}
