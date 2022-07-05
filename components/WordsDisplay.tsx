import React, { useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useHandleContainers from '../hooks/useHandleContainers';
import WordContainer from './WordContainer';

const WordsDisplay: React.FC = () => {
  const [words, addContainers] = useHandleContainers();

  const observer = useRef<IntersectionObserver>();

  const lastContainerRef = useCallback(
    (lastContainer: HTMLHeadingElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            addContainers();
          }
        },
        { rootMargin: '0px 0px 400px 0px' }
      );
      if (lastContainer) observer.current.observe(lastContainer);
    },
    [addContainers]
  );

  return (
    <>
      {words.map((individualWord, index) => {
        if (words.length === index + 1) {
          return (
            <WordContainer
              ref={lastContainerRef}
              key={uuidv4()}
              word={individualWord}
            />
          );
        }
        return <WordContainer key={uuidv4()} word={individualWord} />;
      })}
    </>
  );
};

export default WordsDisplay;
