import { ColorValue } from '../../../../helpers/colors';

export type ColumnName =
  | 'NCTId'
  | 'BriefTitle'
  | 'Condition'
  | 'LastUpdateSubmitDate';

export type Study = {
  Rank: number;
  NCTId: string[];
  BriefTitle: string[];
  Condition: string[];
  LastUpdateSubmitDate: string[];
};

export type ApiResponse = {
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

export enum DateSort {
  descending = 'descending',
  ascending = 'ascending',
}

export type ConditionsCountDictionary = {
  [conditionName: string]: number;
};

export type TopCondition = {
  label: string;
  count: number;
  color?: string;
};

export type TopConditions = TopCondition[];
