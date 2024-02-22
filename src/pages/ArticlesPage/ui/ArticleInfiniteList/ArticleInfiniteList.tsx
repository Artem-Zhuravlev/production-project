import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '@/pages/ArticlesPage/model/slice/articlePageSlice';

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const articles = useSelector(getArticles.selectAll);

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
    />
  );
});
