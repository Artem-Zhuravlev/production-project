import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0).map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));
};

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    isLoading,
    articles,
    view = ArticleView.SMALL,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
    />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls.view])}>
      {articles.length
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
