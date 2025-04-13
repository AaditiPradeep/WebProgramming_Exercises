import React from 'react';

// 1. (i) Without JSX
export const HelloWithoutJSX = () => {
  return React.createElement('h1', null, 'Hello, React!');
};

// 1. (ii) With JSX
export const HelloWithJSX = () => {
  return <h1>Hello, React!</h1>;
};

// 1. (iii) Message from variable
export const HelloWithVariable = () => {
  const message = "Welcome to React!";
  return <h1>{message}</h1>;
};

// 2. Dynamic list of fruits
export const FruitList = () => {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

// 3. Styled message using inline CSS
export const StyledMessage = () => {
  const style = {
    color: 'blue',
    backgroundColor: 'lightyellow',
    padding: '10px',
    borderRadius: '5px',
    fontWeight: 'bold',
  };
  return <p style={style}>This is a styled message!</p>;
};

// 4. Sum of squares of two numbers
export const SumOfSquares = () => {
  const a = 3, b = 4;
  const sum = a * a + b * b;
  return <p>Sum of squares: {sum}</p>;
};

// 5. Conditional greeting
export const ConditionalGreeting = () => {
  const isMorning = true;
  return <h2>{isMorning ? 'Good Morning' : 'Good Evening'}</h2>;
};

// 6. Current day of the week
export const CurrentDay = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  return <p>Today is: {days[today]}</p>;
};

// 7. Prime number checker
export const PrimeChecker = ({ number }) => {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <p>
      {number} is {isPrime(number) ? 'a Prime Number' : 'not a Prime Number'}
    </p>
  );
};

// 8. TemperatureConverter class component
export class TemperatureConverter extends React.Component {
  convertToFahrenheit = () => {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
      document.getElementById('fahrenheit').value = ((celsius * 9) / 5 + 32).toFixed(2);
    } else {
      document.getElementById('fahrenheit').value = '';
    }
  };

  convertToCelsius = () => {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
      document.getElementById('celsius').value = (((fahrenheit - 32) * 5) / 9).toFixed(2);
    } else {
      document.getElementById('celsius').value = '';
    }
  };

  render() {
    return (
      <div>
        <h3>Simple Temperature Converter</h3>
        <input
          type="number"
          id="celsius"
          placeholder="Celsius"
          onChange={this.convertToFahrenheit}
        />
        <br />
        <input
          type="number"
          id="fahrenheit"
          placeholder="Fahrenheit"
          onChange={this.convertToCelsius}
        />
      </div>
    );
  }
}



// 9. Reverse string and check palindrome
export const ReverseString = ({ input }) => {
  const reversed = input.split('').reverse().join('');
  const isPalindrome = input.toLowerCase() === reversed.toLowerCase();
  return (
    <div>
      <p>Reversed: {reversed}</p>
      <p>{isPalindrome ? 'Palindrome' : 'Not a Palindrome'}</p>
    </div>
  );
};

// 10. Random number generator
export class RandomNumberGenerator extends React.Component {
  generate = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById('random-number').innerText = `Random Number: ${randomNum}`;
  };

  render() {
    return (
      <div>
        <button onClick={this.generate}>Generate Random Number</button>
        <p id="random-number"></p>
      </div>
    );
  }
}

// 11. Leap year checker
export const LeapYearChecker = ({ year }) => {
  const isLeap =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  return <p>{year} is {isLeap ? 'a Leap Year' : 'not a Leap Year'}</p>;
};

// 12. UserGreeting class component
export class UserGreeting extends React.Component {
  render() {
    const { firstName, lastName } = this.props;
    return <h2>Hello, {firstName} {lastName}!</h2>;
  }
}
