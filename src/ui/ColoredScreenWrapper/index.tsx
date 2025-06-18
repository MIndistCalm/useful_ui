import { ReactNode, useMemo } from 'react';
import { clearClassName, getRandomDarkColor } from '../../utils';

interface ColoredScreenWrapperProps {
  className?: string;
  title?: string;
  children?: ReactNode;
  id?: string;
}

export const ColoredScreenWrapper = ({
  className,
  title = '',
  children,
  id,
}: ColoredScreenWrapperProps) => {
  const backgroundColor = useMemo(() => getRandomDarkColor(), []);

  return (
    <div
      id={id}
      className={clearClassName([
        'h-screen flex justify-center items-center relative',
        className,
      ])}
      style={{ backgroundColor }}
    >
      {title && (
        <h1 className="text-white absolute top-5 left-5 text-6xl">{title}</h1>
      )}
      <div>{children}</div>
    </div>
  );
};
