import { Component, inject, Inject } from '@angular/core';
import { ReviewInfo } from '../../model/ReviewInfo';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReviewsService } from '../../services/reviews.service';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,FormsModule,MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,MatButtonModule],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.scss'
})
export class EditDialogComponent {

  readonly dialogRef = inject(MatDialogRef<EditDialogComponent>);
  review: ReviewInfo;
  reviewService = inject(ReviewsService);

  constructor(@Inject(MAT_DIALOG_DATA) data: { review: ReviewInfo[] }) {

    this.review = data.review[0];
    console.log(this.review);
  }

  modifyReview(review:ReviewInfo) {
    console.log(review)
    this.reviewService.updateReview(review).subscribe(
      ()=> {
        this.dialogRef.close()
      }
    )
  }

}
