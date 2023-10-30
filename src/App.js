import React from 'react';
import KnobRegulator from './components/regulator';
import HighLowPass from './components/pass';
import ButtonFooter from './components/buttons';

export default function App() {
  return (
    <>
      <KnobRegulator />
      <HighLowPass />
      <ButtonFooter />
      <p>aa aaa aaa aaa</p>
    </>
  );
}
