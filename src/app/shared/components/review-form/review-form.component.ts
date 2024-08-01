import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewInfo } from '../../model/ReviewInfo';
import { ReviewsService } from '../../services/reviews.service';
import { CarouselComponent } from '../carousel/carousel.component';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'review-form',
  standalone: true,
  imports: [ReviewCardComponent,ReactiveFormsModule,CarouselComponent],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss',
  providers: [ReviewsService]
})
export class ReviewFormComponent {
  
 public reviews : ReviewInfo[] = [];

 @Output() formSubmit = new EventEmitter<ReviewInfo>();
  
 reviewForm: FormGroup;

 authService = inject(AuthService)
 isLogged:boolean = false;
 
  

  constructor(private fb: FormBuilder,private reviewsService:ReviewsService) {
    this.authService.isLogged().subscribe(isLogged => {
      this.isLogged = isLogged;
    });
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      user: this.authService.getUserFromToken()
    });
  }

  ngOnInit(): void {

    this.authService.isLogged().subscribe(isLogged => {
      this.isLogged = isLogged;
    });

    this.reviewsService.getReviews().subscribe(
      (data: ReviewInfo[]) => {
        this.reviews = data;
      },
      (error) => {
        console.error('Error fetching reviews', error);
      }
    ); 

  }

 
  onSubmit() {
    if (this.reviewForm.valid) {
      const reviewInfo: ReviewInfo = this.reviewForm.value;
      this.reviewsService.saveReview(reviewInfo).subscribe(
        () => {
          location.reload()
        }
      ); 
      this.formSubmit.emit(reviewInfo);
    }
  }
}
