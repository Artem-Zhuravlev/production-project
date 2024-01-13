import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div
        className={classNames(cls.ArticleDetailsPage, {}, [className])}
      >
        {t('article_not_found')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        className={classNames(cls.ArticleDetailsPage, {}, [className])}
      >
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('comments')} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
