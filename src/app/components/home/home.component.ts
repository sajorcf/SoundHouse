import { Component, OnInit } from '@angular/core';
import { GenresService } from '../../services/genres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listGenres = [];

  constructor( private genres:GenresService, public router:Router ) {
    this.listGenres = this.genres.getSavedGenres();
  }

  ngOnInit() {
  }

}
