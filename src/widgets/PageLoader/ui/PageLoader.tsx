import { classNames } from 'shared/config/lib/classNames/ClassNames';
import { Loader } from 'shared/config/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};