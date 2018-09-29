import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../../services/functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor( private func:FunctionsService, public router:Router ){}

  guestLogin(){
    this.func.showLoading();
    this.router.navigate(['main']);
    this.func.hideLoading();
  }

  ngOnInit() {
  }

}
