import React, { Suspense } from 'react';
import { Quiz } from './views/quiz/quiz.component';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Quiz />
    </Suspense>
  );
}

export default App;
