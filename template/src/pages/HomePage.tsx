import React from 'react';
import { TestComponent } from '../components/TestComponent';
import { Counter } from '../components/Counter';

export const HomePage: React.FC = () => (
  <div>
    <TestComponent name={`Hello world!`} />
    <Counter />
  </div>
);
