import { Component, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel';
import { ReviewInfo } from '../../model/ReviewInfo';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [ReviewCardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  providers: [ReviewsService]
})
export class CarouselComponent implements AfterViewInit{

  @ViewChild('embla', { static: true }) embla!: ElementRef;
  reviews: ReviewInfo[] = [];

  constructor(private reviewsService:ReviewsService) {}

  ngOnInit(): void {
    this.reviewsService.getReviews().subscribe(
      (data: ReviewInfo[]) => {
        this.reviews = data;
      });

  }

  ngAfterViewInit() {
    const options: EmblaOptionsType = { slidesToScroll: 1, containScroll: "trimSnaps" };
    const embla = EmblaCarousel(this.embla.nativeElement, options);
  }

}
