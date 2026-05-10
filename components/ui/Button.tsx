import Link from 'next/link';
import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'accent' | 'primary' | 'light' | 'ghost';

type CommonProps = {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  size?: 'md' | 'lg';
};

type LinkProps = CommonProps & { href: string; type?: never; onClick?: never };
type ButtonProps = CommonProps & {
  href?: undefined;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const variantClass: Record<Variant, string> = {
  accent: 'btn btn--accent',
  primary: 'btn btn--primary',
  light: 'btn btn--light',
  ghost: 'btn btn--ghost',
};

export function Button(props: LinkProps | ButtonProps) {
  const { variant = 'accent', icon, children, className, size, ...rest } = props;
  const sizeClass = size === 'lg' ? 'text-[1.05rem] !py-[0.55rem] !pl-[1.5rem]' : '';
  const cls = cn(variantClass[variant], sizeClass, className);

  const inner =
    variant === 'ghost' ? (
      <>
        {children}
        {icon && <span className="ml-1 inline-flex">{icon}</span>}
      </>
    ) : (
      <>
        <span>{children}</span>
        {icon && <span className="btn__icon">{icon}</span>}
      </>
    );

  if ('href' in props && props.href) {
    const isExternal = /^https?:|^mailto:|^tel:/.test(props.href);
    if (isExternal) {
      return (
        <a href={props.href} className={cls}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={props.href} className={cls}>
        {inner}
      </Link>
    );
  }

  const { type = 'button', onClick } = rest as ButtonProps;
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
