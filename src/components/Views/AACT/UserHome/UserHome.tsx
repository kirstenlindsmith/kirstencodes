import React from 'react';
import { Study, ApiResponse } from './types';
import useSnackbar from '../../../../hooks/useSnackbar';
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
  tableCardStyles,
} from './UserHome.style';

const UserHome = () => {
  const snackbar = useSnackbar();
  const [loading, setLoading] = React.useState(true);
  const [studyData, setStudyData] = React.useState<Study[]>([]);

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

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserHomePage>
      <HamburgerMenu />
      <MainContainer>
        <Header />
        <PageBody>
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
