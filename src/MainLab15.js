import React from 'react';

import Header from './lab15/Header';
import Content from './lab15/Content';
import Footer from './lab15/Footer';
import StyledButton from './lab15/StyledButton';
import LifecycleDemo from './lab15/LifecycleDemo';
import CounterUseState from './lab15/CounterUseState';
import CounterUseReducer from './lab15/CounterUseReducer';
import JokeFetcher from './lab15/JokeFetcher';
import FocusInput from './lab15/FocusInput';
import { ThemeProvider } from './lab15/ThemeContext';
import ThemedBox from './lab15/ThemedBox';
import ThemeToggleButton from './lab15/ThemeToggleButton';
import Parent from './lab15/Parent';
import FormUseState from './lab15/FormUseState';
import FormUseRef from './lab15/FormUseRef';

function Lab15() {
  return (
    <div style={{ padding: '20px' }}>
      <Header title="Welcome to the React App" />
      <Content />
      <Footer />
      <StyledButton />
      <LifecycleDemo />
      <CounterUseState />
      <CounterUseReducer />
      <JokeFetcher />
      <FocusInput />
      <ThemeProvider>
        <ThemeToggleButton />
        <ThemedBox />
      </ThemeProvider>
      <Parent />
      <FormUseState />
      <FormUseRef />
    </div>
  );
}

export default Lab15;
