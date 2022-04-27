import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import logOutIcon from '../../images/icons/logoutIcon.png';

const Icon = styled('img')`
  margin-left: 11px;
`

const TopBar = () => {

  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static" sx={{boxShadow: 'none'}}>
        <Toolbar sx={{background: '#f0f4f7'}}>
          <Typography variant="h6" component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'Raleway',
              fontWeight: '700',
              fontSize: '18px',
              color: '#000000',
              paddingLeft: '25px'
            }}>
            Hustle Free Pro
          </Typography>
          <Button color="inherit" sx={{color: '#848484', textTransform: 'capitalize'}}>Выход <Icon src={logOutIcon} /></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopBar;