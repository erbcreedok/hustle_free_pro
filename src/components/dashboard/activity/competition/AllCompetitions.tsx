import { FC, useState, useCallback, useEffect } from 'react';
import { Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import CardItemImage from '../../../../images/activity/competition_image.svg';
import useBreakpoint from 'use-breakpoint';
import {
  MediumCardWrapper,
  MediumCardImage,
  MediumCardTextWrapper,
  MediumCardText,
} from '../../../custom/cards/MediumCard';

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 }

type NewsTextProp = {
  text1: string;
  text2: string;
}

const competitionData: NewsTextProp[] = [
  {
    text1: 'AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)',
    text2: '05 июня'
  },
  {
    text1: 'AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)',
    text2: '05 июня'
  },
  {
    text1: 'AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)',
    text2: '05 июня'
  },
  {
    text1: 'AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)',
    text2: '05 июня'
  },
  {
    text1: 'AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)',
    text2: '05 июня'
  },
  {
    text1: 'AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)',
    text2: '05 июня'
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
  fontSize: string
  lineheight: string
  color: string
  margin?: string
}
const Title = styled('h3')<TitleProps>`
  font-weight: ${props => (props.fontWeight)};
  font-size: ${props => (props.fontSize)};
  line-height: ${props => (props.lineheight)};
  color: ${props => (props.color)};
  margin-bottom: ${props => (props.margin)};
`

type CardProps = {// ?????? ANY ?????????
  item: any,
  index: number
}
const Card = ({item, index} : CardProps) => {
  return (
    <MediumCardWrapper
      display={'flex'}
      flex_direction={'column'}
      justify_content={'center'}
      width={'252px'}
      background={'#FFFFFF'}
      box_shadow={'0px 0px 30px rgba(0, 0, 0, 0.03)'}
      border_radius={'10px'}
      padding={'10px'}
      key={index}>
      <MediumCardImage
        border_radius={'10px'}
      />
      <MediumCardTextWrapper>
        <MediumCardText
          fontWeight={700}
          fontSize={'14px'}
          lineheight={'16px'}
          color={'#000000;'}
          margin={'6px 0 4px 0'}
        >{item.text1}</MediumCardText>
        <MediumCardText
          fontWeight={400}
          fontSize={'14px'}
          lineheight={'16px'}
          color={'#848484'}
        >{item.text2}</MediumCardText>
      </MediumCardTextWrapper>
    </MediumCardWrapper>
  )
}

const AllCompetitions = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

  return (
    <Wrapper
      sx={[breakpoint === 'mobile' && {
        marginBottom: '70px'
      }]}
    >
      <TitleWrapper>
        <Title
          fontWeight={700}
          fontSize={'14px'}
          lineheight={'16px'}
          color={'#000000;'}
          margin={'24px'}
        >Соревнования</Title>
      </TitleWrapper>

      <Grid container columns={12}>
        <Grid container item spacing={2} xs={12} md={9} >
          {
            (competitionData as NewsTextProp[]).map((item, index) => (
              <>
                <Grid item xs={6} lg={4}key={index} >
                  {
                    <Card item={item} index={index}/>
                  }
                </Grid>
              </>
            ))
          }
        </Grid>
      </Grid>


    </Wrapper>
  )
}

export default AllCompetitions;