import React from 'react';
import useSnackbar from '../../../../../../hooks/useSnackbar';
import { ArrowLeftButton } from '../../../../../Shared/Button/CustomButtons';
import {
  Container,
  Table,
  TableHeader,
  TableCell,
  dateSortStyle,
} from './ConditionsTable.style';

type ColumnName = 'NCTId' | 'BriefTitle' | 'Condition' | 'LastUpdateSubmitDate';

type Study = {
  Rank: number;
  NCTId: string[];
  BriefTitle: string[];
  Condition: string[];
  LastUpdateSubmitDate: string[];
};

type ApiResponse = {
  StudyFieldsResponse: {
    APIVrs: string;
    DataVrs: string;
    Expression: string;
    NStudiesAvail: number;
    NStudiesFound: number;
    MinRank: number;
    MaxRank: number;
    NStudiesReturned: number;
    FieldList: ColumnName[];
    StudyFields: Study[];
  };
};

enum DateSort {
  descending = 'descending',
  ascending = 'ascending',
}

const tableColumns: {
  name: ColumnName;
  label: string;
  style?: React.CSSProperties;
}[] = [
  { name: 'NCTId' as ColumnName, label: 'NCT ID', style: { width: '6.83rem' } },
  { name: 'BriefTitle' as ColumnName, label: 'Study Title' },
  { name: 'Condition' as ColumnName, label: 'Conditions' },
  {
    name: 'LastUpdateSubmitDate' as ColumnName,
    label: 'Last Update',
    style: { width: '8.5rem', textAlign: 'center', paddingLeft: '1.1rem' },
  },
];

const ConditionsTable = () => {
  const snackbar = useSnackbar();
  const [loading, setLoading] = React.useState(true);
  const [tableData, setTableData] = React.useState<Study[]>([]);
  const [dateSort, setDateSort] = React.useState<DateSort>(DateSort.descending);
  const descendingDate = React.useMemo(
    () => dateSort === DateSort.descending,
    [dateSort]
  );
  const endpoint = `https://www.clinicaltrials.gov/api/query/study_fields?fmt=json&fields=NCTId,BriefTitle,Condition,LastUpdateSubmitDate&min_rnk=1&max_rnk=100`;

  const sortByDate = (tableData: Study[]) =>
    tableData.sort((current, next) => {
      const currentDate = new Date(current.LastUpdateSubmitDate[0]).getTime();
      const nextDate = new Date(next.LastUpdateSubmitDate[0]).getTime();
      return descendingDate ? nextDate - currentDate : currentDate - nextDate;
    });

  const fetchData = async () => {
    try {
      if (!loading) setLoading(true);
      const rawResponse = await fetch(endpoint);
      const { StudyFieldsResponse }: ApiResponse = await rawResponse.json();
      const sortedTableData = sortByDate(StudyFieldsResponse.StudyFields);
      setTableData(sortedTableData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      snackbar?.setErrorMessage(
        'Something went wrong fetching from the AACT API! Please refresh and try again.'
      );
      console.error('AACT fetch error:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    setTableData(sortByDate(tableData));
  }, [dateSort]);

  return (
    <Container>
      {loading ? (
        'Loading...'
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
            {tableData.map((row, i) => (
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
