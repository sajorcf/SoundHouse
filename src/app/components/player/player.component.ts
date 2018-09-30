import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {



  constructor( public mPlayer:PlayerService, public song:SongsService ) {

  }

  ngOnInit() {

  }

}
