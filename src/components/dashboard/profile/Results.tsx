import { styled } from '@mui/material/styles';
import { CustomButton } from '../../../components/custom/Button';
import {
  MiniCardWrapper,
  MiniCardTextWrapper,
  MiniCardText,
} from '../../custom/cards/MiniCard';

type NewsTextProp = {
  text1: string;
  text2: string;
  text3: string;
}
const data: NewsTextProp[] = [
  {
    text1: '21.02.2021',
    text2: 'Чемпионата и Первенства Казахстана по киокушинкай',
    text3: 'Результат: 1 место / Баллы: 20',
  },
  {
    text1: '21.02.2021',
    text2: 'Чемпионата и Первенства Казахстана по киокушинкай',
    text3: 'Результат: 1 место / Баллы: 20',
  },
  {
    text1: '21.02.2021',
    text2: 'Чемпионата и Первенства Казахстана по киокушинкай',
    text3: 'Результат: 1 место / Баллы: 20',
  },
]
type TextProps = {
  fontWeight: number
  fontSize: string
  lineheight: string
  color: string
  margin?: string
}
const ProfileText = styled('p')<TextProps>`
  font-weight: ${props => (props.fontWeight)};
  font-size: ${props => (props.fontSize)};
  line-height: ${props => (props.lineheight)};
  color: ${props => (props.color)};
  margin: ${props => (props.margin)};
`

const ResultWrapper = styled('div')`
  width: 100%;
  margin-top: 34px;
`
const ResultTitleWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
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
      flex_direction={'column'}
      width={'100%'}
      background={'#FFFFFF'}
      box_shadow={'0px 0px 30px rgba(0, 0, 0, 0.03)'}
      border_radius={'10px'}
      padding={'12px'}
      margin={'0 0 14px 0'}
      key={index}>
      <MiniCardTextWrapper>
        <MiniCardText
          fontWeight={700}
          fontSize={'14px'}
          lineheight={'16px'}
          color={'#6D4EEA'}
          margin={'0 0 6px 0'}
        >{item.text1}</MiniCardText>
        <MiniCardText
          fontWeight={400}
          fontSize={'14px'}
          lineheight={'16px'}
          color={'#272727'}
        >{item.text2}</MiniCardText>
        <MiniCardText
          fontWeight={400}
          fontSize={'14px'}
          lineheight={'16px'}
          color={'#848484'}
        >{item.text3}</MiniCardText>
      </MiniCardTextWrapper>
    </MiniCardWrapper>
  )
}

const Results = () => {

  return (
    <ResultWrapper>
      <ResultTitleWrapper>
          <ProfileText
            fontWeight={700}
            fontSize={'18px'}
            lineheight={'21px'}
            color={'#000000'}
            margin={'0'}
          >Мои результаты</ProfileText>
          <ProfileText
            fontWeight={400}
            fontSize={'14px'}
            lineheight={'16px'}
            color={'#272727'}
            margin={'0'}
          >Рейтинг: 105</ProfileText>
      </ResultTitleWrapper>
      {
        (data as NewsTextProp[]).map((item, index) => (
          <Card item={item} index={index} />
        ))
      }
      <CustomButton
        width={'100%'}
        height={'54px'}
        text={'Добавить результат'}
        backColor={
          'linear-gradient(69.51deg, #3E83E1 0%, #7B3EED 100%)'
        }
        position={'center'}
      />
    </ResultWrapper>
  )
}

export default Results;