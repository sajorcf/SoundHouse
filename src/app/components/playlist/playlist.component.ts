import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../../services/functions.service';
import { PlaylistsService } from '../../services/playlists.service';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';
import { GenresService } from '../../services/genres.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  code = '';
  pl_data = [];
  pl_recommended = [];

  constructor( public func:FunctionsService, public playlist:PlaylistsService, private route:ActivatedRoute,
    private youtube:YoutubeService, private genres:GenresService, private player:PlayerService ){
    var code = '';
    this.route.params.subscribe(params=>{
      if(params['code']){
        this.playlist.setCurrentPlaylist(params['code']);
        this.pl_data = this.playlist.getPlaylist();

        if(!this.pl_data){
          this.searchByGenres();
        }
      }
    });

  }

  searchByGenres(){
    this.func.showLoading();
    var genres = this.genres.getSavedGenres();
    var tam = genres.length;
    this.youtube.search(genres[tam-1].name).subscribe(data=>{
      this.pl_recommended = data.items;
    }, err=>{
      console.log(err);
    }, ()=>{
      this.func.hideLoading();
    });
  }

  hasSongs(){
    return this.playlist.hasSongs();
  }

  ngOnInit() {
  }

}
