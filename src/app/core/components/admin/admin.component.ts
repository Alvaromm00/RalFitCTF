import { Component, inject } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { SideMenuBarComponent } from '../side-menu-bar/side-menu-bar.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SideMenuBarComponent,MatListModule,MatCardModule,FormsModule,MatButtonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {


  selectedOption: string = '/var/logs/ralfit/app.log';

  authService = inject(AuthService)

  logs : string[] = []


  sendRequest() {


    this.authService.getLogs(this.selectedOption).subscribe((data) => {
      console.log(data)
      this.logs = data
    })

  }
    

}
