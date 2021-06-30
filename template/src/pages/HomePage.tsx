import React from 'react';
import { ApplicationScene } from '../scene/SegmentationScene';
import { Counter } from '../components/Counter';

export const HomePage: React.FC = () => (
  <ApplicationScene>
    <Counter />
  </ApplicationScene>
);
