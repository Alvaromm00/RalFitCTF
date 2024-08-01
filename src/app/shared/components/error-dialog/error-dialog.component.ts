import { Component, inject, Inject, Input } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'error-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,MatButtonModule],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {

  descripcion : string;
  userRole : string | null;
  authService = inject(AuthService)

  constructor(@Inject(MAT_DIALOG_DATA) data: { message: string }) {
    this.descripcion = data.message;
    this.userRole = this.authService.getRoleFromToken();
  }
  ngOnInit(): void {
  }

}
