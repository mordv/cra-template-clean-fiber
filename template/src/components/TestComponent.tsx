import React from 'react';
import styled from 'styled-components';

interface TestComponentProps {
  name: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({ name }) => <Text>{name}</Text>;

const Text = styled.div`
  color: ${({ theme: { colors } }) => colors.text};
  font-size: 20px;
`;
