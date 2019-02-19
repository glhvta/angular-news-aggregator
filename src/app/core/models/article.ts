interface ArticleSource {
  id: string;
  name: string;
}

export interface Article {
  _id: string;
  title: string;
  author: string;
  url: string;
  description: string;
  content: string;
  publishedAt: string;
  urlToImage: string;
  provider?: string;
  source?: ArticleSource;
}
