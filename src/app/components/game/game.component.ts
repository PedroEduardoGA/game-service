import { GameService } from './game.service';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameservice : GameService) { }

  ngOnInit(): void {
    this.games = [];
    this.getGames();
  }

  getGames() {
    this.gameservice.getMyGames().subscribe(games => this.games = games);
  }

}
