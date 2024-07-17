import { Component, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { ReviewInfo } from '../../model/ReviewInfo';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ReviewsService } from '../../services/reviews.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [ReviewCardComponent,SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  providers: [ReviewsService]
})
export class CarouselComponent{

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 2};

  @Input() reviews!: ReviewInfo[];

  constructor(private reviewsService:ReviewsService) {}

  ngOnInit(): void {
    console.log(this.reviews);
  }
  
  removeSlide() {
    this.reviews.length = this.reviews.length - 1;
  }
  
  slickInit() {
    console.log('slick initialized');
  }
  
  breakpoint() {
    console.log('breakpoint');
  }
  
  afterChange() {
    console.log('afterChange');
  }
  
  beforeChange() {
    console.log('beforeChange');
  }
}