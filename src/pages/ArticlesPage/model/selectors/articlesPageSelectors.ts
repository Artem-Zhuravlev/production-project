import { ArticleView } from 'entities/Article/model/types/article';
import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error || false;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
