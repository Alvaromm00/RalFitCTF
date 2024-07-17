import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewInfo } from '../../model/ReviewInfo';
import { ReviewsService } from '../../services/reviews.service';
import { CarouselComponent } from '../carousel/carousel.component';


@Component({
  selector: 'review-form',
  standalone: true,
  imports: [CarouselModule,ReviewCardComponent,ButtonModule,TagModule,ReactiveFormsModule,CarouselComponent],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss',
  providers: [ReviewsService]
})
export class ReviewFormComponent {

 public reviews : ReviewInfo[] = [];

 @Output() formSubmit = new EventEmitter<ReviewInfo>();
  
 reviewForm: FormGroup;
 
  

  constructor(private fb: FormBuilder,private reviewsService:ReviewsService) {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      name: 'Alvaro'
    });
  }

  ngOnInit(): void {

    this.reviewsService.getReviews().subscribe(
      (data: ReviewInfo[]) => {
        this.reviews.concat(data);
        console.log(data.length);
      },
      (error) => {
        console.error('Error fetching reviews', error);
      }
    ); 

  }

 
  onSubmit() {
    if (this.reviewForm.valid) {
      const reviewInfo: ReviewInfo = this.reviewForm.value;
      console.log(reviewInfo);
      this.formSubmit.emit(reviewInfo);
    }
  }
}
