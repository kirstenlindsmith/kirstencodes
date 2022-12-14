import styled from 'styled-components';

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const ChartTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

export const Chart = styled.div<{ hide?: boolean }>`
  display: ${({ hide }) => (hide ? 'none' : 'block')};
`;
