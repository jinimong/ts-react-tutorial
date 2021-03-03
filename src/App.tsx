import React from 'react';
import ReducerSample from './ReducerSample';
import { SamepleProvider } from './SampleContext';

function App() {
  return (
    <SamepleProvider>
      <ReducerSample />
    </SamepleProvider>
  );
}

export default App;
