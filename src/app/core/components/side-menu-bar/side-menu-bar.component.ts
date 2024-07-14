import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml, SafeScript } from '@angular/platform-browser';

@Component({
  selector: 'side-menu-bar',
  standalone: true,
  imports: [MatSidenavModule,MatButtonModule,MatIconModule],
  templateUrl: './side-menu-bar.component.html',
  styleUrl: './side-menu-bar.component.scss'
})

export class SideMenuBarComponent {
  @Input() menus!: string[];
  unsafeHtml: SafeHtml;


  constructor(private router: Router,protected sanitizer: DomSanitizer) {
    this.unsafeHtml = this.sanitizer.bypassSecurityTrustHtml('Hola usuario');
  }

  navigate(menu: string) {
    const route = menu.toLowerCase();
    console.log(route);
    this.router.navigate(['/'+route]);
  }

}
