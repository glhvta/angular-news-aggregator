import { Injectable } from '@angular/core';
import { Article } from '../models/article';


@Injectable({
  providedIn: 'root',
})
export class LocalNewsService {

  constructor() { }

  public getNews(): Array<Article> {
    console.log('local news');
  }
}
