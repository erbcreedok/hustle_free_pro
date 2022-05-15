import { FC, useState, useCallback, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import CardImage from '../../../../images/activity/single_partner.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  LargeCardWrapper,
  LargeCardImage,
  LargeCardTextWrapper,
  LargeCardText,
} from '../../../custom/cards/LargeCard';
import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 }

type NewsTextProp = {
  text1: string;
  text2: string;
  text3: string;
}
const data: NewsTextProp[] = [
  {
    text1: '24.01.2021',
    text2: 'Клубные карты уже доступны в продаже',
    text3: 'Arcu hendrerit iaculis himenaeos senectus orci justo, tristique hac conubia erat libero. Ornare dapibus tellus finibus ullamcorper vehicula dis parturient, suscipit praesent aliquam lacinia donec condimentum luctus, imperdiet auctor facilisi enim odio risus. Facilisi auctor eu finibus at cubilia quis venenatis, sed dui sociosqu justo iaculis facilisis molestie vulputate, nullam inceptos elementum pretium amet tincidunt. Felis pellentesque fames venenatis accumsan ullamcorper potenti feugiat ornare aliquet, orci at tristique dolor ultricies maecenas vulputate rhoncus dui mattis, sodales molestie consequat finibus vehicula per montes vitae.',
  },
]

const Wrapper = styled('div')`
  max-width: 674px;
`
const BackTextWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`
const BackText = styled('div')`
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #2F80ED;
`

type CardProps = {// ?????? ANY ?????????
  item: any,
  index: number
}
const Card = ({item, index} : CardProps) => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop'); ///// ПЕРЕРЕНДЕР ??????????

  return (
    <LargeCardWrapper
      display={'flex'}
      flex_direction={'column'}
      justify_content={'center'}
      width={'674px'}
      background={'#FFFFFF'}
      box_shadow={'0px 0px 30px rgba(0, 0, 0, 0.03)'}
      border_radius={'10px'}
      padding={
        breakpoint === 'mobile' ?
        '12px' :  '16px'
      }
      key={index}>
      <LargeCardImage
        border_radius={'10px'}
        width={'100%'}
      />
      <LargeCardTextWrapper>
        <LargeCardText
          fontWeight={400}
          fontSize={'12px'}
          lineheight={'14px'}
          color={'#848484;'}
          margin={'14px 0'}
        >{item.text1}</LargeCardText>
        <LargeCardText
          fontWeight={700}
          fontSize={'18px'}
          lineheight={'21px'}
          color={'#000000'}
          margin={'0 0 14px'}
        >{item.text2}</LargeCardText>
        <LargeCardText
          fontWeight={400}
          fontSize={'14px'}
          lineheight={'21px'}
          color={'#272727'}
        >{item.text3}</LargeCardText>
      </LargeCardTextWrapper>
    </LargeCardWrapper>
  )
}

const SingleNews = () => {

  return (
    <>
      <BackTextWrapper>
        <ArrowBackIcon
          sx={{
            width: '20px',
            height: '12px',
            color: '#2F80ED'
          }}
        />
        <BackText>Назад</BackText>
      </BackTextWrapper>
      <Wrapper
        sx={[
          {marginBottom: '70px'}
        ]}
      >
        {
          (data as NewsTextProp[]).map((item, index) => (
              <Card item={item} index={index} />
          ))
        }
      </Wrapper>
    </>
  )
}

export default SingleNews;