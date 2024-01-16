import { ArticleView } from 'entities/Article/model/types/article';
import { Article } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit?: number;
  hasMore: boolean;
}
