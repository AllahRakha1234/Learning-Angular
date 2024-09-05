import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import { HeroesListComponent as HeroesListComponent } from "./heroes-list/heroes-list.component";

@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CrisisListComponent, HeroesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-routes-sample';
}
