import { useState } from "react";
import React, { FC } from 'react'
import styled from '@emotion/styled'

interface ComponentProps {
  checked: boolean
}

const CheckboxContainer = styled('div')`
  display: inline-block;
  vertical-align: middle;
`
const Icon = styled('svg')`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox= styled('div')<ComponentProps>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #BBBBBB;
  box-sizing: border-box;
  border-radius: 5px;
  background: ${props => (props.checked ? '#1976d2' : '#fff')}
  border-radius: 3px;
  transition: all 150ms;
  visibility: 'visible';
`

export const Checkb = () => {
  const [checked, setChecked] = useState(false);

  return(
    <CheckboxContainer>
      <HiddenCheckbox type='checkbox' onChange={() => setChecked(!checked)} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
    </CheckboxContainer>
  )
}
