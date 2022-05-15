import { FC } from 'react';
import { styled } from '@mui/material/styles';
import ItemImg from '../../../images/activity/partner_image.png';

// Card Wrapper
type MiniCardWrapperProps = {
  padding?: string;
  border?: string;
  border_radius?: string;
  box_shadow?: string;
  background?: string;
  justify_content?: string;
  flex_direction?: string;
  display?: string;
  width?: string;
  margin?: string;
  height?: string;
  align_items?: string;
  position?: string;
}
export const MiniCardWrapper = styled('div')<MiniCardWrapperProps>`
  display: ${props => (props.display)};
  border: ${props => (props.border)};
  flex-direction: ${props => (props.flex_direction)};
  justify-content: ${props => (props.justify_content)};
  max-width: ${props => (props.width)};
  background: ${props => (props.background)};
  box-shadow: ${props => (props.box_shadow)};
  border-radius: ${props => (props.border_radius)};
  padding: ${props => (props.padding)};
  margin: ${props => (props.margin)};
  height: ${props => (props.height)};
  align-items: ${props => (props.align_items)};
  position: ${props => (props.position)};
`

// Card Image
type MiniCardImageProps = {
  url?: string;
  height?: string;
  width?: string;
  border_radius?: string;
}
const MiniCardImageSection = styled('img')<MiniCardImageProps>`
  object-fit: cover;
  width: ${props => (props.width)};
  height: ${props => (props.height)};
  border-radius: ${props => (props.border_radius)};
`
export const MiniCardImage: FC<MiniCardImageProps> = ({
  url,
  height,
  width,
  border_radius,
}) => {
  return (
    <MiniCardImageSection
      src={ItemImg}
      height={height}
      width={width}
      border_radius={border_radius}
    />
  )
}

// Text Wrapper
type MiniCardTextWrapperProps = {
  display?: string;
  flex_direction?: string;
  margin?: string;
}
export const MiniCardTextWrapper = styled('div') <MiniCardTextWrapperProps>`
  margin: ${props => (props.margin)};
`

// Top Text
type MiniCardTextProps = {
  fontWeight?: number;
  fontSize?: string;
  lineheight?: string;
  color?: string;
  margin?: string;
  text_decoration?: string;
}
export const MiniCardText = styled('div')<MiniCardTextProps>`
  font-weight: ${props => (props.fontWeight)};
  font-size: ${props => (props.fontSize)};
  line-height: ${props => (props.lineheight)};
  color: ${props => (props.color)};
  margin: ${props => (props.margin)};
  text-decoration: ${props => (props.text_decoration)};
`