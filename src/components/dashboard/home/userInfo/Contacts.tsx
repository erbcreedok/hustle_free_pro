import { FC, ReactElement, useState, useCallback, useEffect } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  MiniCardWrapper,
  MiniCardTextWrapper,
  MiniCardText,
} from '../../../custom/cards/MiniCard';

type ContactsTextProps = {
    title: string, // ?????????????????
    subtitle: string, // ????????????
}

const contactsData: ContactsTextProps[] = [
  {
    title: 'Как оплатить тренировки?',
    subtitle: 'Информация о стоимости и способах оплаты тренировок'
  },
  {
    title: 'Контакты ',
    subtitle: 'Мкр. Самал, д. 2/3, 3 этаж, +7 (777) 777-77-77'
  },
]

const ContactsWrapper = styled('div')`
  max-width: 343px;
`

type CardProps = {// ?????? ANY ?????????
  item: any;
  index: number;
}
const Card = ({item, index} : CardProps) => {

  return (
    <MiniCardWrapper
      display={'flex'}
      justify_content={'space-between'}
      width={'343px'}
      border= {'1px dashed #CACACA'}
      box_shadow={'0px 0px 30px rgba(0, 0, 0, 0.03)'}
      border_radius={'10px'}
      padding={'14px 16px'}
      align_items={'center'}
      margin={'0 0 14px 0'}
      key={index}>
      <MiniCardTextWrapper>
        <MiniCardText
          fontWeight={700}
          fontSize={'14px'}
          lineheight={'16px'}
          color={'#2F80ED'}
          margin={'0 10px 4px 0'}
          text_decoration={'underline'}
        >{item.title}</MiniCardText>
        <MiniCardText
          fontWeight={400}
          fontSize={'12px'}
          lineheight={'14px'}
          color={'#848484'}
          margin={'0 10px 0 0 '}
        >{item.subtitle}</MiniCardText>
      </MiniCardTextWrapper>
      <ArrowForwardIosIcon sx={{
        color: '#848484',
        width: '15px',
        height: '20px',
      }} />
    </MiniCardWrapper>
  )
}

const Contacts = () => {

  return (
    <ContactsWrapper>
      {
        (contactsData as ContactsTextProps[]).map((item, index) => (
          <Card item={item} index={index} />
        ))
      }

    </ContactsWrapper>
  )
}

export default Contacts;