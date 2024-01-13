import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/Article';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams();

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
    <div
      className={classNames(cls.ArticleDetailsPage, {}, [className])}
    >
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
