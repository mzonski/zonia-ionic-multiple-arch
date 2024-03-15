import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

import PropTypes from "prop-types";

type Level = 0 | 1 | 2 | 3 | 4;

interface AdaptiveFlexBoxProps {
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  padding?: Level;
  margin?: Level;
  gap?: Level;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  fill?: boolean;
}

const AdaptiveFlexBox = ({
                           children,
                           align = 'center',
                           direction = 'column',
                           padding = 0,
                           margin = 0,
                           gap = 0,
                           justify = 'start',
                           wrap = 'nowrap',
                           fill
                         }: PropsWithChildren<AdaptiveFlexBoxProps>) => {
  return (
    <div
      className={clsx(
        ['adaptive-flex-box'],
        [`flex-${direction}`],
        [`flex-align-${align}`],
        [`flex-justify-${justify}`],
        [`flex-${wrap}`],
        [`p-${padding}`],
        [`m-${margin}`],
        [`g-${gap}`],
      )}
    >
      {children}
    </div>
  );
};

AdaptiveFlexBox.displayName = 'AdaptiveFlexBox';

AdaptiveFlexBox.propTypes = {
  align: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'baseline']),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  padding: PropTypes.oneOf([0, 1, 2, 3, 4]),
  margin: PropTypes.oneOf([0, 1, 2, 3, 4]),
  gap: PropTypes.oneOf([0, 1, 2, 3, 4]),
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
};


export default AdaptiveFlexBox;


