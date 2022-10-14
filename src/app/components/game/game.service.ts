import { Game } from './../../models/game';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient ) { }

  getMyGames():Observable<{ games: Game[] }>{
    return this.http.get<{ games: Game[] }>("assets/database/games.json");
  }
}
