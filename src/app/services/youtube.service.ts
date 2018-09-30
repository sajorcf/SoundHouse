import { Injectable } from '@angular/core';
import { ENV } from '../../environments/environment';
import { Http, Response } from '@angular/http';

@Injectable()
export class YoutubeService {

  constructor(private _http:Http){ }

  search(q){
    return this._http.get(ENV.url + "search?q="+q+"&part=snippet&maxResults=15&key="+ENV.apikey).map(response => response.json());
  }

}
