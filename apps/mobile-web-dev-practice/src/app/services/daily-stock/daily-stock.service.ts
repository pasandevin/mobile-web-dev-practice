import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDailyStock } from "@mobile-web-dev-practice/model";

@Injectable({
  providedIn: 'root'
})
export class DailyStockService {

  constructor(private httpClint: HttpClient) { }

  findAll(): Observable<IDailyStock[]> {
    return this.httpClint.get<IDailyStock[]>('daily-stock');
  }
}
