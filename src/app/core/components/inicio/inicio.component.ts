import { Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { SideMenuBarComponent } from '../side-menu-bar/side-menu-bar.component';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SideMenuBarComponent,MatDividerModule,MatListModule,MatCardModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent{

}
