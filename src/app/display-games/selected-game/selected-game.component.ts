import { Component, inject, Input, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';
import { NgFor, NgIf } from '@angular/common';
import { GameData } from '../game.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-game',
  templateUrl: './selected-game.component.html',
  styleUrls: ['./selected-game.component.css'],
  standalone:true,
  imports:[NgFor,NgIf]
})
export class SelectedGameComponent implements OnInit{

  @Input({required:true}) gameId!:number
  private game=inject(ApidataService);
  games!:GameData;
 
  ngOnInit()
  {
     this.game.getGameById(this.gameId).subscribe((data)=>{
      this.games=data
      console.log(data);
      
      
     });
     
  }
  get gameTitle()
  {
    return this.games?.title;
  }
  get gameGenre()
  {
    return this.games?.genre
  }
  get gameAvatar()
  {
    return this.games?.thumbnail;
  }
  get gameDesc()
  {
    return this.games?.description
  }
  get gameUrl()
  {
    return this.games?.game_url
  }
}

