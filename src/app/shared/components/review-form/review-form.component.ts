import { Component, EventEmitter, Output } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewInfo } from '../../model/ReviewInfo';

@Component({
  selector: 'review-form',
  standalone: true,
  imports: [CarouselModule,ReviewCardComponent,ButtonModule,TagModule,ReactiveFormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss'
})
export class ReviewFormComponent {
 public products : string[] = ['hola','adios','adios','adios','adios','adios'];

 @Output() formSubmit = new EventEmitter<ReviewInfo>();
  
 reviewForm: FormGroup;
  

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      name: 'Alvaro'
    });
  }
  
  onSubmit() {
    if (this.reviewForm.valid) {
      const reviewInfo: ReviewInfo = this.reviewForm.value;
      console.log(reviewInfo);
      this.formSubmit.emit(reviewInfo);
    }
  }
}
