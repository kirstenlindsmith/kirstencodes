import React from 'react';
import { ColumnName, Study, DateSort } from '../../types';
import useMobile from '../../../../../../hooks/useMobile';
import { ArrowLeftButton } from '../../../../../Shared/Button/CustomButtons';
import LoadingAnimation from '../../../../../Shared/LoadingAnimation';
import {
  Container,
  Table,
  TableHeader,
  TableCell,
  dateSortStyle,
} from './StudyTable.style';

type Props = {
  loading: boolean;
  studyData: Study[];
};

const ConditionsTable = ({ loading, studyData }: Props) => {
  const isMobile = useMobile();
  const [dateSort, setDateSort] = React.useState<DateSort>(DateSort.descending);
  const descendingDate = React.useMemo(
    () => dateSort === DateSort.descending,
    [dateSort]
  );

  const sortByDate = (data: Study[]) =>
    data.sort((first, second) => {
      const firstDate = new Date(first.LastUpdateSubmitDate[0]).getTime();
      const secondDate = new Date(second.LastUpdateSubmitDate[0]).getTime();
      return descendingDate ? secondDate - firstDate : firstDate - secondDate;
    });

  const tableColumns: {
    name: ColumnName;
    label: string;
    style?: React.CSSProperties;
  }[] = [
    {
      name: 'NCTId' as ColumnName,
      label: 'NCT ID',
      style: isMobile ? {} : { width: '6.83rem' },
    },
    { name: 'BriefTitle' as ColumnName, label: 'Study Title' },
    { name: 'Condition' as ColumnName, label: 'Conditions' },
    {
      name: 'LastUpdateSubmitDate' as ColumnName,
      label: 'Last Update',
      style: isMobile
        ? {}
        : {
            width: '8.5rem',
            textAlign: 'center',
            paddingLeft: '1.1rem',
          },
    },
  ];

  return (
    <Container>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <Table>
          <TableHeader>
            <tr>
              {tableColumns.map((column, i) => (
                <th key={`column-${i}`}>
                  {column.label}
                  {column.label === 'Last Update' ? (
                    <ArrowLeftButton
                      onClick={() =>
                        setDateSort(
                          descendingDate
                            ? DateSort.ascending
                            : DateSort.descending
                        )
                      }
                      aria-label={`Sort by ${
                        descendingDate ? 'oldest' : 'newest'
                      } first`}
                      style={dateSortStyle(descendingDate)}
                    />
                  ) : null}
                </th>
              ))}
            </tr>
          </TableHeader>
          <tbody>
            {sortByDate(studyData).map((row, i) => (
              <tr key={`row-${i}`}>
                {tableColumns.map((column, j) => {
                  if (row[column.name].length > 0) {
                    return (
                      <TableCell key={`cell-${i}${j}`} style={column.style}>
                        {row[column.name].join(', ')}
                      </TableCell>
                    );
                  } else
                    return (
                      <TableCell key={`TableCell-${i}${j}`}>N/A</TableCell>
                    );
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ConditionsTable;
