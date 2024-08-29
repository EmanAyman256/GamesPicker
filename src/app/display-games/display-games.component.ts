import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ApidataService } from './apidata.service';
import { GameData } from './game.model';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-display-games',
  standalone:true,
  templateUrl: './display-games.component.html',
  styleUrls: ['./display-games.component.css'],
  imports:[HttpClientModule,NgFor,RouterLink,RouterOutlet]
})
export class DisplayGamesComponent implements OnInit{
private gamesData=inject(ApidataService);
http=inject(HttpClient);
Games: GameData[] = [];
ngOnInit() {

this.gamesData.getGames().subscribe(game=>{
  this.Games=game;
});
}
trackByGameId(index: number, game: GameData): number {
  return game.id;
}


}
