import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthRequest } from '../../../shared/model/AuthRequest';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService]
})
export class LoginComponent {

  @Output() formSubmit = new EventEmitter<AuthRequest>();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private authService:AuthService,
    private router:Router,
    public dialog: MatDialog) {
    this.loginForm = this.fb.group({
      dni: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const reviewInfo: AuthRequest = this.loginForm.value;

      this.authService.login(reviewInfo).subscribe(
        (data) => {

          if(data.success) { 
            localStorage.setItem('auth_token', data.token); 
            this.loginForm.reset();
            this.router.navigate(['/']).then(() => {
              window.location.reload();
            });;
          } else if (data.message){
            this.openAlertDialog(data.message);
          }
        }
      )

    }else {
      this.openAlertDialog("Introduzca los datos de inicio de sesión");
    }
  }

  openAlertDialog(message:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: {message : message}
    })
    .afterClosed()
      .subscribe(() => {
        this.loginForm.reset();
      })
  }

  
}