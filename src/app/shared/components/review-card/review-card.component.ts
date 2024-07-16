import { Component, input, Input } from '@angular/core';
import { ReviewInfo } from '../../model/ReviewInfo';

@Component({
  selector: 'review-card',
  standalone: true,
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {

  @Input() info !: ReviewInfo;

}
