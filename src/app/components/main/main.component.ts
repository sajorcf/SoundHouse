import { Component, OnInit } from '@angular/core';
import { GenresService } from '../../services/genres.service';
import { FunctionsService } from '../../services/functions.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  listGenres = [];
  listSelected = [];

  constructor( private genres:GenresService, private func:FunctionsService, public router:Router ){
    this.getGenres();
  }

  getGenres(){
    this.func.showLoading();
    this.listSelected = this.genres.getSavedGenres();
    this.listGenres = this.genres.getGenres();
    this.func.hideLoading();
  }

  saveGenres(){
    this.func.showLoading();
    this.genres.saveGenres(this.listSelected);
    this.router.navigate(['home']);
    this.func.hideLoading();
  }

  selectGenre(e, genre){
    if(this.func.inArray(genre, this.listSelected)){
      this.func.delFromArray(genre, this.listSelected);
    }else{
      this.listSelected.push(genre);
    }
    if($(e.target).parent().hasClass('selected')){
      $(e.target).parent().removeClass('selected');
    }else{
      $(e.target).parent().addClass('selected');
    }
  }

  ngOnInit() {
  }

}
