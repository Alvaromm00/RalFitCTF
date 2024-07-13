import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuBarComponent } from "./core/components/side-menu-bar/side-menu-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideMenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ralfilt-frontend';
}
