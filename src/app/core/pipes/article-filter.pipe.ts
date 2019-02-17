import { Pipe, PipeTransform } from '@angular/core';

import { Article } from '../models/article';

const includes = (str: string, substr: string) => {
  return str && str.toLowerCase().includes(substr);
};

@Pipe({
  name: 'articleFilter',
})
export class ArticleFilterPipe implements PipeTransform {
  transform(articles: Article[], substr: string): Article[] {
    if (!articles) {
      return [];
    }

    if (!substr) {
      return articles;
    }

    return articles.filter(({ title, description }) => {
      return includes(title, substr) || includes(description, substr);
    });
  }
}
