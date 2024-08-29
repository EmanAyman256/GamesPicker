import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-guide',
  standalone:true,
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
  imports:[RouterOutlet]
})
export class GuideComponent {

}
