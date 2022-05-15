import { ReactElement, useState } from "react";
import React, { FC } from 'react'
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

type btnProps = {
  width?: string;
  height?: string;
  text?: string;
  backColor?: string;
  position?: string;
  margin?: string;
  WrapperMargin?: string;
}

const BtnWrapper = styled('div')`
  max-width: 343px;
`

export const CustomButton: FC<btnProps> = ({
  width,
  height,
  text,
  backColor,
  position,
  margin,
  WrapperMargin,
}) => {

  return (
    <BtnWrapper
      sx={{
        margin: WrapperMargin ,
      }}
    >
      <Button
        type="submit"
        sx={{
          width: width,
          height: height,
          background: backColor,
          alignSelf: position,
          boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.03)',
          border: '0px',
          borderRadius: '10px',
          fontWeight: '700',
          fontSize: '14px',
          color: '#FFFFFF',
          cursor: 'pointer',
          textTransform: 'capitalize',
          fontFamily: 'Raleway',
          margin: margin,
        }}
      >{text}</Button>
    </BtnWrapper>

  )
}
