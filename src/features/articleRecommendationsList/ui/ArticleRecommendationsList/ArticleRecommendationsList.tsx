import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { rtkApi } from 'shared/api/rtkApi';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';


interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { isLoading, data: articles, error} = useArticleRecommendationsList(4);

  if (isLoading || error || !articles) { return null; }
  
  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('recommendations')}
      />
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        virtualized={false}
      />
    </VStack>
  );
});