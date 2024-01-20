import { memo, useMemo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField,
  order: SortOrder,
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort
  } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption[]>(() => [
    {
      value: 'asc',
      content: t('asc'),
    },
    {
      value: 'desc',
      content: t('desc'),
    }
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('by_created_date')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('by_title')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('by_views')
    }
  ], [t]);

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField);
  }, [onChangeSort]);

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder);
  }, [onChangeOrder]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        label={t('sort_by')}
        options={sortFieldOptions}
        value={sort}
        onChange={changeSortHandler}
      />
      <Select
        label={t('by')}
        options={orderOptions}
        value={order}
        onChange={changeOrderHandler}
      />
    </div>
  );
});
