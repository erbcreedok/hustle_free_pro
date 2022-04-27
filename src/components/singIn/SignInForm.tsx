import { useCallback, useMemo, useState } from "react";
import { useForm, Controller,SubmitHandler  } from "react-hook-form";
import { Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import  { Checkb }  from "../custom/Checkbox";
import { getFieldState } from "../../utils/getFieldState";
import { styled } from '@mui/material/styles';
import FilledInput from '@mui/material/FilledInput';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';

const SignInFormWrapper = styled('div')`
  form {
    max-width: 343px;
    background: #FFFFFF;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  form input, label, button {
    font-family: 'Raleway';
  }
`
const CheckboxWrapper = styled('div')`
  justify-content: flex-start;
  padding: 14px 0;
`
const CustomCheckbox = styled('input')`
  width: 20px;
  height: 20px;
  border: 1px solid #BBBBBB;
  box-sizing: border-box;
  border-radius: 5px;
  :hover input ~ .checkmark {
    background-color: #fff;
  }
`

interface IFormInputs {
  login: string,
  password: string,
  checkbox: boolean
}

const SignInForm = () => {
  const { control, handleSubmit,register } = useForm<IFormInputs>();
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = (event: any) => {
    setChecked(event.target.checked)
  }

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data)
  };

  return (
    <SignInFormWrapper>

      <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="login"
        control={control}
        rules={{
          required: 'Поле обязательное',
        }}
          render={({ field, fieldState, formState }) => (

            <FormControl variant="standard">
              <InputLabel
                htmlFor="component-simple"
                sx={{
                  fontWeight: '400',
                  fontSize: '12px',
                  color: '#848484',
                }}
              >Логин</InputLabel>
              <Input
                id="component-simple"
                {...register("login")}
                {...field}
                {...getFieldState({ fieldState, formState })}
                sx={{
                  fontWeight: '700',
                  fontSize: '14px',
                  color: '#272727',
                }} />
            </FormControl>

          )}
        />

      <Controller
        name="password"
        control={control}
          render={({ field, fieldState, formState }) => (
          <FormControl variant="standard">
              <InputLabel
                htmlFor="component-simple"
                sx={{
                  fontWeight: '400',
                  fontSize: '12px',
                  color: '#848484',

                }}
              >Пароль</InputLabel>
              <Input
                id="component-simple"
                {...register("password")}
                {...field}
                {...getFieldState({ fieldState, formState })}
              />
          </FormControl>
        )}
        />

        <Controller
        name="checkbox"
        control={control}
          render={({ field, fieldState, formState }) => (
          <CheckboxWrapper>
            <Checkbox
              {...register("checkbox")}
              {...field}
              {...getFieldState({ fieldState, formState })}
              sx={{
                 "& .MuiSvgIcon-root": {
                  // border: '1px solid #BBBBBB',
                  // boxSizing: 'border-box',
                  // borderRadius: '5px',
                },
                padding: '0px',
              }}
            />
          </CheckboxWrapper>
        )}
      />
        <Button
          type="submit"
          sx={{
            maxWidth: '303px',
            height: '54px',
            background: 'linear-gradient(69.51deg, #3E83E1 0%, #7B3EED 100%)',
            boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.03)',
            border: '0px',
            borderRadius: '10px',
            fontWeight: '700',
            fontSize: '14px',
            color: '#FFFFFF',
            cursor: 'pointer',
            textTransform: 'capitalize',
          }}
        >Войти</Button>
      </form>
      <Checkb 
        // onChange={handleCheckboxChange}
      />
    </SignInFormWrapper>
  )
}

export default SignInForm;