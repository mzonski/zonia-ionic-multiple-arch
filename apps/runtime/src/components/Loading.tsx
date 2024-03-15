import { PropsWithChildren } from 'react';

export interface LoadingProps {
  /**
   * Prop comment
   */
  text?: string;
}

/**
 * Element comment
 */
function Loading({text, children}: PropsWithChildren<LoadingProps>) {
  return <div aria-label={text | 'Loading'}>{children}</div>;
}

export default Loading;

Loading.defaultProps = {
  text: "default",
};
Loading.defaultName = 'RuntimeLoading';
