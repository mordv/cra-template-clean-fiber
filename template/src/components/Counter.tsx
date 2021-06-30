import React from 'react';
import { AppState, useAppStore } from '../state/state';
import shallow from 'zustand/shallow';
import styled from 'styled-components';
import { TestComponent } from './TestComponent';

const selector = ({ dec, inc, counter }: AppState) => ({ dec, inc, counter });

export const Counter: React.FC = () => {
  const { counter, inc, dec } = useAppStore(selector, shallow);

  return (
    <Flex>
      <button onClick={dec}>-</button>
      <TestComponent name={counter.toString()} />
      <button onClick={inc}>+</button>
    </Flex>
  );
};

const Flex = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;
