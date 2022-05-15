
import { FC, useState, useCallback, useEffect } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Grid} from '@mui/material';

import UserGreetingsCard from '../../components/dashboard/home/userInfo/UserGreetingsCard';
import Contacts from '../../components/dashboard/home/userInfo/Contacts';
import Notification from '../../components/dashboard/home/notification/Notification';
import News from '../../components/dashboard/home/news/News';

const DashGreetingWrapper = styled('div')`

`
const DashGreetingInfoSection = styled('div')`
`
const DashNotifySection = styled('div')`
`
const DashNewsSection = styled('div')`
`

const Home = () => {

  return (
    <DashGreetingWrapper
      sx={{marginBottom: '70px'}}
    >
      <Grid container spacing={2} columns={12}>

        <Grid container item sm={12} md={7} lg={4} justifyContent="center">
          <DashGreetingInfoSection>
            <UserGreetingsCard />
            <Contacts />
          </DashGreetingInfoSection>
        </Grid>

        <Grid container spacing={2} item sm={12} md={5} lg={8} justifyContent="center">
          <Grid container item xs={12} md={12} lg={6} justifyContent="center">
            <DashNotifySection>
              <Notification />
            </DashNotifySection>
          </Grid>

          <Grid item container xs={12} md={12} lg={6} justifyContent="center">
            <DashNewsSection>
              <News />
            </DashNewsSection>
          </Grid>
        </Grid>
      </Grid>
    </DashGreetingWrapper>
  )
}

export default Home;