import { FC, ReactElement, useState, useCallback, useEffect } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";

import HomeIcon from '../../../images/icons/dashboard/home.svg';
import ChartIcon from '../../../images/icons/dashboard/chart.svg';
import CalendarIcon from '../../../images/icons/dashboard/calendar.svg';
import BagIcon from '../../../images/icons/dashboard/shop.svg';
import UserIcon from '../../../images/icons/dashboard/profile.svg';


type ItemProps = {
  name: string
}

const menuData: ItemProps[] = [
  {
    name: 'Главная'
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
  margin-right: 14px;
`
const SideBarWrapper = styled('div')`
  width: 297px;
  /* @media (max-width: 768px) {
    display: "none";
  } */
`
const Ul = styled('ul')`
  list-style-type: none;
  padding: 0 0 0 51px;
  margin: 0;
`
const Li = styled('li')`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #848484;
  display: flex;
  align-items: center;
  &:first-of-type {
    padding-top: 0;
  };
  &:last-child {
    padding-bottom: 0;
  }
  padding: 30px 0;
`
const SideBar = () => {
  // console.log(menuData);

  function renderItems(items: ItemProps[]) {

    const item = items.map((item) => {
      return (
        <Li key={item.name}>
          {
            item.name === 'Главная' ? <Icon src={HomeIcon} />
              : item.name === 'Активность' ? <Icon src={ChartIcon} />
                : item.name === 'Расписание' ? <Icon src={CalendarIcon} />
                  : item.name === 'Магазин' ? <Icon src={BagIcon} />
                    : item.name === 'Профиль' ? <Icon src={UserIcon} />
                      : null
          }
          { item.name }
        </Li>
      )
    })
    return (
      <Ul>
        {item}
      </Ul>
    )
  }
  const items = renderItems(menuData);

  return (
    <SideBarWrapper
      sx={{
      "@media (max-width: 768px)": {
          display: "none",
        },
      }}
    >
        {items}
    </SideBarWrapper>
  )
}

export default SideBar;