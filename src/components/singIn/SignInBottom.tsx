import { styled } from '@mui/material/styles';

const BottomWrapper = styled('div')`
  max-width: 343px;
  font-family: 'Raleway';
  text-align: center;
`
const BottomText1 = styled('p')`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-decoration-line: underline;
  margin: 24px 0;
  color: #2F80ED;
`
const BottomText2 = styled('p')`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #848484;
`
const SignInBottom = () => {

  return (
    <BottomWrapper>
      <BottomText1>Политика конфеденциальности</BottomText1>
      <BottomText2>Все права защищены © 2021</BottomText2>
    </BottomWrapper>
  )
}

export default SignInBottom;