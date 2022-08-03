/* eslint-disable jsx-a11y/anchor-is-valid */
import Link, { LinkProps } from "next/link";
import React, { forwardRef } from "react";

type EnhancedLinkProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  target?: string;
  rel?: string;
} & LinkProps;

// eslint-disable-next-line react/display-name
export const StyledAnchor = forwardRef<HTMLAnchorElement, EnhancedLinkProps>(
  (
    { as, passHref, prefetch, href, children, className, target, ...rest },
    ref
  ) => (
    <Link href={href} as={as} passHref={passHref} prefetch={prefetch}>
      <a
        {...rest}
        target={target}
        ref={ref}
        className={`border-b-2 border-b-primary-base hover:border-b-primary-light transition-all ${
          className ?? ""
        }`}
      >
        {children}
      </a>
    </Link>
  )
);
