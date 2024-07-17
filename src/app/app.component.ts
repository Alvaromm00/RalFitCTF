import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { SideMenuBarComponent } from "./core/components/side-menu-bar/side-menu-bar.component";
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './core/components/login/login.component';
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideMenuBarComponent, RouterLink, RouterLinkActive,MatDividerModule,MatListModule,MatCardModule,LoginComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ralfilt-frontend';
}
