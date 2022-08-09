import React from 'react';
import styled from 'styled-components';
import { colorValues } from '../../../../../../helpers/colors';

export const Container = styled.div`
  height: 100%;
  overflow: scroll;
  padding-right: 1rem;
`;

export const Table = styled.table`
  position: relative;
  width: 100%;
  svg {
    min-width: 1.5rem;
  }
`;

export const TableHeader = styled.thead`
  th {
    position: sticky;
    background-color: ${colorValues.white};
    top: 0;
    padding-bottom: 0.5rem;
  }
`;

export const TableCell = styled.td`
  max-width: 12.5rem;
  white-space: nowrap;
  overflow: scroll;
  padding: 0.5rem;
  font-size: 0.875rem;
`;

export const dateSortStyle = (
  descendingDate: boolean
): React.CSSProperties => ({
  left: undefined,
  right: 0,
  top: 'auto',
  height: '1.25rem',
  width: '1.25rem',
  transform: `rotate(${descendingDate ? 270 : 90}deg)`,
});
