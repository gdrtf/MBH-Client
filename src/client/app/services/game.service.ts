import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Config } from '../shared/config/env.config';

import 'rxjs/add/operator/toPromise';
import { Game } from '../shared/models';

@Injectable()
export class GameService {
  private gameUrl = `${Config.API}/Game`;

  constructor(private http: Http, private httpClient: HttpClient) { }

  getGame(id: number): Promise<Game> {
    const headers = new HttpHeaders();
    return this.httpClient.get(`${this.gameUrl}/${id}`, { headers })
      .toPromise()
      .then(response => response as Game)
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
