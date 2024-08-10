import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewInfo } from '../model/ReviewInfo';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  private authServiceUrl = 'http://ralfit.ctf:8081';

  public getReviews(): Observable<ReviewInfo[]> {
    return this.http.get<ReviewInfo[]>(this.authServiceUrl + '/api/v1/reviews');
  }

  public saveReview(review: ReviewInfo): Observable<ReviewInfo> {
    return this.http.post<ReviewInfo>(this.authServiceUrl + '/api/v1/reviews', review);
  }

  public updateReview(review: ReviewInfo): Observable<ReviewInfo> {
    return this.http.post<ReviewInfo>(this.authServiceUrl + '/api/v1/reviews/update', review);
  }

  public getReviewById(id:string):Observable<ReviewInfo> {
    let params = new HttpParams().set("id",id);
    return this.http.get<ReviewInfo>(this.authServiceUrl + '/api/v1/reviews/detalle',{params: params});
  }


}
