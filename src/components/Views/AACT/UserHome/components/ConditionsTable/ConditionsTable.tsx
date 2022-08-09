import React from 'react';
import useSnackbar from '../../../../../../hooks/useSnackbar';

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

const tableColumns = [
  { name: 'NCTId' as ColumnName, label: 'NCT ID' },
  { name: 'BriefTitle' as ColumnName, label: 'Study Title' },
  { name: 'Condition' as ColumnName, label: 'Conditions' },
  { name: 'LastUpdateSubmitDate' as ColumnName, label: 'Last Updated' },
];

const ConditionsTable = () => {
  const snackbar = useSnackbar();
  const [loading, setLoading] = React.useState(true);
  const [tableData, setTableData] = React.useState<Study[]>([]);
  const endpoint = `https://www.clinicaltrials.gov/api/query/study_fields?fmt=json&fields=NCTId,BriefTitle,Condition,LastUpdateSubmitDate&min_rnk=1&max_rnk=100`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const rawResponse = await fetch(endpoint);
      const { StudyFieldsResponse }: ApiResponse = await rawResponse.json();
      setTableData(StudyFieldsResponse.StudyFields);
    } catch (error) {
      setLoading(false);
      snackbar?.setErrorMessage(
        'Something went wrong fetching from the AACT API! Please refresh and try again.'
      );
      console.error('AACT fetch error:', error);
    }
  };

  // console.log('table data:', tableData);

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {tableColumns.map((column, i) => (
            <th key={`column-${i}`}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, i) => (
          <tr key={`row-${i}`}>
            {tableColumns.map((column, j) => {
              if (row[column.name].length > 0) {
                return (
                  <td key={`td-${i}${j}`}>{row[column.name].join(', ')}</td>
                );
              } else return <td key={`td-${i}${j}`}>N/A</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConditionsTable;
