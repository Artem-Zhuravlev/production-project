import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileReadonly,
  profileActions,
  updateProfileData
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text
        title={t('profile')}
      />
      {readonly ? (
        <Button
          theme={ThemeButton.OUTLINE}
          className={cls.editBtn}
          onClick={onEdit}
        >
          {t('edit')}
        </Button>
      ) : (
        <>
          <Button
            theme={ThemeButton.OUTLINE_RED}
            className={cls.editBtn}
            onClick={onCancelEdit}
          >
            {t('cancel')}
          </Button>
          <Button
            theme={ThemeButton.OUTLINE}
            className={cls.saveBtn}
            onClick={onSave}
          >
            {t('save')}
          </Button>
        </>
      )}
    </div>
  );
};
