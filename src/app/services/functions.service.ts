import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import 'rxjs/Rx' ;

@Injectable()
export class FunctionsService {

  constructor(){ }

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
