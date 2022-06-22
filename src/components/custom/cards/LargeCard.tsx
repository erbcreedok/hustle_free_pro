import { FC } from "react";
import { styled } from "@mui/material/styles";

import ItemImg from "../../../images/activity/single_competition.png";

// Card Wrapper
type LargeCardWrapperProps = {
	padding?: string;
	border_radius?: string;
	box_shadow?: string;
	background?: string;
	justify_content?: string;
	flex_direction?: string;
	display?: string;
	width?: string;
	margin?: string;
	height?: string;
};
export const LargeCardWrapper = styled("div")<LargeCardWrapperProps>`
	display: ${(props) => props.display};
	flex-direction: ${(props) => props.flex_direction};
	justify-content: ${(props) => props.justify_content};
	max-width: ${(props) => props.width};
	background: ${(props) => props.background};
	box-shadow: ${(props) => props.box_shadow};
	border-radius: ${(props) => props.border_radius};
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	height: ${(props) => props.height};
`;

// Card Image
type LargeCardImageProps = {
	url?: string;
	height?: string;
	border_radius?: string;
	width?: string;
};
const LargeCardImageSection = styled("img")<LargeCardImageProps>`
	object-fit: cover;
	max-height: ${(props) => props.height};
	width: ${(props) => props.width};
	border-radius: ${(props) => props.border_radius};
`;
export const LargeCardImage: FC<LargeCardImageProps> = ({
	url,
	height,
	width,
	border_radius,
}) => {
	return (
		<LargeCardImageSection
			src={ItemImg}
			height={height}
			border_radius={border_radius}
			width={width}
		/>
	);
};

// Text Wrapper
export const LargeCardTextWrapper = styled("div")``;

// Top Text
type LargeCardTextProps = {
	fontWeight?: number;
	fontSize?: string;
	lineheight?: string;
	color?: string;
	margin?: string;
};
export const LargeCardText = styled("div")<LargeCardTextProps>`
	font-weight: ${(props) => props.fontWeight};
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.lineheight};
	color: ${(props) => props.color};
	margin: ${(props) => props.margin};
`;
