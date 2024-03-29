import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from '@/shared/types/index';
import {
  Article,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from '@/entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;
  _inited: boolean;
  sort: ArticleSortField;
  search: string;
  order: SortOrder;
  type: ArticleType;
}
