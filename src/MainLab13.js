import React from 'react';
import {
    HelloWithoutJSX,
    HelloWithJSX,
    HelloWithVariable,
    FruitList,
    StyledMessage,
    SumOfSquares,
    ConditionalGreeting,
    CurrentDay,
    PrimeChecker,
    TemperatureConverter,
    ReverseString,
    RandomNumberGenerator,
    LeapYearChecker,
    UserGreeting
  } from './lab13/lab13';

function Lab13() {
    return (
      <div style={{ padding: "20px" }}>
        <HelloWithoutJSX />
        <HelloWithJSX />
        <HelloWithVariable />
        <FruitList />
        <StyledMessage />
        <SumOfSquares />
        <ConditionalGreeting />
        <CurrentDay />
        <PrimeChecker number={7} />
        <TemperatureConverter />
        <ReverseString input="React" />
        <RandomNumberGenerator />
        <LeapYearChecker year={2024} />
        <UserGreeting firstName="John" lastName="Doe" />
      </div>
    );
  }

  export default Lab13;