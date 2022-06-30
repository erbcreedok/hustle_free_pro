import { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import ItemImg from "../../../images/activity/single_competition.png";

// Card Wrapper
export const LargeCardWrapper = styled(Box)``;

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
export const LargeCardTextWrapper = styled(Box)``;

// Top Text
export const LargeCardText = styled(Typography)``;
