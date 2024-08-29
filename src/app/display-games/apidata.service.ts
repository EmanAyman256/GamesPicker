import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { GameData } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {


  constructor(private http: HttpClient) { }
  url = "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date";
  getGames():Observable<GameData[]>
  {

      return this.http.get<GameData[]>(this.url,{headers:{'x-rapidapi-key': 'c56763fff1mshfb5eec66ebd392fp1b08ffjsn7ab24814e161',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameById(id: number): Observable<any> {
    return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{headers:{'x-rapidapi-key': 'c56763fff1mshfb5eec66ebd392fp1b08ffjsn7ab24814e161',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'}});
  }



}
