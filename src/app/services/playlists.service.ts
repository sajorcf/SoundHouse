import { Injectable } from '@angular/core';
import { ENV } from '../../environments/environment';
import { FunctionsService } from './functions.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Injectable()
export class PlaylistsService {

  current = '';
  listPlaylists = [];

  constructor( private func:FunctionsService, private router:Router ){
    this.listPlaylists = this.getPlaylists();
  }

  setCurrentPlaylist(current){
    this.current = current;
  }

  openPopup(){
    $('.playlists-create').fadeIn();
  }
  closePopup(){
    $('.playlists-create').fadeOut();
  }

  add(code, song){
    console.log('add');
    var obj = this.listPlaylists;
    obj.forEach(playlist=>{
      if(playlist.url == code){
        if(!this.func.inArray(song, playlist.songs)){
          playlist.songs.push(song);
        }
      }
    });
    this.updatePlaylist();
  }

  create(_name, _url, _description){
    var found = false;
    var obj = {name:_name,url:_url,description:_description,songs:[]};
    this.listPlaylists.forEach(playlist=>{
      if(playlist.url == _url){
        found = true;
      }
    });
    if(!found){
      this.listPlaylists.push(obj);
      this.updatePlaylist();
    }
    this.router.navigate(['/playlist',_url]);
    this.closePopup();
  }

  getPlaylists(){
    var arr = JSON.parse(localStorage.getItem('playlists'));
    if(Array.isArray(arr)){
      this.listPlaylists = arr;
    }else{
      this.listPlaylists = [];
    }
    return this.listPlaylists;
  }

  updatePlaylist(){
    localStorage.setItem('playlists',JSON.stringify(this.listPlaylists));
  }

  hasSongs(){
    var obj = this.listPlaylists;
    obj.forEach(playlist=>{
      if(playlist.url == this.current){
        if(playlist.songs.length){
          return true;
        }
      }
    });
    return false;
  }

  getPlaylist(){
    var plist = [];
    this.listPlaylists.forEach(playlist=>{
      if(playlist.url == this.current){
        plist = playlist;
      }
    })
    return plist;
  }

}
