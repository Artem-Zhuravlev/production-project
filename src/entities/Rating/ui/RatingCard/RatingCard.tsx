import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0
  } = props;
  const { t } = useTranslation();
  const [isOpenModal, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const onAcceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const onCancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <VStack gap={'32'}>
      <Text title={feedbackTitle} />
      <Input placeholder={t('your_feedback')} />
      <HStack gap={'16'} justify={'end'}>
        <Button
          theme={ThemeButton.OUTLINE_RED}
          onClick={onCancelHandler}
        >{t('close')}</Button>
        <Button onClick={onAcceptHandler}>{t('send')}</Button>
      </HStack>
    </VStack>
  );

  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}>
      <VStack align={'center'} gap={'8'}>
        <Text title={title} />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
        <BrowserView>
          <Modal isOpen={isOpenModal} lazy>
            {modalContent}
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isOpenModal} lazy onClose={onCancelHandler}>
            {modalContent}
          </Drawer>
        </MobileView>
      </VStack>
    </Card>
  );
});