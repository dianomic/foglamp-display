import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StatisticsService {

  private GET_STATISTICS = environment.base_url + 'statistics';
  private GET_STATISTICS_HISTORY = environment.base_url + 'statistics/history';

  constructor(private http: HttpClient) { }

  /**
   *    GET  | /fledge/statistics
   */
  public getStatistics() {
    return this.http.get(this.GET_STATISTICS).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }

  /**
   *  GET | /fledge/statistics/history
   */
  public getStatisticsHistory(limit) {
    let params = new HttpParams();
    params = params.append('limit', limit);
    return this.http.get(this.GET_STATISTICS_HISTORY, { params: params }).pipe(
      map(response => response),
      catchError((error: Response) => observableThrowError(error)));
  }
}
