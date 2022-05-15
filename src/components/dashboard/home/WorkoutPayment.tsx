import { FC, useState, useCallback, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import CardImage from '../../../../images/activity/single_partner.png';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


type NewsTextProp = {
  title: string;
  definition: string;
}

const paymentData: NewsTextProp[] = [
  {
    title: 'Перевод на Kaspi счет',
    definition: 'Перевети деньги можно по номеру телефона +7 (777) 777-77-77'
  },
  {
    title: 'Оплата безналичным путем для ЮР.лиц',
    definition: 'Оплатить можно по номеру счета KZ8181818818818181'
  },
]


const Wrapper = styled('div')`
  max-width: 674px;
  background: #FFFFFF;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 16px 15.63px;
`
const Title = styled('h3')`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin: 0 0 14px 0;
`
const SubTitle = styled('p')`
  margin: 14px 0 20px 0;
  font-size: 16px;
`

const DL = styled('dl')`
  font-size: .9rem;
`
const DT = styled('dt')`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`
const DD = styled('div')`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #272727;
  margin-bottom: 20px;
  padding: 0;
  margin-left: 0px;
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
const OL = styled('ol')`
  padding: 0 16px;
  font-weight: bold;
`

const WorkoutPayment = () => {

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

      <Wrapper>
        <Title>Как оплатить тренировки?</Title>
        <SubTitle>Оплатить тренировки можно тремя способами:</SubTitle>
          <OL>
            <DL>
              {
              (paymentData as NewsTextProp[]).map((item, index) => (
                <>
                  <li>
                    <DT>{item.title}</DT>
                    <DD>{item.definition}</DD>
                  </li>
                </>
                ))
              }
            </DL>
          </OL>
      </Wrapper>
    </>
  )
}

export default WorkoutPayment;