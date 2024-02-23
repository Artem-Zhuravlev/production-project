import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/ClassNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size = 100,
    alt,
  } = props;

  const mods: Mods = {

  };

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const fallback = <Skeleton  width={size} height={size} border="50%" />
  const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />

  return (
    <AppImage
      src={src}
      className={classNames(cls.Avatar, mods, [className])}
      style={styles}
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
};
