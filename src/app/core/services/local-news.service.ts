import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';


@Injectable({
  providedIn: 'root',
})
export class LocalNewsService {

  constructor() { }

  public getNews(): Observable<Article[]> {
    console.log('local news');
  }
}
