import { FC, useState, useCallback, useEffect } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import BottomNav from '../components/dashboard/navigation/BottomNav';
import SideBar from '../components/dashboard/navigation/SideBar';
import useBreakpoint from 'use-breakpoint';


import Home from './home/Home';
import AllNews from '../components/dashboard/home/news/AllNews';
import SingleNews from '../components/dashboard/home/news/SingleNews';
import WorkoutPayment from '../components/dashboard/home/WorkoutPayment';
import Contacts from '../components/dashboard/home/Contacts';

import Activity from './activity/Activity';
import AllCompetitions from '../components/dashboard/activity/competition/AllCompetitions';
import SingleCompetition from '../components/dashboard/activity/competition/SingleCompetition';
import AllPartners from '../components/dashboard/activity/partners/AllPartners';
import SinglePartner from '../components/dashboard/activity/partners/SinglePartner';

import Timetable from './timetable/Timetable';

import Shop from './shop/Shop';
import SingleProduct from '../components/dashboard/shop/SingleProduct';

import Profile from './profile/Profile';
import EditProfile from '../components/dashboard/profile/EditProfile';
import AddResult from '../components/dashboard/profile/AddResult';

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 }

const DashboardWrapper = styled('div')`
  display: flex;
  margin-top: 38px;
`
const DashSideBarSection = styled('div')`
`
const DashContentSection = styled('div')`
  width: 100%;

`

const Dashboard = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');
  // console.log(123);

  return (
    <>
      {breakpoint === 'mobile' && <BottomNav />}

      <Container maxWidth="xl">
        <DashboardWrapper>
          { breakpoint !== 'mobile' &&
            <DashSideBarSection>
              <SideBar />
            </DashSideBarSection>
          }
          <DashContentSection>

            {/* <Home /> + */}
            {/* <WorkoutPayment /> + */}
            {/* <Contacts /> + */}
            {/* <AllNews /> + */}
            {/* <SingleNews /> + */}

            {/* <Activity /> + */}
            {/* <AllCompetitions /> + */}
            {/* <SingleCompetition /> + */}
            {/* <AllPartners /> + */}
            {/* <SinglePartner /> + */}

            {/* <Timetable /> */}

            {/* <Shop /> + */}
            {/* <SingleProduct /> + */}

            {/* <Profile /> + */}
            {/* <EditProfile /> + */}
            {/* <AddResult /> + */}

          </DashContentSection>

        </DashboardWrapper>
      </Container>
    </>
  )
}

export default Dashboard;