import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/ClassNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Text } from '@/shared/ui/Text';
import { Card, CardTheme } from '@/shared/ui/Card';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;
  const { t } = useTranslation();

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <Text
        title={item.title}
        text={item.description}
      />
    </Card>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="__blank"
      >
        {content}
      </a>
    );
  }

  return content;
});
