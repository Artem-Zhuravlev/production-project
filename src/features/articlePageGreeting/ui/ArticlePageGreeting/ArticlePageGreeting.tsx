import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticlePageGreetingProps {
  className?: string;
}

export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlesPageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [dispatch, isArticlesPageWasOpened]);

  const onClose = () => setIsOpen(false);

  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
    >
      <Text
        title={t('welcome_to_articles_page')}
        text={t('articles_with_different_topics')}
      />
    </Modal>
  );
});
