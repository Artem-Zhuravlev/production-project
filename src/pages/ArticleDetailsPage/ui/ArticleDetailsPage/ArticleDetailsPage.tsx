import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams();

  if (!id) {
    return (
      <Page
        className={classNames(cls.ArticleDetailsPage, {}, [className])}
      >
        {t('article_not_found')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader
      reducers={reducers}
    >
      <Page
        className={classNames(cls.ArticleDetailsPage, {}, [className])}
      >
        <VStack gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
