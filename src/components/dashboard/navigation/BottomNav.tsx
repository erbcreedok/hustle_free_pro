import {useState, Fragment, SyntheticEvent} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';

import {HomeIcon, ChartIcon, CalendarIcon, ShopIcon, ProfileIcon} from '../../../images/icons/dashboard/icons';
// import ChartIcon from '../../../images/icons/dashboard/chart.svg';
// import CalendarIcon from '../../../images/icons/dashboard/calendar.svg';
// import ShopIcon from '../../../images/icons/dashboard/shop.svg';
// import ProfileIcon from '../../../images/icons/dashboard/profile.svg';

type ItemProps = {
  name: string
}

const menuData: ItemProps[] = [
  {
    name: 'Главная',
  },
  {
    name: 'Активность'
  },
  {
    name: 'Расписание'
  },
  {
    name: 'Магазин'
  },
  {
    name: 'Профиль'
  },
]

const Icon = styled('img')`
  margin-bottom: 4px;
`

export default function BottomNav() {
  const [value, setValue] = useState('home');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      showLabels
      sx={{
        width: '100%',
        position: "fixed",
        bottom: 0,
        zIndex: 1000,
        padding: '0px 16px',
        "@media (min-width: 769px)": {
          display: "none",
        },
        "& .MuiBottomNavigationAction-label": {
          fontFamily: 'Raleway',
          fontSize: '10px',
          fontWeight: 400,
          lineHeight: '12px',
          marginTop: '4px'
        },
        "& .MuiBottomNavigationAction-label.Mui-selected": {
          color: '#6D4EEA',
        }
      }}
      value={value}
      onChange={handleChange}
    >
      {
        menuData.map((item) => (
          item.name === 'Главная' ?
            <BottomNavigationAction
              key={Math.random()}
              label="Главная"
              value="home"
              icon={<HomeIcon fill={value === 'home' ?'#6D4EEA':'#848484'}/>}
            />
            : item.name === 'Активность' ?
              <BottomNavigationAction
                key={Math.random()}
                label="Активность"
                value="chart"
                icon={<ChartIcon fill={value === 'chart' ?'#6D4EEA':'#848484'} />}
              />
              : item.name === 'Расписание' ?
                <BottomNavigationAction
                  key={Math.random()}
                  label="Расписание"
                  value="calendar"
                  icon={<CalendarIcon fill={value === 'calendar' ?'#6D4EEA':'#848484'} />}
                />
                : item.name === 'Магазин' ?
                  <BottomNavigationAction
                    key={Math.random()}
                    label="Магазин"
                    value="shop"
                    icon={<ShopIcon fill={value === 'shop' ?'#6D4EEA':'#848484'} />}
                  />
                  : item.name === 'Профиль' ?
                    <BottomNavigationAction
                      key={Math.random()}
                      label="Профиль"
                      value="profile"
                      icon={<ProfileIcon fill={value === 'profile' ?'#6D4EEA':'#848484'} />}
                    />
            : null
        ))
      }
    </BottomNavigation>
  );
}