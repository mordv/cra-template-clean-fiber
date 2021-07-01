import React from 'react';
import { ApplicationScene } from '../scene/ApplicationScene';
import { Counter } from '../components/Counter';

export const HomePage: React.FC = () => (
  <ApplicationScene>
    <Counter />
  </ApplicationScene>
);
