import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewInfo } from '../model/ReviewInfo';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  public getReviews(): Observable<ReviewInfo[]> {
    return this.http.get<ReviewInfo[]>('http://localhost:8081/api/v1/reviews');
  }

  public saveReview(review: ReviewInfo): Observable<ReviewInfo> {
    return this.http.post<ReviewInfo>('http://localhost:8081/api/v1/reviews', review);
  }


}
