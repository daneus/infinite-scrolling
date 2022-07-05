import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const WordsDisplay = dynamic(() => import('../components/WordsDisplay'), {
  ssr: false
});

const App: React.FC = () => {
  return (
    <>
      <Head>
        <title>Infinite scrolling</title>
        <meta
          name="description"
          content="This is a page that implements the infinite scrolling effect using the Intersection Observer API."
        />
      </Head>
      <div className="main-container">
        <WordsDisplay></WordsDisplay>
      </div>
    </>
  );
};
export default App;
