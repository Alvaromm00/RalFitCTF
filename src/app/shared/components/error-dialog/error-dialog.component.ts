import { Component, Inject, Input } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'error-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,MatButtonModule],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {

  descripcion : string;

  constructor(@Inject(MAT_DIALOG_DATA) data: { message: string }) {
    this.descripcion = data.message;
  }
  ngOnInit(): void {
  }

}
