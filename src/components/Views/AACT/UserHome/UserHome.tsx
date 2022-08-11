import React from 'react';
import { Study, ApiResponse } from './types';
import useSnackbar from '../../../../hooks/useSnackbar';
import useMobile from '../../../../hooks/useMobile';
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
  const [tableData, setTableData] = React.useState<Study[]>([]);
  const [graphData, setGraphData] = React.useState<Study[]>([]);

  const endpoint = `https://www.clinicaltrials.gov/api/query/study_fields?fmt=json&fields=NCTId,BriefTitle,Condition,LastUpdateSubmitDate&min_rnk=1&max_rnk=1000`;

  const fetchData = async () => {
    try {
      if (!loading) setLoading(true);
      const rawResponse = await fetch(endpoint);
      const { StudyFieldsResponse }: ApiResponse = await rawResponse.json();
      setTableData(StudyFieldsResponse.StudyFields.slice(0, 100));
      setGraphData(StudyFieldsResponse.StudyFields);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      snackbar?.setErrorMessage(
        'Something went wrong fetching from the AACT API. Please refresh and try again.'
      );
      console.error('AACT fetch error:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const tableCardStyles: React.CSSProperties = {
    width: isMobile ? 'auto' : '50rem',
    maxHeight: isMobile ? '50%' : undefined,
    overflow: 'auto',
    marginRight: isMobile ? 0 : '1.5rem',
    marginBottom: isMobile ? '1.5rem' : 0,
    paddingRight: '0.25rem',
    paddingBottom: '1.5rem',
  };

  return (
    <UserHomePage>
      <HamburgerMenu />
      <MainContainer>
        <Header />
        <PageBody>
          <BodyCard style={tableCardStyles}>
            <StudyTable loading={loading} studyData={tableData} />
          </BodyCard>
          <BodyCard>
            <PieChart loading={loading} studyData={graphData} />
          </BodyCard>
        </PageBody>
      </MainContainer>
      <Footer />
    </UserHomePage>
  );
};

export default UserHome;
