import { FC, useState, useCallback, useEffect, Fragment } from 'react';
import { Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import PartnerImage from '../../../../images/activity/partner_image.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useBreakpoint from 'use-breakpoint';
import {
  MediumCardWrapper,
  MediumCardImage,
  MediumCardTextWrapper,
  MediumCardText
} from '../../../custom/cards/MediumCard';
import {
  MiniCardWrapper,
  MiniCardImage,
  MiniCardTextWrapper,
  MiniCardText,
} from '../../../custom/cards/MiniCard';

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

type NewsTextProp = {
  text: string;
}

const partnerData: NewsTextProp[] = [
  {
    text: 'Скидка 20% на продукты питания от Degreen.kz.',
  },
  {
    text: 'Скидка 20% на продукты питания от Degreen.kz.',
  },
  {
    text: 'Скидка 20% на продукты питания от Degreen.kz.',
  },
  {
    text: 'Скидка 20% на продукты питания от Degreen.kz.',
  },
  {
    text: 'Скидка 20% на продукты питания от Degreen.kz.',
  },
  {
    text: 'Скидка 20% на продукты питания от Degreen.kz.',
  },
]

const Wrapper = styled('div')`
  margin-bottom: 34px;
`
const TitleWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

type TitleProps = {
  fontWeight: number
  fontSize: string;
  lineheight: string;
  color: string;
  margin?: string;
}
const Title = styled('h3')<TitleProps>`
  font-weight: ${props => (props.fontWeight)};
  font-size: ${props => (props.fontSize)};
  line-height: ${props => (props.lineheight)};
  color: ${props => (props.color)};
  margin-bottom: ${props => (props.margin)};
`

type MiniCardProps = {// ?????? ANY ?????????
  item: any;
  index: number;
}
const MiniCard = ({item, index} : MiniCardProps) => {

  return (
    <MiniCardWrapper
      display={'flex'}
      justify_content={'center'}
      width={'343px'}
      background={'#FFFFFF'}
      box_shadow={'0px 0px 30px rgba(0, 0, 0, 0.03)'}
      border_radius={'10px'}
      padding={'8px 10px'}
      align_items={'center'}
      margin={'0 0 14px 0'}
      key={index}>
      <MiniCardImage
        width={'71px'}
        height={'71px'}
        border_radius={'10px'}
      />
      <MiniCardTextWrapper
        margin={'0 2px 0 10px'}
      >
        <MiniCardText
          fontWeight={400}
          fontSize={'14px'}
          lineheight={'16px'}
          color={'#272727'}
        >{item.text}</MiniCardText>
      </MiniCardTextWrapper>
      <ArrowForwardIosIcon sx={{
        color: '#848484',
        width: '15px',
        height: '20px',
      }} />
    </MiniCardWrapper>
  )
}

type MeduimCardProps = {// ?????? ANY ?????????
  item: any,
  index: number
}
const MeduimCard = ({item, index} : MeduimCardProps) => {
  return (
    <MediumCardWrapper
      display={'flex'}
      flex_direction={'column'}
      justify_content={'center'}
      width={'327px'}
      background={'#FFFFFF'}
      box_shadow={'0px 0px 30px rgba(0, 0, 0, 0.03)'}
      border_radius={'10px'}
      padding={'12px'}
      key={index}>
      <MediumCardImage
        border_radius={'10px'}
      />
      <MediumCardTextWrapper>
        <MediumCardText
          fontWeight={400}
          fontSize={'14px'}
          lineheight={'16px'}
          color={'#272727'}
          margin={'12px 0 0 0'}
        >{item.text}</MediumCardText>
      </MediumCardTextWrapper>
    </MediumCardWrapper>
  )
}

const AllPartners = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

  return (
    <Wrapper>

      <TitleWrapper>
        <Title
          fontWeight={700}
          fontSize={'18px'}
          lineheight={'21px'}
          color={'#272727'}
          margin={'34px'}
        >Партнеры</Title>
      </TitleWrapper>

      <Grid container columns={12}
        sx={[breakpoint === 'mobile' && {
          marginBottom:'70px',
        }]}
      >
        <Grid container item rowSpacing={1} columnSpacing={2} md={12} lg={11} >
          {
            (partnerData as NewsTextProp[]).map((item, index) => (
              <Fragment key={Date.now() + Math.random()}>
                <Grid container item sm={12} md={6} lg={4}
                  sx={[breakpoint === 'mobile' && { justifyContent: 'center' }]}
                >
                  {
                    breakpoint !== 'mobile' ?
                      <MeduimCard item={item} index={index}/>
                      :
                      <MiniCard item={item} index={index}/>
                    }
                  </Grid>
              </Fragment>
            ))
          }
        </Grid>
      </Grid>


    </Wrapper>
  )
}

export default AllPartners;