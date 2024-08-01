import { Component, EventEmitter, inject, input, Input, OnInit, Output } from '@angular/core';
import { ReviewInfo } from '../../model/ReviewInfo';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewsService } from '../../services/reviews.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'review-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent implements OnInit{

  @Input() info !: ReviewInfo;

  unsafeHtml: SafeHtml = ''; 
  userRole : string | null;
  authService = inject(AuthService)
  reviewService = inject(ReviewsService)
  
  constructor (protected sanitizer: DomSanitizer,public dialog: MatDialog) {
    this.userRole = this.authService.getRoleFromToken();
  }

  ngOnInit(): void {
    this.unsafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.info.body);
  }

  selectReview(id: string) {
    console.log(id);
    this.reviewService.getReviewById(id).subscribe(
      (data: ReviewInfo) => {
        this.openAlertDialog(data);
      }
    )
  }


  openAlertDialog(review:ReviewInfo) {
    this.dialog.open(EditDialogComponent, {
      data: {review : review}
    })
  }


}
