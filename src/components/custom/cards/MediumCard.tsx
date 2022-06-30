import { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import ItemImg from "../../../images/activity/competition_image.svg";

// Card Wrapper
export const MediumCardWrapper = styled(Box)``;

// Card Image
type MediumCardImageProps = {
	url?: string;
	height?: string;
	border_radius?: string;
	width?: string;
};
const MediumCardImageSection = styled("img")<MediumCardImageProps>`
	object-fit: cover;
	max-height: ${(props) => props.height};
	width: ${(props) => props.width};
	border-radius: ${(props) => props.border_radius};
`;
export const MediumCardImage: FC<MediumCardImageProps> = ({
	url,
	height,
	width,
	border_radius,
}) => {
	return (
		<MediumCardImageSection
			src={ItemImg}
			height={height}
			border_radius={border_radius}
		/>
	);
};

// Text Wrapper
export const MediumCardTextWrapper = styled(Box)``;

// Top Text
export const MediumCardText = styled(Typography)``;
