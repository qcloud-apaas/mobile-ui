import { HTMLAttributes } from 'react';

declare module 'react' {
  interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
  }
}
