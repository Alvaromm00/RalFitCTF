import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'side-menu-bar',
  standalone: true,
  imports: [MatSidenavModule,MatButtonModule,MatIconModule],
  templateUrl: './side-menu-bar.component.html',
  styleUrl: './side-menu-bar.component.scss'
})
export class SideMenuBarComponent {

  showFiller = false;


}
