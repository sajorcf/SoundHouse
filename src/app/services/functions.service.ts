import { Injectable } from '@angular/core';
import  {Location } from '@angular/common';
import * as $ from 'jquery';
import 'rxjs/Rx' ;

@Injectable()
export class FunctionsService {

  constructor( private location:Location ){ }

  goBack(){
    this.location.back();
  }
  goForward(){
    this.location.forward();
  }

  openActions(e){
    var e = $(e.target);
    $('.song-actions>ul, .playlist-actions>ul').slideUp(50);
    if(e.find('>ul').is(':visible')){
      e.find('>ul').slideUp(100);
    }else{
      e.find('>ul').slideDown(100);
    }
  }

  showLoading(element = '.loading'){
    $('body').css('overflow','hidden');
    $(element).addClass('show');
  }
  hideLoading(element = '.loading'){
    $('body').css('overflow-y','scroll');
    window.setTimeout(()=>{
      $(element).removeClass('show');
    }, 500);
  }
  inArray(target, array){
    if(!array){
      return;
    }
    for(var i = 0; i < array.length; i++){
      if(array[i] === target){
        return true;
      }
    }
    return false;
  }
  delFromArray(target, array){
    if(!array){
      return;
    }
    for(var i = array.length; i--;){
      if(array[i] === target){
        array.splice(i, 1);
      }
    }
  }

}
