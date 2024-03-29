export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/article';
export { ArticleView, ArticleType } from './model/consts/articleContsts';
export {
  ArticleSortField,
  ArticleBlockType,
} from './model/consts/articleContsts';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';
export { ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector';
export { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
