import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/ClassNames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { getArticleDetailsData } from '@/entities/Article';
import { canEditArticle } from '../../model/selectors/article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(canEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToLIst = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      navigate(getRouteArticleEdit(article?.id));
    }, [article?.id, navigate]);

    return (
      <HStack
        gap="8"
        justify="between"
        className={classNames('', {}, [className])}
      >
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={onBackToLIst}
        >
          {t('back_to_list')}
        </Button>
        {canEdit && (
          <Button
            theme={ThemeButton.OUTLINE}
            onClick={onEditArticle}
          >
            {t('edit')}
          </Button>
        )}
      </HStack>
    );
  },
);
