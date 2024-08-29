import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { DisplayGamesComponent } from "./display-games/display-games.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavBarComponent, FooterComponent, DisplayGamesComponent,RouterOutlet],
})
export class AppComponent {
  title = 'Games';
}
