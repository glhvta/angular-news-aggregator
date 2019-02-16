import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class WebNewsService {

  constructor() { }

  public getNews(): Array<Article> {
    console.log('web news');
  }
}
