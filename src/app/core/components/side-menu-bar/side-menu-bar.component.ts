import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'side-menu-bar',
  standalone: true,
  imports: [MatSidenavModule,MatButtonModule,MatIconModule],
  templateUrl: './side-menu-bar.component.html',
  styleUrl: './side-menu-bar.component.scss',
  providers: [AuthService]
})

export class SideMenuBarComponent {
  @Input() menus!: string[];
  unsafeHtml: SafeHtml;  
  authService = inject(AuthService)
  isLogged:boolean = false;
  userRole:string | null;

  constructor(private router: Router,protected sanitizer: DomSanitizer, authService:AuthService) {
    this.unsafeHtml = this.sanitizer.bypassSecurityTrustHtml('Hola ' + authService.getUserFromToken());
    this.authService.isLogged().subscribe(isLogged => {
      this.isLogged = isLogged;
    });
    this.userRole = this.authService.getRoleFromToken();
    
  }

  navigate(menu: string) {
    const route = menu.toLowerCase();
    this.router.navigate(['/'+route]);
    location.reload;
  }

  ngOnInit(): void {
    this.authService.isLogged().subscribe(isLogged => {
      this.isLogged = isLogged;
    });
  }

  logout(): void {
    localStorage.clear()
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

}
