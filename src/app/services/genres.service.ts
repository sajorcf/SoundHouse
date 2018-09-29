import { Injectable } from '@angular/core';

@Injectable()
export class GenresService {

  genres = [
    {code:'indie',name:'Indie',image:'indie.jpg'},
    {code:'rock',name:'Rock',image:'rock.jpg'},
    {code:'folk-singer',name:'Folk & Singer - Songwriter',image:'folk.jpg'},
    {code:'metal',name:'Metal',image:'metal.jpg'},
    {code:'pop',name:'Pop',image:'pop.jpg'},
    {code:'dance-edm',name:'Dance & EDM',image:'dance.jpg'},
    {code:'mexican',name:'Mexican music',image:'mexican.jpg'},
    {code:'latin',name:'Latin music',image:'latin.jpg'},
    {code:'rnb',name:"R n' B",image:'rnb.jpg'},
    {code:'colombian',name:'Colombian music',image:'colombian.jpg'},
    {code:'christian',name:'Christian music',image:'christian.jpg'},
    {code:'electronic',name:'Electronic',image:'electronic.jpg'},
    {code:'blues',name:'Blues',image:'blues.jpg'},
    {code:'brazilian',name:'Brazilian music',image:'brazilian.jpg'},
    {code:'tv-gaming-movies',name:'TV, Gaming & Movies',image:'tvgaming.jpg'},
    {code:'reggaeton',name:'Reggaeton',image:'reggaeton.jpg'},
    {code:'classical',name:'Classical',image:'classical.jpg'},
    {code:'soul-funk',name:'Soul & Funk',image:'soul.jpg'},
    {code:'african',name:'African music',image:'african.jpg'},
    {code:'jazz',name:'Jazz',image:'jazz.jpg'},
    {code:'vallenato',name:'Vallenato',image:'vallenato.jpg'},
    {code:'salsa',name:'Salsa',image:'salsa.jpg'},
    {code:'merengue',name:'Merengue',image:'merengue.jpg'},
    {code:'reggae',name:'Reggae',image:'reggae.jpg'},
    {code:'rap',name:'Rap',image:'rap.jpg'}
  ];

  constructor(){ }

  getGenres(){
    return this.genres;
  }

  getSavedGenres(){
    var arr = JSON.parse(localStorage.getItem('genresListSaved'))
    if( Array.isArray(arr) ){
      return arr;
    }
    return [];
  }
  saveGenres(genres){
    localStorage.setItem('genresListSaved',JSON.stringify(genres));
  }

}
