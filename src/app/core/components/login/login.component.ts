import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRequest } from '../../../shared/model/AuthRequest';

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

}
