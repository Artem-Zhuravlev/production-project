import { classNames, Mods } from 'shared/lib/classNames/ClassNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

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
    size,
    alt,
  } = props;

  const mods: Mods = {

  };

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    };
  }, [size]);

  return (
    <img
      src={src}
      className={classNames(cls.Avatar, mods, [className])}
      style={styles}
      alt={alt}
    />
  );
};
