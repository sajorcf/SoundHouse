import { Injectable } from '@angular/core';
import { ENV } from '../../environments/environment';
import * as $ from 'jquery';

@Injectable()
export class PlayerService {

  private player: YT.Player;
  private id: string = '';

  isSet = false;
  video = {};
  videoSource = '';

  constructor(){
    this.getCurrent();
  }

  playOrPause(e){
    var e = $(e.target);
    if(e.hasClass('play')){
      this.player.playVideo();
      e.removeClass('play').addClass('pause');
    }else{
      this.player.pauseVideo();
      e.removeClass('pause').addClass('play');
    }

  }

  play(video){
    this.video = video;
    this.isSet = true;
    this.current(video);
    this.videoSource = video.id.videoId;
    //this.savePlayer(this.player);
  }

  current(video){
    localStorage.setItem('playing',JSON.stringify(video));
  }
  getCurrent(){
    var obj = JSON.parse(localStorage.getItem('playing'));
    if(obj && obj.kind != ''){
      this.play(obj);
    }
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
