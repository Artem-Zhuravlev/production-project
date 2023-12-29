import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text
          title={t('profile')}
        />
        <Button
          theme={ThemeButton.OUTLINE}
          className={cls.editBtn}
        >
          {t('edit')}
        </Button>
      </div>
      <div
        className={cls.data}
      >
        <Input
          value={data?.first}
          placeholder={t('your_name')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('your_lastname')}
          className={cls.input}
        />
      </div>
    </div>
  );
};
