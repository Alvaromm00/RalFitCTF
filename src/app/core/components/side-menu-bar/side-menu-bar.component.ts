import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'side-menu-bar',
  standalone: true,
  imports: [MatSidenavModule,MatButtonModule,MatIconModule],
  templateUrl: './side-menu-bar.component.html',
  styleUrl: './side-menu-bar.component.scss'
})

export class SideMenuBarComponent {
  @Input() menus!: string[];

  constructor(private router: Router) {}

  navigate(menu: string) {
    const route = menu.toLowerCase();
    console.log(route);
    this.router.navigate(['/'+route]);
  }

}
