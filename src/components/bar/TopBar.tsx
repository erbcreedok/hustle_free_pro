import { useNavigate, useLocation, NavLink} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import logOutIcon from '../../images/icons/logoutIcon.svg';
import Container from '@mui/material/Container';
import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const Icon = styled('img')`
  margin-left: 11px;
`

const TopBar = () => {
  const { pathname } = useLocation();
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static" sx={{boxShadow: 'none', backgroundColor:
            (pathname === '/' || pathname === '/privacy') ? '#f0f4f7'
              : '#fff',}}>
        <Toolbar>
          <Container maxWidth="xl" sx={{display: 'flex', alignItems: 'center'}}>
          <Typography variant="h6" component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'Raleway',
              fontWeight: '700',
              fontSize: '18px',
              color: '#000000',
              paddingLeft: '28px'
            }}>
            Hustle Free Pro
          </Typography>
          {
            (pathname === '/' || pathname === '/privacy') ?  null
              :<Button color="inherit" sx={{ color: '#848484', textTransform: 'capitalize' }}>Выход <Icon src={logOutIcon} /></Button>

            }
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopBar;