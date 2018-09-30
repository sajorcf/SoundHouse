import { Injectable } from '@angular/core';
import { ENV } from '../../environments/environment';
import { FunctionsService } from './functions.service';
import * as $ from 'jquery';

@Injectable()
export class SongsService {

  favorites = [];

  constructor(private func:FunctionsService){
    this.favorites = this.getFavorites();
  }

  favClicked(e, song){
    var e = $(e.target);
    let arr = JSON.parse(localStorage.getItem('favoritesList'));
    if( !Array.isArray(arr) ){
      arr = [];
    }
    if(this.func.inArray(song, arr)){
      this.func.delFromArray(song, arr);
      e.removeClass('active');
    }else{
      arr.push(song);
      e.addClass('active');
    }
    this.favorites = arr;
    localStorage.setItem('favoritesList',JSON.stringify(arr));
  }

  getFavorites(){
    var arr = JSON.parse(localStorage.getItem('favoritesList'))
    if( Array.isArray(arr) ){
      this.favorites = arr;
      return this.favorites;
    }
    return [];
  }
}
