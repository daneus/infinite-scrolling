import React from 'react';

interface Props {
  word: string;
}

const WordContainer = React.forwardRef<HTMLHeadingElement, Props>(
  ({ word }, ref) => {
    return (
      <h1 ref={ref} className={'word-container'}>
        {word}
      </h1>
    );
  }
);

WordContainer.displayName = 'WordContainer';

export default React.memo(WordContainer);
