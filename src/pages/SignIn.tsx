import SignInTop from "../components/singIn/SignInTop";
import SignInForm from "../components/singIn/SignInForm";
import SignInBottom from "../components/singIn/SignInBottom";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const SignInWrapper = styled('div')`
  max-width: 343px;

`

const SignIn = () => {

  return (
    <Container maxWidth="xl">
      <SignInWrapper  sx={{margin: '0 auto'}}>
        <SignInTop />
        <SignInForm />
        <SignInBottom />
      </SignInWrapper>
    </Container>
  )
}

export default SignIn;