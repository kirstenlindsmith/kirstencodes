import React from 'react';
import { Study, ApiResponse } from './types';
import useSnackbar from '../../../../hooks/useSnackbar';
import useDebounce from '../../../../hooks/useDebounce';
import useMobile from '../../../../hooks/useMobile';
import Input from '../../../Shared/Input';
import HamburgerMenu from './components/HamburgerMenu';
import Header from './components/Header';
import StudyTable from './components/StudyTable';
import PieChart from './components/PieChart';
import Footer from './components/Footer';
import {
  UserHomePage,
  MainContainer,
  PageBody,
  BodyCard,
} from './UserHome.style';

const UserHome = () => {
  const isMobile = useMobile();
  const snackbar = useSnackbar();
  const [loading, setLoading] = React.useState(true);
  const [studyData, setStudyData] = React.useState<Study[]>([]);
  const [searchText, setSearchText] = React.useState('');
  const debouncedSearchText = useDebounce(searchText, 500);

  const endpoint = `https://www.clinicaltrials.gov/api/query/study_fields?fmt=json&fields=NCTId,BriefTitle,Condition,LastUpdateSubmitDate&min_rnk=1&max_rnk=1000`;

  const fetchData = async () => {
    try {
      if (!loading) setLoading(true);
      const rawResponse = await fetch(endpoint);
      const { StudyFieldsResponse }: ApiResponse = await rawResponse.json();
      setStudyData(StudyFieldsResponse.StudyFields);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      snackbar?.setErrorMessage(
        'Something went wrong fetching from the AACT API. Please refresh and try again.'
      );
      console.error('AACT fetch error:', error);
    }
  };

  const lowercase = React.useCallback(
    (value: string) => value.toLocaleLowerCase(),
    []
  );
  React.useEffect(() => {
    const filteredData = studyData.filter(
      ({ NCTId, BriefTitle, Condition, LastUpdateSubmitDate }) =>
        NCTId.some((item) =>
          lowercase(item).includes(lowercase(debouncedSearchText))
        ) ||
        BriefTitle.some((item) =>
          lowercase(item).includes(lowercase(debouncedSearchText))
        ) ||
        Condition.some((item) =>
          lowercase(item).includes(lowercase(debouncedSearchText))
        ) ||
        LastUpdateSubmitDate.some((item) =>
          lowercase(item).includes(lowercase(debouncedSearchText))
        )
    );
    setStudyData(filteredData);
  }, [debouncedSearchText]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const tableCardStyles: React.CSSProperties = React.useMemo(
    () => ({
      width: isMobile ? 'auto' : '50rem',
      maxHeight: isMobile ? '50%' : undefined,
      overflow: 'auto',
      marginRight: isMobile ? 0 : '1.5rem',
      marginBottom: isMobile ? '1.5rem' : 0,
      paddingRight: '0.25rem',
      paddingBottom: '1.5rem',
    }),
    [isMobile]
  );

  const searchInputStyles: React.CSSProperties = React.useMemo(
    () => ({
      width: isMobile ? 'calc(100% - 3.5rem)' : '25%',
      position: 'absolute',
      top: isMobile ? '5rem' : '7rem',
      left: isMobile ? '1.75rem' : '7rem',
    }),
    [isMobile]
  );

  return (
    <UserHomePage>
      <HamburgerMenu />
      <MainContainer>
        <Header />
        <PageBody>
          <Input
            name='Search'
            label='Search'
            placeholder='Type a field value to search...'
            value={searchText}
            setValue={setSearchText}
            wrapperStyle={searchInputStyles}
          />
          <BodyCard style={tableCardStyles}>
            <StudyTable loading={loading} studyData={studyData} />
          </BodyCard>
          <BodyCard>
            <PieChart loading={loading} studyData={studyData} />
          </BodyCard>
        </PageBody>
      </MainContainer>
      <Footer />
    </UserHomePage>
  );
};

export default UserHome;
