import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})
export class GameComponent implements OnInit {
  game: Game;

  constructor(
    public gameService: GameService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.route.params
      .switchMap((params: Params) => this.gameService.getGame(params['id']))
      .subscribe(game => {
        this.game = game;
      });
  }

}
