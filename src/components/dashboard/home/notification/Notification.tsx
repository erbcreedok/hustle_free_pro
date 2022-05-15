import { FC, ReactElement, useState, useCallback, useEffect } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import {
  MiniCardWrapper,
  MiniCardTextWrapper,
  MiniCardText,
} from '../../../custom/cards/MiniCard';

type NotificationTextProps = {
    date: string, // ?????????????????
    text: string, // ????????????
}

const notificationData: NotificationTextProps[] = [
  {
    date: '24.01.2021',
    text: 'Вы пропустили тренировку, не забудьте посетить ее завтра'
  },
  {
    date: '24.01.2021',
    text: 'Вы пропустили тренировку, не забудьте посетить ее завтра'
  },
  {
    date: '24.01.2021',
    text: 'Вы пропустили тренировку, не забудьте посетить ее завтра'
  },
]

const NotificationWrapper = styled('div')`
  box-sizing: border-box;
  max-width: 343px;
  display: flex;
  flex-direction: column;
`
const NotificationTitle = styled('h3')`
  width: 100%;
  margin: 0 0 14px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`

type CardProps = {// ?????? ANY ?????????
  item: any;
  index: number;
}
const Card = ({item, index} : CardProps) => {

  return (
    <MiniCardWrapper
      display={'flex'}
      justify_content={'center'}
      width={'343px'}
      background={'#FFFFFF'}
      box_shadow={'0px 0px 30px rgba(0, 0, 0, 0.03)'}
      border_radius={'10px'}
      padding={'19px 16px'}
      align_items={'center'}
      margin={'0 0 14px 0'}
      position={'relative'}
      key={index}>
      <MiniCardTextWrapper
        margin={'0 0 0 10px'}
      >
        <MiniCardText
          fontWeight={400}
          fontSize={'12px'}
          lineheight={'14px'}
          color={'#848484'}
          margin={'0 10px 4px 0'}
        >{item.date}</MiniCardText>
        <MiniCardText
          fontWeight={400}
          fontSize={'14px'}
          lineheight={'16px'}
          color={'#272727'}
          margin={'0 15px 0 0'}
        >{item.text}</MiniCardText>
      </MiniCardTextWrapper>
      <CloseIcon
        sx={{
          color: '#848484',
          width: '15px',
          height: '15px',
          position: 'absolute',
          top: '15px',
          right: '15px',
        }}
      />
    </MiniCardWrapper>
  )
}

const Notification = () => {

  return (
    <NotificationWrapper>
      <NotificationTitle>Уведомления</NotificationTitle>
      {
        (notificationData as NotificationTextProps[]).map((item, index) => (
          <Card item={item} index={index} />
        ))
      }
    </NotificationWrapper>
  )
}

export default Notification;