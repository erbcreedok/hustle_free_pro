import { FC, ReactElement, useState, useCallback, useEffect, forwardRef } from 'react';
import { useForm, Controller,SubmitHandler  } from "react-hook-form";
import { TextField, FormControl, Grid, InputLabel  } from '@mui/material';

import { styled } from '@mui/material/styles';
import { CustomButton } from '../../../components/custom/Button';
import { getFieldState } from "../../../utils/getFieldState";
import UserCardImage from '../../../images/GreetingCard/user_card_image.png';
import NumberFormat from 'react-number-format';


type IFormInputs = {
  login: string;
  name: string;
  surname: string;
  patronymic: string;
  with_us: string;
  treaty: string;
  belt: string;
  birthday: string;
  email: string;
  phone_number: string;
  password: string;
}

type NewsTextProp = {
  title: string;
  value: string;
  form_name: keyof IFormInputs;
}
const userData: NewsTextProp[] = [
  {
    title: 'Логин',
    value: '12345',
    form_name: 'login',
  },
  {
    title: 'Имя',
    value: 'Tsinovkin',
    form_name: 'name',
  },
  {
    title: 'Фамилия',
    value: 'Tsinovkin',
    form_name: 'surname',
  },
  {
    title: 'Отчество',
    value: 'asd',
    form_name: 'patronymic',
  },
  {
    title: 'Вы с нами с',
    value: '21.02.2021',
    form_name: 'with_us',
  },
  {
    title: 'Договор',
    value: 'Попдисан',
    form_name: 'treaty',
  },
  {
    title: 'Пояс',
    value: 'Красный',
    form_name: 'belt',
  },
  {
    title: 'Дата рождения',
    value: '21.07.1993',
    form_name: 'birthday',
  },
  {
    title: 'Электронный адрес',
    value: 'tsinovkin@mail.ru',
    form_name: 'email',
  },
  {
    title: 'Телефон',
    value: '+7 (777) 777-77-77',
    form_name: 'phone_number',
  },
  {
    title: 'Пароль',
    value: '',
    form_name: 'password',
  },
]

const Wrapper = styled('div')`
  max-width: 674px;
  padding: 69px 12px 12px;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  margin: 90px 0 24px 0;
`

const UserImage = styled('img')`
  width: 110px;
  height: 110px;
  border: 5px solid #FFFFFF;
  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.03));
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%,-50%);
`
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

const EditProfile = () => {

  const { control, handleSubmit, register } = useForm<IFormInputs>({
    defaultValues: {
      login: '12345',
      name: 'Maxim',
      surname: 'Tsinovkin',
      patronymic: '',
      with_us: '25.36.2022',
      treaty: 'подписан',
      belt: 'black',
      birthday: '25.25.2554',
      email: 'asc@mail.ru',
      phone_number: '87022222222',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data)
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <UserImage src={UserCardImage}/>
          <Grid container spacing={2} rowSpacing={3} columns={12}>
            {
              userData.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <InputLabel
                    sx={{
                      fontFamily: 'Raleway',
                      fontWeight: 400,
                      fontSize: '12px',
                      color: '#848484',
                    }}
                  >{item.title}</InputLabel>
                  <Controller
                    key={index}
                    name={item.form_name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState, formState }) => (
                      <FormControl
                        variant="standard"
                        sx={{
                          width: '100%',
                        }}
                      >
                        <TextField
                          variant={
                            item.form_name !== 'password'
                            && item.form_name !== 'phone_number'
                            && item.form_name !== 'email'
                            && item.form_name !== 'birthday'
                            ? 'filled' : 'standard'
                          }
                          id="component-simple"
                          // label={item.title}
                          sx={{
                            width: '100%',
                            "& .MuiFormLabel-root": {
                              fontFamily: 'Raleway',
                              fontWeight: '400',
                              color: '#848484',
                            },
                            "& .MuiInput-input": {
                              fontFamily: 'Raleway',
                              color: '#272727',
                              padding: '12px 10px',
                              marginLeft: '10px',
                              fontWeight: 700,
                              fontSize: '14px',
                            },
                            '& .MuiInput-underline:before': {
                              borderBottomColor: '#F2F2F2', // Semi-transparent underline
                            },
                            '& .MuiInput-underline:hover:before': {
                              borderBottomColor: ' #fff8', // Solid underline on hover
                            },
                            '& .MuiInput-underline:after': {
                              borderBottomColor: '#d8d2cf', // Solid underline on focus
                            },

                            "& .MuiFilledInput-input": {
                              fontWeight: 700,
                              fontSize: '14px',
                              padding: '12px 10px',
                              fontFamily: 'Raleway',
                              color: '#848484',
                            },
                            "& .MuiFilledInput-root": {
                              background: "#FCFCFC"
                            },
                            '& .MuiFilledInput-underline:before': {
                              borderBottomColor: '#F2F2F2', // Semi-transparent underline
                            },
                            '& .MuiFilledInput-underline:hover:before': {
                              borderBottomColor: ' #fff8', // Solid underline on hover
                            },
                            '& .MuiFilledInput-underline:after': {
                              borderBottomColor: '#d8d2cf', // Solid underline on focus
                            },

                          }}
                          inputProps={{
                            sx: {
                            fontWeight: 700,
                            fontSize: '14px',
                            color: '#272727',
                            },
                          }}
                          {...getFieldState({ fieldState, formState })}
                          {...register(item.form_name)}
                          {...field}
                        />
                      </FormControl>
                    )}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Wrapper>
        <CustomButton
          width={'100%'}
          height={'54px'}
          text={'Сохранить'}
          backColor={
            'linear-gradient(69.51deg, #3E83E1 0%, #7B3EED 100%)'
          }
          position={'center'}
          margin={'0 0 70px 0'}
        />
      </form>
  )
}

export default EditProfile;